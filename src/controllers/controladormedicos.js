//Etiquetas que controlo:
// let nombre="Catalina" LET local y VAR es global, son constantes
// if(5>1){
//     let nombre="JAMES"
// }
// console.log(nombre)

//IMPORTACIONES
import { capturaDatos } from '../formularios/formulariomedico.js'

//Etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaespecialidad=document.getElementById("especialidad")
let etiquetaRegistroProfesional=document.getElementById("RegistroProfesional")
let etiquetaCorreoElectronico=document.getElementById("CorreoElectronico")
let etiquetasede=document.getElementById("sede")
let etiquetahorario=document.getElementById("horario")
let etiquetadescripcion=document.getElementById("descripcion")
let etiquetafotografia=document.getElementById("fotografia")

//detectar al evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturaDatos(etiquetaNombre,etiquetaDocumento,etiquetaespecialidad,etiquetaRegistroProfesional,etiquetaCorreoElectronico,etiquetasede,etiquetahorario,etiquetadescripcion,etiquetafotografia)   
})