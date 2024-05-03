document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    // Aquí puedes agregar el código para enviar los datos del formulario a través de AJAX o realizar otras acciones.
    // Por ahora, solo mostraremos los datos en la consola para fines de demostración.

    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});
