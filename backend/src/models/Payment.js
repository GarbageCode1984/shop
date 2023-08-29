const { default: mongoose } = require("mongoose");

const paymentSchema = mongoose.Schema(
    {
        user: {
            type: Obejct,
        },
        data: {
            type: Array,
            default: [],
        },
        proudct: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
