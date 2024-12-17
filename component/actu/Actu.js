import Image from "next/image";
import Link from "next/link";
import styles from "./actu.module.css";

export default function Actu({title, image, text, link}) {
    return (
        <Link href={link} className={styles.actucard}>
            <Image src={image} alt={title} width={300} height={200} className={styles.actuImage}/>
            <p className={styles.infotxt}>{text}</p>
            <p className={styles.titre}>{title}</p>
        </Link>

    );
}
