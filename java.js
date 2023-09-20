document.addEventListener("DOMContentLoaded", function() {
    // Crear variables para cada elemento a utilizar
    var entradaTarea = document.getElementById("entradaTarea");
    var listaTareas = document.getElementById("listaTareas");
    var agregarButton = document.getElementById("agregarButton");
  
    // Evento click del botón Agregar
    agregarButton.addEventListener("click", function() {
      var textoTarea = entradaTarea.value.trim(); // Obtener el valor y eliminar espacios en blanco
  
      // Verificar si el campo de entrada de tarea está vacío o contiene solo espacios
      // Si no se ingresó ningún texto en el input, mostrar una alerta y salir de la función
      if (textoTarea === "") {
        alert("No ingresaste ningún comentario");
        return;
      }
  
      // Si el input NO se encuentra vacío, se agrega la tarea:
      var elementoTarea = document.createElement("li");
      elementoTarea.textContent = textoTarea;
  
      var botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("delete-button");
      elementoTarea.appendChild(botonEliminar);
  
      // Evento click del botón Eliminar
      botonEliminar.addEventListener("click", function() {
        // Pedir confirmación antes de borrar el comentario
        if (confirm("¿Estás seguro de que quieres borrar este comentario?")) {
          elementoTarea.remove();
          console.log("Se eliminó un comentario: " + textoTarea);
        }
      });
  
      // Agregar la tarea a la lista
      listaTareas.appendChild(elementoTarea);
      console.log("Se agregó un comentario: " + textoTarea);
  
      // Vaciar el input al agregar la tarea
      entradaTarea.value = "";
    });
  });
  
  
  

  