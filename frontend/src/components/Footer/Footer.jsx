import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { useEffect } from "react";

const Footer = () => {
   function getCurrentYear() {
      return new Date().getFullYear();
   }

   const path = useLocation().pathname;

   const links = [
      { path: "/about", text: "Quiénes somos" },
      { path: "/faqs", text: "Faqs" },
      { path: "/privacy_policy", text: "Política de privacidad" },
      { path: "/legal_disclaimer", text: "Aviso legal" },
   ];

   useEffect(() => {
      console.log(path);
   }, [path]);

   return (
      <footer className={styles.ct}>
         {/* Links */}
         <div>
            {links.map((v, k) => (
               <Link id={path === v.path && styles.active} className={styles.link} to={v.path} key={k}>
                  {v.text} {k + 1 !== links.length && <span>|</span>}
               </Link>
            ))}
         </div>
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
