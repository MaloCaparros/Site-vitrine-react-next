import React from "react";
import styles from "./solution.module.css";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Rejoindre from "../../component/rejoindre/Rejoindre";

export const metadata = {
  title: "Solutions techniques événementielles pour votre manifestation",
  description: "France Événements Services vous propose des solutions techniques événementielles pour organiser et structurer votre manifestation.",
};

export default function Page(props) {
  return (
    <div className={styles.solution}>
      <div className={styles.actutitre}>
        <div className={styles.img}>
          <Image
            src={"/installation/Solutions-techniques-blanc.png"}
            alt={"Solution technique"}
            width={200}
            height={200}
          />
        </div>
        <h1>
          DES SOLUTIONS TECHNIQUES ÉVÉNEMENTIELLES POUR VOTRE MANIFESTATION
        </h1>
      </div>
      <div className={styles.contain}>
        <h2>FIABILITÉ ET ADAPTATION POUR L&apos;ORGANISATION DE VOTRE ÉVÉNEMENT</h2>
        <p className={styles.textcontain}>
          France Événements Services organise des manifestations depuis plus de
          10 ans. Ainsi, notre bureau d&apos;études vous propose des
          <strong>
            solutions techniques événementielles à la pointe des technologies
            pour organiser et structurer votre manifestation.
          </strong>
          Notre expertise nous permet d&apos;aménager des espaces collectifs
          intuitifs et modernes, qui sauront répondre à vos besoins tout en
          étant pratiques pour vos visiteurs.
        </p>
        <p className={styles.containlast}>
          Nos solutions techniques vous garantissent :
        </p>
        <div className={styles.garanti}>
          <div className={styles.garantilist}>
            <div>
              <CheckCircle2 size={30} />
              <p>La fiabilité des installations</p>
            </div>
            <div>
              <CheckCircle2 size={30} />
              <p>L&apos;optimisation et la praticité des espaces</p>
            </div>
            <div>
              <CheckCircle2 size={30} />
              <p>La fluidité des circulations</p>
            </div>
          </div>
          <div className={styles.garantilist}>
            <div>
              <CheckCircle2 size={30} />
              <p>L&apos;adaptation aux besoins des exposants et des visiteurs</p>
            </div>
            <div>
              <CheckCircle2 size={30} />
              <p>L&apos;utilisation de matériaux classés au feu</p>
            </div>
            <div>
              <CheckCircle2 size={30} />
              <p>La sécurité, dans le respect des règles ERP/CTS</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.commentaire}>
        <h2>
          Nous travaillons en étroite collaboration avec les régisseurs et les
          responsables techniques des sites, ainsi que les chargés de sécurité.
        </h2>
      </div>
      <div className={styles.modelisation}>
        <h2>
          VOUS PROJETER DANS L&apos;ÉVÉNEMENT, À CHAQUE ÉTAPE DE SA CONSTRUCTION
        </h2>
        <p className={styles.modelp}>
          France Événements Services met tout en œuvre pour vous permettre de
          visualiser votre concept événementiel, sous tous les angles et à 360°.
          Vous pouvez ainsi, en amont et étape par étape, vous projeter dans
          l&apos;ensemble des espaces et la structure de votre manifestation.
          N&apos;hésitez pas à{" "}
          <Link href={"/realisation"}> consulter nos références </Link> pour
          mieux visualiser les solutions que nous pouvons vous proposer.
        </p>
        <video autoPlay loop muted style={{objectFit: "cover"}}>
          <source
              src={"https://cdn.discordapp.com/attachments/927845269855420419/1219241425741414451/Sequence_1.mp4?ex=660a9610&is=65f82110&hm=819b34bf891a949beca0c986e0f2df3ea111eb2ea9efd4661044a4a299335ae6&"}
              type="video/mp4"/>
        </video>
        <p className={styles.exemple}>
          Nos plans, réalisés en 2D et 3D avec une très grande précision,
          reprennent l&apos;ensemble des prestations commandées et des solutions
          techniques événementiel proposées :
        </p>
        <div className={styles.exdescription}>
          <div className={styles.element}>
            <Image
              src={"/solution/Solutions-techniques-reperages.png"}
              alt={"loupe rouge"}
              width={200}
              height={200}
            />
            <h3>Repérages sur site</h3>
            <p>
              Nos plans sont créés à partir de l&apos;observation de la situation
              réelle : architecture, contraintes techniques, conditions d&apos;accès,
              équipements, sécurité, logistique…
            </p>
          </div>
          <div className={styles.element}>
            <Image
              src={"/solution/Solutions-techniques-Planification.png"}
              alt={"calendrier rouge"}
              width={200}
              height={200}
            />
            <h3>Planification</h3>
            <p>
              Ils intègrent la planification des différents corps de métier pour
              assurer l&apos;efficacité de l&apos;organisation et la sécurité des
              interventions sur site (réglementation PPSPS).
            </p>
          </div>
          <div className={styles.element}>
            <Image
              src={"/solution/Solutions-techniques-presentation.png"}
              alt={"crayon rouge"}
              width={200}
              height={200}
            />
            <h3>graphisme</h3>
            <p>
              Réalisés avec un graphisme de qualité, nos plans sont de
              véritables supports de communication qui pourront être valorisés
              dans le guide de l&apos;exposant.
            </p>
          </div>
        </div>
      </div>
      <Rejoindre
        titre={"VOUS AVEZ BESOIN DE CONSEILS TECHNIQUES POUR VOTRE SALON ?"}
        button={"Contactez-nous"}
        color={"#eb004b"}
        page={"/contact"}
      />
    </div>
  );
}
