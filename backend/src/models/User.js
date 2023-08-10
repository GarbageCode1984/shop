const { default: mongoose, mongo } = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 6,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
