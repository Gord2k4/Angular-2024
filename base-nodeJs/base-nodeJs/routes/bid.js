import { Router } from "express";
import BidController from "../controllers/BidController.js";

const bidRouter = Router();
const bidController = new BidController();

// Route để đặt giá cho sản phẩm
bidRouter.post("/", bidController.placeBid); // Chỉ cần sử dụng "/" vì productId đã có trong index.js

// Route để lấy danh sách các giá đã đấu cho sản phẩm
bidRouter.get("/", bidController.getBids); // Cũng tương tự

export default bidRouter;
