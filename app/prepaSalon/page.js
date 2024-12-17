import Planning from "../../component/Planning/Planning";
import Button from "../../component/button/Button";
import Link from "next/link";
import { Facebook, Twitter, Chrome, Linkedin } from "lucide-react";
import styles from "./prepaSalon.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.contain}>
        <h2 className={styles.title}>PRÉPARER SON SALON EN 10 ÉTAPES</h2>
        <p className={styles.auteur}>
          par Anne Boulinguez | Fév 6, 2018 | Guide pratique
        </p>
        <img
          src="/actualité/Preparer-son-salon-10-etapes.jpg"
          alt="Préparer son salon en 10 étapes"
          width="800"
          height="500"
        />
        <p className={styles.accompa}>
          Dans ce petit guide pratique, France Événements Service vous propose
          une liste, non exhaustive, des 10 étapes à suivre pour une
          installation générale réussie d&apos;un salon, congrès, foire et
          événement. Télécharger cette fiche pratique ici.
        </p>
        <div className={styles.planning}>
          <Planning
            titre="1. ÉCOUTER LES BESOINS"
            date="J. -1 AN"
            txt="Écouter les besoins, les attentes, les spécificitées du client. Intégrer ses contraintes (temps de montage, démontage, surfaces…) pour l’élaboration du projet."
          />
          <Planning
            titre="2. MISE EN FORME DU PROJET"
            date="J. -3 MOIS"
            txt="Mise en forme du projet par le bureau d’études. Réalisation des plans techniques détaillés de la manifestation, des axonométries couleurs des différents espaces à aménager. Choix des matériaux. En option : mise en place d’un service exposants dédié à l’aménagement."
          />
          <Planning
            titre="3. PRÉPARATION DE LA MANIFESTATION"
            date="J. -10 JOURS"
            txt="Préparation de la manifestation, conception de la signalétique générale, des enseignes, des panneaux, des totems. Commande des moquettes, du coton gratté. Préparation du matériel pour le montage des stands."
          />
          <Planning
            titre="4. TRAÇAGE SUR SITE"
            date="J. -4 JOURS"
            txt="Traçage sur site avec délimitation des emplacements des stands exposants «nus» ou équipés, des zones collectives, des espaces particuliers…"
          />
          <Planning
            titre="5. MONTAGE"
            date="J. -3 JOURS"
            txt="Pose de la moquette, montage des cloisons de stands, de l’accueil, du vestiaire, du commissariat général, des espaces conférences, des zones restauration, des stands packagés, des stands collectifs…"
          />
          <Planning
            titre="6. INSTALLATION"
            date="J. -2 JOURS"
            txt="Installation de la signalétique, des éclairages Led, des branchements électriques. Livraison du mobilier, de la décoration florale"
          />
          <Planning
            titre="7. RÉCEPTION DE CHANTIER"
            date="J. -1 JOUR"
            txt="Vérification de l'ensemble de l’installation avant signature de la réception du chantier."
          />
          <Planning
            titre="8. PERMANENCE TECHNIQUE"
            date="J. -1 JOUR"
            txt="Permanence technique, gestion des besoins, changements de dernières minutes, ajustements, remplacement de moquette, vérification du fonctionnement des rails de spots…"
          />
          <Planning
            titre="9. DÉMONTAGE ET RECYCLAGE"
            date="J. +2 JOURS"
            txt="Démontage des stands et recyclage des moquettes, de la signalétique, tri des déchets… Délivrance d’un PV réglementaire du bon retraitement des déchets (5 semaines)."
          />
          <Planning
            titre="10. DÉBRIEFING"
            date="J. +10 JOURS"
            txt="Débriefing avec le client, les équipes, les fournisseurs."
          />
        </div>
        <p className={styles.info}>
          France Événements Services, spécialisé dans{" "}
          <Link href={"/installation"}>l&apos;installation générale </Link> de
          salons, congrès et événements, peut vous accompagner lors de la
          planification de votre salon et intervient partout en France. Chaque
          année, la société accompagne l&apos;installation générale de près de
          80 manifestations.
        </p>
        <Button
          link="/Contact"
          text="Vous avez un projet ? Contactez-nous pour en parler."
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
