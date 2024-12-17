import Link from "next/link";
import { Facebook, Twitter, Chrome, Linkedin } from "lucide-react";
import styles from "./gazette.module.css";
import Button from "../../component/button/Button";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.contain}>
        <h2 className={styles.title}>INTERVIEW – LA GAZETTE DES SALONS</h2>
        <p className={styles.auteur}>
          par Anne Boulinguez | Jan 15, 2018 | Actualités
        </p>
        <img
          src="/actualité/France-Evements-Service-Gazette-des-Salons-1.jpg"
          alt="Image gazette des salons"
          width="800"
          height="500"
        />
        <p className={styles.accompa}>
          À l’occasion de l’année des 10 ans de France Événement Services, La
          Gazette des Salons revient sur l’histoire de l’entreprise née en 2007
          sous l’impulsion de François-Xavier Paris, à l’écoute des clients
          organisateurs désirant « plus de choix dans leurs appels d’offres ».
          Interview de M. Paris par Éric Watiez.
        </p>
        <div className={styles.contenu}>
          <div>
            <p className={styles.accompa2}>
              Le gérant de France Événements Services, François-Xavier Paris
              évoque le bilan de ces 10 années et explique qu’à cette occasion,
              l’entreprise a restructuré son offre afin d’accompagner toujours
              plus les organisateurs et a revu «<span> son image et sa présentation
              visuelle : une nouvelle charte graphique, un nouveau logo, un site
              entièrement remanié […] ainsi que le développement d’une gamme de
              mobilier événementiel. </span> »
            </p>
            <p className={styles.accompa2}>
              La société spécialiste de l’installation générale se tourne
              désormais vers le futur et l’innovation : elle « <span> propose par
              exemple comme service depuis 2 ans, une plateforme en ligne (sorte
              d’hypermarché) où l’exposant peut aller « faire ses courses »</span> » en
              fournitures et équipements événementiels. M. Paris répond à «<span> la
              préoccupation grandissante des acteurs de la profession </span> » en étant
              « <span>soucieux du RSE, le développement durable dans lequel on peut
              aujourd’hui devenir acteur, même dans le domaine de l’éphémère.</span> »
              France Événements Services propose ainsi le recyclage des
              moquettes de salons (
              <Link href={"/produit"}>
                voir la notice sur la page Nos produits
              </Link>
              ) ou des éclairages à base de LED.
            </p>
          </div>
          <img
            src="/actualité/Couverture-Gazette-des-Salons.jpg"
            alt="Couverture de la Gazette des Salons"
          />
        </div>
        <Button
          link="/gazette"
          text="TÉLÉCHARGEZ L'ARTICLE COMPLET"
          colo="#5c7abb"
        />

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
