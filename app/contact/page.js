import styles from "./contact.module.css";
import FormContact from "../../component/formContact/formContact";

export const metadata = {
    title: "CONTACT - France Événements Services",
    description: "Imaginons l'espace à vos mesures... Contactez-nous pour vos projets d'événements. France Événements Services vous accompagne pour aménager votre événement.",
};

export default function ContactForm() {

    return (
        <div>
            <div className={styles.accompaTitre}>
                <h1>VOUS AVEZ UN PROJET D’ÉVÉNEMENT ?</h1>
                <p>LAISSEZ-NOUS VOS COORDONNÉES ET NOUS VOUS RAPPELLERONS</p>
            </div>
            <FormContact/>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.663920539701!2d-1.4038796232019646!3d47.24271941303409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805facd80c26c37%3A0x859287944850da55!2sFrance%20Evenements%20Service!5e0!3m2!1sfr!2sfr!4v1709719914803!5m2!1sfr!2sfr"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
    );
}