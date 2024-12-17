import React from 'react';
import {useGLTF} from "@react-three/drei";

function Bar({position}) {

    const { nodes, materials } = useGLTF('/3d/scene2.glb')

    return (
        <group position={position} scale={0.0125}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[167.831, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <group position={[37.658, 136.386, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <mesh
                            geometry={nodes.Material2_902.geometry}
                            material={materials.carbon}
                        />
                        <mesh
                            geometry={nodes.Material2_903.geometry}
                            material={materials.Wood_Table}
                        />
                        <mesh
                            geometry={nodes.Material2_904.geometry}
                            material={materials.Wood_Table}
                        />
                        <mesh
                            geometry={nodes.Material2_905.geometry}
                            material={materials.carbon}
                        />
                        <mesh
                            geometry={nodes.Material3_369.geometry}
                            material={materials.Wood_Table}
                        />
                        <mesh
                            geometry={nodes.Material2_906.geometry}
                            material={materials.carbon}
                        />
                        <mesh
                            geometry={nodes.Material3_370.geometry}
                            material={materials.carbon}
                        />
                        <mesh
                            geometry={nodes.Material2_907.geometry}
                            material={materials.carbon}
                        />
                        <group position={[-0.084, 3.15, 9.055]}>
                            <lineSegments
                                geometry={nodes.Material3_371.geometry}
                                material={materials.edge_color178178178255}
                            />
                            <mesh
                                geometry={nodes.Material2_922.geometry}
                                material={materials.gris_metal_brillante}
                            />
                        </group>
                        <mesh
                            geometry={nodes.Material2_908.geometry}
                            material={materials.Wood_Table}
                            position={[-0.084, 7.48, 0]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_909.geometry}
                            material={materials.gris_fondo}
                            position={[-0.084, 9.843, 30.315]}
                        />
                        <mesh
                            geometry={nodes.Material2_910.geometry}
                            material={materials.gris_fondo}
                            position={[-0.084, 9.843, 7.874]}
                            scale={[1, 1, 0.375]}
                        />
                        <mesh
                            geometry={nodes.Material2_911.geometry}
                            material={materials.gris_fondo}
                            position={[-0.084, 9.843, 15.354]}
                            scale={[1, 1, 0.375]}
                        />
                        <mesh
                            geometry={nodes.Material2_912.geometry}
                            material={materials.gris_fondo}
                            position={[-0.084, 9.843, 22.835]}
                            scale={[1, 1, 0.375]}
                        />
                        <mesh
                            geometry={nodes.Material2_913.geometry}
                            material={materials.gris_fondo}
                            position={[63.883, 9.843, 8.465]}
                        />
                        <mesh
                            geometry={nodes.Material2_914.geometry}
                            material={materials.gris_fondo}
                            position={[63.883, 9.843, 15.945]}
                        />
                        <mesh
                            geometry={nodes.Material2_915.geometry}
                            material={materials.gris_fondo}
                            position={[63.883, 9.843, 0]}
                            scale={[1, 1, 1.143]}
                        />
                        <mesh
                            geometry={nodes.Material2_916.geometry}
                            material={materials.gris_fondo}
                            position={[31.703, 9.843, 8.465]}
                        />
                        <mesh
                            geometry={nodes.Material2_917.geometry}
                            material={materials.gris_fondo}
                            position={[31.703, 9.843, 0]}
                            scale={[1, 1, 1.143]}
                        />
                        <mesh
                            geometry={nodes.Material2_918.geometry}
                            material={materials.gris_fondo}
                            position={[31.703, 9.843, 15.945]}
                        />
                        <mesh
                            geometry={nodes.Material2_919.geometry}
                            material={materials.gris_fondo}
                            position={[63.883, 9.843, 23.425]}
                        />
                        <mesh
                            geometry={nodes.Material2_920.geometry}
                            material={materials.gris_fondo}
                            position={[31.703, 9.843, 23.425]}
                        />
                        <mesh
                            geometry={nodes.Material2_921.geometry}
                            material={materials.carbon}
                            position={[94.167, 10.74, 8.268]}
                            rotation={[0, 0, -Math.PI / 4]}
                        />
                        <mesh
                            geometry={nodes.Material2_923.geometry}
                            material={materials.carbon}
                            position={[98.425, 76.339, 8.268]}
                        />
                        <mesh
                            geometry={nodes.Material2_924.geometry}
                            material={materials.carbon}
                            position={[98.425, 42.5, 8.268]}
                        />
                        <mesh
                            geometry={nodes.Material2_925.geometry}
                            material={materials.carbon}
                            position={[-0.084, 7.874, 8.268]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_926.geometry}
                            material={materials.carbon}
                            position={[36.022, 7.874, 8.268]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_927.geometry}
                            material={materials.carbon}
                            position={[68.077, 7.874, 8.268]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_928.geometry}
                            material={materials.Wood_Table}
                            position={[97.368, 8.374, 37.795]}
                            rotation={[0, 0, Math.PI / 4]}
                        />
                        <mesh
                            geometry={nodes.Material2_929.geometry}
                            material={materials.Wood_Table}
                            position={[85.827, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_930.geometry}
                            material={materials.Wood_Table}
                            position={[102.362, 46.85, 37.795]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_931.geometry}
                            material={materials.Wood_Table}
                            position={[102.362, 19.685, 37.795]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_932.geometry}
                            material={materials.Wood_Table}
                            position={[102.362, 74.016, 37.795]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_933.geometry}
                            material={materials.Wood_Table}
                            position={[58.502, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_934.geometry}
                            material={materials.Wood_Table}
                            position={[3.853, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_935.geometry}
                            material={materials.Wood_Table}
                            position={[72.164, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_936.geometry}
                            material={materials.Wood_Table}
                            position={[17.515, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_937.geometry}
                            material={materials.Wood_Table}
                            position={[102.362, 60.433, 37.795]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                        <mesh
                            geometry={nodes.Material2_938.geometry}
                            material={materials.Wood_Table}
                            position={[44.84, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_939.geometry}
                            material={materials.Wood_Table}
                            position={[31.178, 3.937, 37.795]}
                        />
                        <mesh
                            geometry={nodes.Material2_940.geometry}
                            material={materials.Wood_Table}
                            position={[102.362, 33.268, 37.795]}
                            rotation={[0, 0, Math.PI / 2]}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

export default Bar;