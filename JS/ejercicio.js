calcularAnios = () => {

    let fechaDeMiCumple = obtenerCumple();

    if(!fechaDeMiCumple)
     return;
     
    let fechaSplitted = formatoFecha(fechaDeMiCumple);

    let fechaDeMiCumpleConvetida = convertirFecha(fechaSplitted);

    const edad =  calcularEdad(fechaDeMiCumpleConvetida);

    let plan;
    //si edad   <=25             => plan1
    //si edad   > 25 && <= 35    => plan2 (>,<,>=,<=, !==)
    //si edad   > 35             => plan3
    if(edad <=25 ){ 
        plan = 'plan1';
    }
    if(edad > 25 && edad <=35) {
        plan = 'plan2';
    }
    if(edad > 35) {
        plan = 'plan3';   
    }

    mostrarResultado(edad + '-'+ plan);

}

calcularEdad = (fechaDelFormulario) => {
    debugger;
    // logica
    return new Date().getFullYear() - fechaDelFormulario.getFullYear();
}

obtenerCumple = () =>{
    const apuntadorAMiCumple = document.getElementById('miCumple');
    const fechaDeMiCumple = apuntadorAMiCumple.value;
    return fechaDeMiCumple;
}

formatoFecha = (fechaDeMiCumple) =>{
    const fechaSplitted = fechaDeMiCumple.split('-');
    console.log(fechaSplitted);
    return fechaSplitted;
}

convertirFecha = (fechaSplitted) =>{
    const fechaDeMiCumpleConvetida = new Date(fechaSplitted[0], Number(fechaSplitted[1])-1, fechaSplitted[2]);
    return fechaDeMiCumpleConvetida;
}

mostrarResultado = (fechaDeMiCumpleConvetida) =>{
    document.getElementById('resultado').innerHTML =fechaDeMiCumpleConvetida;
}
//