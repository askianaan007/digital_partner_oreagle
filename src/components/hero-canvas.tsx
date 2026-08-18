"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD_PRIMARY = "#c9a455";
const GOLD_LIGHT = "#f3e3bd";
const GOLD_GLOW = "#e5c158";
const DARK_BUSINESS = "#161820";
const DARK_SURFACE = "#0e1017";

/**
 * Smooth 0..1 transition helper
 */
function smoothPhase(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * 1. CENTRAL BUSINESS REPRESENTATION
 * A simple, premium dark 3D business structure with restrained warm-gold details.
 * Represents any local or professional service business without industry specifics.
 */
function BusinessStructure({
  conversionIntensity,
  growthHeight,
}: {
  conversionIntensity: number;
  growthHeight: number;
}) {
  const doorMatRef = useRef<THREE.MeshPhysicalMaterial>(null!);
  const roofLightRef = useRef<THREE.MeshBasicMaterial>(null!);

  useFrame(() => {
    if (doorMatRef.current) {
      doorMatRef.current.emissiveIntensity = 0.3 + conversionIntensity * 1.4;
    }
    if (roofLightRef.current) {
      roofLightRef.current.opacity = 0.4 + growthHeight * 0.5;
    }
  });

  return (
    <group position={[1.0, -0.2, 0]}>
      {/* Soft Ground Shadow Base */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.7, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.45} />
      </mesh>

      {/* Primary Business Mass */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.65, 0.55, 0.55]} />
        <meshPhysicalMaterial
          color={DARK_BUSINESS}
          metalness={0.85}
          roughness={0.2}
          clearcoat={0.9}
        />
      </mesh>

      {/* Aerodynamic Roof Accent Trim (Oreagle Identity Detail) */}
      <mesh position={[0, 0.59, 0]}>
        <boxGeometry args={[0.7, 0.04, 0.6]} />
        <meshPhysicalMaterial
          color={DARK_SURFACE}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Roof Growth Signal Indicator */}
      <mesh position={[0, 0.62 + growthHeight * 0.08, 0]}>
        <boxGeometry args={[0.55, 0.02, 0.45]} />
        <meshBasicMaterial
          ref={roofLightRef}
          color={GOLD_LIGHT}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Entrance / Service Gateway Door (Illuminated Conversion Point) */}
      <mesh position={[0, 0.18, 0.28]}>
        <boxGeometry args={[0.22, 0.32, 0.03]} />
        <meshPhysicalMaterial
          ref={doorMatRef}
          color={GOLD_PRIMARY}
          emissive={GOLD_GLOW}
          emissiveIntensity={0.3}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>

      {/* Restrained Gold Trim Lines */}
      <mesh position={[-0.33, 0.3, 0.28]}>
        <boxGeometry args={[0.02, 0.5, 0.02]} />
        <meshBasicMaterial color={GOLD_PRIMARY} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.33, 0.3, 0.28]}>
        <boxGeometry args={[0.02, 0.5, 0.02]} />
        <meshBasicMaterial color={GOLD_PRIMARY} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

/**
 * 2. DIGITAL PATHWAYS & ATTRIBUTION TRACKING PATH
 * Connects Discovery -> Digital Presence -> Leads -> Business Conversion
 */
