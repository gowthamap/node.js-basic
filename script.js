const express = require("express");
const app = express();


app.use(express.static("views"))


app.get("*", (req,res)=>{
  res.status(404).send("<h1>404</h1>")
})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
