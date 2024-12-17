import "./globals.css";
import Header from "../component/header/Header";
import {Nunito} from "next/font/google";
import Footer from "../component/footer/Footer";

export const metadata = {
    title: "France Evénements Services",
    description: "France Evénements Services est une entreprise spécialisée dans l'installation générale de salons, foires, expositions, congres, événements sportifs, culturels et d'entreprise. Nous intervenons dans une logique écoresponsable : produits respectueux de l’environnement, impact carbone limité, éco-organisation…",
};

const nunito = Nunito({
    weight: ['400', '700', '1000'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({children}) {
    return (
        <html lang="fr" className={nunito.className}>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>);
}
