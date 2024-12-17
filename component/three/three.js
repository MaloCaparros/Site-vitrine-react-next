'use client'
import React, {useState} from 'react';
import {Canvas, useLoader} from "@react-three/fiber";
import styles from "./three.module.css";
import {OrbitControls} from "@react-three/drei";
import {useGLTF} from '@react-three/drei'
import Bar from "../3d/bar";
import TabouretModern from "../3d/tabouretModern";
import Plante from "../3d/plante";
import MangeDebout from "../3d/mangeDebout";
import {TextureLoader} from "three";
import Link from "next/link";

export default function Three() {

    const [stand, setStand] = useState({
            stand: {
                size: {
                    x: 1,
                    y: 1,
                    z: 1,
                },
            },
            bandeau: {
                active: true,
                color: null,
                textureURL: null,
            },
            moquette: {
                active: true,
                textureURL: null,
                color: null,
            },
            structure: {
                poteaux: {
                    active: true,
                    color: null,
                    textureURL: null,
                },
                travers: {
                    traversFond: {
                        active: true,
                        color: null,
                        textureURL: null,
                    },
                    traversGauche: {
                        active: true,
                        color: null,
                        textureURL: null,
                    },
                    traversDroit: {
                        active: true,
                        color: null,
                        textureURL: null,
                    },
                },
            },
            murs: {
                active: true,
                murGauche: {
                    active: true,
                    color: null,
                    textureURL: null,
                },
                murDroit: {
                    active: true,
                    color: null,
                    textureURL: null,
                },
                murFond: {
                    active: true,
                    color: null,
                    textureURL: null,
                },
            },
            options: {
                enseigne: {
                    active: true,
                    logo: {
                        active: true,
                        textureURL: null,
                    },
                },
                lampeTige: {
                    active: true,
                    number: 1,
                },
                tasseau: {
                    active: true,
                    number: 10,
                },
                mangeDebout: {
                    active: true,
                },
                bar: {
                    active: true,
                    number: 1,
                },
                plante: {
                    active: true,
                    number: 1,
                },
                tabouretModern: {
                    active: true,
                    number: 3,
                },

            }
        },
    );

    function Mesh(props) {

        const {nodes, materials} = useGLTF('/3d/scene2.glb');
        const texture = useLoader(TextureLoader, '/3d/moquette.jpg');
        texture.repeat.set(10, 10);
        texture.wrapS = texture.wrapT = 1000;

        return (
            <group {...props} dispose={null}>
                {stand.options.mangeDebout.active &&
                    <>
                        <MangeDebout position={[5, -28.8, 2]}/>
                        <MangeDebout position={[0, -28.8, 10]}/>
                    </>
                }
                {stand.options.plante.active &&
                    <Plante position={[1.061, 0, -1.056]}/>
                }
                {stand.options.bar.active &&
                    <Bar position={[-1.88, 0, 0.5]}/>
                }
                {stand.options.tabouretModern.active &&
                    [...Array(stand.options.tabouretModern.number)].map((data, index) => (
                        <TabouretModern key={index} position={[-0.5 + -(index / 2.5), -0.04, 0.25]}/>
                    ))
                }
                <ambientLight intensity={1}/>
                <directionalLight position={[2, 2, 2]} intensity={0.8}/>
                {/*<directionalLight intensity={2} decay={2} position={[10, 10, 10]}/>*/}

                {/* ///////////////////////////// MOQUETTE /////////////////////////////////// */}

                {stand.moquette.active &&
                    <mesh
                        geometry={nodes.moquette.geometry}
                        scale={[3, 0.01, 3]}
                    >
                        <meshStandardMaterial map={texture}/>
                    </mesh>
                }

                <group scale={[stand.stand.size.x, stand.stand.size.y, stand.stand.size.z]}>

                    {/* ///////////////////////////// POTEAUX /////////////////////////////////// */}

                    {!stand.murs.active &&
                        <group>
                            <mesh
                                geometry={nodes.poteauDroit.geometry}
                                material={nodes.poteauDroit.material}
                                position={[1.495, 0.625, 1.495]}
                                scale={[0.01, 1.25, 0.01]}
                            />
                            <mesh
                                geometry={nodes.poteauGauche.geometry}
                                material={nodes.poteauGauche.material}
                                position={[-1.495, 0.625, 1.495]}
                                scale={[0.01, 1.25, 0.01]}
                            />
                            <mesh
                                geometry={nodes.poteauFondGauche.geometry}
                                material={nodes.poteauFondGauche.material}
                                position={[-1.495, 0.625, -1.495]}
                                scale={[0.01, 1.25, 0.01]}
                            />
                            <mesh
                                geometry={nodes.poteauFondDroite.geometry}
                                material={nodes.poteauFondDroite.material}
                                position={[1.495, 0.625, -1.495]}
                                scale={[0.01, 1.25, 0.01]}
                            />

                            {/* ///////////////////////////// TRAVERS /////////////////////////////////// */}

                            <mesh
                                geometry={nodes.traversFond.geometry}
                                material={nodes.traversFond.material}
                                position={[0, 1.255, -1.495]}
                                scale={[3, 0.01, 0.01]}
                            />
                            <mesh
                                geometry={nodes.traversGauche.geometry}
                                material={nodes.traversGauche.material}
                                position={[1.495, 1.255, 0]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[3, 0.01, 0.01]}
                            />
                            <mesh
                                geometry={nodes.traversDroit.geometry}
                                material={nodes.traversDroit.material}
                                position={[-1.495, 1.255, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[3, 0.01, 0.01]}
                            />
                        </group>
                    }

                    {/* ///////////////////////////// BANDEAU /////////////////////////////////// */}

                    {stand.bandeau.active &&
                        <group>
                            <mesh
                                geometry={nodes.bandeau.geometry}
                                material={nodes.bandeau.material}
                                position={[0, 1.255, 1.495]}
                                scale={[3, 0.01, 0.01]}
                            >
                                {stand.bandeau.active.color &&
                                    <meshStandardMaterial color={stand.bandeau.color}/>
                                }
                            </mesh>

                            {/* ///////////////////////////// LAMPE /////////////////////////////////// */}

                            {stand.options.lampeTige.active &&
                                <group>
                                    {[...Array(stand.options.lampeTige.number)].map((_, index) => (
                                        <group key={index}
                                               position={[stand.options.lampeTige.number === 1 ? 0 : -0.5 * (stand.options.lampeTige.number - 1), 0, 0]}>
                                            <mesh
                                                geometry={nodes.accroche.geometry}
                                                material={nodes.accroche.material}
                                                position={[index * 1, 1.255, 1.495]}
                                                scale={0.015}
                                            />
                                            <mesh
                                                geometry={nodes.tige.geometry}
                                                material={nodes.tige.material}
                                                position={[index * 1, 1.272, 1.471]}
                                                rotation={[-Math.PI / 4, 0, 0]}
                                                scale={[0.002, 0.05, 0.001]}
                                            />
                                            <mesh
                                                geometry={nodes.lampe.geometry}
                                                material={nodes.lampe.material}
                                                position={[index * 1, 1.292, 1.45]}
                                                rotation={[-Math.PI / 4, 0, 0]}
                                                scale={[0.02, 0.01, 0.002]}
                                            />
                                            <spotLight intensity={40} angle={0.6} decay={3} penumbra={1}
                                                       castShadow={true} position={[index * 1, 1.291, 1.45]}/>
                                        </group>
                                    ))}
                                </group>
                            }

                        </group>
                    }

                    {/* ///////////////////////////// MURS /////////////////////////////////// */}

                    {stand.murs.active &&
                        <group>
                            {
                                stand.murs.murGauche.active &&
                                <mesh
                                    geometry={nodes.wallLeft.geometry}
                                    material={nodes.wallLeft.material}
                                    position={[-1.495, 0.625, 0]}
                                    scale={[0.01, 1.25, 3]}
                                />
                            }
                            {stand.murs.murDroit.active &&
                                <mesh
                                    geometry={nodes.wallRight.geometry}
                                    material={nodes.wallRight.material}
                                    position={[1.495, 0.625, 0]}
                                    scale={[0.01, 1.25, 3]}
                                />
                            }
                        </group>
                    }
                    {stand.murs.murFond.active &&
                        <mesh
                            geometry={nodes.wallBack.geometry}
                            material={nodes.wallBack.material}
                            position={[0, 0.625, -1.495]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[0.01, 1.25, 3]}
                        />
                    }
                </group>

                {/* ///////////////////////////// ENSEIGNE /////////////////////////////////// */}

                {stand.options.enseigne.active &&
                    <group>
                        <mesh
                            geometry={nodes.cube.geometry}
                            material={nodes.cube.material}
                            position={[0, 2.25, 0]}
                            scale={0.5}
                        />

                        <mesh
                            geometry={nodes.logoFace.geometry}
                            material={nodes.logoFace.material}
                            position={[0, 2.25, 0.251]}
                            scale={0.4}
                        >
                            {stand.options.enseigne.logo.textureURL &&
                                <meshStandardMaterial map={stand.options.enseigne.logo.textureURL}/>
                            }
                        </mesh>
                        <mesh
                            geometry={nodes.logoBack.geometry}
                            material={nodes.logoBack.material}
                            position={[0, 2.25, -0.251]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={0.4}
                        >
                            {stand.options.enseigne.logo.textureURL &&
                                <meshStandardMaterial map={stand.options.enseigne.logo.textureURL}/>
                            }
                        </mesh>
                        <mesh
                            geometry={nodes.logoRight.geometry}
                            material={nodes.logoRight.material}
                            position={[0.251, 2.25, 0]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={0.4}
                        >
                            {stand.options.enseigne.logo.textureURL &&
                                <meshStandardMaterial map={stand.options.enseigne.logo.textureURL}/>
                            }
                        </mesh>
                        <mesh
                            geometry={nodes.logoLeft.geometry}
                            material={nodes.logoLeft.material}
                            position={[-0.251, 2.25, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={0.4}
                        >
                            {stand.options.enseigne.logo.textureURL &&
                                <meshStandardMaterial map={stand.options.enseigne.logo.textureURL}/>
                            }
                        </mesh>
                    </group>
                }

                {/* ///////////////////////////// TASSEAU /////////////////////////////////// */}

                {stand.options.tasseau.active &&
                    <group>
                        {[...Array(stand.options.tasseau.number)].map((_, index) => (
                            <mesh
                                key={index}
                                geometry={nodes.tasseau.geometry}
                                material={nodes.tasseau.material}
                                position={[-1.477 + 0.05 * index, 0.625, -1.477]}
                                scale={[0.025, 1.25, 0.025]}
                            />
                        ))}
                    </group>
                }

            </group>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Link href={"/"}>Accueil</Link>
                <h1>Stand configurator</h1>
                <h2>Stand</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.bandeau.active}
                        onChange={() => setStand({
                            ...stand,
                            bandeau: {
                                ...stand.bandeau,
                                active: !stand.bandeau.active
                            }
                        })}
                    />
                    Bandeau
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.moquette.active}
                        onChange={() => setStand({
                            ...stand,
                            moquette: {
                                ...stand.moquette,
                                active: !stand.moquette.active
                            }
                        })}
                    />
                    Moquette
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.murs.active}
                        onChange={() => setStand({
                            ...stand,
                            murs: {
                                ...stand.murs,
                                active: !stand.murs.active
                            }
                        })}
                    />
                    Murs
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.options.enseigne.active}
                        onChange={() => setStand({
                            ...stand,
                            options: {
                                ...stand.options,
                                enseigne: {
                                    ...stand.options.enseigne,
                                    active: !stand.options.enseigne.active
                                }
                            }
                        })}
                    />
                    Enseigne
                </label>
                <h2>Options</h2>
                {stand.bandeau.active &&
                    <>
                        <label>
                            <input
                                type="checkbox"
                                checked={stand.options.lampeTige.active}
                                onChange={() => setStand({
                                    ...stand,
                                    options: {
                                        ...stand.options,
                                        lampeTige: {
                                            ...stand.options.lampeTige,
                                            active: !stand.options.lampeTige.active
                                        }
                                    }
                                })}
                            />
                            Lampe
                        </label>
                        {stand.options.lampeTige.active &&
                            <>
                                {stand.options.lampeTige.number < 3 &&
                                    <button onClick={() => setStand({
                                        ...stand,
                                        options: {
                                            ...stand.options,
                                            lampeTige: {
                                                ...stand.options.lampeTige,
                                                number: stand.options.lampeTige.number + 1
                                            }
                                        }
                                    })}>
                                        +
                                    </button>
                                }
                                {stand.options.lampeTige.number > 0 &&
                                    <button onClick={() => setStand({
                                        ...stand,
                                        options: {
                                            ...stand.options,
                                            lampeTige: {
                                                ...stand.options.lampeTige,
                                                number: stand.options.lampeTige.number - 1
                                            }
                                        }
                                    })}>
                                        -
                                    </button>
                                }
                            </>
                        }
                    </>
                }
                <label>
                    <input
                        type="checkbox"
                        checked={stand.options.tasseau.active}
                        onChange={() => setStand({
                            ...stand,
                            options: {
                                ...stand.options,
                                tasseau: {
                                    ...stand.options.tasseau,
                                    active: !stand.options.tasseau.active
                                }
                            }
                        })}
                    />
                    Tasseau
                </label>
                {stand.options.tasseau.active &&
                    <>
                        {stand.options.tasseau.number < 60 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tasseau: {
                                        ...stand.options.tasseau,
                                        number: stand.options.tasseau.number + 1
                                    }
                                }
                            })}>
                                +
                            </button>
                        }
                        {stand.options.tasseau.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tasseau: {
                                        ...stand.options.tasseau,
                                        number: stand.options.tasseau.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }
                    </>
                }
                <label>
                    <input
                        type="checkbox"
                        checked={stand.options.mangeDebout.active}
                        onChange={() => setStand({
                            ...stand,
                            options: {
                                ...stand.options,
                                mangeDebout: {
                                    ...stand.options.mangeDebout,
                                    active: !stand.options.mangeDebout.active
                                }
                            }
                        })}
                    />
                    Mange debout
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.options.bar.active}
                        onChange={() => setStand({
                            ...stand,
                            options: {
                                ...stand.options,
                                bar: {
                                    ...stand.options.bar,
                                    active: !stand.options.bar.active
                                }
                            }
                        })}
                    />
                    Bar
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.options.plante.active}
                        onChange={() => setStand({
                            ...stand,
                            options: {
                                ...stand.options,
                                plante: {
                                    ...stand.options.plante,
                                    active: !stand.options.plante.active
                                }
                            }
                        })}
                    />
                    Plante
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={stand.options.tabouretModern.active}
                        onChange={() => setStand({
                            ...stand,
                            options: {
                                ...stand.options,
                                tabouretModern: {
                                    ...stand.options.tabouretModern,
                                    active: !stand.options.tabouretModern.active
                                }
                            }
                        })}
                    />
                    Tabouret moderne
                </label>
                {stand.options.tabouretModern.active &&
                    <>
                        {stand.options.tabouretModern.number < 3 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number + 1
                                    }
                                }
                            })}>
                                +
                            </button>
                        }
                        {stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }{stand.options.tabouretModern.number > 0 &&
                            <button onClick={() => setStand({
                                ...stand,
                                options: {
                                    ...stand.options,
                                    tabouretModern: {
                                        ...stand.options.tabouretModern,
                                        number: stand.options.tabouretModern.number - 1
                                    }
                                }
                            })}>
                                -
                            </button>
                        }
                    </>
                }

            </div>

            <Canvas
                className={styles.canva}
                shadows
                camera={{position: [0, 2, 3]}}
            >
                <Mesh position={[0, -0.5, 0]}/>
                <OrbitControls/>
            </Canvas>

        </div>
    );
}