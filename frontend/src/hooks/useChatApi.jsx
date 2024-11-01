import { useState } from "react";


const useChatApi = (method, onSucess) => {
   const [loading, setLoading] = useState();
   const [error, setError] = useState(null);

   function send(endpoint) {
      setLoading(true);
      const res = fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`, { method })
         .then((v) => v.json())
         .then((v) => onSucess(v))
         .catch((err) => setError(err.message))
         .finally(() => setLoading(false));
   }

   return { loading, error, send };
};
export default useChatApi;
