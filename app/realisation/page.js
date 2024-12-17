import styles from "./realisation.module.css";
import Rejoindre from "../../component/rejoindre/Rejoindre";
import Realisation from "../../component/realisation/realisation";

export const metadata = {
    title: "Nos réalisations - France Evenements services",
    description: "Découvrez toutes nos réalisations, salons, événements, manifestation, congres, design, three, filtrer les catégories qui vous intéressent. France Evenements services",
};

export default function Page() {

    return (
        <div className={styles.realisation}>
            <div className={styles.accompaTitre}>
                <h1>PARCOUREZ TOUTES NOS RÉALISATIONS</h1>
                <p>SALONS, ÉVÉNEMENT, MANIFESTATION, CONGRÈS, DESIGN, STAND, FILTRER LES CATÉGORIES QUI VOUS
                    INTÉRESSENT.</p>
            </div>
            <Realisation />
            <Rejoindre
                page="/contact"
                titre="VOUS ÊTES CONVAINCU ET SOUHAITEZ NOUS PARLER DE VOTRE PROJET ?"
                button="Laissez-nous un message, nous vous rappelerons"
                color="#5c79bb"
            />
        </div>
    );
}

