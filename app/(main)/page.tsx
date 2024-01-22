"use client";
import { BakeShadows, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Suspense, lazy, useEffect, useState } from "react";
import { Floor, Header, Lights } from "./(components)";
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
              {/* all lights in one component */}
              <BakeShadows />
              {/* to improve performance bake shadows and make shadows static */}
              <OrbitControls
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={0}
                // set maximum and minimum polar (y) angle > you can't be below the floor
                maxDistance={25}
                minDistance={2}
                // maximum and minimum zoom
                panSpeed={0.5}
              />
              <Center>
                <Sofa />
                {/*  */}
                <Floor />
              </Center>
            </>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
