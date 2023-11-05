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
