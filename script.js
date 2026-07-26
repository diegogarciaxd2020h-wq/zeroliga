script.js
let categoriaSeleccionada = "";

const botones = document.querySelectorAll(".options button");

const botonGenerar = document.querySelector(".generate");

const respuesta = document.querySelector(".response p");


// Seleccionar categoría

botones.forEach((boton)=>{

    boton.addEventListener("click",()=>{

        categoriaSeleccionada = boton.innerText;


        botones.forEach((b)=>{
            b.classList.remove("selected");
        });


        boton.classList.add("selected");

    });

});


// Generar respuesta

botonGenerar.addEventListener("click",()=>{


    const texto = document.querySelector("textarea").value;


    if(texto.trim() === ""){

        respuesta.innerHTML =
        "Primero escribe una situación para ayudarte 💜";

        return;

    }


    if(categoriaSeleccionada === ""){

        respuesta.innerHTML =
        "Selecciona primero qué tipo de respuesta quieres 💜";

        return;

    }



    let frases = [

    "Podrías responder: Creo que eres una persona interesante, me gustaría conocerte más 😏",

    "Una opción sería: No sé por qué, pero hablar contigo tiene algo diferente 😊",

    "Podrías decir: Me gusta tu energía, creo que podríamos tener una buena conversación 💜"

    ];



    let frase =
    frases[Math.floor(Math.random()*frases.length)];


    respuesta.innerHTML = frase;


});
