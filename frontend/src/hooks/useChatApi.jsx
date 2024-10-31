import { useState } from "react";

const useChatApi = ({ endpoint }) => {
   const [loading, setLoading] = useState();
   const [awnser, setAwnser] = useState(null);
   const [error, setError] = useState(null);

   function send(endpoint) {
      const res = fetch(endpoint)
         .then((v) => v.json())
         .then((v) => setAwnser(v))
         .catch((err) => setError(err));
   }

   return { loading, awnser, error, send };
};
export default useChatApi;
