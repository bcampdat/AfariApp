import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", { titulo: "Afaritxeko" }));

router.get("/principal", (req, res) => res.render("principal", { titulo: "Carta" }));

router.get("/amigos", (req, res) => res.render("amigos", { titulo: "Picoteo" }));

router.get("/contacto", (req, res) => res.render("contacto", { titulo: "Contacto" }));

export default router;
