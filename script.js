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
let frutas= ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]
console.log(frutas.sort())

function SingularAPlural(palabra) {
    if (palabra.endsWith("s")){
        return palabra
    }
    return palabra + "s"
}   
console.log(SingularAPlural(frutas[3]))

for(palabra of )