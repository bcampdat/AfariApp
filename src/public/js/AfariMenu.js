const Desayuno = [
  {
    type: "Cafe",
    options: [
      { name: "Solo", price: 1.5 },
      { name: "Leche", price: 1.75 },
      { name: "Cortado", price: 1.75 },
    ],
  },
  {
    type: "Zumo",
    options: [
      { name: "Naranja", price: 2.0 },
      { name: "Tomate", price: 1.75 },
      { name: "Melocotón", price: 1.75 },
    ],
  },
  {
    type: "Pintxo",
    options: [
      { name: "Tostada", price: 1.5 },
      { name: "Croissant", price: 1.75 },
      { name: "Tortilla", price: 1.75 },
    ],
  },
];

const Almuerzo = [
  {
    type: "Primero",
    options: [
      { name: "Arroz", price: 6.5 },
      { name: "Lentejas", price: 7.75 },
      { name: "Ensalada", price: 5.75 },
    ],
  },
  {
    type: "Segundo",
    options: [
      { name: "Filete", price: 6.5 },
      { name: "Pollo", price: 7.75 },
      { name: "Pescado", price: 8.75 },
    ],
  },
  {
    type: "Postre",
    options: [
      { name: "Flan", price: 2.5 },
      { name: "Helado", price: 1.75 },
      { name: "Tarta", price: 2.75 },
    ],
  },
];

const Cena = [
  {
    type: "Entrante",
    options: [
      { name: "Porrusalda", price: 6.5 },
      { name: "Sopa", price: 5.75 },
      { name: "Verduras", price: 7.75 },
    ],
  },
  {
    type: "Postre",
    options: [
      { name: "Yogur", price: 1.5 },
      { name: "Fruta", price: 1.5 },
    ],
  },
];

const Bebidas = [
  {
    type: "Bebidas",
    options: [
      { name: "Cerveza", price: 2.5 },
      { name: "Vino", price: 3.75 },
      { name: "Agua", price: 1.75 },
    ],
  },
];

const comentarios = () => {
  const comments = [
    "Genial!",
    "¡Sabores que enamoran! ",
    " Viaja con cada bocado.",
    " Equilibrio delicioso.",
    " Magia en cada elección.",
    " Experiencia única.",
    "Satisfacción garantizada.",
    "Uno de mis favoritos",
    "Irresitible",
  ];
  return comments[Math.floor(Math.random() * comments.length)];
};

function eliminarAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function guardarEleccionDesayuno(eleccionCliente) {
  let total = 0;

  const tiposDesayuno = Desayuno.slice(0, 2);

  for (let tipo of tiposDesayuno) {
    let eleccion;
    let opcion;
    do {
      eleccion = prompt(
        `✍ ¿Qué te apetece de ${tipo.type.toUpperCase()}?\n${tipo.options
          .map((item) => `${item.name} ⇛ ${item.price}€`)
          .join("\n")}`
      );
      opcion = tipo.options.find(
        (item) =>
          item.name.toLowerCase() === eliminarAcentos(eleccion.toLowerCase())
      );
      alert(comentarios());
      if (!opcion) {
        alert(`Error 🛑 \nPrueba otra vez.`);
      }
    } while (!opcion);

    eleccionCliente.push({
      type: tipo.type,
      name: opcion.name,
      price: opcion.price,
    });
    total += opcion.price;

    alert(comentarios());
  }

  // Elección de Pintxo
  let pintxoEleccion;
  let pintxoOpcion;
  const pintxoMenu = Desayuno.find((item) => item.type === "Pintxo");

  do {
    pintxoEleccion = prompt(
      `✍ ¿Qué te apetece de PINTXO?\n${pintxoMenu.options
        .map((item) => `${item.name} ⇛ ${item.price}€`)
        .join("\n")}`
    );
    pintxoOpcion = pintxoMenu.options.find(
      (item) =>
        item.name.toLowerCase() ===
        eliminarAcentos(pintxoEleccion.toLowerCase())
    );
    alert(comentarios());
    if (!pintxoOpcion) {
      alert(`Error 🛑 \nPrueba otra vez.`);
    }
  } while (!pintxoOpcion);

  eleccionCliente.push({
    type: pintxoMenu.type,
    name: pintxoOpcion.name,
    price: pintxoOpcion.price,
  });
  total += pintxoOpcion.price;

  alert(comentarios());
}

