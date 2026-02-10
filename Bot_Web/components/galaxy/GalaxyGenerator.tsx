import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GalaxyParameters } from './types';

interface GalaxyGeneratorProps {
  parameters: GalaxyParameters;
}

export const GalaxyGenerator: React.FC<GalaxyGeneratorProps> = ({ parameters }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate geometry data
  const { positions, colors } = useMemo(() => {
    const { count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor } = parameters;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Radius
      const r = Math.random() * radius;

      // Spin Angle
      const spinAngle = r * spin;

      // Branch Angle
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      // Randomness
      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY; // Flattened on Y axis mostly, but with some volume
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      // Color mixed based on radius
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, r / radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, [parameters]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Slow rotation for life
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={parameters.count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={parameters.count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={parameters.size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};
