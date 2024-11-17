import styles from "./Chats.module.css";
import logo from "../../assets/Logo.svg";

const Chats = ({ chats = [], loading }) => {
   return (
      <div className={styles.chatsCt}>
         {chats.map((v, k) => (
            <div key={k} className={`${styles.chatCard} ${v?.error && styles.error} ${v?.fromBot && styles.fromBot}`}>
               <p>{v?.text}</p>
               {v?.fromBot && (
                  <>
                     <br />
                     Links relacionados:
                     <br />
                     <ul>
                        {v?.links.map((v, k) => (
                           <li key={k}>
                              <a target="_blank" href={v?.href}>
                                 {v?.text ? v?.text : v?.href}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </>
               )}
            </div>
         ))}
         {loading && (
            <div className={`${styles.chatCard} ${styles.fromBot}`}>
               <img className={styles.loading} src={logo} alt="Loading illustration" />
            </div>
         )}
      </div>
   );
};
export default Chats;
