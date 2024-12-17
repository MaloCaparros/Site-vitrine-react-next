import styles from "./technotrans.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div className={styles.main}>
            <img className={styles.image} src="/projet/technotrans/Salon-Technotrans-1.jpg"
                 alt="image salon transports publics"/>
            <h1 className={styles.title}>SALON TECHNOTRANS – NANTES</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>NANTES</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>DEPUIS OCTOBRE 2008</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>TRANSPORT ROUTIER</p>
                </div>
            </div>
            <div className={styles.contain}>

                <div>
                    <p className={styles.txt}>
                        Nous installons le <Link href={"https://www.salon-technotrans.com/"}>salon professionnel Technotrans </Link> qui revient tous les 2 ans au Parc des
                        Expositions de la Beaujoire à Nantes, depuis 2008 et qui ne cesse de s’agrandir.
                    </p>
                    <p className={styles.txt}>
                        Sur cet événement, nos équipes mettent tout en œuvre pour conseiller au mieux notre client sur
                        l’aménagement et la décoration de l’accueil et de tous les espaces dédiés : salle de
                        conférences, stand de l’organisateur, aménagement de la zone de sécurité non constructible du
                        Hall XXL avec une signalétique personnalisée à l’événement…
                    </p>
                    <p className={styles.txt}>
                        Sur ce salon, nous réalisons de nombreux stands avec l’aide de notre plateforme en ligne,
                        véritable outil qui recense tous les besoins des exposants.
                    </p>

                </div>
                <img src="/projet/technotrans/Salon-Technotrans-3.jpg" alt="image salon transports publics"/>
                <img src="/projet/technotrans/Salon-Technotrans-5.jpg" alt="image salon transports publics"/>
                <img src="/projet/technotrans/Salon-Technotrans-4.jpg" alt="image salon transports publics"/>
                <img src="/projet/technotrans/Salon-Technotrans-2.jpg" alt="image salon transports publics"
                     className={styles.imgp}/>

            </div>
            <p className={styles.titre}>
                Merci à toute l’équipe de la FNTR de nous faire confiance pour l’aménagement de ce très beau salon
                professionnel.
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
