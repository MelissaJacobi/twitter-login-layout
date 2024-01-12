import styles from './ButtonApple.module.css'

export default function ButtonApple(){
    return(
        <button className={styles.buttonapple}>
            <img className={styles.applelogo} src="applelogo.png" />
            <p className={styles.signinapple}>Sign up with Apple</p>
        </button>
    )
}