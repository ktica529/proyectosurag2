import {validarFormulario} from './validacionformulariopaciente.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturaDatos(etiquetaNombres,etiquetaDocumento,etiquetaRegimen,etiquetagrupoingreso,etiquetacuotamoderadora,etiquetatelpaciente,etiquetacorreopaciente){

    let nombrespaciente=etiquetaNombres.value
    let documentopaciente=etiquetaDocumento.value
    let regimen=etiquetaRegimen.value
    let grupoingreso=etiquetagrupoingreso.value
    let cuotamoderadora=etiquetacuotamoderadora.value
    let telefono=etiquetatelpaciente.value
    let correo=etiquetacorreopaciente.value
    

    //debemos almacenar todos los valores del formulario
    // en una Sola VARIABLE
    // OBJETO=ALAMCENAR VARIOS DATOS EN 1 SOLO ESPACIO DE MEMORIA 
    let datosFormularioPaciente={
        nombre:nombrespaciente,
        documento:documentopaciente,
        regimen:regimen,
        grupoingreso:grupoingreso,
        cuotamoderadora:cuotamoderadora,
        telefono:telefono,
        correo:correo,
        
    }

    validarFormulario(datosFormularioPaciente)




}