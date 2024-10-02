window.onload = () => {
  const palabras = {
    articulo: ["El"],
    adjetivo: ["pequeño", "joven", "jugueton", "solitario"],
    sustantivo: ["perro"],
    verbo: ["agarro", "mordio", "comio"],
    objeto: ["casa", "cama", "mesa"],
    lugar: ["en mi cama", "en mi escritorio"]
  };

  const colores = ["rojo", "azul", "verde"];

  const generarFrase = () => {
    const frase = Object.values(palabras)
      .map(arr => arr[Math.floor(Math.random() * arr.length)])
      .join(" ");

    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    const elementoFrase = document.getElementById("excuse");
    elementoFrase.style.fontSize = "24px";
    elementoFrase.textContent = frase;
    elementoFrase.style.color = colorAleatorio;
  };

  generarFrase();

  const boton = document.createElement("button");
  boton.textContent = "Generar nueva frase";
  boton.addEventListener("click", generarFrase);
  document.body.appendChild(boton);
};
