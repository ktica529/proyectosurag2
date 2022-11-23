//Etiquetas que controlo:
// let nombre="Catalina" LET local y VAR es global, son constantes
// if(5>1){
//     let nombre="JAMES"
// }
// console.log(nombre)

let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")

//detectar al evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    /*Swal.fire(
        'Exito en el registro',
        'El especialista ha sido registrado',
        'success'
      )*/


      //Recibiendo los datos del formulario
      let nombresMedico=etiquetaNombre.value
      console.log(nombresMedico)

      let documentoMedico=etiquetaDocumento.value
      console.log(documentoMedico)

})