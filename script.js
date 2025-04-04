//1
// const opciones = ["PIEDRA", "PAPEL", "TIJERA"];
// let jugar = "S";

// while (jugar === "S") {

//     const Aleatorio = Math.floor(Math.random() * 3);
//     const Compu = opciones[Aleatorio];

//     let eleccion = prompt("Elige PIEDRA, PAPEL o TIJERA:");

//     if (!eleccion) {
//         console.log ("ERROR. Por favor, intenta de nuevo.");
//         continue;
//     }

//     eleccion = eleccion.toUpperCase();

//     if (!opciones.includes(eleccion)) {
//         console.log ("Elige solo: PIEDRA, PAPEL O TIJERA.");
//         continue;
//     }

//     console.log("Usuario eligió: " + eleccion);
//     console.log("Computadora eligió: " + Compu);

//     if (eleccion === Compu) {
//         console.log("Empato");
//     } else if (
//         (eleccion === "PIEDRA" && Compu === "TIJERA") ||
//         (eleccion === "PAPEL" && Compu === "PIEDRA") ||
//         (eleccion === "TIJERA" && Compu === "PAPEL")
//     ) {
//         console.log("gano");
//     } else {
//         console.log("perdio que pendejo");
//     }

//     jugar = prompt("¿Quieres jugar de nuevo? (S/N)").toUpperCase();
// }

// console.log("Gracias por jugar");

//2
let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Frutas:", frutas);

frutas.sort();
console.log("Frutas ordenadas:", frutas);


function SingularAPlural(palabra) {
  if (palabra.endsWith('s')) {
    return palabra;
  } else {
    return palabra + 's';
  }
}

let frutasPlural = [];
for (let fruta of frutas) {
  frutasPlural.push(SingularAPlural(fruta));
}
console.log("Frutas en plural:", frutasPlural);


function existeFruta(nombre) {
  return frutas.includes(nombre);
}
console.log("¿Existe 'mango'?", existeFruta("mango")); 
console.log("¿Existe 'uva'?", existeFruta("uva")); 


let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas cortas (≤ 4 letras):", frutasCortas);

function eliminarFruta(nombre) {
  let ft = frutas.indexOf(nombre);
  if (ft !== -1) {
    frutas.splice(ft, 1);
    return true;
  } else {
    return false;
  }
}
console.log("Eliminar 'pera':", eliminarFruta("pera"));
console.log("Eliminar 'mango':", eliminarFruta("mango")); 
console.log("Frutas después de eliminar:", frutas);