const express = require("express"); //*Find what this is used for
const cors = require("cors"); //*Find what this is used for
const mongoose = require("mongoose"); //*Find what this is used for

require("dotenv").config(); //*Find what this is used for

const app = express(); //*Find what this is used for

app.use(cors()); //*Find what this is used for
app.use(express.json()); //*Find what this is used for

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
   //todo Find about this 'once' and 'open' command
   console.log("mongoDB connection established successfully");
});

const articles = require("./routes/Articles");
const users = require("./routes/Users");

app.use("/", articles);
app.use("/user", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`App is running @ Port - ${PORT}`);
});
