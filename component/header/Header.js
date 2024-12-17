"use client"
import Image from 'next/image';
import {ChevronDown} from 'lucide-react';
import styles from './header.module.css';
import Link from 'next/link';
import {useEffect, useState} from "react";
import {X, Menu} from 'lucide-react';
import {usePathname} from "next/navigation";

export default function Header() {

    const router = usePathname();
    const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setShowScrollTopBtn(true);
        } else {
            setShowScrollTopBtn(false);
        }
    };

    if(router === "/three"){
        return null
    }

    return (
        <header className={styles.header}>
            <Link href={"/"} className={!showScrollTopBtn ? styles.baseLogo : styles.logoResize}>
                <Image src="/logoBlue.png" alt="logo" width={280} height={91}/>
            </Link>

            {!show ?
                <Menu className={styles.btnResp} color={"#2f3358"} size={30} onClick={() => setShow(true)}/>
                :
                <X className={styles.btnResp} color={"#2f3358"} size={30} onClick={() => setShow(false)}/>
            }

            <nav className={styles.headerMenu}>
                <ul className={!show ? styles.headerMenuListe : styles.headerMenuListeResp + " " + styles.headerMenuListe}>
                    <li className={styles.headerDropdown}>Nos Métiers<ChevronDown size={16}/>
                        <div className={styles.headerSousmenu}>
                            <Link href={"/installation"} onClick={() => setShow(false)}>Installation générale</Link>
                            <Link href={"/solution"} onClick={() => setShow(false)}>Solutions techniques</Link>
                            <Link href={"/stand"} onClick={() => setShow(false)}>Stand & design</Link>
                        </div>
                    </li>
                    <li>
                        <Link href={"/accompagner"} onClick={() => setShow(false)}>accompagner</Link>
                    </li>
                    <li>
                        <Link href={"/produit"} onClick={() => setShow(false)}>Nos produits</Link>
                    </li>
                    <li>
                        <Link href={"/actualite"} onClick={() => setShow(false)}>Actualités</Link>
                    </li>
                    <li>
                        <Link href={"/realisation"} onClick={() => setShow(false)}>Nos réalisations</Link>
                    </li>
                    <li>
                        <Link href={"/entreprise"} onClick={() => setShow(false)}>la société</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} onClick={() => setShow(false)}>contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

