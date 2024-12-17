import styles from './entreprise.module.css';
import Link from "next/link";
import Rejoindre from "../../component/rejoindre/Rejoindre";
import Chiffre from "../../component/chiffre/chiffre";

export const metadata = {
    title: "France Evénements Services, entreprise d’événementiel",
    description: "France Evénements Services, entreprise d’événementiel, accompagne et installe plus de 100 manifestations chaque année, partout en France.",
};

export default function Page() {

    return (
        <div>
            <div className={styles.societe}>
                <h1>FRANCE ÉVÉNEMENTS SERVICES IMAGINE VOS ESPACES ÉVÉNEMENTIELS</h1>
            </div>
            <p className={styles.entrepriseTxt}>
                Créée en décembre 2007,<strong> France Evénements Services, située à Saint-Julien-de-Concelles (44), est
                une
                entreprise d’événementiel. Ainsi, nous sommes spécialisés dans l’installation générale, les solutions
                techniques et le design. </strong> Nous vous accompagnons dans l’organisation de vos salons
                professionnels et
                grand public, forums étudiants, salons d’enseignes, congrès, rencontres d’affaires mais aussi événements
                sportifs et culturels.
            </p>
            <Chiffre/>
            <div className={styles.descriptif}>
                <h3>
                    CHAQUE ANNÉE, NOTRE ENTREPRISE D’ÉVÉNEMENTIEL ACCOMPAGNE ET INSTALLE PLUS DE 100 MANIFESTATIONS,
                    PARTOUT
                    EN FRANCE.
                </h3>
                <div className={styles.descriptifContain}>
                    <p>
                        France Evénements Services s’appuie sur sa maîtrise complète des processus et son réseau de
                        professionnels qualifiés pour aménager vos espaces événementiels. Notre entreprise prend donc en
                        charge l’ensemble de <Link href={"/"}> l’installation générale </Link> de votre manifestation.
                        Nous
                        planifions les moyens
                        logistiques, concevons <Link href={"/"}> les solutions techniques </Link> qui permettront
                        d’optimiser vos
                        espaces et vous
                        proposons <Link href={"/"}> des concepts design </Link> pour décliner votre communication
                        visuelle.
                    </p>
                    <p>
                        Nous mettons à votre disposition des <Link href={"/"}> catalogues complets de
                        produits </Link> pour
                        l’aménagement. Nous
                        pouvons également réaliser sur-mesure les stands et mobilier qui apporteront une touche unique
                        aux espaces individuels et collectifs. Avec ses <Link href={"/"}> accueils </Link>,
                        ses <Link href={"/"}> kiosques </Link>, ses <Link href={"/"}> espaces B to B </Link>, ses
                        <Link href={"/"}> stands personnalisés ou packagés </Link>, France Evénements Services initie de
                        nouvelles tendances, avec
                        l’objectif de faire de votre manifestation un lieu de rencontres et d’échanges privilégiés.
                    </p>
                </div>
                <p className={styles.textfin}>
                    Depuis plus de 10 ans, nous vous proposons un <Link href={"/accompagner"}>accompagnement
                    individualisé</Link> avec un regard
                    d’expert. À chaque étape de vos projets et tout au long du processus, nous nous appuyons sur une
                    démarche écoresponsable, partagée par l’ensemble des professionnels de France Evénements
                    Réseau.<br/>
                    <br/>Avec une centaine de manifestations accompagnées chaque année, France Evénements Services
                    envisage l’avenir sous le signe de l’innovation, du design ou encore des nouvelles technologies.
                    Et ce, en gardant appui sur ses valeurs fondatrices : le respect, le professionnalisme et la
                    créativité.<br/><br/>Notre ambition ? <strong>À vos côtés, faire bouger les lignes, ouvrir les
                    cadres,
                    animer les espaces. </strong>
                </p>
            </div>
            <Rejoindre
                titre="VOUS AVEZ UN PROJET ?"
                button="Parlons-en !"
                color="#5c79bb"
                page="/contact"
            />
        </div>
    );
}
