import styles from "./artibat.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div>
            <img className={styles.image} src="/projet/artibat/ARTIBAT-StandOrcab-01.jpg"
                 alt="image stand artibat"/>
            <h1 className={styles.title}>SALON ARTIBAT – RENNES</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>RENNES</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>DEPUIS OCTOBRE 2008</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>CONSTRUCTION</p>
                </div>
            </div>
            <p className={styles.txt}>
                Ce salon se tient désormais tous les 2 ans au Parc des Expositions de Rennes-Saint-Jacques.
            </p>
            <p className={styles.txt}>
                Après avoir réalisé une partie de l’installation générale sur Nantes (lieu d’origine du salon) puis sur
                Rennes, nos équipes interviennent fidèlement, pour l’aménagement de stands personnalisés (Orcab, Almet,
                Guillerm…).
            </p>
            <p className={styles.txt}>
                À ce propos, notre département  <Link href={"/three"}>« Stands personnalisés et packagés »</Link> se développe fort honorablement avec
                de très belles réalisations à son actif sur le SIMA, le CIB, le SIVAL, le SPACE… Ainsi, nous avons pris
                la décision d’étendre ce service au-delà des seuls salons sur lesquels nous assurions l’installation
                générale.
            </p>
            <div className={styles.contain}>
                <div className={styles.imgp}>
                    <img src="/projet/artibat/ARTIBAT-StandGuillerm-02.jpg" alt="image stand artibat"/>
                    <img src="/projet/artibat/ARTIBAT-StandAlmet-03.jpg" alt="image stand artibat"/>
                </div>
                <img src="/projet/artibat/ARTIBAT-StandAlmet-04.jpg" alt="image stand artibat"/>
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
