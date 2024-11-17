import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={styles.ct}>
         <p>
            Crafted with 💚 & ☕ by{" "}
            <a href="https://agata.agency/" target="_blank" className={styles.link}>
               Agata
            </a>{" "}
            &{" "}
            <a href="https://martatorre.dev/" target="_blank" className={styles.link}>
               Marta Torre
            </a>{" "}
            |{" "}
            <Link to="/about" className={styles.link}>
               Quiénes somos
            </Link>
         </p>
         <p>Copyright 2024 © - Todos los derechos reservados</p>
      </footer>
   );
};

export default Footer;
