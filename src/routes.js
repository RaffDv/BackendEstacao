import { Router } from "express";
import EstacaoController from "./controller/EstacaoController.js";

const routes = new Router();

routes.get('/dados', EstacaoController.index);
routes.get('/dado', EstacaoController.show);
routes.post('/dado', EstacaoController.store);
routes.put('/dado/:id', EstacaoController.update);
routes.delete('/dado', EstacaoController.destroy);

export default routes;