import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";

const Header = () => {
   return (
      <header className={styles.ct}>
         <img src={logo} alt="ChatPEC logo" />
         <h1>ChatPEC</h1>
      </header>
   );
};
export default Header;
