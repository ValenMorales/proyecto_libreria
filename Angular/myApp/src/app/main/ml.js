function mostrarFechaHoraActual() {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const fechaHoraActual = new Date().toLocaleString('es-ES', opciones);
    const divFechaHora = document.getElementById("current_date");
    divFechaHora.innerHTML = fechaHoraActual;
  }
  