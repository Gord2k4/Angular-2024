import Bid from "../models/Bid.js"; // Model cho đấu giá

class BidController {
    async placeBid(req, res) {
        try {
            const productId = req.params.productId; // Lấy productId từ params
            const { amount, userId } = req.body;

            if (amount < 100) {
                return res.status(400).json({ message: "Bid amount must be at least 100 VND" });
            }

            const newBid = await Bid.create({ productId, amount, userId });
            res.status(201).json({ message: "Bid placed successfully", data: newBid });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getBids(req, res) {
        try {
            const productId = req.params.productId; // Lấy productId từ params
            const bids = await Bid.find({ productId });
            res.status(200).json({ message: "Bids retrieved successfully", data: bids });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default BidController;
