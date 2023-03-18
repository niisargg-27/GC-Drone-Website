import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb+srv://nisarg:Yb8APYh59ZCPOfk2@cluster0.gejntjf.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error with mongo"));
db.once("open", () => {
  console.log("Connected to Database");
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  reEnterPassword: String,
  phoneNumber: Number,
});
const User = new mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const [err, user] = User.findOne({ email: email }).then(
    (user) => {
      if (user) {
        if (password === user.password) {
          res.send({message: "LOGIN SUCCESSFULL", user: user});
        }
        else{
            res.send({message: "ERROR IN PASSWORD"});
        }
      } else {
        res.send({message: "USER NOT REGISTERED"})
      }
    },
    (err) => {
      res.send(err);
    }
  );
});
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, reEnterPassword, phoneNumber } =
    req.body;
  console.log(req.body);
  const user = new User({
    firstName,
    lastName,
    email,
    password,
    reEnterPassword,
    phoneNumber,
  });
  await user.save();
});
app.listen(9002, () => {
  console.log("started at 9002");
});
