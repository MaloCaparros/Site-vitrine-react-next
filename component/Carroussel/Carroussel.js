'use client'
import styles from "./carroussel.module.css";
import Link from "next/link";

export default function Carroussel() {
    return (
        <div className={styles.plus}>
            <div className={styles.items}>
                <Link href={"/transport"} className={styles.element1}>
                    <p>SALON DES TRANSPORTS PUBLICS-PARIS</p>
                </Link>
                <Link href={"/technotrans"} className={styles.element2}>
                    <p>SALON TECHNOTRANS-NANTES</p>
                </Link>
                <Link href={"/operation"} className={styles.element3}>
                    <p>OPERATION START-OUEST -NANTES</p>
                </Link>
                <Link href={"/mariage"} className={styles.element4}>
                    <p>SALON DU MARIAGE -PARIS</p>
                </Link>
            </div>
        </div>
    );
}
