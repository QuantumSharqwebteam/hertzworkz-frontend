import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model({ glbUrl, cursorPosition }) {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      glbUrl,
      (gltf) => {
        const object = gltf.scene;

        // Center the object
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);

        // Scale the object
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        object.scale.multiplyScalar(scale);

        setModel(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading GLB:', error);
      }
    );
  }, [glbUrl]);

  useEffect(() => {
    if (model) {
      // Update the model's position based on cursor
      model.position.x = cursorPosition.x * 5; // Scale movement for x
      model.position.y = cursorPosition.y * 5; // Scale movement for y
      model.position.z = cursorPosition.z * 5; // Add Z-axis movement
    }
  }, [cursorPosition, model]);

  return model ? <primitive object={model} /> : null;
}

const ModelViewer = ({ glbUrl }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, z: 0 });

  const fov = window.innerWidth < 768 ? 12 : 7;

  return (
    <div className="max-w-full md:w-full h-[40vh] md:h-[30vh] xl:h-[50vh] md:pl-2 pl-4  bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, -10, 5]} intensity={0} />
        <directionalLight position={[3, 5, 10]} intensity={1} />
        
        {/* Model */}
        <Suspense fallback={null}>
          <Model glbUrl={glbUrl} cursorPosition={cursorPosition} />
        </Suspense>

        {/* Controls with rotation and zoom limits */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.3}
          
          // Zoom limits
          minDistance={8}  // Min zoom distance (camera cannot go closer than this)
          maxDistance={10} // Max zoom distance (camera cannot go farther than this)
          
          // Rotation limits
          minPolarAngle={Math.PI / 4}  // Min vertical rotation (downward)
          maxPolarAngle={Math.PI / 1.5} // Max vertical rotation (upward)
          minAzimuthAngle={-Math.PI / 4} // Min horizontal rotation (left)
          maxAzimuthAngle={Math.PI / 4}  // Max horizontal rotation (right)
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
