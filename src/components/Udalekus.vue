<template>
<div class="fondo" >
<div class="precios_udalekus">
    
    <img class="tabla_udalekus" src="../assets/capturasTablasPrecio/precios_udalekus.png" alt="tabla_precio"> 
    <a class="texto_udalekus">Si estas buscando una experiencia única y emocionante
para tus hijos, ¡este es el lugar !
Durante este tiempo, los niños realizaran muchas
actividades emocionantes, incluyendo clases de surf,
surfskate, merienda saludable y disfrutaran del
medio naturalde Bakio y sus alrededores.</a>

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
<div class="actividades">
    <img class="tabla_actividades" src="../assets/capturasTablasPrecio/actividades.png" alt="actividades">     
    <img class="sj_arriba" src="../assets/capturasTablasPrecio/vistas_gaztelugatxe.avif" alt="san_juan_arriba">
</div>
<div class="horario" >
    <img class="tabla_horario" src="../assets/capturasTablasPrecio/planing_horario.png" alt="horario">
    <img class="tienda_fisica" src="../assets/tienda_fisica/tienda_fisica.png" alt="tienda_fisica">  
</div>
</div>

    
</template>

<style>
 
 .fondo{
    background-color: #D1F0EE;
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
   margin-bottom: 2rem;
   margin-right: 1rem; 
   margin-left: 19rem;
   
}

.sj_arriba{
    width: 20rem;    
   margin-bottom: 2rem;
   margin-right: 5rem; 
   margin-left: 15rem; 
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
    margin-top: 3rem;
    margin-left: 18rem;
    font-size: 1rem;
}

.incluye_titulo{
    margin-top: 2rem;
    margin-left: 12rem;
    border-left: solid 3px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    color: white;
    
    

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
    margin-top: 5rem;
    margin-bottom: 2rem;
    color: #0d0606;
    text-align: center;
    margin-right: 5rem;    
    
    /* transition: color 0.3s ease-in-out; */
}

.tabla_udalekus{
   width: 35rem; 
   margin-top: 2rem;
   margin-bottom: 2rem;
   margin-left: 5rem;   
}

.tienda_fisica{
   width: 18rem;    
   margin-bottom: 2rem;
   margin-left: 13rem;   
   margin-right: 2rem;
}

.router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 

</style>