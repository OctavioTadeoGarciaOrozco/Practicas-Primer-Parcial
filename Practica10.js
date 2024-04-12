function actualizarRelojes() {
    const relojDigital = document.getElementById('reloj-digital');
    const horaElement = document.querySelector('.hora');
    const minutoElement = document.querySelector('.minuto');
    const segundoElement = document.querySelector('.segundo');
  
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
    relojDigital.textContent = `${horas}:${minutos}:${segundos}`;
  
    const horaGrados = ahora.getHours() * 30 + ahora.getMinutes() * 0.5;
    const minutoGrados = ahora.getMinutes() * 6 + ahora.getSeconds() * 0.1;
    const segundoGrados = ahora.getSeconds() * 6;
  
    horaElement.style.transform = `rotate(${horaGrados}deg)`;
    minutoElement.style.transform = `rotate(${minutoGrados}deg)`;
    segundoElement.style.transform = `rotate(${segundoGrados}deg)`;
  }
  
  actualizarRelojes();
  setInterval(actualizarRelojes, 1000);
  
