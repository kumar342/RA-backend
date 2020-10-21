const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(cors());

const db =
  "mongodb+srv://sample:sample@nodescheduler.g2alh.mongodb.net/reservation?retryWrites=true&w=majority";
const connect = mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/", routes);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
