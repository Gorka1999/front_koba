<template>
<div class="fondo" >
<div class="precios_udalekus">
    <div class="preciosudalekus" >
        <h1 class="tituloudalekus" >UDALEKUAK</h1>
        <div class="cajaatexto" >
        <a class="texto_udalekus">"Si estas buscando una experiencia única y emocionante
para tus hijos, ¡este es el lugar !
Durante este tiempo, los niños realizaran muchas
actividades emocionantes, incluyendo clases de surf,
surfskate, merienda saludable y disfrutaran del
medio naturalde Bakio y sus alrededores."</a>
        </div>
       
        <ul class="listapreciosudalekus" >
            <li>1 SEMANA 150€</li><br>
            <li>2 SEMANAS CONSECUTIVAS 270€</li><br>
            <li>3 SEMANAS CONSECUTIVAS 385€</li><br>
            <li>4 SEMANAS CONSECUTIVAS 480€</li><br>
        </ul>
    </div>

    
    
    
</div>

<div class="incluye">
    <div>
        <h2 class="incluye_titulo">INCLUYE</h2><br>
        
        <Ul class="incluye_lista">
            <li>SEGURO DE RESPONSABILIDAD CIVIL</li>
            <br>
            <li>MATERIAL TECNICO</li>
            <br>
            <li>HAMAIKETAKO</li>
            <br>
            <li>USO DE NUESTRAS INSTALACIONES</li>
        </Ul>
    </div>
    <img class="salvamento" src="../assets/capturasTablasPrecio/salvamento.png" alt="salvamento"> 
    
    
    
</div>
<div class="actividadescaja" >
    <h2 class="tituloactividades" >ACTIVIDADES</h2>
    <div class="listaactividades" >
        <div class="listaactividad" >
            <ul>
                <li>DURACION DEL CURSO DE SURF 1H30.</li><br>
                <li>SE IMPARTIRAN CLASES DE TECNICAS DE SALVAMENTO DE SURF</li><br>
                <li>JUEGOS EN LA PLAYA: FUTBOL, VOLLEY ...</li><br>
                <li>EXCURSION: SAN JUAN DE GAZTELUGATXE...</li><br>
                <li>TALLERES RELACIONADOS CON EL MEDIO AMBIENTE</li><br>
                <li>SEGURIDAD EN EL MAR...</li><br>
            </ul>
        </div>
        <div>
            <img class="sj_arriba" src="../assets/capturasTablasPrecio/vistas_gaztelugatxe.avif" alt="san_juan_arriba">
        </div>
    </div>


</div>
<div class="actividades">        
    
</div>
<div class="horario" >
   
    <img class="tienda_fisica" src="../assets/tienda_fisica/tienda_fisica.png" alt="tienda_fisica">  
</div>
</div>

<div class="contenedorplaning">
    <h2 class="tituloplaning" >PLANING</h2>
    <div class="listaplaning">
        <ul class="planin" >
            <li>9:30 - 11 SURF</li><br>
            <li>11:00 - 11:30 CAMBIO/DESCANSO</li><br>
            <li>ACTIVIDADES</li><br>
        </ul>
        <div class="cajafotosurf" >
            <img class="fotosurf" src="../assets/Gorabide-SUP/gorabide13.jpg" alt="explicacion">
        </div>
    </div>
</div>

<div class="contenedorhorario" >
    <h2 class="titulohorarios" >HORARIO</h2>
    <div class="listahorarios" >
        <ul>
            <p>9:00 - 14:00 DE LUNES A VIRNES</p>
            <br>
            <p>DESDE EL 26 DE JUNIO AL 8 DE SEPTIEMBRE</p> 
        </ul>

    </div>

</div>

    
</template>

<style>

@font-face {
  font-family: 'Original Surfer';
  src: url('../assets/original-surfer/OriginalSurfer-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
*{
    font-family: "Original Surfer";
}
.cajaatexto{
    margin-left: 6rem;
    margin-right: 6rem;
    margin-top: 3rem;
}
.planin{
    margin-top: 4rem;
}
.fotosurf{
    width: 20rem;    
   margin-bottom: 1rem;
   margin-top:1rem;
   margin-right: 1rem; 
   margin-left: 6rem   
}
.titulohorarios{
    margin-top: 3rem;
    margin-left: 6rem;
    margin-bottom: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.listahorarios{
    display: flex;
    margin-bottom: 3rem;
    margin-top: 3rem;
    margin-left: 8rem;
    font-size: 1rem;
}
.listaplaning{
    display: flex;
    
    margin-top: 3rem;
    margin-left: 8rem;
    font-size: 1rem;
}
.tituloplaning{
    width: 15rem;
    margin-top: 3rem;
    margin-left: 6rem;
    margin-bottom: 1rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.listaactividad{
    width: 35rem;
}
.listaactividades{
    display: flex;
    
    margin-top: 3rem;
    margin-left: 8rem;
    font-size: 1rem;
}
.tituloactividades{
    margin-top: 3rem;
    margin-left: 6rem;
    margin-bottom: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
 .listapreciosudalekus{
    width: 20rem;
    margin-top: 3rem;
    margin-left: 8rem;
    font-size: 1rem;
 }

 .tituloudalekus{
    margin-top: 3rem;
    margin-left: 6rem;
    margin-bottom: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
 }   

.tabla_horario{
    width: 35rem;    
   margin-bottom: 2rem;
   margin-left: 6rem;   
   margin-right: 2rem;
}

.actividades{
    display: flex;
}

.salvamento{
    width: 20rem;    
   margin-bottom: 1rem;
   margin-top: 5rem;
   margin-right: 1rem; 
   margin-left: 19rem;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   
}

.sj_arriba{
   width: 15rem; 
   height: 15rem;     
    /* margin-left: 4rem;    */
   margin-bottom: 2rem;
   margin-right: 5rem; 
   margin-left: 2rem;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

/* .tabla_actividades{
    width: 50rem; 
   margin-top: 2rem;
   margin-bottom: 2rem;
   margin-left: 5rem;   
} */

.tabla_actividades{
   width: 35rem; 
   margin-top: 2rem;   
   margin-bottom: 6rem;
   margin-left: 6rem;
   
      
}

.hamaiketako{
    width: 25rem;    
   margin-bottom: 2rem;
   margin-right: 3rem;  
}

.incluye_lista{
    margin-top: 2rem;
    margin-left: 8rem;
    font-size: 1rem;
}

.incluye_titulo{
    margin-top: 2rem;
    margin-left: 6rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    padding-left: 0.5rem;
    
    
    

}

.incluye{
display: flex;


}
   

.precios_udalekus{
    display: flex;
    gap: 2rem;

    
}
.texto_udalekus{
    font-size: 1.3rem;
    /* font-weight: 700; */
    
    
    
    
    
    
    /* transition: color 0.3s ease-in-out; */
}



.tienda_fisica{
   width: 18rem;    
   margin-bottom: 2rem;
   margin-left: 13rem;   
   margin-right: 2rem;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 

</style>