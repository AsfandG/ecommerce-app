import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("working!!!");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
