import styles from "./home.module.css";
import Button from "/component/button/Button";
import Info from "/component/info/Info";
import Image from "next/image";
import Actu from "../component/actu/Actu";
import Rejoindre from "../component/rejoindre/Rejoindre";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.accueil}>
        <h1>Imaginons vos espaces événementiels</h1>
        <Button
          link="#amenager-evenement"
          text="Découvrir nos métiers"
          colo="white"
        />
      </div>
      <div id="amenager-evenement" className={styles.metiers}>
        <h2 className={styles.metiertitle}>
          Aménager votre événement, salon, congrès...
        </h2>
        <p className={styles.metiersDescript}>
          Spécialiste de l&apos;installation générale, des solutions techniques
          et du design,
          <strong>
            {" "}
            France Evénements Services vous accompagne pour aménager votre
            événement
          </strong>
          . Salons grand public et professionnels, foires exposition, salons
          d&apos;enseignes, congrès, rencontres d&apos;affaires, événements
          sportifs et culturels, forums étudiants…{" "}
          <strong>
            {" "}
            nous assistons vos projets partout en France pour faciliter leur
            mise en œuvre, optimiser leur organisation et créer des univers de
            communication innovants.
          </strong>
        </p>
        <h2 className={styles.metiertitle2}>Nos métiers</h2>
        <div className={styles.metiersspe}>
          <Info
            photo="/Installation-generale.png"
            alt="Dessin montrant l'installation à l'aide d'un chariot"
            titre="Installation générale"
            texte="S'appuyant sur sa maîtrise complète des processus et un réseau de professionnels qualifiés,
                    France Evénements Services prend en charge l'ensemble de l'installation technique et l'aménagement
                    de votre manifestation."
            textbtn="En savoir plus"
            page="/installation"
            colo="blue"
          />
          <Info
            photo="/solution-technique.png"
            alt="plan d'une pièce dessinée et vue du dessus"
            titre="Solutions techniques"
            texte="Notre bureau d'études conçoit les solutions techniques qui permettront d'optimiser vos
                    espaces événementiels. Nos plans vous permettent, à chaque étape, de vous projeter dans la création
                    de votre événement."
            textbtn="Plus d'informations"
            page="/solution"
            colo="red"
          />
          <Info
            photo="/design-stand.png"
            alt="carré avec un crayon dont la pointe va vers le bas gauche"
            titre="Design & stands"
            texte="Le Service Design de France Evénements Services vous propose des concepts innovants,
                    à la fois fonctionnels et esthétiques, pour décliner votre communication visuelle : chaque espace
                    devient un cadre de rencontres unique et attractif."
            textbtn="Découvrir"
            page="/stand"
            colo="#0ca289"
          />
        </div>
      </div>
      <div className={styles.produit}>
        <div className={styles.produitGauche}>
          <h2>Nos produits</h2>
          <p>
            France Evénements Services met à votre disposition une offre
            complète de produits pour aménager votre événement, tels que stands,
            mobilier mais aussi cloisons, infrastructures, revêtements de sols,
            éclairage. Sans oublier la signalétique ou encore la décoration
            florale…
          </p>
          <Button link="/" text="Trouver ce qu'il vous faut" colo="white" />
        </div>
        <div className={styles.produitImage}>
          <Image
            src={"/Nos-produits-1.png"}
            alt={"Maquette de produit"}
            width={500}
            height={422}
          />
        </div>
      </div>
      <div className={styles.accompagnement}>
        <div className={styles.accompagnementImage}>
          <Image
            src={"/Vous-accompagner.jpg"}
            alt={"Main faite en arbre dans lequel on retrouve un cube"}
            width={500}
            height={422}
          />
        </div>
        <div className={styles.accompagnementDroite}>
          <h2>Vous Accompagner</h2>
          <p>
            <strong>
              France Événements Services vous accompagne à chaque étape
            </strong>{" "}
            pour aménager votre événement, vous proposant une organisation agile
            et réactive.
          </p>
          <p>
            <strong>
              Un chargé d&apos;affaire et un coordinateur technique vous sont
              dédiés
            </strong>{" "}
            pour suivre pas à pas la construction de votre événement et répondre
            à toutes vos questions. Nos professionnels qualifiés, rassemblés au
            sein de France Evénements Réseau, interviennent sur tous les aspects
            de l&apos;installation de votre événement.
          </p>
          <p>
            Sur l&apos;ensemble des étapes de conception et d&apos;aménagement,{" "}
            <strong>nous intervenons dans une logique écoresponsable </strong> :
            produits respectueux de l&apos;environnement, impact carbone limité,
            éco-organisation…
          </p>
          <Button link="/" text="En savoir plus" colo="#0ca289" />
        </div>
      </div>
      <div className={styles.contact}>
        <Rejoindre
          page="/contact"
          titre="SAVOIR-FAIRE, RÉACTIVITÉ, ENGAGEMENT, CONSEIL…"
          button="Contactez-nous !"
          color="#2f3358"
        />
      </div>
      <div className={styles.partenaire}>
        <h2>Ils nous font confiance</h2>
        <div className={styles.partenaireImage}>
          <Image
            src={"/Innov-Agri.jpg"}
            alt={"Logo de nos partenaires"}
            width={250}
            height={211}
          />
          <Image
            src={"/Thetis.jpg"}
            alt={"logo de nos partenaires"}
            width={250}
            height={211}
          />
          <Image
            src={"/Technotrans.jpg"}
            alt={"logo de nos partenaires"}
            width={250}
            height={211}
          />
          <Image
            src={"/Medef.jpg"}
            alt={"logo de nos partenaires"}
            width={250}
            height={211}
          />
          <Image
            src={"/Concertech.jpg"}
            alt={"logo de nos partenaires"}
            width={250}
            height={211}
          />
        </div>
      </div>
      <div className={styles.actualite}>
        <h2>Nos dernières actualités</h2>
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
        </div>
      </div>
    </>
  );
}
