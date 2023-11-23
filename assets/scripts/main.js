const hamburger_menu = document.querySelector(".hamburger-menu");

// Obtén los botones de filtro y las imágenes
const filterButtons = document.querySelectorAll(".filter-btn");
const gridItems = document.querySelectorAll(".grid-item");

// Agrega un evento de clic a cada botón de filtro
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Desactiva el botón activo y activa el botón actual
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Obtén el valor del atributo data-filter del botón actual
        const filterValue = button.getAttribute("data-filter");

        // Oculta todas las imágenes
        gridItems.forEach((item) => {
            item.style.display = "none";
        });

        // Muestra las imágenes que coinciden con el filtro
        if (filterValue === "*") {
            gridItems.forEach((item) => {
                item.style.display = "block";
            });
        } else {
            const filteredItems = document.querySelectorAll(filterValue);
            filteredItems.forEach((item) => {
                item.style.display = "block";
            });
        }
    });
});

// Lógica para el autocompletado del input de búsqueda de productos
var opciones = ["Pantalones", "Outfits Recomendados", "Disfraces", "Halloween", 
                "Navidad", "Verano", "Invierno", "Otoño", "Primavera", "Reuniones",
                "Jeans", "Polos", "Camisas", "Casacas", "Gorros", "Imperneables", 
                "Ropa de vestir", "Ropa elegante", "Ropa casual", "Sport", "Terno",
                "Sport elegante", "Joggers", "Shorts", "Bermudas", "Poleras", "Guantes"];
var entrada = document.getElementById("autocomplete-input");
var suggestion = document.getElementById("autocomplete-suggestion");

function autocompletar(event) {
  var valor = entrada.value.toLowerCase();

  // Ocultar sugerencia si el valor está vacío
  if (valor === "") {
    suggestion.style.display = 'none';
    entrada.style.width = 'auto'; // Restaurar el ancho automático
    return;
  }

  // Filtrar opciones que coincidan con la entrada
  var opcionesFiltradas = opciones.filter(function(opcion) {
    return opcion.toLowerCase().startsWith(valor);
  });

  // Mostrar sugerencia de autocompletado
  if (opcionesFiltradas.length > 0) {
    var sugerencia = opcionesFiltradas[0].substring(valor.length);
    suggestion.textContent = sugerencia;
    suggestion.style.display = 'block';

    // Ajustar el ancho del input en función de la longitud del valor
    entrada.style.width = (valor.length * 10) + 'px';
    
    // Posicionar la sugerencia después del texto escrito en el input
    suggestion.style.left = entrada.offsetLeft + entrada.scrollWidth + 'px';
    suggestion.style.top = entrada.offsetTop + 'px';
    suggestion.style.width = 'auto'; // Restaurar el ancho automático
  } else {
    suggestion.style.display = 'none';
  }
}

function seleccionarConTab(event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Evitar que se pierda el foco
    var sugerencia = suggestion.textContent;
    
    if (sugerencia) {
      entrada.value += sugerencia;
      suggestion.style.display = 'none'; // Ocultar la sugerencia cuando se selecciona una opción
    }

    // Actualizar el ancho del input después de presionar Tab
    var nuevoAncho = entrada.scrollWidth;
    entrada.style.width = nuevoAncho + 'px';
  }
}
