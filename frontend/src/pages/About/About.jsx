import styles from "./About.module.css";

const About = () => {
   return (
      <div className={styles.ct}>
         <section>
            <h2>Quiénes somos</h2>
            <p>
               Desde Agata estábamos preocupados por el impacto medioambiental que tiene la inteligencia artificial (IA) generativa. El tremendo
               repunte de estas herramientas conlleva unas consecuencias medioambientales que no son muy conocidas, y queríamos poner el foco en
               ese tema. Por eso contactamos a Marta Torre, nuestra desarrolladora web de confianza, para ponernos a trabajar en un proyecto
               conjunto para comunicar sobre los problemas de la IA generativa.
            </p>
            <br />
            <p>
               Para nosotros es importante resaltar el adjetivo &quot;generativas&quot;, puesto que son las IAs más contaminantes. Además,
               normalmente no cubren ninguna necesidad real de los usuarios, y tienen un coste energético mucho mayor que otras alternativas
               mejores, como los buscadores. Para saber cuál es el edificio más alto del mundo, pregúntale a DuckDuckGo y no a una IA generativa
               de texto, que sacarás mejor información y consumirás menos recursos.
            </p>
            <br />
            <p>Detrás de ChatPEC estamos dos equipos:</p>
            <ul>
               <li>Agata Communications, una agencia especializada en comunicación de ciencia e innovación.</li>
               <li>
                  Marta Torre, una desarrolladora freelance con más de 12 años de experiencia en creación de páginas web, apps móviles y plugins.
               </li>
            </ul>
         </section>
         <section>
            <h2>¿Por qué ChatPEC?</h2>
            <p>
               Desde Agata estábamos preocupados por el impacto medioambiental que tienen las IAs generativas. El tremendo auge en su uso
               conlleva impactos medioambientales que no son muy conocidos, y queríamos poner el foco en ese tema.
            </p>
            <br />
            <p>
               Para nosotros es importante resaltar el adjetivo &quot;generativas&quot;, puesto que son las IAs en las que vemos mayor conflicto.
               Normalmente no cubren necesidades reales de los usuarios, y tienen un coste energético mucho mayor que otras alternativas mejores
               (pregúntale a DuckDuckGo y no a una IA generativa de texto, que sacarás mejor información y consumirás menos recursos).
            </p>
            <br />
            <p>PEC es Por El Clima, no Por El Culo.</p>
         </section>
      </div>
   );
};
export default About;
