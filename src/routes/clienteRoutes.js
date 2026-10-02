import { Router } from "express";
import clienteController from "../controllers/clienteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const clienteRoutes = Router();
clienteRoutes.use(authMiddleware);

clienteRoutes.get("/", clienteController.selecionar);
clienteRoutes.post("/", clienteController.criar);
clienteRoutes.get("/email/:email", clienteController.selecionarPorEmail);
clienteRoutes.get("/:id", clienteController.selecionarPorId);
clienteRoutes.delete("/:id", clienteController.deletar);
clienteRoutes.put("/:id", clienteController.atualizar);

export default clienteRoutes;