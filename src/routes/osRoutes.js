import { Router } from "express";
import osController from "../Controllers/osController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const osRoutes = Router();
osRoutes.use(authMiddleware);

osRoutes.post("/", osController.criar);
osRoutes.get("/", osController.selecionar);
osRoutes.get("/:id", osController.selecionarPorId);
osRoutes.delete("/:id", osController.deletar);
osRoutes.put("/:id", osController.atualizar);

export default osRoutes;