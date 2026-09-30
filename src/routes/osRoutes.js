import { Router } from "express";
import osController from "../controllers/osController.js";

const osRoutes = Router();

osRoutes.post("/", osController.criar);
osRoutes.get("/", osController.selecionar);
osRoutes.get("/:id", osController.selecionarPorId);
osRoutes.delete("/:id", osController.deletar);
osRoutes.put("/:id", osController.atualizar);

export default osRoutes;