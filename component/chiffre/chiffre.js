"use client"
import styles from "../../app/entreprise/entreprise.module.css";
import {useEffect, useState} from "react";

function Chiffre() {

    const [data, setData] = useState({
        years: 0,
        salon: 0,
        moquette: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) => ({
                years: prevData.years < 14 ? prevData.years + 1 : 14,
                salon: prevData.salon < 100 ? prevData.salon + 5 : 100,
                moquette: prevData.moquette < 14400 ? prevData.moquette + 500 : 14400,
            }));
        }, 50); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.chiffre}>
            <div className={styles.item}>
                <p className={styles.number}>{data.years}</p>
                <p className={styles.txt}>années d&apos;expérience</p>
            </div>
            <div className={styles.item}>
                <p className={styles.number}>{data.salon}</p>
                <p className={styles.txt}>salons installés par an</p>
            </div>
            <div className={styles.item}>
                <p className={styles.number}>{data.moquette}</p>
                <p className={styles.txt}>mètres carrés de moquettes posés</p>
            </div>
        </div>
    );
}

export default Chiffre;