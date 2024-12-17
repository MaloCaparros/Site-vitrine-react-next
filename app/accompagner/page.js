import Image from "next/image";
import styles from "./accompagner.module.css";
import Ecology from "../../component/ecology/Ecology";
import Rejoindre from "../../component/rejoindre/Rejoindre";

export const metadata = {
    title: "Accompagner votre événement à chaque étape",
    description: "France Événements Services a structuré son organisation pour vous proposer, à chaque étape de la construction de votre manifestation, des prestations de qualité. Ainsi, de la conception à la dépose, nous vous apportons conseil et assistance. Pour vous accompagner dans votre événement de façon individuelle, nous vous proposons :",
};

export default function Accompagner(props) {
    return (
        <div className={styles.accompagner}>
            <div className={styles.accompaTitre}>
                <h1>ACCOMPAGNER VOTRE ÉVÉNEMENT À CHAQUE ÉTAPE</h1>
            </div>
            <div className={styles.accompacontenu}>
                <h2 className={styles.contenutitle}>UNE ORGANISATION AGILE ET RÉACTIVE POUR VOTRE ÉVÉNEMENT</h2>
                <p className={styles.contenuTxt}>France Événements Services a structuré son organisation pour vous
                    proposer, à chaque étape de la
                    construction de votre manifestation, des prestations de qualité. Ainsi, de la conception à la
                    dépose, nous vous apportons conseil et assistance.<strong> Pour vous accompagner dans votre
                        événement de
                        façon individuelle,</strong> nous vous proposons :
                </p>
                <div className={styles.description}>
                    <div className={styles.description1}>
                        <h3>DES COMPÉTENCES MÉTIERS SPÉCIFIQUES</h3>
                        <p>Qu’il s’agisse d’une <strong> installation générale </strong> pour votre salon,
                            de <strong> conseils techniques </strong> pour
                            l’aménagement de votre événement ou de <strong> création design pour votre stand</strong>,
                            notre bureau
                            d’études saura vous écouter. Notre objectif : trouver la solution la mieux adaptée à vos
                            attentes.
                        </p>
                    </div>
                    <div className={styles.description2}>
                        <h3>DES PROFESSIONNELS QUALIFIÉS</h3>
                        <p>Le bon déroulement de votre événement s’appuie sur l’intervention d’équipes de professionnels
                            qualifiés dans tous les domaines : moyens logistiques, transport, traçage, pose de
                            revêtements, montage/démontage, signalétique… Ces professionnels sont tous membres
                            de <strong>France
                                Évènements Réseau </strong>et sont retenus en fonction de leur proximité par rapport au
                            lieu de votre
                            événement.
                        </p>
                    </div>
                </div>
                <h2 className={styles.contenutitle2}>UN ACCOMPAGNEMENT DÉDIÉ POUR VOTRE ÉVÈNEMENT</h2>
                <div className={styles.accompaeven}>
                    <Image src={"/Accompagnement-personnalise.jpg"} alt="accompagner" width={500} height={350}
                           className={styles.img}/>
                    <div className={styles.accompatxt}>
                        <p className={styles.description3}>
                            À chaque étape de votre projet, vous bénéficiez de <strong>l’accompagnement d’un chargé
                            d’affaire et
                            d’un coordinateur technique dédiés à votre événement.</strong>
                        </p>
                        <p className={styles.description3}>
                            En phase d’installation, vous disposez d’un interlocuteur unique, responsable de la
                            coordination de l’ensemble des intervenants techniques. Il vous guide et vous accompagne
                            pour que votre événement se déroule dans les meilleures conditions.
                        </p>
                    </div>
                </div>

            </div>
            <div className={styles.eco}>
                <h2>DES SOLUTIONS ÉCO-RESPONSABLES</h2>
                <p className={styles.ecotxt}>France Évènements Services s’inscrit dans une démarche écoresponsable,
                    partagée par l’ensemble de son
                    équipe et son réseau d’intervenants professionnels. Cette volonté d’éco-responsabilité se traduit
                    par :
                </p>
                <div className={styles.ecotype}>
                    <Ecology
                        img={"/eco-responsable-eco-friendly.png"}
                        titre={"DES PRODUITS RESPECTUEUX DE L'ENVIRONNEMENT"}
                        text={"Pour que votre événement respecte en tout point l’environnement, nous vous accompagnons dans le choix de matériaux 100% recyclables ou réutilisables. Nous vous proposons également des éclairage basse consommation (HQI, PAR, LED…)."}
                    />
                    <Ecology
                        img={"/eco-responsable-bilan-carbone.png"}
                        titre={"UN IMPACT CARBONE LIMITÉ"}
                        text={"Durant toute l’installation de votre événement, nous veillons à optimiser les transports en sélectionnant les professionnels les plus proches du lieu de la manifestation. Nous pratiquons également une conduite responsable (éco-conduite) pour réduire nos émissions de CO2."}
                    />
                    <Ecology
                        img={"/eco-responsable-eco-organisation.png"}
                        titre={"UNE ÉCO-ORGANISATION"}
                        text={"Dans la mesure du possible, nous recyclons les déchets liés à votre manifestation.\n" +
                            "\n" +
                            "De plus, les supports utilisés dans nos échanges et l’accompagnement de votre événement sont dématérialisés pour éviter la surconsommation de papier."}
                    />
                </div>
            </div>
            <Rejoindre
                page="/contact"
                titre="Vous avez un projet ?"
                button="Parlon-en !"
                color="#2f3358"
            />
        </div>
    );
}

