const mongoose = require("mongoose");

const traballadorSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O traballador debe ter un nome"],
            unique: true
        },

        correo: {
            type: String,
            required: [true, "O traballador debe aportar un email"]
        },

        rol: {
            type: String,
            required: [true, "O traballador debe ter un rol"]
        },

        activo: {
            type: Boolean
        },

        foto: {
            type: String
        },

        contrasinal: {
            type: String
        }
    }
);

const Traballador = mongoose.model("Traballador", traballadorSchema);

module.exports = Traballador;
