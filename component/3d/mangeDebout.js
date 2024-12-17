import React from 'react';
import {useGLTF} from "@react-three/drei";

function MangeDebout({position}) {

    const {nodes, materials} = useGLTF('/3d/scene2.glb')

    return (
        <group scale={0.1}>
            <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow={true}
                    receiveShadow={true}
                    geometry={nodes.Object_5.geometry}
                    material={materials.Material_167}
                    position={[3.172, 0.93, 29.245]}
                    scale={0.11}
                />
            </group>
        </group>
    );
}

export default MangeDebout;