/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import { useEffect, useRef } from "react";

// WebGL fragment shader for a mouse-reactive, flowing lava/magma sphere.
// Transparent outside the sphere/glow (real alpha, not an opaque near-black
// fill) - the parent no longer needs to clip it to a circle; the shader's own
// shape and falloff are what make it round.
const VERTEX_SRC = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

const FRAGMENT_SRC = `precision highp float;
uniform vec2 uRes;uniform float uT;uniform vec2 uM;uniform float uH;uniform float uReact;uniform float uGrain;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float g(float x,float w){return exp(-(x/w)*(x/w));}
vec3 flow(vec2 q,float t){
  float w=sin(q.x*2.3+t*.7)*.045+sin(q.x*4.1-t*1.1)*.022+sin(t*.4)*.02;
  float y=q.y+w;
  float x=clamp(q.x*.45+.5+sin(q.y*2.+t*.5)*.05,0.,1.);
  vec3 c=mix(vec3(1.,.56,.24),vec3(.94,.33,.23),smoothstep(0.,1.,x))*.82;
  c+=vec3(1.,.68,.38)*g(y-.3,.13)*g(q.x,1.1)*.45;
  c+=vec3(1.,.9,.78)*g(y-.28,.05)*g(q.x,.6)*.25;
  c+=vec3(1.,.5,.16)*g(y+.02,.18)*g(q.x,.9)*.4;
  c+=vec3(1.,.82,.55)*g(y,.05)*g(q.x,.35)*.3;
  c+=vec3(.85,.22,.16)*g(y+.25+sin(t*.6+q.x*3.)*.015,.1)*g(q.x,.6)*.35;
  c+=vec3(.95,.45,.22)*g(y+.55,.2)*g(q.x,.8)*.2;
  return c;
}
vec3 rim(vec2 p,vec2 m,float t){
  float a=atan(p.y,p.x)+sin(t*.25)*.4;
  vec3 c=mix(vec3(1.,.42,.25),vec3(1.,.8,.6),smoothstep(0.,1.,sin(a)));
  c=mix(c,vec3(1.,.6,.25),smoothstep(-.2,.9,cos(a-.25)));
  float tw=max(dot(normalize(p+1e-4),normalize(m+1e-4)),0.);
  return c*(1.+uH*uReact*pow(tw,5.)*1.8);
}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/uRes.y;
  float R=.36*(1.+.035*uH*uReact);
  vec2 p=(uv-uM*R*.05*uH*uReact)/R;
  float d=length(p),px=1.5/(uRes.y*R),t=uT;
  vec3 rc=rim(p,uM,t);
  // Radial window reaching 0 at the canvas's inscribed circle (uv radius .5),
  // not a rectangular one - the glow is still bright when it reaches a
  // straight canvas edge (especially boosted by uH on hover), and a
  // rectangular fade cuts that off in a visible straight line/square frame.
  float edgeFade=1.-smoothstep(.36,.5,length(uv));
  edgeFade*=edgeFade;
  // Wide, soft falloff (was *45., tight enough to need an opaque background to
  // hide its own hard edge) - this alone drives the glow's alpha outside the
  // sphere, so it fades to true transparency instead of a flat color.
  float glow=clamp(exp(-max(d-1.,0.)*7.)*uH*uH*(3.-2.*uH),0.,1.)*edgeFade;
  float cov=1.-smoothstep(1.-px,1.+px,d); // sphere's own anti-aliased coverage
  // Glow is ADDED light (premultiplied, alpha stays 0 outside the sphere), so the
  // page background is never darkened or dimmed around the sphere.
  vec3 col=rc*glow*glow*.6;
  if(d<1.+px){
    float z=sqrt(max(1.-d*d,0.));
    vec2 q=p/(.55+.45*z);
    q-=uM*uH*.28*uReact*z;
    vec2 dm=p-uM;float md=length(dm);
    q+=dm/(md+1e-3)*sin(md*14.-t*4.)*exp(-md*3.)*.035*uH*uReact;
    float ca=.02+.07*(1.-z);
    vec3 inn=vec3(flow(q*(1.-ca),t).r,flow(q,t).g,flow(q*(1.+ca),t).b);
    inn*=smoothstep(0.,.35,z)*.25+.75;
    inn+=rc*pow(1.-z,4.)*.5+rc*smoothstep(.93,1.,d)*.35;
    vec3 n=vec3(p,z);
    vec3 L=normalize(vec3(mix(vec2(-.35,.45),uM*.9,uH),1.));
    inn+=vec3(1.,.9,.8)*pow(max(dot(reflect(-L,n),vec3(0,0,1)),0.),40.)*(.08+.14*uH);
    col=mix(col,inn,cov);
  }
  // Alpha = sphere coverage only. Outside the sphere alpha is 0 and only the
  // additive glow colour is written, so there is no dark fill and no box:
  // premultiplied "over" compositing reduces to result = src_rgb + dst when
  // alpha is 0, i.e. pure additive light with no dimming of the page behind
  // it (using max(cov, glow) here was the bug - any alpha > 0 in the glow
  // region multiplies the page background by (1 - alpha), which is exactly
  // what was dimming it into a visible ring).
  float gm=max(cov,glow*glow);
  col+=(hash(gl_FragCoord.xy+fract(t)*91.)-.5)*.035*uGrain*gm;
  gl_FragColor=vec4(max(col,0.),cov);
}`;

