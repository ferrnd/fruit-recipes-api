import { Router } from "express";
import * as foodController from "./../controllers/foodController.js";

const router = Router();

router.get("/", foodController.listarTodos);
router.get("/:id", foodController.listarUm);

export default router;
