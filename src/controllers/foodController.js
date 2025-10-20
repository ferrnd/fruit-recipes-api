// Lógica (filtros), tratativa de erros, regras de negócios.

import * as foodModel from "./../models/foodModel.js";

export const listarTodos = async (req, res) => {
    try {
        const foods = await foodModel.encontreTodos();

        if (!foods || foods.length === 0) {
            res.status(404).json({
                total: 0,
                message: "there is no food on the list",
                foods,
            });
        }

        res.status(200).json({
            total: foods.length,
            message: "List of foods",
            foods,
        });
    } catch (error) {
        res.status(500).json({
            error: "internal server error",
            details: error.message,
            status: 500,
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const food = await foodModel.encontreUm(id);

        if (!food) {
            return res.status(404).json({
                error: "Food not find",
                message: "Check the food ID",
                id: id,
            });
        }

        res.status(200).json({
            message: "Food find",
            food,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
            status: 500,
        });
    }
};
