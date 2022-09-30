let salida = document.getElementById('salida');
let numeroFecha = document.getElementById('fecha');

let d = new Date();
let dia = d.getDay(numeroFecha);
//let nFecha = d.toLocaleString();

switch (dia){
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sabado";
        break;
}

salida.innerHTML = dia;
//fecha.innerHTML = nFecha;


