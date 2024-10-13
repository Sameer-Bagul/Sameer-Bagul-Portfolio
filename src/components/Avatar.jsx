// Avatar.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Avatar = () => {
  // Load the GLTF model
  const { scene } = useGLTF('/avatar.glb', true);

  return (
    <Canvas>
      <ambientLight intensity={4} />
      <pointLight position={[10, 10, 10]} />
      {/* Add the loaded GLTF model to the scene with rotation */}
      <primitive object={scene} scale={4} position={[0, -6, 0]} />
    </Canvas>
  );
};

export default Avatar;
