import React from 'react';
import {useGLTF} from "@react-three/drei";

function Tabouret({position}) {

const {nodes, materials} = useGLTF('/3d/scene2.glb')

    return (
        <group position={position} scale={0.01}>
            <group position={[0.049, -1.66, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh

                    geometry={nodes.Object_5_1.geometry}
                    material={materials.carbon}
                    position={[-57.779, 78.696, 0]}
                />
            </group>
        </group>
    );
}

export default Tabouret;