import React from "react";
import styles from "./stand.module.css";
import Image from "next/image";
import Button from "/component/button/Button";
import Rejoindre from "../../component/rejoindre/Rejoindre";

export const metadata = {
  title: "Stands et espaces événementiels, pour une manifestation design",
  description: "France Événements Services conçoit des stands et espaces événementiels design pour une manifestation unique et attractive. Découvrez nos solutions techniques et nos réalisations sur-mesure.",
};

export default function Page() {
  return (
    <div>
      <div className={styles.actutitre}>
        <div className={styles.img}>
          <Image
            src={"/three/Design-Blanc.png"}
            alt={"Solution technique"}
            width={200}
            height={200}
          />
        </div>
        <h1>STANDS ET ESPACES ÉVÉNEMENTIELS, POUR UNE MANIFESTATION DESIGN</h1>
      </div>
      <div className={styles.contain}>
        <h2>DES ESPACES & STANDS DESIGN POUR CRÉER UNE ATMOSPHÈRE UNIQUE</h2>
        <p>
          L&apos;espace événementiel est un véritable vecteur de communication
          pour les organisateurs et les exposants.
          <strong>
            Pour des stands design, des espaces individuels uniques et des
            espaces collectifs intuitifs, notre Service Design crée selon vos
            attentes une atmosphère particulière :
          </strong>
          ils mettent en scène votre identité visuelle spécifique et proposent
          une cadre propice aux échanges avec les visiteurs.
        </p>
        <p>
          Nos designers, architectes d&apos;intérieur et décorateurs conçoivent
          vos espaces événementiels en déclinant votre politique de
          communication. Ils sont force de proposition sur les concepts qui
          rendront votre manifestation unique et attractive.
        </p>
      </div>
      <div className={styles.gridcontain}>
        <div className={`${styles.elementcontain} ${styles.inverse}`}>
          <Image
            src={"/installation/Signaletique-France-Evenements-Services.jpg"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
          />
          <div className={styles.elementtxt}>
            <h2>LA SIGNALÉTIQUE</h2>
            <h3>TOUS LES SUPPORTS POUR VOTRE IDENTITÉ VISUELLE</h3>
            <p>
              France Evénements Services réalise la signalétique globale de
              votre manifestation, la PLV des espaces collectifs et individuels,
              en intérieur comme en extérieur :
            </p>
            <ul>
              <li>
                Création de supports sur-mesure : panneaux, totem, display,
                cadres muraux, présentoirs, affichages, caissons lumineux au sol
                ou élingués, écrans…
              </li>
              <li>
                Déclinaison de la communication visuelle sur chaque support :
                logo, charte graphique, visuels, éclairage…
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.elementcontain}>
          <div className={styles.elementtxt2}>
            <h2>MOBILIER & ÉQUIPEMENTS</h2>
            <h3>LA TOUCHE DÉCO</h3>
            <p>
              Pour apporter la dernière touche à vos stands design, découvrez
              toutes les gammes de mobiliers contemporains et de
              cloisons-claustras de France Evénements.
            </p>
            <Button
              link="/produit"
              text="Parcourir nos catalogues"
              colo="#00a58c"
            />
          </div>
          <Image
            src={"/installation/Mobilier-evenementiel-1-1024x683.jpg"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
          />
        </div>

        <Rejoindre
          titre="POUR UNE CONCEPTION ET UNE FABRICATION DE MOBILIER SUR-MESURE"
          button="Nous consulter"
          color="#00a58c"
          page="/contact"
        />
        <div className={`${styles.elementcontain} ${styles.inverse}`}>
          <Image
            src={"/installation/Stand-France-Evenements-Services.jpg"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
          />
          <div className={styles.elementtxt}>
            <h2>LES STANDS PERSONNALISÉS</h2>
            <h3>POUR MARQUER VOTRE EMPREINTE</h3>
            <p className={styles.pbutton}>
              Des stands réalisés sur-mesure, très fonctionnels, déclinant votre
              identité visuelle : c&apos;est ce que vous propose France
              Evénements avec les stands personnalisés.
            </p>
            <Button
              link="/realisation"
              text="voir nos réalisations sur-mesure"
              colo="#00a58c"
            />
          </div>
        </div>
        <div className={styles.elementcontain}>
          <div className={styles.elementtxt2}>
            <h2>LES STANDS PACKAGÉS</h2>
            <h3>DES SOLUTIONS CLÉ EN MAIN</h3>
            <p className={styles.pbutton}>
              À la recherche d&apos;un stand clé en main ? Voici le stand
              packagé, une formule idéale pour un stand de 9 à 72 m², équipé et
              personnalisable. France Événements Services applique votre
              identité visuelle sur le modèle de votre choix : un moyen rapide,
              simple et rentable pour se distinguer sur un salon !
            </p>
            <Button
              link="/realisation"
              text="consulter nos références"
              colo="#00a58c"
            />
          </div>
          <Image
            src={"/three/galerie-france-service-evenement.JPG"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
            className={styles.img2}
          />
        </div>
        <div className={`${styles.elementcontain} ${styles.inverse}`}>
          <Image
            src={"/three/Espaces-conferences.jpg"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
          />
          <div className={styles.elementtxt}>
            <h2>LES ESPACES COLLECTIFS</h2>
            <h3>ESTHÉTISME ET CONVIVIALITÉ</h3>
            <p>
              Accueil, commissariat général, espace conférences, espace
              restauration… Notre service Design vous propose des solutions
              originales, esthétiques et conviviales pour décliner votre
              communication visuelle.
            </p>
          </div>
        </div>
        <div className={styles.elementcontain}>
          <div className={styles.elementtxt2}>
            <h2>LES ESPACES B TO B</h2>
            <h3>CONÇUS POUR LE SPEED MEETING</h3>
            <p>
              Les espaces B to B sont conçus et réalisés par France Evénements
              Services pour favoriser la rencontre, la convivialité et les
              échanges, tout en respectant la convivialité.
            </p>
          </div>
          <Image
            src={"/three/Espaces-BtoB-Evenement.jpg"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
          />
        </div>
        <div className={`${styles.elementcontain} ${styles.inverse}`}>
          <Image
            src={"/three/Espaces-conferences.jpg"}
            alt={"stand1"}
            width={400}
            height={250}
            quality={100}
          />
          <div className={styles.elementtxt}>
            <h2>Les kiosques</h2>
            <h3>DES espaces de démonstration</h3>
            <p>
              Kiosques libraires, à vins, gastronomiques… Pour valoriser les
              produits exposés. France Événements Services crée pour vous des
              espaces de présentation, de démonstration ou de dégustation. Les
              kiosques de Fance Événements Services sont de véritables pôles
              d&apos;animation qui :
            </p>
            <ul>
              <li>
                déclinent un concept visuel original et très repérable sur le
                site de la manifestation,
              </li>
              <li>sont pré-équipés (éclairage, signalétique…),</li>
              <li>sont accessibles aux personnes à mobilité réduite.</li>
            </ul>
          </div>
        </div>
      </div>
      <Rejoindre
        titre="BESOIN D'INSPIRATION ?"
        button="consulter notre portfolio"
        color="#00a58c"
        page="/realisation"
        />

    </div>
  );
}
