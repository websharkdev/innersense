import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { useMediaQuery } from "usehooks-ts";
import { lazy } from "react";
const Tooltip = lazy(() => import("./Tooltip"));

const Sofa = () => {
  const { nodes, materials }: any = useGLTF("/models/sofa_compresed.glb");
  const isMD = useMediaQuery("(max-width: 620px)");
  const isXS = useMediaQuery("(max-width: 360px)");

  const sofa_tooltip = [
    {
      positions: isMD
        ? isXS
          ? new Vector3(-0.2, 0.32, -0.05)
          : new Vector3(-0.28, 0.45, -0.05)
        : new Vector3(-0.85, 1.15, 0.05),
      name: "SANELA",
      subtitle: "Cushion cover",
      price: 7,
    },
    {
      positions: isMD
        ? isXS
          ? new Vector3(-0.05, 0.25, -0.1)
          : new Vector3(0.1, 0.35, -0.15)
        : new Vector3(1, 1, -0.45),
      name: "KIVIK",
      subtitle: "2-seat sofa",
      price: 399,
    },
  ];
  // we can easily add new tooltips without duplicating code
  return (
    <group dispose={null}>
      <group scale={isMD ? (isXS ? 0.25 : 0.35) : 1}>
        {/* scale model if display small (360px and 620px) */}
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Wood.001"]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials["Knitted Fabric"]}
        />
      </group>

      {/* MIXING TSX with WEBGL > added dots / small cards */}
      {sofa_tooltip.map((tooltip, index) => (
        <Tooltip tooltip={tooltip} key={`${tooltip.name}_${index}`} />
      ))}
    </group>
  );
};

useGLTF.preload("/models/sofa_compresed.glb"); // preload model

export default Sofa;