function guardarEleccionCena(eleccionCliente) {
  let total = 0;

  Cena.forEach((tipo) => {
    let eleccion;
    let opcion;
    do {
      eleccion = prompt(
        `✍ ¿Qué te apetece de ${tipo.type.toUpperCase()}?\n${tipo.options
          .map((item) => `${item.name} ⇛ ${item.price}€`)
          .join("\n")}`
      );
      opcion = tipo.options.find(
        (item) =>
          item.name.toLowerCase() === eliminarAcentos(eleccion.toLowerCase())
      );
      alert(comentarios());
      if (!opcion) {
        alert(`Error 🛑 \nPrueba otra vez.`);
      }
    } while (!opcion);

    eleccionCliente.push({
      type: tipo.type,
      name: opcion.name,
      price: opcion.price,
    });
    total += opcion.price;
  });

  alert(comentarios());

  // Elección de Bebida
  let bebidaEleccion;
  let bebidaOpcion;
  if (confirm("¿Te gustaría añadir una bebida?")) {
    do {
      bebidaEleccion = prompt(
        `✍ ¿Qué bebida te gustaría añadir?\n${Bebidas[0].options
          .map((item) => `${item.name} ⇛ ${item.price}€`)
          .join("\n")}`
      );
      bebidaOpcion = Bebidas[0].options.find(
        (item) =>
          item.name.toLowerCase() ===
          eliminarAcentos(bebidaEleccion.toLowerCase())
      );
      if (!bebidaOpcion) {
        alert(`Error 🛑 \nPrueba otra vez.`);
      }
    } while (!bebidaOpcion);

    eleccionCliente.push({
      type: Bebidas[0].type,
      name: bebidaOpcion.name,
      price: bebidaOpcion.price,
    });
    total += bebidaOpcion.price;
    alert(comentarios());
  }
}

function guardarEleccionAlmuerzo(eleccionCliente) {
  let total = 0;

  Almuerzo.forEach((tipo) => {
    let eleccion;
    let opcion;
    do {
      eleccion = prompt(
        `✍ ¿Qué te apetece de ${tipo.type.toUpperCase()}?\n${tipo.options
          .map((item) => `${item.name} ⇛ ${item.price}€`)
          .join("\n")}`
      );
      opcion = tipo.options.find(
        (item) =>
          item.name.toLowerCase() === eliminarAcentos(eleccion.toLowerCase())
      );
      alert(comentarios());
      if (!opcion) {
        alert(`Error 🛑 \nPrueba otra vez.`);
      }
    } while (!opcion);

    eleccionCliente.push({
      type: tipo.type,
      name: opcion.name,
      price: opcion.price,
    });
    total += opcion.price;
  });

  alert(comentarios());
  let bebidaEleccion;
  let bebidaOpcion;
  if (confirm("¿Te gustaría añadir una bebida?")) {
    do {
      bebidaEleccion = prompt(
        `✍ ¿Qué bebida te gustaría añadir?\n${Bebidas[0].options
          .map((item) => `${item.name} ⇛ ${item.price}€`)
          .join("\n")}`
      );
      bebidaOpcion = Bebidas[0].options.find(
        (item) =>
          item.name.toLowerCase() ===
          eliminarAcentos(bebidaEleccion.toLowerCase())
      );
      alert(comentarios());
      if (!bebidaOpcion) {
        alert(`Error 🛑 \nPrueba otra vez.`);
      }
    } while (!bebidaOpcion);

    eleccionCliente.push({
      type: Bebidas[0].type,
      name: bebidaOpcion.name,
      price: bebidaOpcion.price,
    });
    total += bebidaOpcion.price;
    alert(comentarios());
  }
}

function mostrarEleccion(eleccionCliente) {
  let total = 0;
  let mensaje = "TICKET : \n\n Has elegido:\n";
  eleccionCliente.forEach((item) => {
    mensaje += `• ${item.type} ⇛ ⇛ ${item.name}: ${item.price} €\n`;
    total += item.price;
  });
  mensaje += `\n Total a pagar  ⇛ ⇛ : ${total.toFixed(
    2
  )}€ \n\n Gracias por su pedido. 👋`;
  alert(mensaje);
  console.log(mensaje);
}

let eleccionCliente = [];

let bienvenida = {};
let tiempo, hora, minutos;

