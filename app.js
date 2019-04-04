import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./dist")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./dist/index.html"))
);
app.listen(port, () => console.log("server running...."));
