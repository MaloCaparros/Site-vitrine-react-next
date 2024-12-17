import styles from "./salon.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div>
            <img className={styles.image} src="/projet/salon/Salon-Marie-Claire-Idees-1.jpg"
                 alt="image salon Marie Claire"/>
            <h1 className={styles.title}>SALON MARIE-CLAIRE IDÉES – PARIS</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>LA GRANDE HALLE DE LA VILLETTE</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>NOVEMBRE 2008</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>LOISIRS CRÉATIFS - DIY</p>
                </div>
            </div>
            <p className={styles.txt}>
                Nous avons relevé le challenge dès notre année de lancement pour aménager <Link
                href={"/https://www.creations-savoir-faire.com/fr-FR/"}>ce salon du « Do it yourself
                »,</Link> créations et savoir-faire, avec des zones très travaillées : Les Ateliers, la Cuisine, le
                Restaurant
                bio, le Village des couleurs (un kiosque central avec de grands pinceaux de 3 mètres de haut et 4
                espaces boutiques équipés de casquettes bicolores), le Customi Bar, l’Ecole, l’Accueil et les chalets de
                Noël avec fronton en PIN et vélum en partie haute.
            </p>
            <div className={styles.contain}>
                <div className={styles.imgp}>
                    <img src="/projet/salon/Salon-Marie-Claire-Idees-2.jpg" alt="image salon Marie Claire"/>
                    <img src="/projet/salon/Salon-Marie-Claire-Idees-3.jpg" alt="image salon Marie Claire"/>
                </div>
                <div className={styles.imgp}>
                    <img src="/projet/salon/Salon-Marie-Claire-Idees-5.jpg" alt="image salon Marie Claire"/>
                    <img src="/projet/salon/Salon-Marie-Claire-Idees-4.jpg" alt="image salon Marie Claire"/>
                </div>
            </div>
            <p className={styles.txt2}>
                Notre prestation a été très remarquée et nous sommes fiers d’avoir participé à un tel défi ! Encore
                un grand merci à l’organisateur.
            </p>
            <div className={styles.decouvre}>
                <h2>
                    DÉCOUVREZ PLUS DE PROJETS
                </h2>
                <Carroussel/>
            </div>
        </div>
    );
}
