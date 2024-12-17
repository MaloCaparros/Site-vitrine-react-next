import React from 'react';
import {useGLTF} from "@react-three/drei";

function TabouretModern({position}) {

    const {nodes, materials} = useGLTF('/3d/scene2.glb')

    return (
        <group position={position} rotation={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}>
            <group position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh

                    geometry={nodes.Object_6.geometry}
                    material={materials.Foregrou}
                />
                <mesh

                    geometry={nodes.Object_8.geometry}
                    material={materials.Silver_B}
                />
                <mesh

                    geometry={nodes.Object_9.geometry}
                    material={materials.wood}
                    position={[0, 0, -0.22]}
                />
                <mesh

                    geometry={nodes.Object_5_2.geometry}
                    material={materials.Silver_B}
                    scale={[1, 1, 0.82]}
                />
            </group>
        </group>
    );
}

export default TabouretModern;