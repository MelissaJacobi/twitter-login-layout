import styles from './Form.module.css'
import Buttonacc from '@/Components/Buttonacc'
import ButtonSignIn from '@/Components/ButtonSignIn'
import Button from '@/Components/Button'
import ButtonApple from '@/Components/ButtonApple'

export default function Form(){
    return(
        <div>
            <Button/>
            <ButtonApple/>
            <div className={styles.linebreak}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <p className={styles.or} size="15px">or</p>
            </div>
            <Buttonacc/>
            <p className={styles.cookies}>By signing up, you agree to the <span className={styles.bluecookies}>Terms of Service</span> and <span className={styles.bluecookies}>Privacy Policy</span>, including <span className={styles.bluecookies}>Cookie Use.</span></p>
            <p className={styles.already}>Already have an account?</p>
            <ButtonSignIn/>
        </div>
    )
}