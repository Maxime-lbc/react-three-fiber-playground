import React from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import BoxForm from '../components/BoxForm';
import Navigation from '../components/Navigation';


function ThreeCubes(props) {
    return (
        <>  
            <Navigation />

            <Canvas colorManagement>


                <ambientLight intensity={0.3} />
                <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />

                

                <BoxForm width={1} height={1} depth={1} position={[-2, 1 ,1]} color="blue" />
                <BoxForm width={1} height={1} depth={1} position={[-1, -1, -1]} color="black" />
                <BoxForm width={1} height={1} depth={1} position={[1, 1 ,1]} color="white" />

                <OrbitControls />
            </Canvas>
        </>
    );
}

export default ThreeCubes;