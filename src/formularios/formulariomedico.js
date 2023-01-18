import {validarFormulario} from './validacionformulariomedico.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturaDatos(etiquetaNombre,etiquetaDocumento,etiquetaespecialidad,etiquetaRegistroProfesional,etiquetaCorreoElectronico,etiquetasede,etiquetahorario,etiquetadescripcion,etiquetafotografia){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaespecialidad.value
    let RegistroProfesional=etiquetaRegistroProfesional.value
    let CorreoElectronico=etiquetaCorreoElectronico.value
    let sede=etiquetasede.value
    let horario=etiquetahorario.value
    let descripcion=etiquetadescripcion.value
    let fotografiaMedico=etiquetafotografia.value

    // //console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)
    // console.log(RegistroProfesional)
    // console.log(CorreoElectronico)
    // console.log(sede)
    // console.log(horario)
    // console.log(descripcion)
    // console.log(fotografia)

    //debemos almacenar todos los valores del formulario
    // en una Sola VARIABLE
    // OBJETO=ALAMCENAR VARIOS DATOS EN 1 SOLO ESPACIO DE MEMORIA 
    let datosFormularioMedico={
        nombres:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        Registro:RegistroProfesional,
        Correo:CorreoElectronico,
        sede:sede,
        horario:horario,
        descripcion:descripcion,
        fotografia:fotografiaMedico
    }

    console.log(datosFormularioMedico)

    validarFormulario(datosFormularioMedico)




}