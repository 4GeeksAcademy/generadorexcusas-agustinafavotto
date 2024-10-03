window.onload = () => {
  const palabras = {
    articulo: ["El"],
    adjetivo: ["pequeño", "joven", "jugueton", "solitario"],
    sustantivo: ["perro"],
    verbo: ["agarro", "mordio", "comio"],
    objeto: ["casa", "cama", "mesa"],
    lugar: ["en mi cama", "en mi escritorio"]
  };

  const generarFrase = () => {
    const frase = Object.values(palabras)
      .map(arr => arr[Math.floor(Math.random() * arr.length)])
      .join(" ");

    const elementoFrase = document.getElementById("excuse");
    elementoFrase.style.fontSize = "24px";
    elementoFrase.textContent = frase;
    const level = document.getElementById("dificultad").value;
    console.log(level);

    if (level === "facil") {
      elementoFrase.style.color = "green";
    } else if (level === "medio") {
      elementoFrase.style.color = "blue";
    } else {
      elementoFrase.style.color = "red";
    }
  };

  generarFrase();

  const boton = document.createElement("button");
  boton.textContent = "Generar nueva frase";
  boton.addEventListener("click", generarFrase);
  document.body.appendChild(boton);
};
