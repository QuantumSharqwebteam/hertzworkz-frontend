import React, { useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";

function Model1({ url }) {
  const { scene } = useGLTF(url); // Load the GLB model
  return <primitive object={scene} position={[0.5, -1, 0]} />;
}

function CameraControl1() {
  const [fov, setFov] = useState(20);
  const { camera } = useThree(); // Access the camera from react-three/fiber
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateFov = () => {
      // Set the fov based on window width
      if (window.innerWidth < 568) {
        setFov(50);
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

    // Handle scroll to move camera position from left to right
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateFov);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Map scroll position to different animations
    const scrollFraction = scrollY / window.innerHeight;

    // Animation 1: Circular camera movement
    if (scrollFraction < 0.5) {
      const angle = scrollFraction * Math.PI * 2; // Full circle
      camera.position.x = 10 * Math.cos(angle);
      camera.position.z = 10 * Math.sin(angle);
      camera.lookAt(0, 0, 0);
    }
    // Animation 2: Zoom in/out
    else if (scrollFraction >= 0.5 && scrollFraction < 1) {
      const zoom = 10 - (scrollFraction - 0.5) * 20; // Adjust zoom range
      camera.position.set(zoom, 2, zoom);
      camera.lookAt(0, 0, 0);
    }
    // Animation 3: Rotate the model (optional)
    else {
      const rotationAngle = (scrollFraction - 1) * Math.PI * 2; // Rotate model
      camera.position.set(10, 2, 10);
      camera.lookAt(0, 0, 0);
      // You can also rotate the model here if needed
    }
  }, [scrollY, camera]);

  return null;
}

export default function Textiles() {
  return (
    <div className="w-full h-[50vh] sm:h-[80vh] lg:h-[100vh]">
      <Canvas camera={{ position: [10, 2, 10], fov: 20 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Model1 url="/siddhaL.glb" />
        <CameraControl1 />
        <OrbitControls enableZoom={false}  />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}