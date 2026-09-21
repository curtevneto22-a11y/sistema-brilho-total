import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta + PORT`);
});
