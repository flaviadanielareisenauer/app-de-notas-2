const fs = require("fs"); 


module.exports = moduloTareas = {
  leerJSON: () => {
    const listaDeTareas = fs.readFileSync("./tareas.json", "utf-8");
    return JSON.parse(listaDeTareas);
  },
  escribirJSON: (titulo, estado) => {
    const nuevaTarea = {
      titulo: titulo,
      estado: "pendiente",
    };
    const tareasAnteriores = moduloTareas.leerJSON();
    tareasAnteriores.push(nuevaTarea);
    moduloTareas.guardarTarea(tareasAnteriores);
  },
  guardarTarea: (info) => {
    const nuevoJSON = JSON.stringify(info);
    fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8");
  },
  deshacer: () => {
    const tareas = moduloTareas.leerJSON();
    tareas.pop(); // Elimina el ultimo
    moduloTareas.guardarTarea(tareas);
  },
  filtrarPorEstado: (estados) => {
    const listaDeTareas = moduloTareas.leerJSON();
    const tareasFiltradas = listaDeTareas.filter((tarea) => {
      return tarea.estado.toLowerCase() === estados.toLowerCase();
    });
    return tareasFiltradas;
  },
};


//console.log(moduloTareas.filtrarPorEstado("terminado"))