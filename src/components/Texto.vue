
<template>
    <link rel="stylesheet" href="../assets/Chalkduster400.ttf">
    <div class="texto">
      <a class="primerParrafo">"Euskal Herriko kostaldean zabaltzen den hondartza ezin hobean surf egitera animatzen zaitugu! Zure abentura hasi eta olatuetaz gozatu! Zatozte gurekin surf egiteko esperientzia bikaina bizitzera!</a>
      {{ datos }}
    </div>
  </template>
  
  <script>

  </script>
  
  <style>
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
  
  .router-link-exact-active {
    background-color: rgba(0, 0, 0, 0.287);
  }
  </style>
  