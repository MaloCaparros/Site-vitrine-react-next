import styles from "./congres.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div>
            <img className={styles.image} src="/projet/congres/Congres-CNGOF-1.jpg"
                 alt="image congres CNGOF"/>
            <h1 className={styles.title}>CONGRÈS CNGOF – NANTES</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>CITÉ NANTES EVENTS CENTER</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>2014</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>MÉDECINE - SANTÉ</p>
                </div>
            </div>
            <p className={styles.txt}>
                Référencé à La Cité Nantes Events Center, Colloquium Group nous a retenu au vue de la qualité de
                présentation de notre dossier pour l’aménagement des 38es Journées Nationales <Link href={"https://cngof.fr/"}>CNGOF</Link>.
            </p>
            <p className={styles.txt}>
                Nos équipes ont ainsi réalisé toute l’installation générale mais aussi, l’aménagement de l’ensemble des
                espaces congrès : accueil, badge, presse, agora, vestiaire, pause café, librairie, zone panneaux posters
                ainsi que le stand de l’organisateur et plusieurs <Link href={"/three"}>stands packagés</Link> pour le compte des exposants.
            </p>
            <p className={styles.txt2}>
                Notre organisation technique sur place et la créativité en amont de notre bureau d’études ont été là
                encore particulièrement appréciées.
            </p>
            <div className={styles.contain}>
                <div className={styles.imgp}>
                    <img src="/projet/congres/Congres-CNGOF-3.jpg" alt="image congrès CNGOF"/>
                    <img src="/projet/congres/Congres-CNGOF-2.jpg" alt="image congrès CNGOF"/>
                </div>
                <img src="/projet/congres/Congres-CNGOF-5.jpg" alt="image congrès CNGOF"/>
                <img src="/projet/congres/Congres-CNGOF-4.jpg" alt="image congrès CNGOF"/>
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
