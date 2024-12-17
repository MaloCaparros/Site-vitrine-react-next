"use client"
import React, {useState} from 'react';
import styles from "../../app/realisation/realisation.module.css";
import Projet from "../projet/Projet";
import Link from "next/link";

function Realisation() {

    const [realisation, setRealisation] = useState([
        {
            img: "/projet/Salon-Transports-Publics-1-400x284.jpg",
            alt: "image du salon des transports publics",
            titre: "SALON DES TRANSPORTS PUBLICS – PARIS",
            text: "Espace collectif, Installation générale, Salle de conférences",
            categorie: ["Tous", "Espace collectif", "Installation générale", "Salles de conférences"],
            lien: "../transport"
        },
        {
            img: "/projet/Salon-Technotrans-5-400x284.jpg",
            alt: "image provenant d'une salon technotrans à Nantes",
            titre: "SALON TECHNOTRANS – NANTES",
            text: "Installation générale, Signalétique, Stand",
            categorie: ["Tous", "Installation générale", "Signalétique", "Stand"],
            lien: "../technotrans"
        },
        {
            img: "/projet/Operation-Start-Ouest-2-400x284.jpg",
            alt: "image provenant d'une opération start-ouest à Nantes sur lequel on peut voir des stands",
            titre: "OPÉRATION START-OUEST – NANTES",
            text: "Design, Espace B to B, Solution technique",
            categorie: ["Tous", "Design", "Espace B to B", "Solution technique"],
            lien: "../operation"

        },
        {
            img: "/projet/Salon-Mariage-Carousel-Louvre-3-400x284.jpg",
            alt: "image provenant du salon de mariage à Paris sur lequel on voit une mannequin défilé",
            titre: "SALON DU MARIAGE – PARIS",
            text: "Aménagement divers, Design, Installation générale, Solution technique",
            categorie: ["Tous", "Aménagement divers", "Design", "Installation générale", "Solution technique"],
            lien: "../mariage"
        },
        {
            img: "/projet/Jeux-Equestres-Mondiaux-1-400x284.jpg",
            alt: "image provenant des jeux équestres mondiaux à Caen sur lequel on voit des chapiteaux blancs",
            titre: "LES JEUX ÉQUESTRES MONDIAUX – CAEN",
            text: "Installation générale, Signalétique, Solution technique",
            categorie: ["Tous", "Installation générale", "Signalétique", "Solution technique"],
            lien: "../equestre"
        },
        {
            img: "/projet/Congres-CNGOF-1-400x284.jpg",
            alt: "image provenant du congres CNGOF à Nantes sur lequel on voit l'accueil du congres",
            titre: "CONGRÈS CNGOF – NANTES",
            text: "Espace B to B, Espace collectif, Installation générale",
            categorie: ["Tous", "Espace B to B", "Espace collectif", "Installation générale"],
            lien: "../congres"
        },
        {
            img: "/projet/ARTIBAT-StandOrcab-01-400x284.jpg",
            alt: "image du salon artibat à Rennes sur lequel on voit un three",
            titre: "SALON ARTIBAT – RENNES",
            text: "Design, Installation générale, Stand",
            categorie: ["Tous", "Design", "Installation générale", "Stand"],
            lien: "../artibat"
        },
        {
            img: "/projet/Salon-Marie-Claire-Idees-2-400x284.jpg",
            alt: "image provenant du salon marie-claire idées à Paris sur lequel on voit des stands et des chaises",
            titre: "SALON MARIE-CLAIRE IDÉES – PARIS",
            text: "Design, Installation générale, Solution technique",
            categorie: ["Tous", "Design", "Installation générale", "Solution technique"],
            lien: "../salon"
        }

    ]);

    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const filterProjectsByCategory = () => {
        if (selectedCategory === "Tous") {
            return realisation;
        } else {
            return realisation.filter(projet => projet.categorie.includes(selectedCategory));
        }
    };

    return (
        <div className={styles.reaContenu}>
            <div className={styles.realisationFiltre}>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Tous" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Tous")}>Tous
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Aménagement divers" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Aménagement divers")}> Aménagement divers
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Design" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Design")}>Design
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Espace B to B" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Espace B to B")}>Espace B to B
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Espace collectif" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Espace collectif")}>Espace collectif
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Installation générale" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Installation générale")}>Installation générale
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Salles de conférences" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Salles de conférences")}>Salles de conférences
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Signalétique" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Signalétique")}>Signalétique
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Solution technique" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Solution technique")}>Solution technique
                </div>
                <div
                    className={`${styles.realisationFiltreItem} ${selectedCategory === "Stand" ? styles.selected : ""}`}
                    onClick={() => setSelectedCategory("Stand")}>Stand
                </div>
            </div>
            <div className={styles.realisationList}>
                {filterProjectsByCategory().map((projet, index) => (
                    <Link href={projet.lien} key={index}>
                        <Projet
                            key={index}
                            img={projet.img}
                            alt={projet.alt}
                            titre={projet.titre}
                            text={projet.text}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Realisation;