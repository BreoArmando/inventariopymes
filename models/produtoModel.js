const mongoose = require("mongoose");

const produtoSchema = mongoose.Schema(
    {
        marca: {
            type: String,
            required: [true, "O produto debe ter unha marca"],
            unique: true
        },

        modelo: {
            type: String,
            required: [true, "O produto debe ter un modelo"]
        },

        nome: {
            type: String,
            required: [true, "O produto debe ter un nome"]
        },

        prezo: {
            type: Number,
            required: [true, "O produto debe ter un prezo"]
        },

        peso: {
            type: Number
        }
    }
);

const Produto = mongoose.model("Produto", produtoSchema);

module.exports = Produto;
