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
      { name: "Yogur", price: 6.5 },
      { name: "Fruta", price: 5.75 },
    ],
  },
];

// Función para mostrar un comentario aleatorio
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
    "Irresitible",
  ];
  return comments[Math.floor(Math.random() * comments.length)];
};

function eliminarAcentos(str) {
  var sinAcentos = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  var trimmed = sinAcentos.trim();
  if (trimmed.length > 10) {
    throw new Error("La descripción es demasiado larga.");
  } else {
    return trimmed;    
  }
}

function guardarEleccion(menu, eleccionCliente) {
  let continuar = true;

  while (continuar) {
    let eleccion = prompt(
      `¿Qué te gustaría? ${menu.map((item) => item.type).join(", ")}?`
    );
    let opcion = menu.find(
      (item) =>
        item.type.toLowerCase() === eliminarAcentos(eleccion.toLowerCase())
    );
    alert("Perfecto !!!");
    if (opcion) {
      let detalle = prompt(
        `¿Qué tipo de ${eleccion} te gustaría? ${opcion.options
          .map((o) => o.name)
          .join(", ")}?`
      );

      alert(comentarios());
      let detalleElegido = opcion.options.find(
        (o) => o.name.toLowerCase() === eliminarAcentos(detalle.toLowerCase())
      );

      if (detalleElegido) {
        eleccionCliente.push({
          name: detalleElegido.name,
          price: detalleElegido.price,
        });
      } else {
        console.log(
          `Lo siento, no tenemos ${detalle} en el menú de ${eleccion}.`
        );
      }
    } else {
      console.log(`Lo siento, no tenemos ${eleccion} en el menú.`);
    }

    continuar =
      eliminarAcentos(
        prompt("¿Te gustaría elegir algo más? (sí/no)")
      ).toLowerCase() === "si";
  }
}

function mostrarEleccion(eleccionCliente) {
  let total = 0;
  console.log("Has elegido:");
  eleccionCliente.forEach((item) => {
    console.log(`- ${item.name} - Precio: ${item.price} €`);
    total += item.price;
  });
  console.log(`El total es: ${total.toFixed(2)} €`);
}
function mostrarMenu(menu) {
  menu.forEach((item) => {
    alert(item.type);
    item.options.forEach((opcion) => {
      alert(`- ${opcion.name} - Precio: ${opcion.price} € -}`);
    });
  });
}
let eleccionCliente = [];
let bienvenida = parseInt(prompt("Bienvenido, ¿Qué hora es _ a.m ?"));

switch (true) {
  case bienvenida >= 7 && bienvenida <= 10:
    mostrarMenu(Desayuno);
    alert(" Buenos Dias, 😎 A Desayunar!!!.");

    guardarEleccion(Desayuno, eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  case bienvenida >= 12 && bienvenida <= 15:
    mostrarMenu(Almuerzo);
    alert("Genial 👍 A Comer !!!.");
    guardarEleccion(Almuerzo, eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  case bienvenida >= 20 && bienvenida <= 23:
    mostrarMenu(Cena);
    alert(" 😉 Buen Provecho !!!.");
    guardarEleccion(Cena, eleccionCliente);
    mostrarEleccion(eleccionCliente);
    break;

  default:
    alert("Upps, Que pena ahora está cerrado");
    break;
}

console.log(eleccionCliente)


