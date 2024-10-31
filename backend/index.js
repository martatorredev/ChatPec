const express = require("express");
const cors = require("cors");

const app = express();

//  Allowing any domain to comunicate with the server
app.use(cors());

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Methods", "*");
   next();
});

app.post("/api/chatbot", function (req, res, next) {
   res.status(200).json({ message: "Você enviou um texto para mim" });
});

app.listen(3000, () => {
   console.log("Inicializando o servidor");
});
