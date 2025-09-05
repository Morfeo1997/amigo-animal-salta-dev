import express from "express";
const app = express();

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(4000, () => console.log("Servidor corriendo en puerto 4000 🚀"));
