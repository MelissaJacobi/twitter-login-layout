import styles from './Button.module.css'

export default function Button(){
    return(
        <button className={styles.button}>
            <img className={styles.profile} width="20px" src="profilepicture.jpg"/>
            <img className={styles.google} width="30px" src="google.png"/>
            <p className={styles.signin}><span className={styles.as}>Sign in as Jane Doe </span>janedoe@email.com</p>
        </button>
    )
}