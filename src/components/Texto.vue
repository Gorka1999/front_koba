<template>

<div class="texto">
            <a class="primerParrafo">"Euskal Herriko kostaldean zabaltzen den hondartza ezin hobean surf egitera animatzen zaitugu!  Zure abentura hasi eta olatuetaz gozatu!  Zatozte gurekin surf egiteko esperientzia bikaina bizitzera!"."</a>
            {{ datos }}
        </div>


</template>
<script>


    mostrar_datos();
    async function mostrar_datos(){
        const url = "http://127.0.0.1:5000/datos";
        try {
            const response = await fetch(url);
            const data = await response.json();
            datos = data;
            
        } catch (e){
            console.log(e)
        }
    }
</script>

<style>

.primerParrafo{
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #0d0606;
    text-align: center;
    text-transform: uppercase;
   
    /* background-color:  rgba(0, 0, 0, 0.287); */
    
    
    transition: color 0.3s ease-in-out;
    
}

.texto{
    width: 50%;
    margin: 0 auto;
    margin-top: 3rem;
    text-align: center;
}



.router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 



</style>