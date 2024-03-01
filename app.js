document.getElementById("registroForm").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    if (nombre === "" || email === "" || contraseña === "") {
        alert("Por favor completa todos los campos.");
        event.preventDefault();
    }
});