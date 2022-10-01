const inputDay = document.getElementById('inputDay');
const inputMonth = document.getElementById('inputMonth');
const inputYear = document.getElementById('inputYear');
const rev = document.getElementById("revisar");
const res = document.getElementById("resultado");

rev.addEventListener("click",() => {
    if(inputYear.value <= 0){
        alert("El año debe ser mayor a cero");
        return ;
    }
    if(inputDay.value < 1 || inputDay.value > 31){
        alert("El mes tiene que tener 31 dias");
        return ;
    }
    if(inputMonth.value <1 || inputMonth > 12){
        alert("El año solo puede tener de 1 a 12 meses");
        return ;
    }
    let fecha = new Date(inputYear.value, inputMonth.value-1, inputDay.value);
    let dias = fecha.getDay();
    let dia = "";


    switch (dias){
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
    if(dias === 0 || dias === 6){
        dia += " No es laboral";
    }else{
        dia += " Laboral";
    }
    res.value = dia;
});

