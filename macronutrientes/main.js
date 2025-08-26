/**********************************************************************
Algoritmo para calcular la cantidad de nutrientes consumidas por día.
Falcon, Luciana.
**********************************************************************/

let macronutrientes = {
  proteinas: [],
  carbohidratos: [],
  grasas: [],
}; // no hace falta inicializar en cero como en C aca no arrastra basu

let macroExtras = {};

//--------------------------------
const registro = (proteinas, carbohidratos, grasas) => {
  if (proteinas != 0) {
    macronutrientes.proteinas.push(proteinas);
  }
  if (carbohidratos != 0) {
    macronutrientes.carbohidratos.push(carbohidratos);
  }
  if (grasas != 0) {
    macronutrientes.grasas.push(grasas);
  }
};

const registroExtras = (nuevoNutriente, valorNuevoNutriente) => {
  if (!macroExtras[nuevoNutriente]) {
    macroExtras[nuevoNutriente] = [];
    macroExtras[nuevoNutriente].push(Number(valorNuevoNutriente));
  } else {
    macroExtras[nuevoNutriente].push(Number(valorNuevoNutriente));
  }
};

const validarFecha = (fecha) => {
  if (fecha.length !== 8 || typeof fecha !== "string") {
    return true;
  } else {
    let dia = Number(fecha[0] + fecha[1]);
    let mes = Number(fecha[2] + fecha[3]);
    let año = Number(fecha[4] + fecha[5] + fecha[6] + fecha[7]);

    if (dia >= 0 && dia <= 31 && mes >= 1 && mes <= 12 && año === 2025) {
      return false;
    } else return true;
  }
};

const validarNumero = (valor) => {
  const numero = Number(valor);
  if (isNaN(numero) === false && numero >= 0) {
    return true;
  } else return false;
};

const validarSiNo = (valor) => {
  if (valor === "si" || valor === "no") {
    return true;
  } else return false;
};

const sumaMacronutrientes = () => {
  let sumaProteinas = 0;
  let sumaCarbohidratos = 0;
  let sumaGrasas = 0;

  for (let i = 0; i < macronutrientes.proteinas.length; i++) {
    sumaProteinas += Number(macronutrientes.proteinas[i]);
  }
  for (let j = 0; j < macronutrientes.carbohidratos.length; j++) {
    sumaCarbohidratos += Number(macronutrientes.carbohidratos[j]);
  }
  for (let k = 0; k < macronutrientes.grasas.length; k++) {
    sumaGrasas += Number(macronutrientes.grasas[k]);
  }

  return {
    proteinas: sumaProteinas,
    carbohidratos: sumaCarbohidratos,
    grasas: sumaGrasas,
  };
};

const sumarMacroExtras = () => {
  for (let nutriente in macroExtras) {
    let suma = 0;
    for (let i = 0; i < macroExtras[nutriente].length; i++) {
      suma += Number(macroExtras[nutriente][i]);
    }
    console.log(`Total ${nutriente}: ${suma}g`);
  }
};

//--------------------------------
let nombre = prompt("Ingresá tu nombre:");
alert(`Buen día, ${nombre}!`);

let continuar = true;

validacionFecha = true;
while (validacionFecha) {
  let fecha = prompt("Ingresá la fecha (ddmmaaaa):");
  validacionFecha = validarFecha(fecha);
}

while (continuar) {
  let proteinas = prompt("Ingresá la cantidad de proteínas (g):");
  while (!validarNumero(proteinas)) {
    proteinas = prompt("Ingresá la cantidad de proteínas (g):");
  }

  let carbohidratos = prompt("Ingresá la cantidad de carbohidratos (g):");
  while (!validarNumero(carbohidratos)) {
    carbohidratos = prompt("Ingresá la cantidad de carbohidratos (g):");
  }

  let grasas = prompt("Ingresá cantidad la de grasa (g):");
  while (!validarNumero(grasas)) {
    grasas = prompt("Ingresá la cantidad de grasa (g):");
  }

  registro(proteinas, carbohidratos, grasas);

  let respuesta1 = prompt("agregar mas prote/carbo/grasas?(si/no):");
  while (!validarSiNo(respuesta1)) {
    respuesta1 = prompt("agregar mas prote/carbo/grasas?(si/no):");
  }

  if (respuesta1 === "no") {
    continuar = false;
  }
}

let continuar2 = true;
while (continuar2) {
  let respuesta2 = prompt("agregar otro tipo? (si/no):");
  while (!validarSiNo(respuesta2)) {
    respuesta2 = prompt("agregar otro tipo? (si/no):");
  }

  if (respuesta2 === "si") {
    let nuevoNutriente = prompt("Ingresá el nutriente:");
    let valorNuevoNutriente = prompt(
      `Ingresa la cantidad de ${nuevoNutriente} (g):`
    );
    while (!validarNumero(valorNuevoNutriente)) {
      proteinas = prompt(`Ingresa la cantidad de ${nuevoNutriente} (g):`);
    }
    registroExtras(nuevoNutriente, valorNuevoNutriente);
  } else if (respuesta2 === "no") {
    continuar2 = false;
  }
}

console.log(macronutrientes);
console.log(macroExtras);

console.log("Nutrientes totales del día consumidos:");

let totales = sumaMacronutrientes();
console.log(`Total proteínas: ${totales.proteinas}g`);
console.log(`Total carbohidratos: ${totales.carbohidratos}g`);
console.log(`Total grasas: ${totales.grasas}g`);

sumarMacroExtras();

alert(
  `Registro finalizado. Revisar la consola para ver los totales. Para una nueva fecha volver a ingresar. Saludos, ${nombre}!`
);
