// declarar variables para la captura de datos
let rate1 = document.querySelector('.rate1');
let rate2 = document.querySelector('.rate2');
let resultBtn = document.querySelector('.result');
let selects = document.querySelectorAll('.options select');
let sel1 = selects[0] ;
let sel2 = selects[1] ;
let inputs = document.querySelectorAll('.input input');
let inpt1 = inputs[0] ;
let inpt2 = inputs[1] ;

let rates = {};
let resquestUrl = "https://api.exchangerate.host/latest?base=USD";

// utilizar la funcion de tomar las monedas de la api
fetchRates();

// crear la funcion async para tomar las monedas de la api
async function fetchRates(){
    // declarar una variable local
    let res = await fetch(resquestUrl);
    res = await res.json();
    rates = res.rates;

    // utilizar la funcion de las options de monedas
    populteOptions();

}

// crear la función para las opciones
function populteOptions() {
    // declara una variable para el val, con valor vacio
    let val = '';
    Object.keys(rates).forEach(code => {
        let str = `<option value="${code}">${code}</option>`;
        // incrementar el optiom hasta la ultima moneda
        val += str;
    })
    // mostrar los options
    selects.forEach((s) => (s.innerHTML = val));

}