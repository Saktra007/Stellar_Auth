import {
  ContactShadows,
  Environment,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Background3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-from),transparent)] from-blue-500/10 opacity-50" />

      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />

        {/* Particles */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Sphere */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={[-3, 1, -2]} scale={1.5}>
            <MeshDistortMaterial
              color="#3b82f6"
              speed={4}
              distort={0.5}
              roughness={0.1}
              metalness={0.9}
            />
          </Sphere>
        </Float>

        {/* Octahedron */}
        <Float speed={3} rotationIntensity={2} floatIntensity={3}>
          <mesh position={[4, -1, -2]} rotation={[Math.PI / 4, 0, 0]}>
            <octahedronGeometry args={[1, 0]} />
            <MeshWobbleMaterial
              color="#10b981"
              speed={3}
              factor={0.5}
              roughness={0}
            />
          </mesh>
        </Float>

        {/* Torus Knot */}
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[0, -2, -3]} rotation={[1, 1, 1]}>
            <torusKnotGeometry args={[0.8, 0.2, 128, 16]} />
            <MeshDistortMaterial
              color="#8b5cf6"
              speed={5}
              distort={0.3}
              metalness={1}
            />
          </mesh>
        </Float>

        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={4.5}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default Background3D;
