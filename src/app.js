window.onload = function() {
  // array with the words
  let first = "El ";
  let adj = [
    "pequeño ",
    "joven ",
    "jugueton ",
    "solitario ",
    "loquillo ",
    "mordelon ",
    "malcriado ",
    "rompedor ",
    "papel ",
    "tarea "
  ];
  let noun = ["perro "];
  let action = [
    "agarro mi ",
    "mordio mi ",
    "comio mi ",
    "jugo con mi ",
    "me robo mi ",
    "escondio mi ",
    "meo mi "
  ];
  let possetion = [
    "casa ",
    "cama ",
    "mesa ",
    "escritorio ",
    "laptop ",
    "mueble "
  ];
  let where = [
    "en mi cama",
    "en mi escritorio",
    "en el piso de casa",
    "sobre la mesa del living",
    "dentro de un cajon",
    "detras de una puerta",
    "debajo de mi cama"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