function ConnectedDigitalPathways({
  curvePath,
  pathIllumination,
}: {
  curvePath: THREE.CatmullRomCurve3;
  pathIllumination: number;
}) {
  const pathMatRef = useRef<THREE.MeshBasicMaterial>(null!);

  const tubeGeo = useMemo(() => {
    return new THREE.TubeGeometry(curvePath, 64, 0.012, 8, false);
  }, [curvePath]);

  useFrame(() => {
    if (pathMatRef.current) {
      pathMatRef.current.opacity = 0.25 + pathIllumination * 0.45;
    }
  });

  return (
    <group>
      {/* Main Connected Digital Acquisition Pathway */}
      <mesh geometry={tubeGeo}>
        <meshBasicMaterial
          ref={pathMatRef}
          color={GOLD_PRIMARY}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Node 1: Digital Presence / Discovery Gateway */}
      <mesh position={[-0.85, 0.65, -0.2]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color={GOLD_LIGHT} />
      </mesh>

      {/* Node 2: Lead Qualification Node */}
      <mesh position={[-0.1, 0.25, 0.1]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={GOLD_PRIMARY} />
      </mesh>

      {/* Node 3: Conversion Gateway Node at Business Entrance */}
      <mesh position={[1.0, -0.02, 0.29]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={GOLD_GLOW} />
      </mesh>
    </group>
  );
}

/**
 * 3. CUSTOMER ACQUISITION FLOW PARTICLES (8-12 Intentional Particles)
 * Moves potential customers through: Discovery -> Lead -> Customer -> Business
 */
function CustomerFlowParticles({
  curvePath,
  cycleTime,
  isMobile,
}: {
  curvePath: THREE.CatmullRomCurve3;
  cycleTime: number;
  isMobile: boolean;
}) {
  const count = isMobile ? 4 : 10;
  const particleRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(() => {
    for (let i = 0; i < count; i++) {
      const mesh = particleRefs.current[i];
      if (!mesh) continue;

      // Staggered particle journey offsets along curve (0.0 to 1.0)
      const offset = (i / count) * 0.85;
      const progress = ((cycleTime / 12 + offset) % 1);

      // Fetch precise 3D position on curve
      const pos = curvePath.getPointAt(progress);
      mesh.position.set(pos.x, pos.y, pos.z);

      // Particle scale & opacity dynamics during journey
      const mat = mesh.material as THREE.MeshBasicMaterial;
      if (progress < 0.1) {
        // Opportunity entering
        mat.opacity = progress * 8 * 0.7;
        mesh.scale.setScalar(0.7 + progress * 2);
      } else if (progress > 0.85) {
        // Converting into business
        const fade = (1 - progress) / 0.15;
        mat.opacity = fade * 0.9;
        mesh.scale.setScalar(0.9 * fade);
      } else {
        // Qualified Lead traveling along path
        mat.opacity = 0.85;
        mesh.scale.setScalar(1.0);
      }
    }
  });

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            particleRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.032, 16, 16]} />
          <meshBasicMaterial color={GOLD_LIGHT} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

/**
 * MASTER OREAGLE 3D VISUAL SYSTEM
 */
function OREAGLESystemContent({ isMobile }: { isMobile: boolean }) {
  const sceneRef = useRef<THREE.Group>(null!);

  // Master Curve Path: Physical Business <- Lead Gateway <- Digital Presence <- Discovery
  const curvePath = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-1.6, 1.1, -0.4),  // Outer Opportunity / Discovery
        new THREE.Vector3(-0.85, 0.65, -0.2), // Digital Presence
        new THREE.Vector3(-0.1, 0.25, 0.1),   // Lead Qualification
        new THREE.Vector3(0.55, 0.05, 0.22),  // Customer Acquisition
        new THREE.Vector3(1.0, -0.02, 0.29),  // Conversion into Business
      ],
      false,
      "catmullrom",
      0.45,
    );
  }, []);

  // Mouse Interaction Refs
  const mousePos = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  // Animation Cycle State
  const [animState, setAnimState] = useState({
    cycleTime: 0,
    conversionIntensity: 0,
    growthHeight: 0,
    pathIllumination: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse within strictly controlled range [-1, 1]
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const cycle = elapsed % 12; // 12-second continuous infinite loop

    // Continuous Phase Calculations (No hard resets)
    const pathIllum = smoothPhase(1.5, 4.0, cycle) * (1 - smoothPhase(10.5, 11.8, cycle));
    const conversion = smoothPhase(7.5, 9.2, cycle) * (1 - smoothPhase(10.8, 11.8, cycle));
    const growth = smoothPhase(9.0, 10.8, cycle) * (1 - smoothPhase(11.2, 11.9, cycle));

    setAnimState({
      cycleTime: elapsed,
      conversionIntensity: conversion,
      growthHeight: growth,
      pathIllumination: pathIllum,
    });

    // Subconscious, Smooth Mouse Parallax (Capped strictly: Y ~ 0.08-0.10, X ~ 0.05-0.07)
    mousePos.current.x = THREE.MathUtils.lerp(mousePos.current.x, targetMouse.current.x, 0.04);
    mousePos.current.y = THREE.MathUtils.lerp(mousePos.current.y, targetMouse.current.y, 0.04);

    if (sceneRef.current) {
      sceneRef.current.rotation.y = mousePos.current.x * 0.09;
      sceneRef.current.rotation.x = -mousePos.current.y * 0.06;
    }
  });

  return (
    <group
      ref={sceneRef}
      position={isMobile ? [0, -0.6, 0] : [0.2, 0, 0]}
      scale={isMobile ? 0.72 : 1.0}
    >
      {/* Lighting Setup */}
      <ambientLight intensity={0.35} />
      <pointLight position={[2, 3, 3]} intensity={2.2} color={GOLD_PRIMARY} distance={7} />
      <pointLight position={[-2, 1, 2]} intensity={0.8} color={GOLD_LIGHT} distance={5} />

      {/* 1. Central Abstract Business Structure */}
      <BusinessStructure
        conversionIntensity={animState.conversionIntensity}
        growthHeight={animState.growthHeight}
      />

      {/* 2. Connected Digital Acquisition Pathways & Attribution Line */}
      <ConnectedDigitalPathways
        curvePath={curvePath}
        pathIllumination={animState.pathIllumination}
      />

      {/* 3. Customer Acquisition Flow Particles */}
      <CustomerFlowParticles
        curvePath={curvePath}
        cycleTime={animState.cycleTime}
        isMobile={isMobile}
      />
    </group>
  );
}

/**
 * Hero Canvas Background Container
 * Positions system on the RIGHT side of the hero (45-50% hero width on desktop).
 */
export function HeroCanvasBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Canvas
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ fov: 38, position: [0, 0, 5.2] }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <OREAGLESystemContent isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
