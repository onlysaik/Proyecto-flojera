document.getElementById("btnEntrar").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const avatar = document.getElementById("avatar").value;

    if (username === "") {
        alert("Por favor ingresa un nombre gamer 😅");
        return;
    }

    // Guardar perfil en localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("avatar", avatar);

    // Redirigir al main
    window.location.href = "main.html";
});
