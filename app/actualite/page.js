import styles from "./actualite.module.css";
import Actu from "../../component/actu/Actu";

export const metadata = {
    title: "Actualités de l'entreprise et du secteur de l'événementiel",
    description: "Retrouvez toutes les actualités de France Evénements Services et du secteur de l'événementiel.",
};

export default function Page() {
    return (
        <div>
            <div className={styles.actutitre}>
                <h1>
                    ACTUALITÉS DE L’ENTREPRISE ET DU SECTEUR DE L’ÉVÉNEMENTIEL
                </h1>
            </div>
            <div className={styles.actualiteCard}>
            <Actu
                title="France Evénements Services mobilisé sur les olympiades des métiers !"
                image="/actu1.jpg"
                text="Installation générale"
                link="/olympiades"
            />
            <Actu
                title="Préparer son salon en 10 étapes"
                image="/actu2.jpg"
                text="Guide pratique"
                link="/prepaSalon"
            />
            <Actu
                title="INTERVIEW – LA GAZETTE DES SALONS"
                image="/actu3.jpg"
                text="Actualités"
                link="/gazette"
            />
            <Actu
                title="LES 6 ENGAGEMENTS « GREEN » DE FRANCE EVÉNEMENTS SERVICES"
                image="/ENGAGEMENT-GREEN-400x250.png"
                text="éco-responsabilité"
                link="/engagreen"
            />
            </div>

        </div>
    );
}

