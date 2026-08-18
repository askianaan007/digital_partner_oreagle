"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = "#c9a455";
const GOLD_LIGHT = "#f3e3bd";
const AMBIENT_BLUE = "#1a1d26";

/**
 * 3D Floating Particle Constellation Field responding dynamically to Mouse Movement
 */
function ParticleField({ mousePos }: { mousePos: React.RefObject<{ x: number; y: number }> }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 180;

  // Generate random initial positions & velocities for particles
  const [positions, initialPositions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8 - 2;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;

      vels[i * 3] = (Math.random() - 0.5) * 0.003;
      vels[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    return [pos, initPos, vels];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    const mx = mousePos.current.x * 6; // map to 3D space
    const my = mousePos.current.y * 4;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Organic drift motion
      array[ix] += Math.sin(elapsed * 0.5 + i) * 0.0015 + velocities[ix];
      array[iy] += Math.cos(elapsed * 0.4 + i * 0.5) * 0.0015 + velocities[iy];

      // Mouse Proximity Deflection
      const dx = array[ix] - mx;
      const dy = array[iy] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 2.5) {
        const force = (2.5 - dist) * 0.015;
        array[ix] += (dx / dist) * force;
        array[iy] += (dy / dist) * force;
      }

      // Return gently to original vicinity
      array[ix] = THREE.MathUtils.lerp(array[ix], initialPositions[ix], 0.005);
      array[iy] = THREE.MathUtils.lerp(array[iy], initialPositions[iy], 0.005);
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={GOLD_LIGHT}
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * Interactive 3D Background Grid & Mouse Light Spotlight
 */
function BackgroundSceneContent({ isMobile }: { isMobile: boolean }) {
  const sceneGroup = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to [-1, 1] range
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    // Lerp mouse coordinates for fluid animation inertia
    mousePos.current.x = THREE.MathUtils.lerp(
      mousePos.current.x,
      targetMouse.current.x,
      0.05,
    );
    mousePos.current.y = THREE.MathUtils.lerp(
      mousePos.current.y,
      targetMouse.current.y,
      0.05,
    );

    // 3D Parallax Tilt for entire background scene
    if (sceneGroup.current) {
      sceneGroup.current.rotation.y = mousePos.current.x * 0.15;
      sceneGroup.current.rotation.x = -mousePos.current.y * 0.1;
    }

    // Dynamic 3D Mouse Light Spotlight
    if (lightRef.current) {
      lightRef.current.position.x = mousePos.current.x * 6;
      lightRef.current.position.y = mousePos.current.y * 4;
    }
  });

  return (
    <group ref={sceneGroup}>
      <ambientLight intensity={0.2} />
      
      {/* Interactive Mouse Spotlight (Golden Glow following Cursor in 3D) */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 2]}
        intensity={2.8}
        color={GOLD}
        distance={7.5}
      />

      <pointLight position={[-4, 3, -3]} intensity={0.8} color={AMBIENT_BLUE} />

      {/* Floating Interactive 3D Particles */}
      <ParticleField mousePos={mousePos} />

      {/* Subtle Depth Grid Wireframe */}
      {!isMobile && (
        <mesh position={[0, -2, -3]} rotation={[-Math.PI / 2.4, 0, 0]}>
          <planeGeometry args={[24, 20, 24, 20]} />
          <meshBasicMaterial
            color={GOLD}
            wireframe
            transparent
            opacity={0.05}
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  );
}

export default function CanvasBackground({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      dpr={isMobile ? [1, 1.25] : [1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ fov: 45, position: [0, 0, 6] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <BackgroundSceneContent isMobile={isMobile} />
    </Canvas>
  );
}
