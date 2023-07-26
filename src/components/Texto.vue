
<template>
    <link rel="stylesheet" href="../assets/Chalkduster400.ttf">
    <div class="texto">
      <a class="primerParrafo">"Euskal Herriko kostaldean zabaltzen den hondartza ezin hobean surf egitera animatzen zaitugu! Zure abentura hasi eta olatuetaz gozatu! Zatozte gurekin surf egiteko esperientzia bikaina bizitzera!</a>
      {{ datos }}
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
@font-face {
  font-family: 'Original Surfer';
  src: url('../assets/original-surfer/OriginalSurfer-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
/* @font-face {
  font-family: 'Chalkduster';
  src: url('../assets/Chalkduster/Chalkduster.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} */

.primerParrafo {
  
  font-family: 'Original Surfer', sans-serif; /*Utiliza comillas en el nombre de la fuente */
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #0d0606;
  text-align: center;
  transition: color 0.3s ease-in-out;
}

  /* @font-face {
  font-family: 'Original Surfer';
  src: url('../assets/original-surfer/OriginalSurfer-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

  .primerParrafo {
  font-family: original-surfer;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #0d0606;
  text-align: center;  
  transition: color 0.3s ease-in-out;
} */

  
  .texto {
    width: 50%;
    margin: 0 auto;
    margin-top: 3rem;
    text-align: center;
    margin-left: 21rem;
    margin-bottom: 3rem;
  }
  
  

  /* Estilos para pantallas con un ancho máximo de 600px */
@media (max-width: 600px) {
  .texto {
    width: 80%; /* Ajusta el ancho para que ocupe el 80% del ancho de la pantalla */
    margin-left: auto; /* Elimina el margen izquierdo */
    margin-right: auto; /* Elimina el margen derecho */
    margin-top: 2rem; /* Reduce el margen superior */
    margin-bottom: 2rem; /* Reduce el margen inferior */
  }

  .primerParrafo {
    font-size: 1.2rem; /* Reduce el tamaño del texto */
  }
}

/* Estilos para pantallas con un ancho mínimo de 601px y máximo de 900px */
@media (min-width: 601px) and (max-width: 900px) {
  .texto {
    width: 70%; /* Ajusta el ancho para que ocupe el 70% del ancho de la pantalla */
  }
}
  </style>
  