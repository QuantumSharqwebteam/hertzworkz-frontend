import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url); // Load the GLB model
  const modelRef = useRef();

  // Rotate the model based on scroll
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = window.scrollY * 0.004; // Adjust the rotation speed
    }
  });

  return <primitive object={scene} ref={modelRef} position={[0.5, -1, 0]}/>;
}

export default function GLBViewer() {
    const [fov, setFov] = useState(20);
    useEffect(() => {
        const updateFov = () => {
          // Set the fov based on window width
          if (window.innerWidth < 568) {
            setFov(35);
          } else if (window.innerWidth >= 568 && window.innerWidth < 768) {
            setFov(35);
          } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
            setFov(30);
          } else {
            setFov(20); // For screens above 1024px
          }
        };

        window.addEventListener("resize", updateFov);
        updateFov(); // Call it initially to set the fov correctly
        return () => {
          window.removeEventListener("resize", updateFov);
        };
      }, []);
    
  return (
    <div className="w-full h-[50vh] sm:h-[80vh] lg:h-[100vh] ">
    <Canvas  camera={{
        position: [10, 2, 10], // Adjusted camera position
        fov,
      }} >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Model url="/egg.glb" />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="sunset"  />
    </Canvas>
    </div>
  );
}