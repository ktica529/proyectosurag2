//IMPORTACIONES
import { capturaDatos } from '../formularios/formulariopaciente.js'

//Etiquetas que controlo:
let etiquetaNombres=document.getElementById("nombrepaciente")
let etiquetaBotonpac=document.getElementById("botonenviopacte")
let etiquetaDocumento=document.getElementById("docpaciente")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaGrupoingreso=document.getElementById("grupoingreso")
let etiquetaCuotamoderadora=document.getElementById("cuotamoderadora")
let etiquetatelefono=document.getElementById("telpaciente")
let etiquetaCorreoElectronico=document.getElementById("correopaciente")


//detectar al evento de clic
etiquetaBotonpac.addEventListener("click",function(evento){

    evento.preventDefault()
    capturaDatos(etiquetaNombres,etiquetaDocumento,etiquetaRegimen,etiquetaGrupoingreso,etiquetaCuotamoderadora,etiquetatelefono,etiquetaCorreoElectronico)   
})