do {
  tiempo = prompt(
    " Bienvenido !!!, ¿Qué hora es?   🕑 \nIntroduce la hora en formato de 24 horas → ( hh:mm )"
  );
  [hora, minutos] = tiempo.split(":");

  switch (true) {
    case /^\d{2}:\d{2}$/.test(tiempo) &&
      !isNaN(parseInt(hora)) &&
      hora >= 0 &&
      hora < 24 &&
      !isNaN(parseInt(minutos)) &&
      minutos >= 0 &&
      minutos < 60:
      bienvenida.hora = parseInt(hora);
      bienvenida.minutos = parseInt(minutos);
      break;
    default:
      alert(
        "Error 🛑\n Por favor introduce un valor válido \n formato de 24 horas hh:mm \n no te olvides de los puntos :     ej: 00:00 "
      );
      tiempo = null;
  }
} while (!tiempo);

switch (true) {
  case (bienvenida.hora == 7 && bienvenida.minutos >= 0) ||
    (bienvenida.hora == 10 && bienvenida.minutos <= 59) ||
    (bienvenida.hora > 7 && bienvenida.hora < 10):
    alert(
      "HOLA!! BUENOS DIAS, 😎\n\n" +
        " **M E N U    D E S A Y U N O:**\n" +
        "   ☕    CAFE : ......\n" +
        "    •  SOLO      ⇛⇛⇛⇛     1.5 €\n" +
        "    •  LECHE     ⇛⇛⇛⇛     1.75 €\n" +
        "    •  CORTADO   ⇛⇛⇛⇛     1.75 €\n" +
        "    🥤   ZUMO : ......\n" +
        "    •  NARANJA   ⇛⇛⇛⇛     2.0 €\n" +
        "    •  TOMATE    ⇛⇛⇛⇛     1.75 €\n" +
        "    •  MELOCOTON ⇛⇛⇛⇛     1.75 €\n" +
        "   🧽    PINTXO : ......\n" +
        "    •  TOSTADA   ⇛⇛⇛⇛     1.5 €\n" +
        "    •  CROISSANT ⇛⇛⇛⇛     1.75 €\n" +
        "    •  TORTILLA  ⇛⇛⇛⇛     1.75 €\n"
    );

    guardarEleccionDesayuno(eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  case (bienvenida.hora == 12 && bienvenida.minutos >= 0) ||
    (bienvenida.hora == 15 && bienvenida.minutos <= 59) ||
    (bienvenida.hora > 12 && bienvenida.hora < 15):
    alert(
      "HOLA!! A COMER 😋 !!!.\n" +
        " ** M E N U  C O M I D A:**\n" +
        "   🍚    PRIMER PLATO : ......\n" +
        "    •  ARROZ      ⇛⇛⇛⇛     6.5 €\n" +
        "    •  LENTEJAS   ⇛⇛⇛⇛     7.75 €\n" +
        "    •  ENSALADA   ⇛⇛⇛⇛     5.75 €\n" +
        "   🍗    SEGUNO PLATO : ......\n" +
        "    •  FILETE     ⇛⇛⇛⇛     6.5 €\n" +
        "    •  POLLO      ⇛⇛⇛⇛     7.75 €\n" +
        "    •  PESCADO    ⇛⇛⇛⇛     8.75 €\n" +
        "   🍰    POSTRE : ......\n" +
        "    •  FLAN       ⇛⇛⇛⇛     2.5 €\n" +
        "    •  HELADO     ⇛⇛⇛⇛     1.75 €\n" +
        "    •  TARTA      ⇛⇛⇛⇛     2.75 €\n"
    );

    guardarEleccionAlmuerzo(eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  case (bienvenida.hora == 19 && bienvenida.minutos >= 0) ||
    (bienvenida.hora == 23 && bienvenida.minutos <= 59) ||
    (bienvenida.hora > 19 && bienvenida.hora < 23):
    alert(
      "HOLA!! 😉 Buen Provecho !!!.\n" +
        " ** M E N U  C E N A:**\n" +
        "  🍲     ENTRANTE : ......\n" +
        "  •  PORRUSALDA      ⇛⇛⇛⇛     6.5 €\n" +
        "  •  SOPA            ⇛⇛⇛⇛     7.75 €\n" +
        "  •  HUEVOS          ⇛⇛⇛⇛     5.75 €\n" +
        " 🍰      POSTRE : ......\n" +
        "  •  YOGURT   ⇛⇛⇛⇛     1.5 €\n" +
        "  •  FRUTA    ⇛⇛⇛⇛     1.5 €\n"
    );

    guardarEleccionCena(eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  default:
    alert(
      "  😔  Upps, Que pena ahora está cerrado!!!  \n   😊   En otra ocasión será"
    );
    break;
}

console.log(eleccionCliente);
