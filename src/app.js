window.onload = () => {
  const palabras = {
    articulo: ["El"],
    adjetivo: ["pequeño", "joven", "jugueton", "solitario"],
    sustantivo: ["perro"],
    verbo: ["agarro", "mordio", "comio"],
    objeto: ["casa", "cama", "mesa"],
    lugar: ["en mi cama", "en mi escritorio"]
  };
  const level = {
    facil: ["agarro"],
    medio: ["mordio"],
    dificil: ["comio"]
  };
  const colores = {
    facil: ["green"],
    medio: ["blue"],
    dificil: ["red"]
  };
  const generarFrase = () => {
    const frase = Object.values(palabras)
      .map(arr => arr[Math.floor(Math.random() * arr.length)])
      .join(" ");
    const elementoFrase = document.getElementById("excuse");
    elementoFrase.textContent = frase;
    const level = document.getElementById("dificultad").value;
    if (level === "facil") {
      elementoFrase.style.color = colores["facil"];
    } else if (level === "medio") {
      elementoFrase.style.color = colores["medio"];
    } else if (level === "dificil") {
      elementoFrase.style.color = colores["dificil"];
    }
  };
  const boton = document.createElement("button");
  boton.textContent = "Generar nueva frase";
  boton.addEventListener("click", generarFrase);
  document.body.appendChild(boton);
};
