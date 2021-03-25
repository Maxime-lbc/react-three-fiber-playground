import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import BoxForm from "./styles/components/forms/BoxForm";

function App() {

  


  return (
    <>
      <Canvas colorManagement>

        <ambientLight intensity={0.3} />

        <BoxForm width={1} height={1} depth={1} position={[-2, 1 ,1]} color="blue" />
        <BoxForm width={1} height={1} depth={1} position={[-1, -1, -1]} color="black" />
        <BoxForm width={1} height={1} depth={1} position={[1, 1 ,1]} color="white" />

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
