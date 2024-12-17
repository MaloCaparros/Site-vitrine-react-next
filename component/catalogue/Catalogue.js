import Link from 'next/link';
import styles from "./catalogue.module.css";

function Catalogue({imgfond, url, titre, texte, width, height}) {
    return (
        <Link href={url} style={{background: `url(${imgfond}) center/cover`, backgroundPositionY:`0`, width:`${width}`, height:`${height}`}} className={styles.lien}>
            <div className={styles.fond}>
                <h3>{titre}</h3>
                <p>{texte}</p>
            </div>
        </Link>
    );
}

export default Catalogue;