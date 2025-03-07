document.addEventListener("DOMContentLoaded", () => {
    // Si el usuario ya está autenticado, redirigirlo a la página principal
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "index.html";
    }

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // Credenciales predefinidas (puedes cambiarlas)
        const validUser = "admin";
        const validPass = "1234";

        if (username === validUser && password === validPass) {
            // Guardar en localStorage que el usuario ha iniciado sesión
            localStorage.setItem("loggedIn", "true");

            // Redirigir a la página principal
            window.location.href = "index.html";
        } else {
            // Mostrar mensaje de error
            errorMessage.textContent = "Usuario o contraseña incorrectos.";
            errorMessage.style.display = "block";
        }
    });
});
