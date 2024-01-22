"use client";
import { BakeShadows, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Suspense, lazy, useEffect, useState } from "react";
import { Header, Lights } from "./(components)";
const Sofa = lazy(() => import("./(components)"));

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      className={`flex w-full justify-between items-center flex-col relative`}
    >
      {isClient && <Header />}
      <div className="h-screen w-full">
        <Canvas
          flat
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 1, 10], fov: 20 }}
        >
          <color attach="background" args={["#f2f2f2"]} />
          <Suspense fallback={null}>
            <>
              <Lights />
              <BakeShadows />
              <OrbitControls
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={0}
                maxDistance={25}
                minDistance={2}
                panSpeed={0.5}
              />
              <Center>
                <Sofa />
                <mesh
                  receiveShadow
                  castShadow
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -0.01, 0]}
                >
                  <boxGeometry args={[11, 11, 0.05, 1, 1, 1]} />
                  <meshStandardMaterial color="#fff" />
                </mesh>
              </Center>
            </>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
