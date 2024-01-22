import { memo } from "react";

const Floor = memo(() => {
  return (
    <mesh
      receiveShadow
      castShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.01, 0]}
    >
      <boxGeometry args={[11, 11, 0.05, 1, 1, 1]} />
      <meshStandardMaterial color="#fff" />
    </mesh>
  );
});

Floor.displayName = "Floor";

export default Floor;
