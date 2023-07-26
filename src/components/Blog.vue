<template>
<h1 class="tituloblog" >BLOG</h1>
<h2 class="titulopadel" >PADEL SURF EN KOBA</h2>
<div class="textokoba" >
    <p class="pkoba" >Conocida por su majestuosa entrada de forma semicircular que da hacia el mar Cantábrico, la Cueva de Koba ofrece una vista espectacular tanto desde el interior como desde el exterior. Su acceso por el lado del acantilado brinda una experiencia única y emocionante mientras se observan las aguas azules que chocan contra las rocas.<br>

<br>En el interior, los visitantes pueden maravillarse con estalactitas y estalagmitas de diversas formas y tamaños, creando una atmósfera mística y cautivadora. <br>

<br>La Cueva de Koba ofrece una experiencia enriquecedora para los aficionados que buscan sumergirse en la belleza natural y el patrimonio histórico del País Vasco. Ya sea disfrutando del impresionante paisaje desde la entrada o explorando sus misteriosas profundidades, este tesoro natural es un destino imperdible para todos los que visitan la hermosa localidad vasca de Bakio.<br></p>
</div>
<div>
    <img src="../assets/Gorabide-SUP/sup1.jpg" alt="">
    <img src="../assets/Gorabide-SUP/sup4.jpg" alt="">

    <img src="../assets/Gorabide-SUP/sup3.jpg" alt="">
    <img src="../assets/Gorabide-SUP/sup2.jpg" alt="">

    <img src="../assets/Gorabide-SUP/sup5.jpg" alt="">
    <img src="../assets/Gorabide-SUP/sup6.jpg" alt="">
    
</div>
<h2 class="titulogorakide" >GORAKIDE</h2>
<p class="textogorabidee" >Esperiencia inmejorable colaborando con GORABIDE, organizacion sin animo de lucro para discapacitados</p>
<div>
    <img src="../assets/Gorabide-SUP/gorabide10.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide11.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide12.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide13.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide14.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide15.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide16.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide17.jpg" alt="">
    <img src="../assets/Gorabide-SUP/gorabide18.jpg" alt="">




</div>
<h2 class="titulogorakide" >EXCURSIÓN A SAN JUAN</h2>
<div class="cajataextosanjuan" >
<p class="textosanjuan" >Es conocido por su impresionante ermita ubicada en la cima de un pequeño islote rocoso. Para llegar a la ermita, los visitantes deben subir una escalinata serpenteante compuesta por 241 escalones, disfrutando de vistas panorámicas del mar Cantábrico en cada paso. Cada 24 de junio, en la festividad de San Juan, la ermita atrae a numerosos peregrinos y turistas que vienen a rendir homenaje y disfrutar de la belleza y espiritualidad de este lugar único.</p>
</div>
<div>
    <img src="../assets/fotosbakio/sanjuangaztelugatxe.jpg" alt="">
    <img src="../assets/fotosbakio/Cañoneneperi.jpg" alt="">
    <img class="bakiodesdemar" src="../assets/fotosbakio/bakiodesdealante.jpg" alt="">



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
*{
    font-family: "Original Surfer";
}
.bakiodesdemar{
    width: 20rem;
    height: 14rem;
}
.cajataextosanjuan{
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 1.5rem;
}
.textokoba{
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 1.5rem;
    
}

.textogorabidee{
    font-family: 'Original Surfer', sans-serif; /*Utiliza comillas en el nombre de la fuente */
  
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 3rem;
    margin-right: 3rem;
}
.titulogorakide{
    margin-left: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.titulopadel{
    margin-left: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}

img{
    width: 20rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;    
    margin-bottom: 2rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.tituloblog{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 6rem;
    margin-right: 4rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
}


    /* Estilos para pantallas grandes */
    .textogorabidee,
    .titulogorakide,
    .titulopadel,
    .tituloblog,
    .pkoba {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  
    img {
      width: 20rem;
      margin-left: 2rem;
      margin-right: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  
    /* Estilos para pantallas medianas */
    @media screen and (max-width: 1024px) {
      .textogorabidee,
      .titulogorakide,
      .titulopadel,
      .tituloblog,
      .pkoba {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
      }
  
      img {
        width: 15rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  
    /* Estilos para pantallas pequeñas */
    @media screen and (max-width: 768px) {
      .textogorabidee,
      .titulogorakide,
      .titulopadel,
      .tituloblog,
      .pkoba {
        margin-left: 1rem;
        margin-right: 1rem;
      }
  
      img {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  </style>
  
 
  
        
        