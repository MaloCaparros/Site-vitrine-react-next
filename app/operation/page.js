import styles from "./operation.module.css";
import {MapPin, Calendar, Star} from "lucide-react";
import Link from "next/link";
import Carroussel from "../../component/Carroussel/Carroussel";

export default function Page() {
    return (
        <div className={styles.main}>
            <img className={styles.image} src="/projet/operation/Operation-Start-Ouest-1.jpg"
                 alt="image salon transports publics"/>
            <h1 className={styles.title}>OPÉRATION START-OUEST – NANTES</h1>
            <div className={styles.info}>
                <div>
                    <MapPin size={40}/>
                    <p>NANTES - CITÉ DES CONGRÈS</p>
                </div>
                <div>
                    <Calendar size={40}/>
                    <p>2018</p>
                </div>
                <div>
                    <Star size={40}/>
                    <p>RENCONTRES D&apos;AFFAIRE</p>
                </div>
            </div>
            <div className={styles.contain}>
                <img src="/projet/operation/Operation-Start-Ouest-4.jpg" alt="image salon transports publics"
                     className={styles.imgp}/>
                <div className={styles.imgp}>
                    <p className={styles.txt}>
                        Les Rencontres d’affaire se développent et nous entendons y apporter notre contribution. Là
                        encore, notre BE est particulièrement actif et novateur.
                    </p>
                    <p className={styles.txt}>
                        Plusieurs de nos réalisations (Kiosques, cloisons claustras…) ont depuis inspirés bon nombre de
                        nos confrères, preuve s’il en est de notre originalité et créativité.
                    </p>
                    <p className={styles.txt}>
                        Les organisateurs veulent des espaces plus ouverts et moins cloisonnés, nous déclinons des
                        <Link href={"/solution"}> solutions techniques </Link> innovantes et dans un souci constant du développement durable. Surtout
                        <Link href={"/contact"}> n’hésitez pas à nous consulter. </Link>
                    </p>
                    <img src="/projet/operation/Operation-Start-Ouest-2.jpg" alt="image salon transports publics"/>
                </div>
                <img src="/projet/operation/Operation-Start-Ouest-3.jpg" alt="image salon transports publics"/>
                <img src="/projet/operation/Operation-Start-Ouest-5.jpg" alt="image salon transports publics"/>
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
