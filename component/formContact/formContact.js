"use client"

import styles from "../../app/contact/contact.module.css";
import emailjs from "emailjs-com";
import {useState} from "react";

function FormContact() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        option: "",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.message) {
            setErrorMessage("Veuillez remplir tous les champs du formulaire.");
            return;
        }

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SECRET_KEY_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_SECRET_KEY_EMAILJS_TEMPLATE,
                formData,
                process.env.NEXT_PUBLIC_SECRET_KEY_EMAILJS_KEY
            )
            .then((response) => {
                setErrorMessage("");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    telephone: "",
                    option: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi de l'e-mail:", error);
                setErrorMessage("Erreur lors de l'envoi de l'e-mail. Veuillez réessayer.");
            });
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            option: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContact}>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <div className={styles.formcase}>
                <label htmlFor="name">
                    <input
                        type="text"
                        id="prenom"
                        name="firstName"
                        placeholder="Prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="nom">
                    <input
                        type="text"
                        id="nom"
                        name="lastName"
                        placeholder="Nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className={styles.formcase}>
                <label htmlFor="email">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="telephone">
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="Téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>


            <div className={styles.typedemande}>
                <label htmlFor="option1">
                    <input type="radio" id="option1" name="option" value="Installation générale"
                           onChange={handleChange}/>
                    Installation générale
                </label>
                <label htmlFor="option2">
                    <input type="radio" id="option2" name="option" value="Solutions techniques"
                           onChange={handleChange}/>
                    Solutions techniques
                </label>
                <label htmlFor="option3">
                    <input type="radio" id="option3" name="option" value="Design & stand" onChange={handleChange}/>
                    Design & stand
                </label>
            </div>
            <label htmlFor="message">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
            </label>

            <button type="submit">Envoyer
            </button>
        </form>
    );
}

export default FormContact;