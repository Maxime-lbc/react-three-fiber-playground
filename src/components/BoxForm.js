import { Box } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function BoxForm(props) {

    const cube = useRef();
    useFrame(() => (cube.current.rotation.x = cube.current.rotation.y += 0.01));

    return (
        // <mesh ref={cube}>
        //   <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        //   <meshStandardMaterial attach="material" />
        // </mesh>

        <Box
          ref={cube}
          args={[props.width, props.height, props.depth]}
          position={props.position}
        >
          <meshStandardMaterial attach="material" color={props.color} />
        </Box>
    );
}

export default BoxForm;