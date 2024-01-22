import { memo } from "react";

const Lights = memo(() => {
  return (
    <>
      <spotLight
        intensity={0.25}
        position={[0, 10, -5]}
        shadow-mapSize-width={512 * 6}
        shadow-mapSize-height={512 * 6}
        castShadow
        shadow-bias={-0.001}
      />
      <spotLight
        intensity={0.5}
        position={[-5, 6, 2]}
        castShadow
        shadow-bias={-0.001}
      />
      <ambientLight intensity={0.09} />
      <directionalLight
        intensity={0.5}
        position={[5, 2, 2]}
        castShadow
        color={"#f1f1f1"}
      />
    </>
  );
});

Lights.displayName = "Lights";

export default Lights;
