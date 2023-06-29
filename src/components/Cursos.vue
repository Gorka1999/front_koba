<template>
<div>
    <div class="niveles">
        <h1 class="iniciacion">INICIACION</h1>

        <h1 class="medio">MEDIO</h1>

        <h1 class="tecnificacion">TECNIFICACIÓN</h1>
    </div>

    <div class="gorabide">
        <h2 class="adaptado" >SURF ADAPTADO</h2>
        <img class="enaccion" src="../assets/Gorabide-SUP/gorabide15.jpg" alt="gorabide">
        <img class="gorakide" src="../assets/Gorabide-SUP/gorakide.png" alt="gorakide">
        <img class="enacionn2" src="../assets/Gorabide-SUP/gorabide12.jpg" alt="gorabide">
    </div>  
                    
        
    <h2 class="clasesengrupo">CLASES DE SURF EN GRUPO</h2><br>

        <div class="tabla_iniciacion">
            
        <div class="preciossgrupo">
            <ul>
           <li>SURF INICIACION 1h.30    35€</li><br>
           <li> SURF INICIACION (DOS DIAS SEGUIDOS) 3h.    60€</li><br>
           <li> SURF INICIACION (TRES DIAS SEGUIDOS) 4h.30    80€</li><br>
           <li> SURF INICIACION (CUATRO DIAS SEGUIDOS) 6h   90€</li><br>
           <li> SURF INICIACION (CUATRO DIAS SEGUIDOS) 7h.30    100€</li><br>
        </ul>
        </div>
            <img class="grupoo" src="../assets/cap_dibujos/engrupo.png" alt="en grupo">    
            
        </div>  

        <h2 class="clasesparticulares">CLASES PARTICULARES</h2><br>
        <div class="preciossparticular">
            <ul>
           <li>PARTICULAR 1 PERSONA 50€ (1h.30)</li><br>
           <li>PARTICULAR 2 PERSONAS 80€ (1h.30)</li><br>           
        </ul>
        </div>


    
</div>
        
</template>


<style>
.clasesparticulares{
    margin-left: 6rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.preciossparticular{
    margin-left: 6rem;

}
.enacionn2{
    width: 23rem;
    margin-left: 3rem;
    margin-right: 3rem;
}
.adaptado{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.grupoo{
    width: 15rem;
    margin-bottom: 3rem;
}

.preciossgrupo{
    margin-right: 3rem;
    margin-top: 3rem;
}
.enaccion{
    width: 23rem;
    margin-right: 3rem;
}
.clasesengrupo{
    margin-left: 6rem;
    margin-top: 3rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.niveles{
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.iniciacion{
    border-left: solid 3px rgba(0, 0, 0, 0.287);
    margin-left: 18rem;
    margin-right: 4rem;
}
.medio{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 4rem;
    margin-right: 4rem;
}

.tecnificacion{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 4rem;
    margin-right: 4rem;
}

.niveles{
    display: flex;
    flex-direction: row;
}


.gorabide{
    margin-left: 6rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
}

.gorakide{
    width: 25rem
}
.tabla_iniciacion{
    display: flex;
    margin-left: 6rem;
}  

.router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 

</style>