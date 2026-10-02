import { Router } from "express";
import enderecoController from "../controllers/enderecoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const enderecoRoutes = Router();
enderecoRoutes.use(authMiddleware);

enderecoRoutes.get("/", enderecoController.selecionar);

enderecoRoutes.post("/", enderecoController.criar);

enderecoRoutes.get("/cep/:cep", enderecoController.selecionarPorCep);

enderecoRoutes.get("/:id", enderecoController.selecionarPorId);

enderecoRoutes.delete("/:id", enderecoController.deletar);

enderecoRoutes.put("/:id", enderecoController.atualizar);

export default enderecoRoutes;