const chatbotController = (req, res, next) => {
   const { text } = req.query;
   res.status(200).json({ message: "Você enviou um texto para mim" });
};

module.exports = chatbotController;
