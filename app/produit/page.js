import styles from "./produit.module.css";
import Catalogue from "../../component/catalogue/Catalogue";
import Rejoindre from "../../component/rejoindre/Rejoindre";

export const metadata = {
    title: "Produit - France Événements Services",
    description: "Tous les produits pour votre événement",
};

export default function Page() {
    return (
        <div className={styles.produit}>
            <div className={styles.accompaTitre}>
                <h1>TOUS LES PRODUITS POUR VOTRE ÉVÉNEMENT</h1>
            </div>
            <h2 className={styles.titreactu}>
                POUR TOUT LE MOBILIER ÉVÉNEMENTIEL NÉCESSAIRE À VOTRE MANIFESTATION, PARCOUREZ NOS CATALOGUES.
            </h2>
            <p className={styles.pactu}>
                France Événements Services dispose d’<strong>un vaste choix de mobilier événementiel</strong> pour
                l’organisation de
                votre manifestation. Régulièrement entretenu et renouvelé, ce matériel est gardé en parfait état dans
                notre espace de stockage de près de 1400 mètres carrés.
            </p>
            <p className={styles.pactu}>
                Consultez ci-dessous<strong> les dernières versions des catalogues de mobilier ou encore notre nuancier
                de
                moquettes, ainsi que nos propositions d’éclairage ou de stands.</strong>
            </p>
            <p className={styles.lastp}>
                Découvrez notre livre blanc<strong>« Comment participer à un salon ? »</strong> pour vous aider dans la
                préparation de
                votre événement ou téléchargez notre fiche pratique<strong> « Les 10 étapes pour réussir l’installation
                générale
                de votre salon ».</strong>
            </p>
            <div className={styles.catalogueproduit}>
                <Catalogue
                    imgfond="/catalogue/mobilier.jpg"
                    titre="Mobilier"
                    texte="Sélectionner le mobilier de notre catalogue"
                    url="https://www.calameo.com/read/00541841209be8f2236c8"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/moquette.jpg"
                    titre="Moquette"
                    texte="Sélectionner la moquette de notre catalogue"
                    url="https://www.calameo.com/read/0054184127aa79a93f1e1"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/stand.jpg"
                    titre="Stand"
                    texte="Sélectionner votre stand"
                    url="https://www.calameo.com/read/005418412f90b1f26c621"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/electricite.jpg"
                    titre="Eclairage"
                    texte="Sélectionnez l'écrlairage de notre catalogue"
                    url="https://www.calameo.com/read/0054184124c88e5f58982"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/enseigne.jpg"
                    titre="Enseigne"
                    texte="Sélectionnez les enseignes de notre catalogue"
                    url="https://www.calameo.com/read/005418412a4e25707b85f"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/coton.jpg"
                    titre="Coton gratte"
                    texte="Sélectionnez les cotons grattés de notre catalogue"
                    url="https://www.calameo.com/read/0054184124a51fa1d56d4"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/solPVC.jpg"
                    titre="SOL PVC"
                    texte="Sélectionnez les sols PVC de notre catalogue"
                    url="https://www.calameo.com/read/00541841214bbc0794871"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/display.jpg"
                    titre="Display"
                    texte="Pour être vu, sélectionnez les displays de notre catalogue"
                    url="https://fes-commandes-complementaires.fr/categorie/display"
                    height={"250px"}
                    width={"250px"}
                />
                <Catalogue
                    imgfond="/catalogue/livreBlanc.jpg"
                    titre="Livre blanc"
                    texte="Nos conseils pour participer à un salon"
                    url="https://www.calameo.com/read/00541841210edf8df264b"
                    height={"250px"}
                    width={"250px"}
                />
            </div>
            <Rejoindre
                page="/contact"
                titre="Vous avez un projet ?"
                button="Parlon-en !"
                color="#5d7bb7"
            />

        </div>
    );
}
