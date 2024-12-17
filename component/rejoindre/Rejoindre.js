import Button from "/component/button/Button";
import styles from "./rejoindre.module.css";

export default function Rejoindre({titre, button, color,page}) {
    return (
        <div className={styles.contact} style={{ backgroundColor : color}} >
            <h2>{titre}</h2>
            <Button
                link={page}
                text={button}
                colo="white"
            />
        </div>
    );
}
