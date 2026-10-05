// 1. Capturar los elementos clave del DOM mediante sus IDs únicos
const commentForm = document.getElementById("commentForm");
const reviewerName = document.getElementById("reviewerName");
const reviewerText = document.getElementById("reviewerText");
const commentsContainer = document.getElementById("commentsContainer");

// It listens when the user sends the form
commentForm.addEventListener("submit", function(event) {
    // It avoids the page refresh by itself
    event.preventDefault();

    // 3. It extracts what the user types and cleans the spaces at the begining and at the end
    const nameValue = reviewerName.value.trim(); /* .value extracts what the user typed*/
    const textValue = reviewerText.value.trim(); /* .trim deletes the spaces at the begining and at the end*/

    if (nameValue !== "" && textValue !== "") { /* It is restrictly different to empty, I need to check if there is
        some text in the input*/
        
        const commentCard = document.createElement("div"); // It will create a div
        commentCard.classList.add("commentCard"); // commentCard.classList accesses to the list CSS classes that it has this 
        // element and .add("commentCard") the new comment will inherit that it has this commentCard

        const title = document.createElement("h3"); /* It will create a h3*/
        title.textContent = nameValue; // When the title will have as text the name of the user

        const paragraph = document.createElement("p"); /*  It will create a p */
        paragraph.textContent = textValue; // The paragraph will be as text the text value

        commentCard.appendChild(title); // Inside the commentCard add the title son
        commentCard.appendChild(paragraph); // Inside the commentCard add the paragraph son

        // 6. Insertar el nuevo comentario al inicio del contenedor principal
        // Usamos 'prepend' en lugar de 'appendChild' para que los nuevos salgan arriba
        commentsContainer.prepend(commentCard); // commentsContainer is the div I just created and .prepend(commentCard) will
        // add the div at the begining, because if I use appenChild will go to the bottom

        commentForm.reset(); // commentForm is the form and .reset is a native JavaScript method to clean it
    }
});
