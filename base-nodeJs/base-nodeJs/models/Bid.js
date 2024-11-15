import mongoose from 'mongoose';

const BidSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    amount: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Nếu bạn có model người dùng
    createdAt: { type: Date, default: Date.now }
});

const Bid = mongoose.model('Bid', BidSchema);
export default Bid;
