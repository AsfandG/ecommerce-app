import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import authRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send({ message: "its working!" });
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
