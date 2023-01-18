export function validarFormulario(datos){
    
    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombrepaciente")
    let etiquetaDocumento=document.getElementById("docpaciente")
    

    //validamos 3 campos del formulario
    //nombres-documento-registro del medico
    let nombrespaciente=datos.nombre
    let documentopaciente=datos.documento
    

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR 
    //EL FORMULARIO
    if(nombrespaciente=="" && documentopaciente==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios',
            
          })
    }else if(nombrespaciente=="" && documentopaciente!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")     
    }else if(nombrespaciente!="" && documentopaciente==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        alert("nos vamos para la bd")
    }

}