import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={styles.ct}>
         <p>
            Crafted with 💚 & ☕ by <span className={styles.link}>Agata</span> | <span className={styles.link}>Quiénes somos</span>
         </p>
      </footer>
   );
};
export default Footer;
