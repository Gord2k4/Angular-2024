// code base
import { Router } from "express";
import productRouter from "./product.js";
import authRouter from "./auth.js";
import bidRouter from "./bid.js"; 

const router = Router();
router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/products/:productId/bids", bidRouter);

export default router;