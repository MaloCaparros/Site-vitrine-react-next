import React from 'react';
import styles from "./installation.module.css";
import Image from "next/image";
import Catalogue from "../../component/catalogue/Catalogue";
import Rejoindre from "../../component/rejoindre/Rejoindre";
import Button from "../../component/button/Button";

export const metadata = {
    title: "Installation générale - France Événements Services",
    description: "Pour faciliter la mise en oeuvre de votre événement, France Evénements Services prend en charge l’ensemble de son installation technique. Nous procédons à l’aménagement complet des espaces de stands et vous proposons des solutions créatives et modernes pour les espaces collectifs, tels que les restaurants ou les salles de conférences. Nous intervenons dès la conception puis sur toutes les étapes de l’installation générale de votre événement : fabrication, transport, mise en place de cloisons modulaires ou de stands packagés, pose de revêtements de sol, prestation électrique, sans oublier la signalétique, le mobilier, la décoration florale et le démontage… Notre réactivité et la qualité de nos prestations s’appuient sur une maîtrise complète du processus.",
};

export default function Page() {
    return (
        <div>
            <div className={styles.actutitre}>
                <div className={styles.img}>
                    <Image src={"/installation/Installation-Generale-Blanc.png"} alt={"Installation générale"}
                           width={200} height={200}/>
                </div>
                <h1>
                    FACILITER L’INSTALLATION GÉNÉRALE DE VOTRE ÉVÉNEMENT
                </h1>
            </div>
            <div className={styles.instacontain}>
                <h2>UNE MAÎTRISE COMPLÈTE DU PROCESSUS</h2>
                <p>
                    <strong>
                        Pour faciliter la mise en oeuvre de votre événement, France Evénements Services prend en
                        charge l’ensemble de son installation technique.
                    </strong>
                    Nous procédons à l’aménagement complet des espaces de stands et vous proposons des solutions
                    créatives et modernes pour les espaces collectifs, tels que les restaurants ou les salles de
                    conférences.
                </p>
                <p>
                    <strong>
                        Nous intervenons dès la conception puis sur toutes les étapes de l’installation générale de
                        votre événement
                    </strong>
                    : fabrication, transport, mise en place de cloisons modulaires ou de stands packagés, pose de
                    revêtements de sol, prestation électrique, sans oublier la signalétique, le mobilier, la décoration
                    florale et le démontage…
                    <strong>
                        Notre réactivité et la qualité de nos prestations s’appuient sur une maîtrise complète du
                        processus.
                    </strong>
                </p>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <Image src={"/installation/Installation-generale_conception.png"} alt={"Installation générale"}
                               width={200} height={200}/>
                        <p>CONCEPTION & FABRICATION</p>
                    </div>
                    <div className={styles.item}>
                        <Image src={"/installation/Installation-generale_transport.png"} alt={"Installation générale"}
                               width={200} height={200}/>
                        <p>TRANSPORT</p>
                    </div>
                    <div className={styles.item}>
                        <Image src={"/installation/Installation-generale_montage.png"} alt={"Installation générale"}
                               width={200} height={200}/>
                        <p>MONTAGE & DÉMONTAGE</p>
                    </div>
                    <div className={styles.item}>
                        <Image src={"/installation/Installation-generale_recyclage.png"} alt={"Installation générale"}
                               width={200} height={200}/>
                        <p>RECYCLAGE</p>
                    </div>
                </div>
            </div>
            <div className={styles.produit}>
                <h2>
                    TOUS LES PRODUITS
                    ET MOBILIER
                </h2>
                <p>
                    Stands, mobilier, cloisons, infrastructures, revêtements de sols, éclairage, signalétique,
                    décoration florale… Vous disposez d&apos;
                    <strong>
                        un large choix de produits, standards ou conçus et fabriqués spécifiquement pour votre
                        événement.
                    </strong>
                </p>
                <div className={styles.catalogue}>
                    <Catalogue
                        imgfond={"/installation/Stand-France-Evenements-Services.jpg"}
                        titre={"Stand"}
                        texte={"Découvrez nos stands sur-mesure et nos stands packagés."}
                        url={"/three"}
                        width={"25%"}
                        height={"auto"}
                    />
                    <Catalogue
                        imgfond={"/installation/Mobilier-evenementiel-1-1024x683.jpg"}
                        titre={"MOBILIER"}
                        texte={"Consultez notre catalogue mobilier événementiel."}
                        url={"https://www.calameo.com/read/00541841209be8f2236c8"}
                        width={"25%"}
                        height={"auto"}
                    />
                    <Catalogue
                        imgfond={"/installation/Fourniture-Equipement-Evements-1024x640.jpg"}
                        titre={"FOURNITURES & ÉQUIPEMENTS"}
                        texte={"Parcourez et téléchargez nos catalogues de fournitures et équipements."}
                        url={"/produit"}
                        width={"25%"}
                        height={"auto"}
                    />
                    <Catalogue
                        imgfond={"/installation/Signaletique-France-Evenements-Services-1024x640.jpg"}
                        titre={"SIGNALÉTIQUE"}
                        texte={""}
                        url={"/three"}
                        width={"25%"}
                        height={"auto"}
                    />
                </div>
            </div>
            <Rejoindre
                titre={"VOUS CHERCHEZ UN PRODUIT EN PARTICULIER ?"}
                button={"PARCOUREZ NOS CATALOGUES"}
                lien={"/contact"}
                color={"#5c79bb"}
                page={"/produit"}
            />
            <div className={styles.accomplissement}>
                <video autoPlay loop muted controls style={{objectFit:"cover"}}>
                    <source src={"https://cdn.discordapp.com/attachments/927845269855420419/1219239861714685992/FES_Technotrans_v3.mp4?ex=660a949b&is=65f81f9b&hm=0ba95ab4514110102e56800f7a14d616316b53b138e9c7aa78fbe238238fb8ef&"} type="video/mp4"/>
                </video>
                <div className={styles.accomptxt}>
                    <h2>
                        UN ACCOMPAGNEMENT PERSONNALISÉ
                    </h2>
                    <p>
                        A chaque étape de votre projet, et notamment lors de l&apos;installation, vous bénéficiez de
                        l&apos;accompagnement d&apos;
                        <strong>
                            un chargé d&apos;affaires et d&apos;un coordinateur technique dédiés.
                        </strong>
                        Nos équipes d&apos;installation sont constituées de
                        <strong>
                            professionnels qualifiés
                        </strong>
                        , tous membres de France Evénements Réseau : monteurs, décorateurs, tapissiers, électriciens.
                    </p>
                    <Button
                        text={"EN SAVOIR PLUS"}
                        link={"/accompagner"}
                        colo={"#5c79bb"}
                    />
                </div>
            </div>
            <div className={styles.eco}>
                <h2>
                    UNE DÉMARCHE ÉCO-RESPONSABLE
                </h2>
                <div className={styles.ecotext}>
                    <p>
                        France Événements Services met en œuvre une approche éco-responsable, qui se traduit par
                        l’utilisation de produits respectueux de l’environnement, l’optimisation des transports et
                        l’organisation-même de notre entreprise.
                    </p>
                    <Button
                        text={"EN SAVOIR PLUS"}
                        link={"/accompagner"}
                        colo={"white"}
                    />
                </div>


            </div>
        </div>
    )
        ;
}
