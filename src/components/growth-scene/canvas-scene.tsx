"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Palette Constants
const GOLD = "#c9a455";
const GOLD_LIGHT = "#f3e3bd";
const GOLD_GLOW = "#e5c158";
const DARK_BG = "#0d0e12";
const DARK_SURFACE = "#161820";
const DARK_METAL = "#222530";
const STORY_LOOP = 10; // 10-second complete business transformation loop

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

interface LeadParticle {
  startX: number;
  startY: number;
  startZ: number;
  delay: number;
  speed: number;
}

function useLeadParticles(count: number): LeadParticle[] {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        startX: 1.8 + (i % 3) * 0.4,
        startY: 1.2 + (i % 4) * 0.3,
        startZ: -0.6 + (i % 3) * 0.5,
        delay: (i / count) * 0.4,
        speed: 1.0,
      })),
    [count],
  );
}

/**
 * 3D Scene representing the exact OREAGLE Business Transformation:
 * Physical Business -> Mascot Builds Digital System (Website + Local SEO Pin + Booking/Call Tracking)
 * -> Customer Leads Flow In -> Completed Jobs -> Revenue & Business Growth.
 */
function SceneContent({ isMobile }: { isMobile: boolean }) {
  const sceneGroup = useRef<THREE.Group>(null!);

  // 1. Physical Business Elements
  const storeGroup = useRef<THREE.Group>(null!);
  const storeCoreMat = useRef<THREE.MeshPhysicalMaterial>(null!);
  const storeLight = useRef<THREE.PointLight>(null!);

  // 2. Mascot Elements ("Atomy Catalyst")
  const mascotGroup = useRef<THREE.Group>(null!);
  const mascotVisorMat = useRef<THREE.MeshPhysicalMaterial>(null!);
  const mascotHalo = useRef<THREE.Mesh>(null!);

  // 3. Digital Infrastructure (Built by OREAGLE)
  const webScreenGroup = useRef<THREE.Group>(null!);
  const webScreenMat = useRef<THREE.MeshPhysicalMaterial>(null!);
  
  const mapPinGroup = useRef<THREE.Group>(null!);
  const mapRadarRing = useRef<THREE.Mesh>(null!);
  const mapRadarMat = useRef<THREE.MeshBasicMaterial>(null!);

  const bookingNodeGroup = useRef<THREE.Group>(null!);

  // 4. Growth & Revenue Indicator
  const growthPillarGroup = useRef<THREE.Group>(null!);
  const growthRing = useRef<THREE.Mesh>(null!);
  const growthRingMat = useRef<THREE.MeshBasicMaterial>(null!);

  // 5. Customer Lead Particles
  const particleRefs = useRef<(THREE.Mesh | null)[]>([]);
  const leadParticles = useLeadParticles(isMobile ? 6 : 10);

  // Parallax & Scroll tracking
  const rotationTarget = useRef({ x: 0, y: 0 });
  const scrollOffset = useRef(0);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const cycle = (elapsed % STORY_LOOP) / STORY_LOOP; // 0.0 to 1.0

    // Smooth Scroll & Mouse Parallax Interaction
    scrollOffset.current = THREE.MathUtils.lerp(
      scrollOffset.current,
      typeof window !== "undefined"
        ? Math.min(Math.max(window.scrollY / 800, 0), 1)
        : 0,
      0.04,
    );

    const idleDrift = Math.sin(elapsed * 0.3) * 0.035;
    rotationTarget.current.y = state.pointer.x * 0.22 + idleDrift;
    rotationTarget.current.x = -state.pointer.y * 0.08;

    if (sceneGroup.current) {
      sceneGroup.current.rotation.y = THREE.MathUtils.lerp(
        sceneGroup.current.rotation.y,
        rotationTarget.current.y,
        0.04,
      );
      sceneGroup.current.rotation.x = THREE.MathUtils.lerp(
        sceneGroup.current.rotation.x,
        rotationTarget.current.x,
        0.04,
      );
      sceneGroup.current.position.y = THREE.MathUtils.lerp(
        sceneGroup.current.position.y,
        -scrollOffset.current * 0.3,
        0.05,
      );
    }

    // =========================================================================
    // 5 ANIMATION PHASES OF THE BUSINESS MODEL STORY (0.0 to 1.0)
    // =========================================================================
    // Phase 1: Physical Business Opportunity (0.00 - 0.20)
    // Phase 2: Mascot Builds Digital Infrastructure (Website + SEO Pin) (0.20 - 0.45)
    // Phase 3: Traffic & Customer Leads Stream In (0.45 - 0.70)
    // Phase 4: Jobs Completed & Business Revenue Growth (0.70 - 0.90)
    // Phase 5: Seamless Loop Reset (0.90 - 1.00)

    const infraBuildPhase =
      smoothstep(0.18, 0.40, cycle) * (1 - smoothstep(0.90, 0.98, cycle));
    
    const leadFlowPhase =
      smoothstep(0.40, 0.55, cycle) * (1 - smoothstep(0.82, 0.92, cycle));

    const revenueGrowthPhase =
      smoothstep(0.65, 0.78, cycle) * (1 - smoothstep(0.88, 0.96, cycle));

    // 1. Mascot Animation (Professional, Intelligent, Guiding Transformation)
    if (mascotGroup.current) {
      const bob = Math.sin(elapsed * 1.4) * 0.05;
      mascotGroup.current.position.y = 0.55 + bob + infraBuildPhase * 0.08;

      // Mascot turns & gestures towards the digital infrastructure as it builds
      mascotGroup.current.rotation.y =
        Math.sin(elapsed * 0.4) * 0.12 - infraBuildPhase * 0.35;
    }

    if (mascotHalo.current) {
      mascotHalo.current.rotation.z = elapsed * 0.8;
    }

    if (mascotVisorMat.current) {
      mascotVisorMat.current.emissiveIntensity =
        0.8 + Math.sin(elapsed * 2.5) * 0.3 + infraBuildPhase * 0.7;
    }

    // 2. Digital Infrastructure Materialization (Website Screen & Map SEO Pin)
    if (webScreenGroup.current) {
      const scale = smoothstep(0.2, 0.38, cycle) * (1 - smoothstep(0.9, 0.98, cycle));
      webScreenGroup.current.scale.set(scale, scale, scale);
      webScreenGroup.current.position.y = 0.75 + Math.sin(elapsed * 1.1) * 0.03;
    }

    if (mapPinGroup.current) {
      const pinScale = smoothstep(0.26, 0.42, cycle) * (1 - smoothstep(0.9, 0.98, cycle));
      mapPinGroup.current.scale.set(pinScale, pinScale, pinScale);
      mapPinGroup.current.position.y = 1.15 + Math.sin(elapsed * 1.5) * 0.04;
    }

    if (mapRadarRing.current && mapRadarMat.current) {
      const radarCycle = ((cycle - 0.28) * 4) % 1;
      if (infraBuildPhase > 0 && radarCycle > 0) {
        const rScale = 1 + radarCycle * 2.2;
        mapRadarRing.current.scale.set(rScale, rScale, 1);
        mapRadarMat.current.opacity = (1 - radarCycle) * 0.6 * infraBuildPhase;
      } else {
        mapRadarMat.current.opacity = 0;
      }
    }

    if (bookingNodeGroup.current) {
      const bScale = smoothstep(0.32, 0.46, cycle) * (1 - smoothstep(0.9, 0.98, cycle));
      bookingNodeGroup.current.scale.set(bScale, bScale, bScale);
    }

    // 3. Customer Lead Particles Stream (Moving from outer web into booking gateway -> physical store)
    leadParticles.forEach((p, i) => {
      const mesh = particleRefs.current[i];
      if (!mesh) return;

      const pProgress = THREE.MathUtils.clamp(
        (cycle - 0.42 - p.delay * 0.25) / 0.28,
        0,
        1,
      );

      if (leadFlowPhase > 0 && pProgress > 0 && pProgress < 1) {
        const eased = smoothstep(0, 1, pProgress);

        // Path: Outer Web (p.startX) -> Web/SEO Node (0.1, 0.8) -> Store Entrance (-0.85, 0.25)
        const currentX = THREE.MathUtils.lerp(
          THREE.MathUtils.lerp(p.startX, 0.1, eased),
          -0.85,
          eased,
        );
        const currentY = THREE.MathUtils.lerp(
          THREE.MathUtils.lerp(p.startY, 0.8, eased),
          0.28,
          eased,
        );
        const currentZ = THREE.MathUtils.lerp(
          THREE.MathUtils.lerp(p.startZ, 0.3, eased),
          0.1,
          eased,
        );

        mesh.position.set(currentX, currentY, currentZ);

        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.sin(pProgress * Math.PI) * 0.9 * leadFlowPhase;
      } else {
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0;
      }
    });

    // 4. Store Transformation & Revenue Growth Output
    if (storeCoreMat.current) {
      const baseEmissive = 0.2 + Math.sin(elapsed * 1.2) * 0.05;
      storeCoreMat.current.emissiveIntensity =
        baseEmissive + revenueGrowthPhase * 1.8;
    }

    if (storeLight.current) {
      storeLight.current.intensity = 1.0 + revenueGrowthPhase * 4.2;
    }

    if (growthPillarGroup.current) {
      const pillarElevate = revenueGrowthPhase * 0.35;
      growthPillarGroup.current.position.y = 0.2 + pillarElevate;
    }

    if (growthRing.current && growthRingMat.current) {
      const gCycle = ((cycle - 0.68) * 3) % 1;
      if (revenueGrowthPhase > 0 && gCycle > 0) {
        const gScale = 1 + gCycle * 1.6;
        growthRing.current.scale.set(gScale, gScale, 1);
        growthRingMat.current.opacity = (1 - gCycle) * 0.7 * revenueGrowthPhase;
      } else {
        growthRingMat.current.opacity = 0;
      }
    }
  });

  return (
    <group ref={sceneGroup} position={[0.1, -0.15, 0]}>
      {/* Studio Lighting */}
      <ambientLight intensity={0.45} color="#e5dec9" />
      <pointLight position={[3.5, 4, 3.5]} intensity={2.6} color={GOLD} />
      <pointLight position={[-3.5, 2, -2.5]} intensity={1.1} color="#7c8ea6" />
      
      {/* Store Interior Light (Fires up when leads convert) */}
      <pointLight
        ref={storeLight}
        position={[-0.85, 0.6, 0.1]}
        intensity={1.0}
        color={GOLD_LIGHT}
        distance={4.0}
      />

      {/* ========================================================================= */}
      {/* 1. BASE ISOMETRIC PLATFORM (The Business Ecosystem) */}
      {/* ========================================================================= */}
      {/* Soft Ground Shadow */}
      <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.3, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.55} />
      </mesh>

      {/* Main Platform Stage */}
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[1.9, 2.0, 0.16, isMobile ? 36 : 64]} />
        <meshPhysicalMaterial
          color={DARK_SURFACE}
          metalness={0.75}
          roughness={0.35}
          clearcoat={0.8}
        />
      </mesh>

      {/* Digital System Pipeline Traces on Platform */}
      <mesh position={[0, 0.125, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.82, 1.88, isMobile ? 48 : 64]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.35} />
      </mesh>

      {/* Connecting Circuit Line from Outer Web to Physical Business */}
      <mesh position={[0.1, 0.126, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 0.04]} />
        <meshBasicMaterial color={GOLD_GLOW} transparent opacity={0.4} />
      </mesh>

      {/* ========================================================================= */}
      {/* 2. THE PHYSICAL BUSINESS (Client's Real Operation - Left Side) */}
      {/* ========================================================================= */}
      <group ref={storeGroup} position={[-0.85, 0.22, 0]}>
        {/* Main Physical Building Base */}
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[0.9, 0.7, 0.8]} />
          <meshPhysicalMaterial
            color={DARK_METAL}
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.9}
          />
        </mesh>

        {/* Roof Trim */}
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[0.96, 0.06, 0.86]} />
          <meshPhysicalMaterial color={DARK_SURFACE} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Physical Storefront Door / Service Bay */}
        <mesh position={[0, 0.22, 0.41]}>
          <boxGeometry args={[0.34, 0.44, 0.04]} />
          <meshPhysicalMaterial
            ref={storeCoreMat}
            color={GOLD}
            emissive={GOLD_GLOW}
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>

        {/* "YOUR BUSINESS" Signage Bar Frame */}
        <mesh position={[0, 0.58, 0.42]}>
          <boxGeometry args={[0.65, 0.12, 0.04]} />
          <meshPhysicalMaterial color="#1a1c24" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 3. ATOMYCODERS MASCOT ("Atomy Catalyst" - Center Right) */}
      {/* ========================================================================= */}
      <group ref={mascotGroup} position={[0.75, 0.55, 0.25]}>
        {/* Mascot Head Dome */}
        <mesh position={[0, 0.32, 0]}>
          <sphereGeometry args={[0.26, isMobile ? 32 : 48, isMobile ? 32 : 48]} />
          <meshPhysicalMaterial
            color="#181a22"
            metalness={0.9}
            roughness={0.15}
            clearcoat={1}
          />
        </mesh>

        {/* Glowing Gold Intelligent Visor */}
        <mesh position={[0, 0.32, 0.14]} rotation={[0.1, 0, 0]}>
          <torusGeometry args={[0.18, 0.03, 16, 32, Math.PI * 0.85]} />
          <meshPhysicalMaterial
            ref={mascotVisorMat}
            color={GOLD}
            emissive={GOLD_GLOW}
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>

        {/* Mascot Orbital Energy Ring */}
        <mesh ref={mascotHalo} position={[0, 0.32, 0]}>
          <torusGeometry args={[0.36, 0.012, 16, 48]} />
          <meshPhysicalMaterial
            color={GOLD}
            emissive={GOLD}
            emissiveIntensity={0.6}
            metalness={0.8}
          />
        </mesh>

        {/* Torso Base */}
        <mesh position={[0, -0.04, 0]}>
          <cylinderGeometry args={[0.14, 0.08, 0.32, 32]} />
          <meshPhysicalMaterial color={DARK_METAL} metalness={0.85} roughness={0.25} />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 4. DIGITAL INFRASTRUCTURE (Built & Managed by OREAGLE) */}
      {/* ========================================================================= */}
      {/* A) Floating Website / Digital Presence Hologram Panel */}
      <group ref={webScreenGroup} position={[-0.1, 0.75, 0.2]}>
        {/* Glass Screen Frame */}
        <mesh>
          <boxGeometry args={[0.75, 0.5, 0.02]} />
          <meshPhysicalMaterial
            ref={webScreenMat}
            color={GOLD}
            transmission={0.8}
            opacity={0.7}
            transparent
            roughness={0.1}
            metalness={0.2}
            ior={1.3}
          />
        </mesh>
        {/* Header Bar Wireframe */}
        <mesh position={[0, 0.18, 0.015]}>
          <planeGeometry args={[0.65, 0.06]} />
          <meshBasicMaterial color={GOLD_LIGHT} transparent opacity={0.8} />
        </mesh>
        {/* Content Wireframe Lines */}
        <mesh position={[-0.15, 0.04, 0.015]}>
          <planeGeometry args={[0.3, 0.12]} />
          <meshBasicMaterial color={GOLD_GLOW} transparent opacity={0.6} />
        </mesh>
        <mesh position={[0.15, 0.04, 0.015]}>
          <planeGeometry args={[0.2, 0.12]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* B) Local Search / Google Maps SEO Location Pin (Above Building) */}
      <group ref={mapPinGroup} position={[-0.85, 1.15, 0]}>
        {/* Pin Head */}
        <mesh position={[0, 0.12, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color={GOLD_GLOW} />
        </mesh>
        {/* Pin Point */}
        <mesh position={[0, 0.02, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.1, 0.16, 16]} />
          <meshBasicMaterial color={GOLD} />
        </mesh>
        {/* Radar Waves emanating from Map Pin (Search Visibility) */}
        <mesh
          ref={mapRadarRing}
          position={[0, 0.01, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshBasicMaterial
            ref={mapRadarMat}
            color={GOLD_LIGHT}
            transparent
            opacity={0}
          />
        </mesh>
      </group>

      {/* C) Call Tracking & Booking System Gateway Node */}
      <group ref={bookingNodeGroup} position={[0.25, 0.35, 0.4]}>
        <mesh>
          <cylinderGeometry args={[0.16, 0.18, 0.06, 32]} />
          <meshPhysicalMaterial color={DARK_SURFACE} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Ring Accent */}
        <mesh position={[0, 0.035, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.14, 0.17, 32]} />
          <meshBasicMaterial color={GOLD_GLOW} />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 5. REVENUE GROWTH PILLAR (The Measurable Outcome) */}
      {/* ========================================================================= */}
      <group ref={growthPillarGroup} position={[1.4, 0.2, -0.3]}>
        {/* Revenue Growth Cylinder */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.12, 0.14, 0.6, 32]} />
          <meshPhysicalMaterial
            color={DARK_SURFACE}
            metalness={0.85}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>

        {/* Elevated Gold Crown Bar */}
        <mesh position={[0, 0.62, 0]}>
          <cylinderGeometry args={[0.125, 0.125, 0.05, 32]} />
          <meshBasicMaterial color={GOLD_LIGHT} />
        </mesh>

        {/* Pulsing Growth Wave */}
        <mesh
          ref={growthRing}
          position={[0, 0.63, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.14, 0.18, 32]} />
          <meshBasicMaterial
            ref={growthRingMat}
            color={GOLD_LIGHT}
            transparent
            opacity={0}
          />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 6. INCOMING CUSTOMER LEADS & CALLS (Particles streaming in) */}
      {/* ========================================================================= */}
      {leadParticles.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            particleRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.042, 16, 16]} />
          <meshBasicMaterial color={GOLD_LIGHT} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}

export default function CanvasScene({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      dpr={isMobile ? [1, 1.25] : [1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ fov: 32, position: [0, 0.65, 5.9] }}
      style={{ background: "transparent" }}
    >
      <SceneContent isMobile={isMobile} />
    </Canvas>
  );
}
