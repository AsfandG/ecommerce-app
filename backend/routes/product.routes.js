import express from "express";
import {
  createProduct,
  editProduct,
  getProduct,
  listProducts,
  removeProduct,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/admin-auth.js";

const router = express.Router();

router.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 2 },
    { name: "image3", maxCount: 3 },
    { name: "image4", maxCount: 4 },
  ]),
  createProduct
);
router.get("/list", listProducts);
router.get("/getone", getProduct);
router.patch("/edit/:id", editProduct);
router.delete("/remove", adminAuth, removeProduct);

export default router;
