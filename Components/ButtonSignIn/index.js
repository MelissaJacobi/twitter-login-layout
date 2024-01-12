import styles from './ButtonSignIn.module.css'

export default function ButtonSignIn(){
    return(
        <button className={styles.buttonSignIn}>
            <p className={styles.signin}>Sign In</p>
        </button>
    )
}