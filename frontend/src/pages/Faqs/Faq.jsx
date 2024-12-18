import { useState } from "react";
import styles from "./Faq.module.css";

const Faq = ({ question, awnser }) => {
   const [open, setOpen] = useState(false);

   function handleChange() {
      setOpen(!open);
   }
   return (
      <details open={open} key={open}>
         <summary>
            <div onClick={handleChange} className={styles.faqTit}>
               <h6>{question}</h6>
               <span>{!open ? "+" : "-"}</span>
            </div>
         </summary>
         <p>{awnser}</p>
      </details>
   );
};
export default Faq;
