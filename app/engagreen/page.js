import Link from "next/link";
import { Facebook, Twitter, Chrome, Linkedin } from "lucide-react";
import styles from "./engagreen.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.contain}>
        <h2 className={styles.title}>
          LES 6 ENGAGEMENTS « GREEN » DE FRANCE EVÉNEMENTS SERVICES
        </h2>
        <p className={styles.auteur}>
          par Anne Boulinguez | Jan 8, 2018 | Éco-responsabilité
        </p>
        <img
          src="/actualité/ENGAGEMENT-GREEN.png"
          alt="Image gazette des salons"
          width="800"
          height="500"
        />
        <p className={styles.accompa}>
          France Evénement Services est rentrée dans une démarche « Biom
          Attitude » dont le principe est de remettre l’homme au cœur de
          l’économie. Cette démarche donne un nouvel éclairage, une évaluation
          de la contribution sociétale de l’entreprise qui vient illustrer et
          compléter l’engagement humain, technique, économique et territorial de
          France Evénements Services.
        </p>
        <div className={styles.contenu}>
          <img
            src="/actualité/Carte-France-Evenements-Service-01.png"
            alt="carte avec un point sur la carte"
          />
          <div>
            <p className={styles.chiffre}>1.</p>
            <p>
              <strong>Un engagement en faveur d’un territoire. </strong>
              Implanté dans la région nantaise, France Evénements Services
              intervient sur tout le grand ouest de la France, dans un
              quadrilatère qui s’étend de Brest à Limoges et du Havre à Orléans
              tout en passant par la région parisienne. Il opère rarement seul
              au-delà de ces frontières, répondant ainsi à ses objectifs
              environnementaux.
            </p>
          </div>
          <div>
            <p className={styles.chiffre}>2.</p>
            <p>
              <strong>
                Un engagement Humain et économique. France Evénements Services
              </strong>
              favorise l’emploi local et la qualité de vie de ses employés.
              L’entreprise implique son personnel dans sa démarche développement
              durable. Elle l’accompagne en les formant à un meilleur respect de
              l’environnement : recyclage, conduite responsable, etc.
            </p>
          </div>
          <div>
            <p className={styles.chiffre}>3.</p>
            <p>
              <strong>Favoriser l’éco-conception </strong>, tenir compte des
              impacts environnementaux dans la conception et le développement
              d’un produit, et de façon plus globale tout au long de son cycle
              de vie, tels sont les objectifs de
              <strong>France Evénements Services </strong>.
            </p>
          </div>

          <div>
            <p className={styles.chiffre}>4.</p>
            <p>
              <strong>
                Utilisation de matériaux respectueux de l’environnement.
              </strong>
              Le choix des matériaux utilisés se porte sur des matières à forte
              capacité modulable, réutilisable et recyclable comme le revêtement
              de sol en fibre polypropylène (100% recyclable puisque
              mono-matière). L’utilisation du bois pour les aménagements et le
              mobilier (médium, OSB, CP de bouleau : origine locale ou PEFC),
              avec une préférence pour les éléments bois standardisés permettant
              de limiter les chutes…
            </p>
          </div>
          <div>
            <p className={styles.chiffre}>5.</p>
            <p>
              <strong>Un engagement pour le recyclage.</strong> Dans l’ensemble,
              tous les matériaux utilisés ou transformés par
              <strong>France Evénements Services</strong> sont choisis avec une{" "}
              <strong>vision pérenne ou réutilisable </strong>. L’installateur
              général, favorise le tri et a initié ses partenaires à cette
              pratique.
            </p>
          </div>
          <div className={styles.lastelement}>
            <p className={styles.chiffre}>6.</p>
            <p>
              <strong>
                Limiter l’impact carbone. France Evénements Services{" "}
              </strong>{" "}
              mène une
              <strong>vraie réflexion sur son impact carbone.</strong> Sa
              première approche a été de limiter les distances entre ses
              sous-traitants (en les sélectionnant) et les différents chantiers
              à réaliser, puis d’optimiser les chargements des semis, la
              livraison et la récupération des matériels selon un regroupement
              géographique.
            </p>
          </div>
        </div>

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
            <Link href={"/engagreeen"}>Éco-responsabilité</Link>
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
