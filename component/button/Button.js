import styles from "./button.module.css";
import Link from "next/link";
import {PlayCircle} from "lucide-react";

function Button({link,text, colo}) {
    return (
        <div className={styles.buttonaccueil} style={{color:colo, border: `2px solid ${colo}`,}}>
            <Link href={link} style={{color:colo}}>{text}</Link>
            <PlayCircle color={colo}/>
        </div>
    );
}

export default Button;
