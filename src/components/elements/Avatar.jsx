import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import {  useRef, useEffect } from 'react';

export default function Avatar() {
  const { scene } = useGLTF('/assets/avatar.glb', true, (error) => {
    console.error('Error loading model:', error);
  });

  const meshRef = useRef();

  useEffect(() => {
    let frameId;
    const rotateModel = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
      }
      frameId = requestAnimationFrame(rotateModel);
    };
    rotateModel();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        {scene ? (
          <>
            <primitive ref={meshRef} object={scene} scale={3} position={[0, -3, 0]} />
            <ambientLight intensity={3} />
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