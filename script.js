script.js
const button = document.querySelector(".generate");

const response = document.querySelector(".response p");


button.addEventListener("click",()=>{


let frases=[

"Podrías decir: Me parece que hablar contigo siempre mejora mi día 😏",

"Prueba con algo divertido: Creo que necesito una explicación... ¿cómo haces para caer tan bien?",

"Una opción romántica: Me gusta la energía que transmites, es difícil no querer conocerte más."

];


let random =
frases[Math.floor(Math.random()*frases.length)];


response.innerHTML=random;


});
