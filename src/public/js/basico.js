const mainMenu = [
  {
    type: "ensaladas",
    options: [
      { name: "Bermeana", price: 8.5 },
      { name: "Rusa", price: 6.75 },
    ],
  },
  {
    type: "Hamburguesas",
    options: [
      { name: "Viuda", price: 8.5 },
      { name: "A caballo", price: 9.75 },
      { name: "De la casa", price: 10.5 },
    ],
  },
  {
    type: "sandwiches",
    options: [
      { name: "Mixto", price: 6.25 },
      { name: "Vegetal", price: 7.25 },
      { name: "De la casa", price: 8.25 },
    ],
  },
];

const amigosMenu = [
  {
    type: "Raciones",
    options: [
      { name: "pimento verde", price: 6.25 },
      { name: "Chorizo a la Sidra", price: 6.75 },
      { name: "Croquetas de Bacalao", price: 8.5 },
    ],
  },
];

const desayunoMenu = [
  {
    type: "Cafe y Te",
    options: [
      { name: "Con leche", price: 2.0 },
      { name: "Solo", price: 1.5 },
      { name: "Colacao", price: 2.0 },
      { name: "Te negro", price: 2.0 },
      { name: "Roibos", price: 2.0 },
    ],
  },
  {
    type: "Zumos",
    options: [
      { name: "Naranja", price: 5.0 },
      { name: "Mango", price: 3.0 },
      { name: "Piña", price: 3.0 },
    ],
  },
  {
    type: "Tostadas y Bolleria",
    options: [
      { name: "Mantequilla y Mermelada", price: 3.0 },
      { name: "Pan Tumaka", price: 3.0 },
    ],
  },
];

class Menu {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  elegirMenu(menu) {
    if (menu[0].type) {
      let optionsMenu = [];

      for (const item of menu) {
        optionsMenu.push(...item.options);
      }

      return this.elegirMenu(optionsMenu);
    } else {
      let option;

      do {
        option = prompt("Elige tu Menú ");
        if (option !== null) {
          option = menu.find((obj) => obj.name === option.toLowerCase());
        }

        if (option === undefined) {
          console.log("\nLo sentimos, no es una elección\n");
        }
      } while (option === undefined);

      return option || "\nLamentos no hayas encontrado lo que buscas";
    }
  }

  comentario(option, total) {
    if (typeof option !== "string") {
      console.log(`\n Has elegido ${option.name.toUpperCase()}.`);
      console.log(`Su precio es: ${option.price}$.`);

      return total + option.price;
    } else {
      console.log(option);
    }
  }
};

function mostrarMenu(menu) {
  if (menu[0].type) {
    for (const item of menu) {
      console.log(`\n${item.type.toUpperCase()}`);
      this.mostrarMenu(item.options);
    }
  } else {
    for (const item of menu) {
      console.log(`\t- ${item.name}: \t ${item.price}$`);
    }
  }

  console.log(menu);
};
const cocina = new Menu();

const comanda = () => {
  let ans;
  let goodAns = false;
  const choices = ["a", "b", "c", "desayuno", "comida", "cena"];
  
  do {

        ans = prompt(`Que Menú desea?
        a. Desayuno
        b. Comida
        c. Cena`);

        if (ans === null || choices.includes(ans.toLowerCase())) {
            goodAns = true;
        } else {
            alert("No es una respuesta correcta");
        }
  } while (!goodAns);

  if (ans === null) return ans;
  ans = ans.toLowerCase();
  if (ans === "a" || ans === "desayuno") return "Desayuno";
  if (ans === "b" || ans === "comida") return "Comida";
  if (ans === "c" || ans === "cena") return "Cena";
};


const carrito = (menu, times) => {
  let totalPrice = 0;
  for (let i = 0; i < times; i++) {
    let eleccion = elegirMenu(menu);
    totalPrice = (comentario(eleccion, totalPrice).Math.round(totalPrice * 100) / 100);
  }

  console.log(`\nTotal a pagar: ${totalPrice || 0}$.`);
};

class Cliente {
  constructor(comanda, carrito ) { 
    this.comanda = comanda;
    this.carrito = carrito;  
  }

  mostrarComanda() {
    console.log(this.comanda);
  }

  mostrarCarrito() { 
    console.log(this.carrito);
  }
};


const ticket = new Cliente();



