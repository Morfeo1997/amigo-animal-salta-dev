import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado ✅"))
  .catch(err => console.error("Error al conectar MongoDB ❌", err));
const app = express();

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(4000, () => console.log("Servidor corriendo en puerto 4000 🚀"));
