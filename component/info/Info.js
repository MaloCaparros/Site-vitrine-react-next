import Image from "next/image";
import styles from "./info.module.css";
import Button from "../button/Button";

export default function Info({photo, alt, titre, texte, textbtn, page, colo}) {
    return (

        <div className={styles.info}>
            <Image src={photo}
                   alt={alt}
                   width={200}
                   height={200}
                   color={colo}
                   quality={100}
            />
            <h4 style={{color:colo}}>{titre}</h4>
            <p>{texte}</p>
            <Button link={page} text={textbtn} colo={colo}/>
        </div>
    );
}
