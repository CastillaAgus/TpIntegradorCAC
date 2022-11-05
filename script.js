const btnResumen = document.getElementById("btnResumen");
const cantEntradas = document.getElementById("cantEntradas");
const pTotalPago = document.getElementById("pTotalPago");
const categoria = document.getElementById("categoria").value;
const btnBorrar = document.getElementById("btnBorrar");
let entrada = 200;
let total;
let descJunior = 0.15;
let descEstudiante = 0.8;
let descTrainee = 0.5;




function pagoTotal() {
    if (categoria == "Estudiante") {
        total = (entrada * descEstudiante) * cantEntradas.value;
    } else if (categoria == "Junior") {
        total = (entrada * descJunior) * cantEntradas.value;
    } else if (categoria == "Trainee") {
        total = (entrada * descTrainee) * cantEntradas.value;
    } else {
        total = entrada * cantEntradas.value;
    }
    return total;
}

function mostrarResumen() {
    pTotalPago.innerHTML = "Total a pagar: $ " + total;
}

function borrar() {
    pTotalPago.innerHTML = "Total a pagar: $ 0";
}

cantEntradas.addEventListener("click", pagoTotal);
btnResumen.addEventListener("click", mostrarResumen);
btnBorrar.addEventListener("click", borrar);