

const button = document.querySelector("button");
button.addEventListener("click", () => {
    //console.log("bhdg");  pour fair un test du clic
    //Disparition de l'image
    const image = document.querySelector("img");
    image.style.display = "none";

    //Affichage du massage
    const alert = document.querySelector("#alert");
    alert.style.display = "block";

    //Dissparition du message au bout de 3 seconde
    setTimeout(() => {
        alert.style.display = "none";
    }, 3000);
});