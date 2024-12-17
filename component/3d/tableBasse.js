import React from 'react';
import {useGLTF} from "@react-three/drei";

function TableBasse({position}) {

    const {nodes, materials} = useGLTF('/3d/scene2.glb')

    return (
        <group position={position}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh

                            geometry={nodes['Floyd_Side_Table_38x38x44,5_Seteel_0'].geometry}
                            material={materials.Seteel}
                        />
                        <mesh

                            geometry={nodes.Circle_Wood_0.geometry}
                            material={materials.Wood}
                            position={[0, 0, 0.415]}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

export default TableBasse;