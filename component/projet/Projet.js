import React from 'react';
import Image from "next/image";
import styles from "./projet.module.css";

export default function Projet({img, alt, titre, text}) {
    return (
        <div className={styles.projet}>
            <Image src={img} alt={alt} width={400} height={300}/>
            <h2>{titre}</h2>
            <p>{text}</p>
        </div>
    );
}
