<template>
<h1 class="nosotrostitulo" >NOSOTROS</h1>  

<div class="nombre" >

    <div class="nombress"  >
        <div class="mikel" >
            <h2 class="nombremikel" >MIKEL GOITIA</h2><br>
            <img class="fotomikel" src="../assets/MYA/mikel.png" alt="mikel">
            
        </div>
        <div class="cajaAnton" >
            <h2 class="nombreanton" >ANTON GOITIA</h2>
            <img class="anton" src="../assets/MYA/anton.png" alt="anton">
        </div> 
       
    </div>
    <div>
        <p class="textoMyA" >Mikel Goitia y Anton Goitia, locales de Bakio, somos unos apasionados del mar y la naturaleza. Nuestro amor por el océano se refleja en nuestra dedicación como instructores de surf. Con una amplia experiencia y múltiples certificaciones.</p>
        <p class="textoMyA" >Ambos poseemos los títulos de nivel 1 y nivel 2 de la EHSF (Euskal surf federazioa), lo que demuestra nuestra sólida formación y conocimiento en técnicas de surf. Además, contamos con una certificación en socorrismo para surfistas y rescates de surf, lo que garantiza la seguridad de nuestros estudiantes en el agua.</p>
    </div>   
</div>

<h2 class="dondeestamostitulo" >¿DONDE ESTAMOS?</h2>
<div>
    <P class="textoMyA" >Bakio es un lugar idílico para aquellos que buscan conectar con la naturaleza, disfrutar de la playa y el mar, y maravillarse con la belleza del paisaje vasco en la costa norte de España. Es un destino que combina a la perfección la belleza del mar con la majestuosidad de la naturaleza circundante, creando un lugar verdaderamente especial y memorable para todos los que lo visitan. 
        Su hermosa playa, sus impresionantes acantilados, su rica vida marina y su entorno natural lo convierten en un destino ideal para aquellos que buscan disfrutar de la belleza y la tranquilidad de la costa vasca.
    </P>
</div>
<div class="fotosbakio" >
    <img class="fotobakio1" src="../assets/fotosbakio/bakiodesdealante.jpg" alt="">
    <img class="fotobakio" src="../assets/fotosbakio/playadebakio.jpg" alt="">
    <img class="fotobakio3" src="../assets/fotosbakio/acantiladosbakio.jpg" alt="">

</div>

<div class="contenedor_info_sitio" >
    <div class="google_map" >
        <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d755.6304307577554!2d-2.8122187454826117!3d43.42948131490225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shttps%3A%2F%2Fwww.google.es%2Fmaps%2Fplace%2FZarrakoa%2BBidea%2C%2B5%2C%2B48130%2BBakio%2C%2BBizkaia%2F%4043.429945%2C-2.8146165%2C550m%2Fdata%3D*213m2*211e3*214b1*214m5*213m4*211s0xd4e40361e3d15c1%3A0xc7cc8cf52845ed47*218m2*213d43.4299411*214d-2.8120362%3Fentry%3Dttu%22%3E!5e1!3m2!1ses!2ses!4v1687519325943!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="encuentranos" >   
        <a class="textoo" >Aurki gaitzazu hamen!!<br> // Encuentranos aqui!! </a>
    </div>
</div>


</template>

<style scoped>
.cajaAnton{
    margin-right: 4rem;
}
.fotobakio3{
    width: 25rem;
    height: 17rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 2rem;
}
.fotobakio1{
    width: 25rem;
    height: 17rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 2rem;
}
.fotobakio{
    width: 20rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;    
    
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.dondeestamostitulo{
    margin-left: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.textoMyA{
    font-family: 'Original Surfer', sans-serif; /*Utiliza comillas en el nombre de la fuente */
  font-size: 1.2rem; 
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 3rem;
    margin-right: 3rem;
}
.nombreanton{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.nombremikel{
    margin-left: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.anton{
    width: 28rem;
    height: 20rem;
    
    margin-top: 1rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.fotomikel{
    width: 25rem;
    margin-left: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    
}
.nombress{
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;

}
/* .nombre{
    display: grid;
    grid-template-columns: 50% 50%;
} */

.nosotrostitulo {
    margin-left: 4rem ;
    margin-bottom: 3rem;
    margin-top: 4rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
} 

.nosotros{
    width: 20rem;
    margin-left: 4rem;
}
.encuentranos{
    margin-top: 8rem;
    margin-left: 4rem;
}
.contenedor_info_sitio{
    display: flex;
}

.textoo{
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #0d0606;
    text-align: center;
    text-transform: uppercase;

    margin-left: 3rem;
    margin-bottom: 10rem;
}
.mapa{
    width: 25rem;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 15rem; 
}



@media screen and (max-width: 768px) {
  .nombress {
    flex-direction: column;
  }

  .mikel,
  .nombreanton {
    margin-bottom: 20px;
  }

  .fotomikel{
    max-width: 100%;
    margin-left:0.1rem;
  }
  .anton {
    max-width: 100%;
    margin-left: 0.1rem;
  }
  @media screen and (max-width: 768px) {
    .contenedor_info_sitio {
        flex-direction: column;
    }

    .google_map {
        order: 2;
    }

    .encuentranos {
        order: 1;
        text-align: center;
        margin: 1rem;
    }
    .mapa{
    
    margin-left: 0rem; 
}
}

/* Estilos para pantallas más grandes (por ejemplo, a partir de 992px) */
@media screen and (min-width: 992px) {
    .encuentranos {
        margin-top: 8rem;
        margin-left: 4rem;
    }
}
}


</style>