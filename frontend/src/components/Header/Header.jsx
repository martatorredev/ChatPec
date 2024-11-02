import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

const Header = () => {
   const navigate = useNavigate();
   const scroll = useScrollTop()
   return (
      <header onClick={() => navigate("/")} className={styles.ct}>
         <img src={logo} alt="ChatPEC logo" />
         <h1>ChatPEC</h1>
      </header>
   );
};
export default Header;
