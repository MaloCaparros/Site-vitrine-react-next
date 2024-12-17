import React from 'react';
import {useGLTF} from "@react-three/drei";

function Table({position}) {

const { nodes, materials } = useGLTF('/3d/scene2.glb');

    return (
        <group position={position} scale={0.2}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.Object_2_2.geometry}
                    material={materials.Wood_Table}
                    position={[0, 9.876, 0]}
                />
            </group>
        </group>
    );
}

export default Table;