import Link from "next/link";
import { Facebook, Twitter, Chrome, Linkedin } from "lucide-react";
import styles from "./olympiades.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.contain}>
        <h2 className={styles.title}>
          FRANCE ÉVÉNEMENTS SERVICES MOBILISÉ SUR LES OLYMPIADES DES MÉTIERS !
        </h2>
        <p className={styles.auteur}>
          par Anne Boulinguez | 23/Mai/2018 | installation générale, Non classé
        </p>
        <img
          src="/actualité/DSC00639-1080x675.jpg"
          alt="Image stand"
          width="800"
          height="500"
        />
        <p className={styles.accompa}>
          France Événements Services a assuré l&apos;installation générale des
          Olympiades des Métiers, organisée par la Région Pays de la Loire, au
          Parc des Expositions d&apos;Angers. Cette compétition, dont la
          première étape se déroule au niveau régional, a mobilisé près de 300
          jeunes venus démontrer leur savoir-faire dans leur branche de métier,
          du 16 au 17 mars 2018. Un événement d&apos;envergure qui a permis à
          l&apos;installateur général de mettre à profit plusieurs expertises.
        </p>
        <p className={styles.accompa2}>
          C&apos;est sous le pilotage de FG Smart Event, chargé de
          l&apos;Assistance à Maîtrise d&apos;Ouvrage, que France Événements
          Services a assuré l&apos;installation logistique de cette
          manifestation. Revêtements de sols, cloisons, aménagement
          d&apos;espaces spécifiques ou encore mise en forme et installation de
          la signalétique, les missions ont été nombreuses pour les équipes de
          l&apos;installateur général. « Nous avons travaillé de concert avec FG
          Smart Event. Ils prenaient en charge la partie coordination et
          réflexion stratégique et nous sommes intervenus sur la partie
          technique. » résume Pascal Parois, Directeur Adjoint de France
          Événements Services. Sur une surface de 16 000 m², l&apos;événement a
          accueilli 50 espaces de compétitions mais aussi 9 espaces destinés à
          faire tester des gestes métiers aux visiteurs. « Au-delà de la
          compétition, les Olympiades des Métiers visent à permettre aux
          visiteurs de tester certains gestes métiers et de trouver des pistes
          pour leur orientation future ou leur réorientation. » détaille
          Françoise Prima, responsable Pôle Valorisation des métiers et des
          formations du Conseil Régional.
        </p>
        <p className={styles.accompa2}>
          Afin de répondre au mieux aux besoins des différents compétiteurs, des
          rencontres entre l&apos;installateur général et les différents
          responsables de pôles métiers ont été organisées par FG Smart Event. «
          Ces réunions techniques avec des experts dans chaque métier en
          compétition permettent de recenser les besoins et de proposer des
          solutions concrètes en termes d&apos;installation générale. » explique
          Joris Besnard, directeur de production chez FG Smart Event. Outre
          l&apos;aménagement des espaces, France Événements Services a pris en
          charge la partie signalétique de la manifestation. Elle devait
          répondre à un double objectif : répondre à la charte prédéfinie par le
          Conseil Régional et, bien entendu, être compréhensible du public
          présent sur site. Une fois le travail de préparation finalisé, place
          au montage : 22 personnes ont été mobilisées pendant 4 jours pour
          assurer l&apos;installation générale des Olympiades des métiers et
          permettre aux compétiteurs et aux 17 000 visiteurs de profiter de
          l&apos;événement. Une première collaboration réussie ! « Nous sommes
          satisfaits de la prestation réalisée par France Événements Services.
          La réactivité des équipes a permis des échanges fluides avec tous les
          acteurs ayant participés à l&apos;organisation des Olympiades des
          Métiers. » confie Françoise Prima.
        </p>

        <div className={styles.rs}>
          <p>
            <Link
              href={
                "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.france-evenements-services.com%252Fpreparer-salon-10-etapes%252F%26t%3DPR%25C3%2589PARER%2BSON%2BSALON%2BEN%2B10%2B%25C3%2589TAPES&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=fr_FR"
              }
              target="_blank"
            >
              <Facebook />
            </Link>
          </p>
          <p>
            <Link
              href={
                "https://twitter.com/intent/post?text=PR%C3%89PARER%20SON%20SALON%20EN%2010%20%C3%89TAPES&url=https%3A%2F%2Fwww.france-evenements-services.com%2Fpreparer-salon-10-etapes%2F&via=Fr_Evenements"
              }
              target="_blank"
            >
              <Twitter />
            </Link>
          </p>
          <p>
            <Link
              href={
                "https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
              }
              target="_blank"
            >
              <Chrome />
            </Link>
          </p>
          <p>
            <Link
              href={
                "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.france-evenements-services.com%2Fpreparer-salon-10-etapes%2F"
              }
              target="_blank"
            >
              <Linkedin />
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.menu}>
        <h3>Articles récents</h3>
        <ul>
          <li>
            <Link href={"/olympiades"}>
              FRANCE ÉVÉNEMENTS SERVICES MOBILISÉ SUR LES OLYMPIADES DES MÉTIERS
              !
            </Link>
          </li>
          <li>
            <Link href={"/prepaSalon"}>PRÉPARER SON SALON EN 10 ÉTAPES</Link>
          </li>
          <li>
            <Link href={"/gazette"}>INTERVIEW – LA GAZETTE DES SALONS</Link>
          </li>
          <li>
            <Link href={"/engagreen"}>
              LES 6 ENGAGEMENTS « GREEN » DE FRANCE EVÉNEMENTS SERVICES
            </Link>
          </li>
        </ul>
        <h3>Catégories</h3>
        <ul>
          <li>
            <Link href={"/gazette"}>Actualités</Link>
          </li>
          <li>
            <Link href={"/engagreen"}>Éco-responsabilité</Link>
          </li>
          <li>
            <Link href={"/prepaSalon"}>Guide pratique</Link>
          </li>
          <li>
            <Link href={"/olympiades"}>Installation générale</Link>
          </li>
          <li>
            <Link href={"/olympiades"}>Non classé</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
