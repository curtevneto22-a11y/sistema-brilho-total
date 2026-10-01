import { Router } from 'express';
import itemController from '../Controllers/itemController.js';
import authMiddleware from "../middlewares/authMiddleware.js";

const itemRoutes = Router();
itemRoutes.use(authMiddleware);

itemRoutes.post("/", itemController.criar);
itemRoutes.get("/", itemController.selecionar);
itemRoutes.get("/nome/:nome", itemController.selecionarPorNome);
itemRoutes.get("/:id", itemController.selecionarPorId);
itemRoutes.delete("/:id", itemController.deletar);
itemRoutes.put("/:id", itemController.atualizar);

export default itemRoutes;