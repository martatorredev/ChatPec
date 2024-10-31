import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={styles.ct}>
         <p>
            Crafted with 💚 & ☕ by <Link className={styles.link}>Agata</Link> |{" "}
            <Link to="/about" className={styles.link}>
               Quiénes somos
            </Link>
         </p>
      </footer>
   );
};

export default Footer;
