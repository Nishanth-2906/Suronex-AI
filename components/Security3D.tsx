
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LockModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Gentle floating and rotation
    groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.3;
    groupRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.5;
    
    // Subtle pulse to the body
    if (bodyRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.02;
      bodyRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lock Body - Hexagonal for low-poly look */}
      <mesh ref={bodyRef} position={[0, -0.6, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 1.4, 6]} />
        <meshStandardMaterial 
          color="#312e81" 
          flatShading 
          metalness={0.7} 
          roughness={0.2}
          emissive="#1e1b4b"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Lock Shackle - Curved bar */}
      <mesh position={[0, 0.4, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.6, 0.15, 8, 12, Math.PI]} />
        <meshStandardMaterial 
          color="#4f46e5" 
          flatShading 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>

      {/* Decorative Core */}
      <mesh position={[0, -0.6, 0.65]}>
        <boxGeometry args={[0.3, 0.5, 0.1]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const Security3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }} alpha={true}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <LockModel />
      </Canvas>
    </div>
  );
};

export default Security3D;
