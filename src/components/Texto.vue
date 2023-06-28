
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
  .primerParrafo {
  font-family: 'Chalkduster';
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #0d0606;
  text-align: center;
  
  transition: color 0.3s ease-in-out;
}

  
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
  