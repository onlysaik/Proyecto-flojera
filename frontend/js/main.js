// Datos ejemplo
const data = [
    { nombre: "The Legend of Zelda: Ocarina of Time", categoria: "Videojuego", curioso: "Considerado el mejor juego de la historia por muchos rankings." },
    { nombre: "Naruto", categoria: "Anime", curioso: "Originalmente Naruto iba a ser un manga sobre cocina." },
    { nombre: "Dark Souls", categoria: "Videojuego", curioso: "El mensaje más usado en el juego es 'Try finger but hole' 😂." },
    { nombre: "Death Note", categoria: "Anime", curioso: "El nombre de 'L' viene de 'Loser' según el autor." },
    { nombre: "Minecraft", categoria: "Videojuego", curioso: "El sonido del Ghast es en realidad el gato del creador." },
    { nombre: "One Piece", categoria: "Anime", curioso: "Oda planeó terminar One Piece en 5 años, lleva más de 25." }
];

// Referencias

const dataBody = document.getElementById("dataBody");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll("#filterButtons button");

// Estado actual de filtros
let currentCategory = "all";

// Función para mostrar los datos
function mostrarDatos(filtroTexto = "", filtroCategoria = "all") {
    dataBody.innerHTML = "";
    data
        .filter(item => {
            const matchTexto = item.nombre.toLowerCase().includes(filtroTexto.toLowerCase());
            const matchCategoria = (filtroCategoria === "all" || item.categoria === filtroCategoria);
            return matchTexto && matchCategoria;
        })
        .forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.categoria}</td>
                <td>${item.curioso}</td>
            `;
            dataBody.appendChild(row);
        });
}

// Evento de búsqueda
searchInput.addEventListener("input", (e) => {
    mostrarDatos(e.target.value, currentCategory);
});

// Evento en los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Marcar activo el botón
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Cambiar categoría
        currentCategory = button.getAttribute("data-category");
        mostrarDatos(searchInput.value, currentCategory);
    });
});

// Mostrar datos al cargar
mostrarDatos();