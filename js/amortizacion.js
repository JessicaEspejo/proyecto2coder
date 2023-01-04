
const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const alerta  =document.getElementById('alert-error');
const llenarTabla = document.querySelector('#lista-tabla tbody');

//PARA QUE MUESTRE Y OCULTE UN CONTENIDO
function mostrarResul() {
    document.getElementById('hideResul').style.display= 'block';
}
function ocultarResul() {
    document.getElementById('hideResul').style.display= 'none';
}

function Mostrar_Ocultar() {
   let hideResul =  document.getElementById('hideResul');
   if(hideResul.style.display == 'none'){
    mostrarResul();
    document.getElementById('btnCalcular').value = "X";
   }else{
    ocultarResul()
    document.getElementById('btnCalcular').value = "CALCULAR PRESTAMO";
   }
}


//paraque salga llene todos los campos de la tabla
btnCalcular.addEventListener('click',  ()=>{
    if (monto.value === '' || tiempo.value == '' || interes.value == '' ) {
        alerta.hidden = false;
        setTimeout(() =>{
            alert.hidden = true;
        },2000);
    }else{
        calcularCuota(monto.value, interes.value , tiempo.value);
    }
    });




function calcularCuota(monto, interes, tiempo){




    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }


    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);

    for(let i = 1; i <= 1; i++) {

        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);


           //  por si necesito el pago capital <td>${pagoCapital.toFixed(1)}</td>
  

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cuota.toFixed(1)}</td>
            <td>${pagoInteres.toFixed(1)}</td>
            <td>${monto.toFixed(1)}</td>
        `;
        llenarTabla.appendChild(row)
    }
}

