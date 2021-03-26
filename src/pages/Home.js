import React, { useState } from "react";
import { extend, Canvas } from "react-three-fiber";
import { Text } from "troika-three-text";
import Navigation from '../components/Navigation';
import fonts from '../assets/fonts/fonts';


const text = "React-Three-Fiber Playground of Maxime Le Bonniec";

extend({ Text });

function Home(props) {

    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    // eslint-disable-next-line no-unused-vars
    const [opts, setOpts] = useState({
        font: "Philosopher",
        fontSize: 30,
        color: "black",
        maxWidth: 400,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "center",
        materialType: "MeshPhongMaterial"
    });

    const onMouseMove = e => {
        setRotation([
          ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
          ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
          0
        ]);
    };


    return (
        <div className="Home">
            <Navigation />
            <div>
                <Canvas
                    style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                    }}
                    pixelRatio={window.devicePixelRatio}
                    onMouseMove={onMouseMove}
                    >   
                    <text
                        position-z={-180}
                        rotation={rotation}
                        {...opts}
                        text={text}
                        font={fonts[opts.font]}
                        anchorX="center"
                        anchorY="middle"
                        >
                        {opts.materialType === "MeshPhongMaterial" ? (
                            <meshPhongMaterial attach="material" color={opts.color} />
                        ) : null}
                    </text>

                    <pointLight position={[-100, 0, -160]} />
                    <pointLight position={[0, 0, -170]} />
                    <pointLight position={[100, 0, -160]} />
                </Canvas>

                
            </div>

        </div>
    );
}

export default Home;