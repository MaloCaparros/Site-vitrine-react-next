import Image from "next/image";
import styles from "./ecology.module.css";

export default function Ecology({img, titre, text}) {
    return (
        <div className={styles.typeeco}>
            <Image src={img} alt={"ecology icon"} width={200} height={200}/>
            <h3>{titre}</h3>
            <p className={styles.ecologietext}>{text}</p>
        </div>
    );
}
