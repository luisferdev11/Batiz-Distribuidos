const interface = require('readline-sync');

const OPERACIONES = {
    1:(a,b)=> parseFloat(a) + parseFloat(b),
    2:(a,b)=> parseFloat(a) - parseFloat(b),
    3:(a,b)=> parseFloat(a) * parseFloat(b),
    4:(a,b)=> parseFloat(a) / parseFloat(b)
};

let respuesta = "";

do{
    console.log("1.-Suma");
    console.log("2.-Resta");
    console.log("3.-Multiplicación");
    console.log("4.-División");
    console.log("5.-Salir");
    respuesta = interface.question("Qué operación desea realizar, escribe el número: ");

    if(respuesta != "5"){
        const Numero1 = interface.question("Ingrese el primer numero: ");
        const Numero2 = interface.question("Ingrese el segundo numero: ");
        const operacion = OPERACIONES[respuesta](Numero1, Numero2);
        console.log(operacion);
}

}while(respuesta != "5");