export default function MagicSphere({ speed = 1, reactivity = 1, grain = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return undefined;
    const gl = cv.getContext("webgl", { antialias: false, alpha: true, premultipliedAlpha: true });
    if (!gl) return undefined;
    if (!gl.getContextAttributes()?.alpha) {
      // A browser/driver can silently grant an opaque context even when alpha
      // is requested (or a stale context could be reused across HMR despite
      // the key above) - this would bring back the opaque background/box.
      console.warn("MagicSphere: WebGL context is opaque (alpha: false) - sphere background will not be transparent.");
    }

    const compile = (type, src) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SRC));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC));
    gl.linkProgram(program);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const u = {
      res: gl.getUniformLocation(program, "uRes"),
      t: gl.getUniformLocation(program, "uT"),
      m: gl.getUniformLocation(program, "uM"),
      h: gl.getUniformLocation(program, "uH"),
      r: gl.getUniformLocation(program, "uReact"),
      g: gl.getUniformLocation(program, "uGrain"),
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = cv.clientWidth * dpr;
      cv.height = cv.clientHeight * dpr;
      gl.viewport(0, 0, cv.width, cv.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    // Mouse is tracked window-wide (not just over the canvas) so the sphere
    // reacts as the cursor approaches, same as the source "Magic Sphere" design.
    let targetMouse = [0, 0];
    let targetHover = 0;
    const smoothMouse = [0, 0];
    let smoothHover = 0;
    let time = 0;
    let last = performance.now();

    const move = (e) => {
      const r = cv.getBoundingClientRect();
      const R = r.height * 0.36;
      let x = (e.clientX - r.left - r.width / 2) / R;
      let y = -(e.clientY - r.top - r.height / 2) / R;
      const len = Math.hypot(x, y);
      targetHover = Math.max(0, Math.min(1, (1.9 - len) / 0.6));
      if (len > 1.2) {
        x *= 1.2 / len;
        y *= 1.2 / len;
      }
      targetMouse = [x, y];
    };
    const leave = () => {
      targetHover = 0;
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);

    let raf;
    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      time += dt * speed;
      const k = 1 - Math.pow(0.002, dt);
      const idleTarget = [Math.cos(time * 0.3) * 0.15, Math.sin(time * 0.4) * 0.1];
      const target = targetHover > 0 ? targetMouse : idleTarget;
      smoothMouse[0] += (target[0] - smoothMouse[0]) * k;
      smoothMouse[1] += (target[1] - smoothMouse[1]) * k;
      smoothHover += (targetHover - smoothHover) * k;

      gl.uniform2f(u.res, cv.width, cv.height);
      gl.uniform1f(u.t, time);
      gl.uniform2f(u.m, smoothMouse[0], smoothMouse[1]);
      gl.uniform1f(u.h, smoothHover);
      gl.uniform1f(u.r, reactivity);
      gl.uniform1f(u.g, grain ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [speed, reactivity, grain]);

  // key: a canvas's WebGL context attributes (alpha, premultipliedAlpha, ...)
  // are fixed at its first getContext() call and can't be changed afterward -
  // if Vite HMR ever reuses this exact <canvas> DOM node across an edit here,
  // getContext would silently hand back the OLD (opaque) context instead of a
  // new transparent one. The key guarantees a fresh node, and therefore a
  // fresh context, whenever this component itself remounts.
  return <canvas key="alpha-canvas" ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}
