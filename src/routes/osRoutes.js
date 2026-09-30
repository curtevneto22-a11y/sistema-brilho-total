import { Router } from "express";
import osController from "../controllers/osController.js";

const osRoutes = Router();

clienteRoutes.post("/", osController.criar);
clienteRoutes.get("/", osController.selecionar);
clienteRoutes.get("/:id", osController.selecionarPorId);
clienteRoutes.delete("/:id", osController.deletar);
clienteRoutes.put("/:id", osController.atualizar);

export default osRoutes;