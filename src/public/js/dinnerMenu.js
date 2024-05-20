const Desayuno = [
  {
    type: "Cafe",
    options: [
      { name: "Solo", price: 1.5 },
      { name: "Leche", price: 1.75 },
      { name: "Cortado", price: 1.75 }
    ]
  },
  {
    type: "Zumo",
    options: [
      { name: "Naranja", price: 2.0 },
      { name: "Tomate", price: 1.75 },
      { name: "Melocotón", price: 1.75 }
    ]
  },
  {
    type: "Pintxo",
    options: [
      { name: "Tostada", price: 1.5 },
      { name: "Croissant", price: 1.75 },
      { name: "Tortilla", price: 1.75 }
    ]
  }
];

const Almuerzo = [
  {
    type: "Primero",
    options: [
      { name: "Arroz", price: 6.5 },
      { name: "Lentejas", price: 7.75 },
      { name: "Ensalada", price: 5.75 }
    ]
  },
  {
    type: "Segundo",
    options: [
      { name: "Filete", price: 6.5 },
      { name: "Pollo", price: 7.75 },
      { name: "Pescado", price: 8.75 }
    ]
  },
  {
    type: "Postre",
    options: [
      { name: "Flan", price: 2.5 },
      { name: "Helado", price: 1.75 },
      { name: "Tarta", price: 2.75 }
    ]
  }
];

const Cena = [
  {
    type: "Entrante",
    options: [
      { name: "Porrusalda", price: 6.5 },
      { name: "Sopa", price: 5.75 },
      { name: "Verduras", price: 7.75 }
    ]
  },
  {
    type: "Postre",
    options: [
      { name: "Yogur", price: 1.5 },
      { name: "Fruta", price: 1.5 }
    ]
  }
];


const comentarios = () => {
  const comments = [
    "Genial!",
    "¡Sabores que enamoran!",
    "Viaja con cada bocado.",
    "Equilibrio delicioso.",
    "Magia en cada elección.",
    "Experiencia única.",
    "Satisfacción garantizada.",
    "Uno de mis favoritos",
    "Irresitible"
  ];
  return comments[Math.floor(Math.random() * comments.length)];
};

function eliminarAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function mostrarEleccion(eleccionCliente) {
  let total = 0;
  let mensaje = "TICKET : \n\n Has elegido:\n";
  eleccionCliente.forEach((item) => {
    mensaje += (`• ${item.type} ⇛ ⇛ ${item.name}: ${item.price} €\n`);
    total += item.price;
  });
  mensaje += (`Total a pagar  ⇛ ⇛ : ${total.toFixed(2)}€ \n\n Gracias por su pedido. 👋`);
  alert(mensaje);
  console.log(mensaje);
}

function guardarEleccion(menu, eleccionCliente) {
  let continuar = true;
  let total = 0;

  while (continuar) {
    let eleccion = prompt(
      ` ✍  ¿Qué te apetece ...\n ${menu
        .map((item) => `${item.type.toUpperCase()}`)
        .join("\n")}`
    );
    let opcion = menu.find(
      (item) =>
        item.type.toLowerCase() === eliminarAcentos(eleccion.toLowerCase())
    );
    if (opcion) {
      let detalle = prompt(
        ` ✍  ¿Qué tipo de ${eleccion} te gustaría?...\n ${opcion.options
          .map((o) => `${o.name} ⇛ ${o.price}`)
          .join("\n ")}`
      );
      let detalleElegido = opcion.options.find(
        (o) => o.name.toLowerCase() === eliminarAcentos(detalle.toLowerCase())
      );

      if (detalleElegido) {
        eleccionCliente.push({
          type: opcion.type,
          name: detalleElegido.name,
          price: detalleElegido.price
        });
        total += detalleElegido.price;
        alert(comentarios());
      } else {
        alert(` Error 🛑 \n  El ${detalle}  no es correcto. Prueba otra vez.`);
      }
    } else {
      alert(`Error 🛑 \n   ${eleccion}" no es correcto. Prueba otra vez.`);
    }

    continuar =
      eliminarAcentos(
        prompt("¿Tal vez algo mas algo más? (sí/no)")
      ).toLowerCase() === "si";
  }

  alert(`El total a pagar es: ${total}`);
}

let eleccionCliente = [];

let bienvenida = {};
let tiempo, hora, minutos;

do {
  tiempo = prompt(
    " Bienvenido !!!, ¿Qué hora es?   🕑 \nIntroduce la hora en formato de 24 horas "
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
    (bienvenida.hora == 9 && bienvenida.minutos <= 59) ||
    (bienvenida.hora > 7 && bienvenida.hora < 9):
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

    guardarEleccion(Desayuno, eleccionCliente);
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

    guardarEleccion(Almuerzo, eleccionCliente);
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

    guardarEleccion(Cena, eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  default:
    alert(
      "  😔  Upps, Que pena ahora está cerrado!!!  \n   😊   En otra ocasión será"
    );
    break;
}

console.log(eleccionCliente);
