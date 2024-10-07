window.onload = () => {
  const palabras = {
    articulo: ["El", "La", "Los", "Las"],
    adjetivo: ["pequeño", "joven", "juguetón", "solitario", "feliz", "triste"],
    sustantivo: ["perro", "gato", "niño", "niña", "casa", "coche"],
    verbo: ["agarro", "mordio", "comio"],
    adverbio: ["rápidamente", "lentamente", "felizmente", "tristemente"],
    preposicion: ["en", "sobre", "bajo", "detrás"]
  };

  const coloresVerbos = {
    agarro: "green",
    mordio: "blue",
    comio: "red"
  };

  const generarFrase = () => {
    const nivelSeleccionado = document.getElementById("dificultad").value;
    const frase = [
      palabras.articulo[Math.floor(Math.random() * palabras.articulo.length)],
      palabras.adjetivo[Math.floor(Math.random() * palabras.adjetivo.length)],
      palabras.sustantivo[Math.random() * palabras.sustantivo.length],
      palabras.verbo[Math.floor(Math.random() * palabras.verbo.length)],
      palabras.adverbio[Math.floor(Math.random() * palabras.adverbio.length)],
      palabras.preposicion[
        Math.floor(Math.random() * palabras.preposicion.length)
      ]
    ].join(" ");

    const elementoFrase = document.getElementById("frase");
    elementoFrase.textContent = frase;

    const verbo = frase
      .split(" ")
      .find(palabra => palabras.verbo.includes(palabra));

    elementoFrase.style.color = coloresVerbos[verbo] || "black";
  };

  const boton = document.createElement("button");
  boton.textContent = "Generar nueva frase";
  boton.addEventListener("click", generarFrase);
  document.body.appendChild(boton);
};
