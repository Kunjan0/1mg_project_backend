const mongoose = require("mongoose");

const medSchema = mongoose.Schema(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        price: { type: Number, required: true },
    },
    {
        versionKey: false,
    }
);
const MedModel = mongoose.model("medicine", medSchema);

module.exports = MedModel;
