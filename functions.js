   
    function agrandarTarjeta(tarjeta) {
              // Establece el estilo para agrandar la tarjeta
      tarjeta.style.transform = "scale(1.2)"; // Cambia este valor para ajustar el tamaño de la tarjeta
               // Temporizador para volver a la escala original después de 2 segundos (2000 milisegundos)
      setTimeout(function() {
        tarjeta.style.transform = "scale(1)"; // Establece la escala original de la tarjeta
      }, 3000); // Cambia este valor para ajustar el tiempo en milisegundos
    }