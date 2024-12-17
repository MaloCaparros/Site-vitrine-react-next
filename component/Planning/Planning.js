import styles from './planning.module.css';
export default function Planning({titre, date, txt}) {
    return (
        <div>
            <h3 className={styles.soustitre}>{titre}</h3>
            <p className={styles.date}>{date}</p>
            <p>{txt}</p>
        </div>
    );
};