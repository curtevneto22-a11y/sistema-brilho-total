import { Router } from "express";
import veiculoController from "../controllers/veiculoController.js";

const veiculoRoutes = Router();

veiculoRoutes.get("/", veiculoController.selecionar);
veiculoRoutes.get("/:placa", veiculoController.selecionarPorPlaca);
veiculoRoutes.post("/", veiculoController.criar);
veiculoRoutes.delete("/:placa", veiculoController.deletar);
veiculoRoutes.put("/:placa", veiculoController.atualizar);

export default veiculoRoutes;