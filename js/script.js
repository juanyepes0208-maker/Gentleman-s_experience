// 1. Capturar los elementos clave del DOM mediante sus IDs únicos
const commentForm = document.getElementById("comment-form");
const reviewerName = document.getElementById("reviewer-name");
const reviewerText = document.getElementById("reviewer-text");
const commentsContainer = document.getElementById("comments-container");

// 2. Escuchar el evento 'submit' cuando un usuario hace click en enviar
commentForm.addEventListener("submit", function(event) {
    // Evita que la página web se recargue por defecto al enviar el formulario
    event.preventDefault();

    // 3. Extraer y limpiar (trim) los valores capturados en los inputs
    const nameValue = reviewerName.value.trim();
    const textValue = reviewerText.value.trim();

    // 4. Validar mediante condicionales estructurales (IF)
    if (nameValue !== "" && textValue !== "") {
        
        // 5. Construcción dinámica del nodo HTML para el nuevo comentario
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        // Creamos la etiqueta para el nombre
        const title = document.createElement("h3");
        title.textContent = nameValue;

        // Creamos el párrafo para la opinión
        const paragraph = document.createElement("p");
        paragraph.textContent = textValue;

        // Anidamos el título y el párrafo dentro de la tarjeta
        commentCard.appendChild(title);
        commentCard.appendChild(paragraph);

        // 6. Insertar el nuevo comentario al inicio del contenedor principal
        // Usamos 'prepend' en lugar de 'appendChild' para que los nuevos salgan arriba
        commentsContainer.prepend(commentCard);

        // 7. Resetear los campos del formulario para un nuevo uso
        commentForm.reset();
    }
});
