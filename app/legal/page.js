import styles from "./mention.module.css";

export const metadata = {
    title: "Mentions Légales",
    description: "Mentions Légales du site France Événements Services",
};

function Page() {
    return (
        <div className={styles.mention}>
            <div className={styles.content}>
                <div>
                    France Événements Services<br/>
                    Siège social : ZI de Beau Soleil 3 Rue de l&apos;Artisanat, 44450 Saint-Julien-de-Concelles,
                    France<br/>
                    N° de TVA : FR56501357545<br/>

                    <br/><br/>

                    <h3>1. Crédits </h3><br/>
                    Création : F&A Webmarketing<br/>
                    Hébergement : Vercel Inc<br/>
                    Webmaster : Parois William<br/>

                    <br/><br/>

                    <h3>2. Conditions d&apos;utilisation </h3><br/>
                    Les informations contenues sur ce site sont fournies à titre informatif et ne constituent en aucun
                    cas
                    une offre contractuelle.<br/>
                    France Événements Services se réserve le droit de modifier le contenu de ce site à tout moment et
                    sans
                    préavis.<br/>
                    France Événements Services ne peut être tenu responsable des erreurs ou omissions contenues sur ce
                    site.<br/>
                    L&apos;utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait des informations
                    contenues
                    sur ce site.<br/>
                    L&apos;utilisateur s&apos;engage à ne pas utiliser ce site à des fins contraires à l&apos;ordre
                    public
                    ou aux bonnes mœurs.<br/>
                    France Événements Services se réserve le droit de poursuivre tout utilisateur qui contreviendrait
                    aux
                    présentes conditions générales d&apos;utilisation.<br/>
                    <br/><br/>

                    <h3>3. Propriété intellectuelle</h3><br/>
                    Tous les éléments contenus sur ce site, y compris les textes, les images, les vidéos et les sons,
                    sont
                    protégés par le droit d&apos;auteur et/ou des droits voisins.<br/>
                    La reproduction, la diffusion et la communication au public de tout ou partie de ces éléments sont
                    interdites sans l&apos;autorisation expresse et préalable de France Événements Services.<br/>
                    <br/><br/>

                    <h3>4. Données personnelles </h3><br/>
                        Les données personnelles collectées sur ce site sont traitées conformément à la politique de
                    confidentialité de France Événements Services.<br/>
                    <br/><br/>

                    <h3>5. Loi applicable </h3><br/>
                        Le site https://www.fes-commandes-complementaires.fr/ est soumis à la loi française.<br/>
                    <br/><br/>

                    <h3>6. Contact </h3><br/>
                        Pour toute question ou information relative à ce site, veuillez contacter France Événements Services
                    à
                    l&apos;adresse suivante :<br/>
                    France Événements Services<br/>
                    ZI de Beau Soleil 3 Rue de l&apos;Artisanat, 44450 Saint-Julien-de-Concelles, France<br/>
                    Tél. : +33 2 51 13 90 68<br/>
                </div>
            </div>
        </div>
    );
}

export default Page;