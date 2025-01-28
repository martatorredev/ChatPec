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
            </Link>{" "}
            |{" "}
            <Link to="/faqs" className={styles.link}>
               Faqs
            </Link>
         </p>
         {/* TODO: Apanhar ano atual */}
         <p>Copyright 2024 © - Todos los derechos reservados</p>
         <small>
            Este proyecto utiliza hosting verde gracias a <a target="_blank" href="https://www.lucushost.com/">Lucushost</a>
         </small>
         <a
            id={styles.greenhost}
            href="https://www.thegreenwebfoundation.org/green-web-check/?url=chatpec.com"
            style={{ width: "fit-content" }}
            target="_blank"
         >
            <img
               src="https://app.greenweb.org/api/v3/greencheckimage/chatpec.com?nocache=true"
               alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
            />
         </a>
      </footer>
   );
};

export default Footer;
