import express, { Request, Response } from "express";
import cors from "cors";
import camisetasController from "./controllers/camisetas.controller";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3333, () => {
  console.log("API está rodando na porta 3333");
});

app.get("/", camisetasController.list)
app.post("/", camisetasController.create)

