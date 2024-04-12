function validateForm(event) {
  event.preventDefault(); // Evitar que la página se actualice

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var tipoEntrada = document.getElementById("tipo-entrada").value;

  // Validación de campos obligatorios
  if (nombre == "" || email == "" || telefono == "" || tipoEntrada == "") {
    alert("Todos los campos son obligatorios");
    return false;
  }

  // Validación de formato de correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Ingrese un correo electrónico válido");
    return false;
  }

  // Obtener la lista de confirmación
  var confirmationList = document.getElementById("confirmation-list");

  // Crear elementos de lista para los datos de confirmación
  var nombreItem = document.createElement("li");
  nombreItem.textContent = "Nombre Completo: " + nombre;
  
  var emailItem = document.createElement("li");
  emailItem.textContent = "Correo Electrónico: " + email;
  
  var telefonoItem = document.createElement("li");
  telefonoItem.textContent = "Número de Teléfono: " + telefono;
  
  var tipoEntradaItem = document.createElement("li");
  tipoEntradaItem.textContent = "Tipo de Entrada: " + tipoEntrada;

  // Agregar elementos de lista a la lista de confirmación
  confirmationList.appendChild(nombreItem);
  confirmationList.appendChild(emailItem);
  confirmationList.appendChild(telefonoItem);
  confirmationList.appendChild(tipoEntradaItem);

  // Limpiar los campos del formulario después de enviar
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("tipo-entrada").value = "";

  // Devolver true para permitir el envío del formulario
  return true;
}
