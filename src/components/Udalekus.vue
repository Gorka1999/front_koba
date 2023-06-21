<template>
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
        <h2 class="incluye_titulo">INCLUYE</h2>
        
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

    <img class="tienda_fisica" src="../assets/tienda_fisica/tienda_fisica.png" alt="tienda_fisica">
    <img class="udalekus_M_A" src="../assets/padel_M_A/udalekus_Mikel_Anton.jpeg" alt="udalekus_M_A">
</div>
<div class="actividades">
    <img class="tabla_actividades" src="../assets/capturasTablasPrecio/actividades.png" alt="actividades">
</div>

    
</template>

<style>
.tabla_actividades{
    width: 50rem; 
   margin-top: 2rem;
   margin-bottom: 2rem;
   margin-left: 5rem;   
}

.tabla_actividades{
   width: 40rem; 
   margin-top: 2rem;
   margin-bottom: 2rem;
   
   margin-left: 25rem;   
}

.udalekus_M_A{
    width: 18rem;    
   margin-bottom: 2rem;
   margin-right: 3rem;  
}

.incluye_lista{
    margin-left: 5rem;
    font-size: 1.5rem;
}

.incluye_titulo{
    margin-left: 5rem;
    border-left: solid 3px rgba(0, 0, 0, 0.287);
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
    font-size: 1.5rem;
    /* font-weight: 700; */
    margin-top: 5rem;
    margin-bottom: 2rem;
    color: #0d0606;
    text-align: center;
    margin-right: 5rem;    
    
    /* transition: color 0.3s ease-in-out; */
}

.tabla_udalekus{
   width: 40rem; 
   margin-top: 2rem;
   margin-bottom: 2rem;
   margin-left: 5rem;   
}

.tienda_fisica{
   width: 18rem;    
   margin-bottom: 2rem;
   margin-left: 3rem;   
   margin-right: 2rem;
}

.router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 

</style>