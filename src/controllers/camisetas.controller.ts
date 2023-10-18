import { Request, Response } from "express";
import repository from "../database/prisma.database";

class CamisetasController {
  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const camisetas = await repository.camiseta.findMany();
      return res.status(200).json(camisetas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar camisetas' });
    }
  }
  public async create(req: Request, res: Response) {
    try {
      const { nome, cor, modelo, estampaCostas, estampaFrontal, tags } = req.body;

      console.log(req.body);


      if (!nome || !cor || !modelo || !estampaCostas || !estampaFrontal || !estampaCostas || !tags || !Array.isArray(tags)) {
        return res.status(400).send({
          ok: false,
          message: "Formato inválido"
        });
      }

      // Criar uma nova camiseta no banco de dados usando Prisma
      const result = await repository.camiseta.create({
        data: {
          nome,
          cor,
          modelo,
          estampaCostas,
          estampaFrontal,
          tags,
        },
      });

      return res.status(201).send({
        ok: true,
        message: "Camiseta criada com sucesso",
        data: result,
        code: 201
      });
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }


}

export default new CamisetasController()
