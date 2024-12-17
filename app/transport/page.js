import styles from "./transport.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div className={styles.main}>
            <img className={styles.image} src="/projet/transport/Salon-Transports-Publics-1.jpg"
                 alt="image salon transports publics"/>
            <h1 className={styles.title}>SALON DES TRANSPORTS PUBLICS – PARIS</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>PARIS - PORTE DE VERSAILLES</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>1 JUIN 2014</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>TRANSPORTS PUBLICS</p>
                </div>
            </div>
            <div className={styles.contain}>
                <img src="/projet/transport/Salon-Transports-Publics-3.jpg" alt="image salon transports publics"/>
                <div>
                    <p className={styles.txt}>
                        L’événement phare dédié aux transports publics s’est déroulé dans le Pavillon 2 de la Porte de
                        Versailles (soit plus de 25 000m²). Un très beau challenge pour l’ensemble de nos équipes.
                    </p>
                    <p className={styles.txt}>
                        Nous étions en charge de l’aménagement de toute <Link href={"/installation"}>l’installation
                        générale </Link> (Cloisons, signalétique,
                        rails de spots à LED…) ainsi que de nombreux espaces : Accueil, Salle de Presse, Start Up, GIE,
                        Business Meeting, Forum Emploi, Rencontre Export, Tribune d’Experts, Europe, Invités, Mobilité
                        Active…
                    </p>
                </div>
                <img src="/projet/transport/Salon-Transports-Publics-2.jpg" alt="image salon transports publics"
                     className={styles.imgp}/>
                <img src="/projet/transport/Salon-Transports-Publics-4.jpg" alt="image salon transports publics"/>
                <img src="/projet/transport/Salon-Transports-Publics-5.jpg" alt="image salon transports publics"/>
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
