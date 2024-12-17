import styles from "./mariage.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div className={styles.main}>
            <img className={styles.image} src="/projet/mariage/Salon-Mariage-Carousel-Louvre-1.jpg"
                 alt="image salon transports publics"/>
            <h1 className={styles.title}>SALON DU MARIAGE – PARIS</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>CAROUSEL DU LOUVRE</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>JANVIER 2008</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>MARIAGE</p>
                </div>
            </div>
            <div className={styles.contain}>
                <img src="/projet/mariage/Salon-Mariage-Carousel-Louvre-2.jpg" alt="image salon transports publics"/>
                <div>
                    <p className={styles.txt}>
                        FRANCE CONVENTIONS nous a fait confiance dès l’année de notre lancement, en 2008, en nous
                        retenant pour l’aménagement de différents salons : <Link href={"https://mariageaucarrousel.com/"}>Salon du mariage au Carousel du Louvre </Link>,
                        Losang’expo au CNIT Paris La Défense et Marie Claire Idées à la Grande Halle de la Villette.
                    </p>
                    <p className={styles.txt}>
                        Sur ces dossiers complexes avec des plannings de montage et de démontage extrêmement serrés,
                        nous avons réalisé l’ensemble de l’installation générale avec des espaces d’animation très
                        créatifs qui ont fait appel à de nombreux savoir-faire de l’entreprise.
                    </p>
                    <p className={styles.txt2}>
                        Un grand MERCI à France Conventions et son dirigeant de l’époque de nous avoir ainsi fait
                        confiance !
                    </p>
                </div>
                <img src="/projet/mariage/Salon-Mariage-Carousel-Louvre-3.jpg" alt="image salon transports publics"
                     className={styles.imgp}/>
                <img src="/projet/mariage/Salon-Mariage-Carousel-Louvre-4.jpg" alt="image salon transports publics"/>
                <img src="/projet/mariage/Salon-Mariage-Carousel-Louvre-5.jpg" alt="image salon transports publics"/>
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
