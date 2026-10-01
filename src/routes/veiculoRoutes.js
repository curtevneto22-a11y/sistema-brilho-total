import { Router } from "express";
import veiculoController from "../Controllers/veiculoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const veiculoRoutes = Router();
veiculoRoutes.use(authMiddleware);


veiculoRoutes.get("/", veiculoController.selecionar);
veiculoRoutes.get("/:placa", veiculoController.selecionarPorPlaca);
veiculoRoutes.post("/", veiculoController.criar);
veiculoRoutes.delete("/:placa", veiculoController.deletar);
veiculoRoutes.put("/:placa", veiculoController.atualizar);

export default veiculoRoutes;