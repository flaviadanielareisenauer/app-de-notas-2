const moduloTareas = require("./tareas.js");
const process = require("process");
const comando = process.argv[2];


switch (comando) {
  case "listar":
    const tareas = moduloTareas.leerJSON();
    if (tareas.length === 0) {
      console.log("Tu lista de tareas está vacia.");
    } else {
      tareas.forEach((tarea) => {
        console.log("Titulo: " + tarea.titulo + " - Estado: " + tarea.estado);
      });
    }
    break;
  case "crear":
    const titulo = process.argv[3];
    const estado = process.argv[4];
    moduloTareas.escribirJSON(titulo, estado);
    break;
  case "deshacer":
    moduloTareas.deshacer();
    break;
  case "filtrar":
    const estados = process.argv[3];
    const listaFiltrada = moduloTareas.filtrarPorEstado(estados);
    if (listaFiltrada.length === 0) {
      console.log("No existen tareas con ese estado.");
    } else {
      listaFiltrada.forEach((tarea) => {
        console.log("Titulo: " + tarea.titulo + " - Estado: " + tarea.estado);
      });
    }
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
}