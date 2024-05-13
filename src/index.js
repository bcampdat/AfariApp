// console.log('Hello World!'); inicio

import express from "express"; 
//platform "express";
// import ejs from "ejs"; viene por defecto con express

import { dirname, join } from "path";
import { fileURLToPath } from "url";
// ruta absoluta

import indexRoutes from "./routers/index.js";

const app = express(); //arranque de la app

// ruta absoluta aunque cambie el directorio
const __dirname = dirname(fileURLToPath(import.meta.url));

// app.set ("views", ruta absoluta);
app.set ("views", join (__dirname, "views"));
// console.log ( join (__dirname, "views"));
// donde se guardan todos los html

app.set ("view engine", "ejs"); //para usar ejs

/* // app.get("/", (req, res) => { res.send("Hello World!"); }); 
// inicio res (respuesta)(enviar)send  peticion get
app.get("/", (req, res) => res.render("index"));// index.ejs ( no hace falta)

// app.get("/about", (req, res) => res.render("about"));// about.ejs
app.get("/CARTA", (req, res) => res.render("CARTA")); // CARTA.ejs */



// use routes
app.use (indexRoutes);

// user static files
app.use (express.static(join(__dirname, "public")));

app.listen(3000);
console.log("Server is listening on port", 3000);
