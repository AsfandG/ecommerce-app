import express from "express";
import {
  createProduct,
  editProduct,
  getProduct,
  listProducts,
  removeProduct,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 2 },
    { name: "image3", maxCount: 3 },
    { name: "image4", maxCount: 4 },
  ]),
  createProduct
);
router.get("/", listProducts);
router.get("/:id", getProduct);
router.patch("/:id", editProduct);
router.get("/:id", removeProduct);

export default router;
