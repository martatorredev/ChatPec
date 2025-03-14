import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
   function getCurrentYear() {
      return new Date().getFullYear();
   }

   return (
      <footer className={styles.ct}>
         {/* Links */}
         <p>
            <Link to="/about" className={styles.link}>
               Quiénes somos
            </Link>{" "}
            |{" "}
            <Link to="/faqs" className={styles.link}>
               Faqs
            </Link>{" "}
            | <Link to="/privacy_policy">Política de privacidad</Link> | <Link to="/legal_disclaimer">Aviso legal</Link>
         </p>

         {/* Green Host Badge */}
         <small>
            Este proyecto utiliza hosting verde gracias a{" "}
            <a target="_blank" href="https://www.lucushost.com/">
               Lucushost
            </a>
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

         {/* Copywright and Authors */}
         <p className={styles.lastP}>
            Copyright {getCurrentYear()} © - Todos los derechos reservados | Crafted with 💚 & ☕ by{" "}
            <a href="https://agata.agency/" target="_blank" className={styles.link}>
               Agata
            </a>{" "}
            &{" "}
            <a href="https://martatorre.dev/" target="_blank" className={styles.link}>
               Marta Torre
            </a>
         </p>
      </footer>
   );
};

export default Footer;
