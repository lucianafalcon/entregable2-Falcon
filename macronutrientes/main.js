/**********************************************************************
Algoritmo para calcular la cantidad de nutrientes consumidas por día.
Falcon, Luciana.
**********************************************************************/

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

//--------------------------------
// saludo
const nombre_input = document.getElementById("nombreInput");
const saludo = document.getElementById("saludo");
const linkMacros = document.getElementById("linkMacros");

function mostrarSaludo() {
  const nombre = nombre_input.value.trim();
  if (nombre !== "") {
    saludo.textContent = `¡Hola, ${nombre}!`;
  } else {
    saludo.textContent = "Por favor, ingresa tu nombre.";
  }
}

nombre_input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    mostrarSaludo();
  }
});

// fecha ingreso
const fecha_input = document.getElementById("fechaInput");

fecha_input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const fecha = fecha_input.value.trim();
    if (!validarFecha(fecha)) {
      saludo.textContent = `Fecha válida: ${fecha}`;
      linkMacros.style.display = "inline";
    } else {
      saludo.textContent = "Fecha inválida, ingrese en formato ddmmaaaa.";
      linkMacros.style.display = "none";
    }
  }
});
