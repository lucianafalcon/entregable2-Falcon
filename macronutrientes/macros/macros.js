//-----------------
// validaciones

const validarNumero = (valor) => {
  const numero = Number(valor);
  if (isNaN(numero) === false && numero >= 0) {
    return true;
  } else return false;
};

//-----------------
// sumar los macros

const actualizarTotales = () => {
  let total = sumador.reduce(
    (acum, alimento) => {
      acum.prote += alimento.prote;
      acum.carbo += alimento.carbo;
      acum.grasa += alimento.grasa;
      return acum;
    },
    { prote: 0, carbo: 0, grasa: 0 }
  );

  document.getElementById("total-prote").textContent = total.prote;
  document.getElementById("total-carbo").textContent = total.carbo;
  document.getElementById("total-grasa").textContent = total.grasa;
};

//-----------------
//simulo db

const alimentos = [
  { id: 1, nombre: "Huevo (1 unidad)", prote: 6, carbo: 0.5, grasa: 5 },
  { id: 2, nombre: "Leche (1 vaso, 200ml)", prote: 8, carbo: 12, grasa: 5 },
  { id: 3, nombre: "Pan integral (1 rebanada)", prote: 4, carbo: 20, grasa: 1 },
  { id: 4, nombre: "Arroz cocido (100g)", prote: 2.5, carbo: 28, grasa: 0.3 },
  { id: 5, nombre: "Pollo pechuga (100g)", prote: 31, carbo: 0, grasa: 3.5 },
  {
    id: 6,
    nombre: "Carne vacuna magra (100g)",
    prote: 26,
    carbo: 0,
    grasa: 10,
  },
  { id: 7, nombre: "Atún en lata (100g)", prote: 23, carbo: 0, grasa: 1 },
  { id: 8, nombre: "Queso fresco (100g)", prote: 18, carbo: 2, grasa: 10 },
  { id: 9, nombre: "Yogur natural (125g)", prote: 5, carbo: 7, grasa: 3 },
  {
    id: 10,
    nombre: "Manzana (1 unidad mediana)",
    prote: 0.3,
    carbo: 25,
    grasa: 0.2,
  },
  {
    id: 11,
    nombre: "Banana (1 unidad mediana)",
    prote: 1.3,
    carbo: 27,
    grasa: 0.3,
  },
  { id: 12, nombre: "Avena (40g)", prote: 5, carbo: 27, grasa: 3 },
  {
    id: 13,
    nombre: "Aceite de oliva (1 cucharada, 10g)",
    prote: 0,
    carbo: 0,
    grasa: 10,
  },
  {
    id: 14,
    nombre: "Frutos secos mixtos (30g)",
    prote: 5,
    carbo: 6,
    grasa: 15,
  },
  { id: 15, nombre: "Pasta cocida (100g)", prote: 5, carbo: 25, grasa: 1 },
];

//-----------------
// macros add con boton

const btnComunes = document.getElementById("btn-comunes");

btnComunes.addEventListener("click", () => {
  const renderizarAlimentos = () => {
    let contenedor = document.querySelector(".alimentos");
    let htmlCompletoDeAlimentos = "";

    alimentos.forEach((alimento) => {
      htmlCompletoDeAlimentos += `
        <div class="alimento">
            <p>${alimento.nombre}</p>    
            <p>Proteínas: ${alimento.prote} g</p>
            <p>Carbohidratos: ${alimento.carbo} g</p>
            <p>Grasas: ${alimento.grasa} g</p>
            <button onClick="agregarAlimento(${alimento.id})">Agregar</button>
        </div>
      `;
    });
    contenedor.innerHTML = htmlCompletoDeAlimentos;
  };

  renderizarAlimentos();
});

let sumador = JSON.parse(localStorage.getItem("sumador")) || [];

const agregarAlimento = (id) => {
  let alimentoEncontrado = alimentos.find((alimento) => alimento.id === id);
  console.log(alimentoEncontrado);
  sumador.push(alimentoEncontrado);
  localStorage.setItem("sumador", JSON.stringify(sumador));

  actualizarTotales();
};

//-----------------
// macros add a mano

const nutriente_input = document.getElementById("nutrienteInput");
const prote_input = document.getElementById("proteInput");
const carbo_input = document.getElementById("carboInput");
const grasas_input = document.getElementById("grasasInput");
const btnAgregarManual = document.getElementById("agregar-manual");

const agregarAlimentoManual = (n, p, c, g) => {
  let alimentoManual = {
    nombre: n,
    prote: Number(p),
    carbo: Number(c),
    grasa: Number(g),
  };

  sumador.push(alimentoManual);
  localStorage.setItem("sumador", JSON.stringify(sumador));
  actualizarTotales();
};

btnAgregarManual.addEventListener("click", () => {
  const n = nutriente_input.value.trim();
  const p = Number(prote_input.value) || 0;
  const c = Number(carbo_input.value) || 0;
  const g = Number(grasas_input.value) || 0;

  agregarAlimentoManual(n, p, c, g);
  actualizarTotales();
});
