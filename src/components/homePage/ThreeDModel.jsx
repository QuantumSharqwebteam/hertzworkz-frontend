import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model({ glbUrl }) {
  const [model, setModel] = useState(null);
  const groupRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Load the model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      glbUrl,
      (gltf) => {
        const object = gltf.scene;

        // Center the object
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);  // Subtract the center to center the object at [0, 0, 0]

        // Add an offset to move the model slightly up
      object.position.y += 0.3;  // Adjust the Y value as needed
      object.position.x -= 0.2;  // Adjust the Y value as needed

        // Scale the object
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        object.scale.set(scale, scale, scale);  // Apply uniform scaling

        setModel(object);
      },
      (xhr) => {
        // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading GLB:', error);
      }
    );
  }, [glbUrl]);

  // Mouse move event listener
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize X
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize Y
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update model rotation based on mouse position
  useFrame(() => {
    if (groupRef.current) {
      const { x, y } = mousePosition;
      const targetX = -y * Math.PI * 0.15; // Invert Y-axis rotation
      const targetY = x * Math.PI * 0.3;  // Rotate on X-axis

      // Smooth transition to target rotation
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
    }
  });

  return model ? <primitive ref={groupRef} object={model} /> : null;
}

const ModelViewer = ({ glbUrl }) => {
  const fov = window.innerWidth < 584 ? 13 : 6;

  return (
    <div className="max-w-screen md:w-full h-[40vh] md:h-[30vh] xl:h-[90vh] md:pl-2 pl-4 bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, -10, 5]} intensity={0} />
        <directionalLight position={[0, 0, 10]} intensity={1} />
        <directionalLight position={[0, 8, 5]} intensity={1} />
        
        {/* Model */}
        <Suspense fallback={null}>
          <Model glbUrl={glbUrl} />
        </Suspense>

        {/* Controls with rotation and zoom limits */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.3}
          enableZoom={false}
          minDistance={8}
          maxDistance={10}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
