"use client"
import Link from "next/link";
import {Twitter, Linkedin} from "lucide-react";
import styles from "./footer.module.css";
import {usePathname} from "next/navigation";

export default function Footer() {

    const router = usePathname();

    if(router === "/three"){
        return null
    }

    return (
        <footer>
            <div className={styles.footerhaut}>
                <div>
                    <h3>Coordonnées</h3>
                    <p>ZI de Beau Soleil 1</p>
                    <p>3 rue de l’Artisanat</p>
                    <p>44450 Saint-Julien-de-Concelles</p>
                    <br/>
                    <p>tél. 02 51 13 90 68</p>
                    <p>fax 02 51 13 19 56</p>
                    <p> contact@franceevenements.fr</p>
                </div>
                <div>
                    <h3>Plan du site</h3>
                    <ul className={styles.sitmap}>
                        <li>
                            <Link href="/">ACCUEIL</Link>
                        </li>
                        <li>
                            <Link href="/actualite">ACTUALITÉS</Link>
                        </li>
                        <li>
                            <Link href="/contact">CONTACT</Link>
                        </li>
                        <li>
                            <Link href="/installation">INSTALLATION GÉNÉRALE</Link>
                        </li>
                        <li>
                            <Link href="/entreprise">LA SOCIÉTÉ</Link>
                        </li>
                        <li>
                            <Link href="/legal">MENTIONS LÉGALES</Link>
                        </li>
                        <li>
                            <Link href="/produit">NOS PRODUITS</Link>
                        </li>
                        <li>
                            <Link href="/realisation">NOS RÉALISATIONS</Link>
                        </li>
                        <li>
                            <Link href="/solution">SOLUTIONS TECHNIQUES</Link>
                        </li>
                        <li>
                            <Link href="/stand">STAND & DESIGN</Link>
                        </li>
                        <li>
                            <Link href="/accompagner">VOUS ACCOMPAGNER</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Suivez-nous</h3>
                    <div className={styles.reseau}>
                        <Link href="https://twitter.com/Fr_Evenements">
                            <Twitter size={50}/>
                        </Link>
                        <Link href="https://www.linkedin.com/company/franceevenementsservices/">
                            <Linkedin size={50}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerbas}>
                <p>© UN DES SENS - Design Global </p>|
                <p> Tous droits réservés France Évènements Services </p>|
                <Link href="/"> Mentions Légales </Link>|
                <p> Politique de confidentialité </p>
            </div>
        </footer>
    );
}
