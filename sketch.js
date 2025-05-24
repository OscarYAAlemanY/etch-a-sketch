const numCuadros = parseInt(prompt("¿selecciona entre 0 y 100 cuadros"));
const contenedor = document.getElementById("container");

const columnas = Math.ceil(Math.sqrt(numCuadros));
const filas = Math.ceil(numCuadros / columnas);

const anchoPorcentaje = 100 / columnas;
const altoPorcentaje = 100 / filas;

const cuadros = [];

// Crear cuadros
for (let i = 0; i < numCuadros; i++) {
  const cuadro = document.createElement("div");
  cuadro.classList.add("cuadro");
  cuadro.style.width = `${anchoPorcentaje}%`;
  cuadro.style.height = `${altoPorcentaje}%`;
  contenedor.appendChild(cuadro);
  cuadros.push(cuadro);
}

// Botones e input
const colorInput = document.getElementById("color");
const aplicarBtn = document.getElementById("aplicarColor");
const restaurarBtn = document.getElementById("restaurarColor");

let eventosActivos = false;

aplicarBtn.addEventListener("click", () => {
  const colorSeleccionado = colorInput.value;

  cuadros.forEach(cuadro => {
    cuadro.onmouseenter = () => {
      cuadro.style.backgroundColor = colorSeleccionado;
    };
    cuadro.onmouseleave = () => {
      cuadro.style.backgroundColor = colorSeleccionado;
    };
  });

  eventosActivos = true;
});

restaurarBtn.addEventListener("click", () => {
  cuadros.forEach(cuadro => {
    // Restaurar color y eliminar eventos
    cuadro.style.backgroundColor = "#fdfdfd";
    cuadro.onmouseenter = null;
    cuadro.onmouseleave = null;
  });

  eventosActivos = false;
});