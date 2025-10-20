import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {

    return await prisma.food.findMany({ orderBy: { nome: "asc" } });
};

export const encontreUm = async () => {

    return await prisma.food.findUnique({
        where: { id: Number(id) },
    });
};
