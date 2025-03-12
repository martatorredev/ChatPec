import AboutStyles from "../About/About.module.css";
import styles from "./LegalNotice.module.css";
const LegalNotice = () => {
   return (
      <div className={AboutStyles.ct + ` ${styles.ct}`}>
         <section>
            <h2>Legal disclaimer</h2>
            <p>The company responsible for this website is:</p>
            <ul>
               <li>
                  <b>Name:</b> Agata Comunicación Científica S.L.
               </li>
               <li>
                  <b>NIF:</b> B10518306
               </li>
               <li>
                  <b>Address:</b> Calle Bajada del Caleruco, 26A, 4ºD, 39012, Santander (Spain)
               </li>
               <li>
                  <b>Contact e-mail:</b> hello [at] agata agency
               </li>
            </ul>
            <div>
               <h3>Limitations of use</h3>
               <p>
                  Access to this website is free and its viewing does not require prior subscription or registration. Users must use the
                  information contained in this website in compliance with the applicable legislation in each case, respecting the intellectual
                  property rights of Agata Comunicación Científica or third parties.
               </p>
               <p>
                  The user will not perform any action that causes damage or alterations to the contents nor will they impede the proper
                  functioning of the website through the services provided by Agata Comunicación Científica SL. The user will not cause technical
                  problems of any kind or transfer elements susceptible to carrying computer viruses or to damaging, interfering or totally or
                  partially interfering with the present web.
               </p>
               <p>
                  In no case will Agata Comunicación Científica SL be responsible for the improper use of this website or its contents, or the
                  consequences that such use may cause.
               </p>
            </div>
            <div>
               <h3>Limitation of Liability</h3>
               <p>
                  Agata Comunicación Científica S.L. does not guarantee that its pages are operational or that their content is complete,
                  accurate or reliable at all times. Agata Comunicación Científica SL reserves the right to modify the contents of this website
                  and the General Conditions of Access at any time, without prior notice.
               </p>
               <p>
                  In the event of maintenance, repair, updating or improvement of services, Agata Comunicación Científica S.L. has the right to
                  temporarily suspend access to this website without prior notice, as well as to reserve the right to render or cancel the
                  services, informing the users whenever the circumstances so permit.
               </p>
               <p>
                  Thus any liability for damages of any nature that may be derived from the lack of availability or continuity of the operation
                  of the site and its services and the use that users could make of the same are excluded.
               </p>
            </div>
            <div>
               <h3>Intellectual Property - Copyright</h3>
               <p>
                  The whole of this website and all of its parts are protected by Spanish and international laws on Intellectual and Industrial
                  property.
               </p>
               <p>
                  The intellectual property rights pertaining to the contents of this website belong to Agata Comunicación Científica S.L.,
                  except for those belonging to companies with which it has signed the corresponding contract for the provision of contents and
                  which are protected by national and international regulations on intellectual property rights.
               </p>
               <p>
                  The right to reproduce, distribute, publicly communicate and transform the contents falls exclusively on Agata Comunicación
                  Científica S.L., without prejudice to the right of third parties to quote the contents.
               </p>
               <p>
                  The user accessing this website cannot copy, modify, distribute, transmit, reproduce, publish, assign, sell the aforementioned
                  elements or create new products or services derived from the information obtained without expressly citing their origin.
               </p>
               <p>
                  Only the visualisation of the contents and their loading for personal and non-commercial use of the user is authorised. The
                  user cannot assign the mentioned contents to third persons or entities. The user is expressly forbidden to alter the content or
                  structure of this website without the express written permission of Agata Comunicación Científica S.L.. Any use of this website
                  or its contents contrary to current regulations may be prosecuted.
               </p>
            </div>
            <div>
               <h3>Protection of personal data</h3>
               <p>
                  Completion of personal data is not mandatory. The user who provides personal data is solely responsible for the accuracy and
                  correctness of the data included, leaving Agata Comunicación Científica S.L. exempt from any liability in this regard.
               </p>
               <p>
                  The personal data provided by the user will form part of an automated file owned by Agata Comunicación Científica S.L. and will
                  be treated in a confidential way in accordance with Organic Law 15/1999, of December 13, on the Protection of Personal Data.
               </p>
               <p>
                  Pursuant to articles 4, 5 and 6 of Organic Law 15/1999 of 13 December, Agata Comunicación Científica S.L. hereby informs that
                  it has a file with personal data called “Datos actividad” owned by Agata Comunicación Científica S.L.
               </p>
               <p>
                  By providing his/her data, the user authorises the automated processing of the same for the purposes indicated by the website.
                  The user may exercise at any time their right of access, rectification, cancellation and opposition of his data by contacting
                  Agata Comunicación Científica SL with registered office at Calle Bajada del Caleruco, 26A, 4ºD, 39012, Santander (Spain) or by
                  contacting this institution through the following e-mail address: yourdataissafe [at] agata agency.
               </p>
            </div>
            <div>
               <h3>Hyperlinks or links</h3>
               <p>
                  No third party may establish a framing relationship between its web pages and this website. Regarding the links included in
                  this website to other sites not managed by Agata Comunicación Científica S.L., this institution states that it does not
                  exercise any control over these sites, nor is it responsible for the contents thereof.
               </p>
               <p>
                  The links that this website may contain are offered only as informative references, without any type of evaluation of the
                  contents, owners, services or products offered from them.
               </p>
            </div>
            <div>
               <h3>Other conditions</h3>
               <p>
                  These General Conditions of Use and all relations established between the user and Agata Comunicación Científica S.L. will be
                  governed by Spanish and European law.
               </p>
               <p>The use of the website implies acceptance of the above General Conditions of Use.</p>
            </div>
         </section>
      </div>
   );
};
export default LegalNotice;
