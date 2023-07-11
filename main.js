console.log("-------- Bienvenidxs al portal de carga de la tarjeta SUBE ---------")


let saldo = Number(prompt("Ingrese su saldo"));
let montoDeCarga = Number(prompt("¿Cuánto desea cargar?"));


const MAX_EN_TARJETA = 2500;
const MIN_EN_TARJETA = -300;


function sumarSaldo(saldo, montoDeCarga){
    return saldo + montoDeCarga;
}

let totalDelSaldo = sumarSaldo(saldo, montoDeCarga)

let nuevaRecarga = 0;

let acc = 0;

for(i= 0; i < 7; i +=1){
    acc += sumarSaldo(saldo, montoDeCarga);
    nuevaRecarga +=1;
    console.log("------- Recarga nº " + nuevaRecarga + " -------")

    if(totalDelSaldo > MAX_EN_TARJETA){
        console.log("Alcanzó el máximo de saldo en la tarjeta. No se puede realizar la recarga")
    } else if(totalDelSaldo > 0 && totalDelSaldo < MAX_EN_TARJETA){
        console.log("Su recarga ha sido exitosa. Su saldo actual es de: $" + totalDelSaldo)
    } else{
        console.log("La recarga fue exitosa. Su saldo actual es de: $" + totalDelSaldo + ". Le recordamos que el saldo mínimo en la SUBE es de $" + MIN_EN_TARJETA)
    }

    let repetirRecarga = confirm("¿Desea hacer otra recarga?")

    if(!repetirRecarga){
        break;
    } else {
        // saldo = totalDelSaldo;
        montoDeCarga = Number(prompt("¿Cuánto desea cargar?"));
        
    }
}







