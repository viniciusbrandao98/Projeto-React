import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from './Footer.module.css'
function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <AiFillInstagram/>
                </li>
                <li>
                    <AiFillGithub />
                </li>
                <li>
                    <AiFillLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Vinícius</span> &copy; 2026</p>
        </footer>
    )
}

export default Footer