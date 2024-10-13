import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function Avatar() {
  const { scene } = useGLTF('/assets/avatar.glb', true, (error) => {
    console.error('Error loading model:', error);
  });

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        {scene ? (
          <>
            {/* Use `primitive` for Three.js objects */}
            <primitive object={scene} scale={3} position={[0, -3, 0]} />
            
            {/* Use camelCase for `ambientLight` properties */}
            <ambientLight intensity={3} />
            
            {/* Use camelCase for `directionalLight` properties */}
            <directionalLight position={[2, 5, 2]} intensity={1} />
            
            <OrbitControls enableZoom={false} />
          </>
        ) : (
          <div>Error loading model</div>
        )}
      </Suspense>
    </Canvas>
  );
}
