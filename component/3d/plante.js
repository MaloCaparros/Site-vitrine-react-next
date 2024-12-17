import React from 'react';
import {useGLTF} from "@react-three/drei";

function Plante({position}) {

    const {nodes, materials} = useGLTF('/3d/scene2.glb')

    return (
        <group position={position} scale={0.07}>
            <group scale={0.01}>
                <mesh

                    geometry={nodes.Mesh1_M_06___Defaultdsa_0.geometry}
                    material={materials.M_06___Defaultdsa}
                />
                <mesh

                    geometry={nodes.Mesh2_TEXTURE1_0.geometry}
                    material={materials.TEXTURE1}
                />
                <mesh

                    geometry={nodes.Mesh3_grt_0.geometry}
                    material={materials.material}
                />
            </group>
        </group>
    );
}

export default Plante;