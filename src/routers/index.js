import express from "express";
import routerPersonagem from "./router-personagem.js";

export const router = (app) => {
  app.use(express.json(), routerPersonagem);
};
