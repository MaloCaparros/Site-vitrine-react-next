import styles from "./equestre.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div>
            <img className={styles.image} src="/projet/equestre/Jeux-Equestres-Mondiaux-1.jpg"
                 alt="image mondiaux équestre"/>
            <h1 className={styles.title}>LES JEUX ÉQUESTRES MONDIAUX – CAEN</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>CAEN - PARC EXPO</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>AOÛT 2014</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>ÉVÉNEMENT SPORTIF</p>
                </div>
            </div>
            <div className={styles.contain}>
                <img src="/projet/equestre/Jeux-Equestres-Mondiaux-2.jpg" alt="image mondiaux équestre"/>
                <div>
                    <p className={styles.txt}>
                        Nous profitons généralement de l’été pour nous diversifier en nous orientant vers des événements
                        sportifs. Ainsi, nous sommes intervenus sur les 24 heures du Mans avec différents aménagements
                        de prestige, sur le Tour de France cycliste aux Herbiers et à Cholet et l’opportunité nous a été
                        donné de pouvoir nous positionner en Août 2014 sur les Jeux Equestres Mondiaux qui se sont
                        déroulés à Caen.
                    </p>
                    <p className={styles.txt}>
                        Nous avons aménagé le Village Conseil des Chevaux de Basse-Normandie sous structures extérieures
                        bi-pentes et gardens de 5 m x 5 m. Nos équipes techniques ont réalisé la pose de moquette sur
                        l’ensemble du village, des cloisons traditionnelles avec habillage en coton gratté, de tous les
                        visuels exposants et la fourniture du mobilier.
                    </p>
                </div>
                <img src="/projet/equestre/Jeux-Equestres-Mondiaux-4.jpg" alt="image mondiaux équestre"/>
                <img src="/projet/equestre/Jeux-Equestres-Mondiaux-3.jpg" alt="image mondiaux équestre"/>
                <img src="/projet/equestre/Jeux-Equestres-Mondiaux-5.jpg" alt="image mondiaux équestre"/>
                <p>
                    <strong>
                        L’ensemble de l’Equipe de France Evénements est fière d’avoir participé à un tel
                        événement.
                    </strong>
                </p>
            </div>
            <div className={styles.decouvre}>
                <h2>
                    DÉCOUVREZ PLUS DE PROJETS
                </h2>
                <Carroussel/>
            </div>
        </div>
    );
}
