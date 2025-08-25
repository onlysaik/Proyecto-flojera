// Mostrar perfil del usuario
const username = localStorage.getItem("username") || "Invitado";
const avatar = localStorage.getItem("avatar") || "👾";
document.getElementById("userProfile").textContent = `Jugador: ${avatar} ${username}`;

// Preguntas de prueba
const preguntas = [
    {
        pregunta: "¿Cómo se llama el protagonista de One Piece?",
        opciones: ["Naruto", "Luffy", "Goku", "Eren"],
        respuesta: "Luffy"
    },
    {
        pregunta: "¿Qué empresa creó Minecraft?",
        opciones: ["Mojang", "Nintendo", "Epic Games", "Valve"],
        respuesta: "Mojang"
    },
    {
        pregunta: "En Death Note, ¿cuál es el nombre real de 'L'?",
        opciones: ["Light Yagami", "Ryuk", "Lelouch", "L Lawliet"],
        respuesta: "L Lawliet"
    },
    {
        pregunta: "¿Qué videojuego es famoso por su dificultad extrema?",
        opciones: ["Dark Souls", "Super Mario", "FIFA", "Candy Crush"],
        respuesta: "Dark Souls"
    },
    {
        pregunta: "¿Cuál es el Pokémon número 25 en la Pokédex?",
        opciones: ["Bulbasaur", "Charmander", "Pikachu", "Eevee"],
        respuesta: "Pikachu"
    }
];

// Variables
let currentQuestion = 0;
let score = 0;

// Referencias
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const resultText = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const highScoreText = document.getElementById("highScore");

// Cargar récord personal
let highScore = localStorage.getItem("highScore") || 0;
highScoreText.textContent = `Récord personal: ${highScore}`;

// Mostrar una pregunta
function mostrarPregunta() {
    resultText.textContent = "";
    nextBtn.style.display = "none";
    optionsDiv.innerHTML = "";

    const q = preguntas[currentQuestion];
    questionText.textContent = q.pregunta;

    q.opciones.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => checkRespuesta(op);
        optionsDiv.appendChild(btn);
    });
}

// Verificar respuesta
function checkRespuesta(opcion) {
    const correcta = preguntas[currentQuestion].respuesta;
    if (opcion === correcta) {
        resultText.textContent = "✅ ¡Correcto!";
        score++;
    } else {
        resultText.textContent = `❌ Incorrecto. La respuesta era: ${correcta}`;
    }
    nextBtn.style.display = "block";
}

// Siguiente pregunta
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < preguntas.length) {
        mostrarPregunta();
    } else {
        questionText.textContent = "🏆 Trivia terminada!";
        optionsDiv.innerHTML = "";
        resultText.textContent = `Tu puntaje final: ${score}/${preguntas.length}`;

        // Guardar récord si es mejor
        if (score > highScore) {
            localStorage.setItem("highScore", score);
            highScore = score;
            highScoreText.textContent = `🏅 Récord personal: ${highScore}`;
            resultText.textContent += " 🎉 ¡Nuevo récord!";
        }

        // 📊 Actualizar estadísticas
        let games = parseInt(localStorage.getItem("games") || 0);
        let totalScore = parseInt(localStorage.getItem("totalScore") || 0);

        games++;
        totalScore += score;

        localStorage.setItem("games", games);
        localStorage.setItem("totalScore", totalScore);

        // Mostrar mensaje con nivel
        const level = Math.floor(totalScore / 5) + 1;
        resultText.textContent += ` | Nivel actual: ${level}`;

        nextBtn.style.display = "none";
    }
});


// Iniciar trivia
mostrarPregunta();
