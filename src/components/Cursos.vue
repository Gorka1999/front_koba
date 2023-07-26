<template>
<div>
    <div class="niveles">
        <h1 class="iniciacion">INICIACIÓN</h1><br>

        <h1 class="medio">MEDIO</h1><br>

        <h1 class="tecnificacion">TECNIFICACIÓN</h1><br>
    </div>

    <h2 class="adaptado" >SURF ADAPTADO</h2>

    <div class="gorabide">
        
        <img class="enaccion" src="../assets/Gorabide-SUP/gorabide15.jpg" alt="gorabide">
        <img class="gorakide" src="../assets/Gorabide-SUP/gorakide.png" alt="gorakide">
        <img class="enacionn2" src="../assets/Gorabide-SUP/gorabide12.jpg" alt="gorabide">
    </div>  
                    
        
    <h2 class="clasesengrupo">CLASES DE SURF EN GRUPO</h2><br>

        <div class="tabla_iniciacion">
            
        <div class="preciossgrupo">
            <ul class="listacursos" >
                <li>SURF INICIACIÓN / 1h.30    35€</li><br>
                <li> SURF INICIACIÓN (DOS DIAS SEGUIDOS) / 3h.    60€</li><br>
                <li> SURF INICIACIÓN (TRES DIAS SEGUIDOS) / 4h.30    80€</li><br>
                <li> SURF INICIACIÓN (CUATRO DIAS SEGUIDOS) / 6h   90€</li><br>
                <li> SURF INICIACIÓN (CUATRO DIAS SEGUIDOS) / 7h.30    100€</li><br>
            </ul>
            <img class="gruposentados" src="../assets/Gorabide-SUP/gorabide11.jpg" alt="">
        </div  >
    </div>
        <div class="cajagrupofoto" >
            <img class="grupoo" src="../assets/Gorabide-SUP/engrupo.jpg" alt="en grupo"> 
            <img class="grupocrios" src="../assets/cursillos/ninosengrupo.png" alt="foto">   
        </div> 
          

        <h2 class="clasesparticulares">CLASES PARTICULARES</h2><br>
        <div class="particular" >
            <div class="preciossparticular">
                <ul>
            <li>PARTICULAR 1 PERSONA 50€ (1h.30)</li><br>
            <li>PARTICULAR 2 PERSONAS 80€ (1h.30)</li><br>           
            </ul>       
            <img class="ensenandoparticular" src="../assets/cursillos/menseñando.jpg" alt="enseñando">      
            </div>
            
            <img class="particularimg" src="../assets/cursillos/holandes.jpg" alt="particular">
            

        </div>
        <h2 class="clasesbonos" >BONOS DE CLASES EN GRUPO SUELTAS</h2>
        <div class="bonoss" >
            <div class="preciosbonos" >
                <ul>
                    <li>BONO DOS DIAS / 60€</li><br>
                    <li>BONO TRES DIAS / 80€</li><br>
                    <li>BONO CUATRO DIAS / 90€</li><br>
                </ul>
            </div>
            <div>
                <img class="bono" src="../assets/capturasTablasPrecio/bono.png" alt="bono">
            </div>
        </div>
    <h1 class="alquileres" >ALQUILERES</h1>

    <h2 class="tituloalquileressup" >TARIFAS DE ALQUILERES PARA PADEL SURF</h2>

    <div>
        <ul class="listaalquilersup" >
            <li>SUP 1H-10€  / 2H-15€  / 4H-20€</li><br>
            <li>SUP + TRAJE =  1H-15€  / 2H-20€  / 4H-25€ /  1DIA-40€</li>
        </ul>
    </div>/
    <div class="fotosalquiler" >
        <img src="../assets/cursillos/fotoPadel.jpg" alt="foto">
        <img src="../assets/cursillos/traje.jpg" alt="foto">
        <img class="losdos" src="../assets/fotosenkobapadel/losdos.jpg" alt="">

    </div>

</div>
<h2 class="tituloalquilerestablas" >TARIFAS ALQUILERES PARA TABLAS DE SURF</h2>


<div>
    <ul class="listaalquilertablas" >
    <li>TABLA 1H-15€  / 2H-20€  / 4H-25€ /  1DIA-40€</li><br>
    <li>TABLA + TRAJE = 1H-20€ /  2H-25€ /  4H-30€  / 1DIA-45€</li>
</ul>
</div>
<div>
    <img src="../assets/cursillos/tablasTrajes.jpg" alt="">
    <img src="../assets/cursillos/tablas.jpg" alt="">
    <img src="../assets/cursillos/tablasrac.png" alt="">
</div>

        
</template>


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

.fotosalquiler{
    display: flex;
    flex-direction: row;
}
.gruposentados{
    width: 25rem;
    height: 20rem;
    margin-bottom: 3rem;
}
.losdos{
    width: 25rem;
}
.bono{
    width: 25rem;
}
.grupocrios{
    width: 25rem;
}
img{
    width: 20rem;
    margin: 2rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.tituloalquilerestablas{
    margin-top: 3rem;
    margin-left: 6rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.listaalquilertablas{
    margin-left: 8rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.alquileres{
    margin-top: 3rem;
    margin-left: 4rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.tituloalquileressup{
    margin-top: 3rem;
    margin-left: 6rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.listaalquilersup{
    margin-left: 8rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    word-spacing: 4px;
}
.listacursos{
    margin-top: 5rem;
}

.ensenandoparticular{
    width: 25rem;
    height: 20rem;
    margin-bottom: 2rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.bonoss{
    display: flex;
}
.bono{
    width: 15rem;
    margin-left: 5rem;
    margin-bottom: 3rem;
}
.clasesbonos{
    margin-left: 6rem;
    margin-bottom: 2rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.preciosbonos{
    margin-left: 6rem;
}
.preciossparticular{
    margin-top: 4rem;
}
.particular{
    display: flex;
}
.particularimg{
    width: 28rem;
    height: 29rem;
    margin-bottom: 2rem;
    
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.clasesparticulares{
    margin-left: 6rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-top: 3rem;
}
.preciossparticular{
    margin-left: 6rem;
    

}
.enacionn2{
    width: 20rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
.adaptado{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
    margin-left: 6rem;
}
.grupoo{
    width: 18rem;
    margin-bottom: 3rem;
    margin-left: 5rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;

}

.preciossgrupo{
    display: flex;
    
    
    
    /* border-top: solid 2px;
    border-bottom: solid 2px;
    border-left: solid 2px;
    border-right: solid 2px; */
}
.enaccion{
    width: 23rem;
    margin-right: 1rem;
    
}
.clasesengrupo{
    margin-left: 6rem;
    margin-top: 5rem;
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}
.niveles{
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.iniciacion{
    border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
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
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.gorakide{
    margin-left: 1rem;
    width: 25rem
    
    

}
.tabla_iniciacion{
    display: flex;
    margin-left: 6rem;
}  



@media screen and (max-width: 768px) {
    .niveles {
      flex-direction: column;
      align-items: center;
    }

    .niveles h1 {
      margin-left: 0;
      margin-right: 0;
    }

    .gorabide {
      flex-direction: column;
      align-items: center;
    }

    .gorakide {
      width: 80%;
      max-width: 300px;
    }

    .tabla_iniciacion {
      flex-direction: column;
      align-items: center;
    }

    .preciossgrupo {
      margin-right: 0;
      text-align: center;
    }

    .cajagrupofoto {
      margin-left: 0;
      margin-top: 1rem;
      text-align: center;
    }

    .ensenandoparticular {
      margin-left: 0;
    }

    .particularimg {
      margin-left: 0;
    }

    .bonoss {
      flex-direction: column;
      align-items: center;
    }

    .bono {
      width: 80%;
      max-width: 250px;
    }

    .preciosbonos {
      margin-left: 0;
      text-align: center;
    }
  }

  /* Cuando el ancho de la pantalla es menor o igual a 576px */
  @media screen and (max-width: 576px) {
    /* Añade aquí los estilos adicionales para dispositivos más pequeños */
    /* Por ejemplo: */
    .tituloalquilerestablas,
    .tituloalquileressup,
    .alquileres,
    .clasesbonos,
    .clasesparticulares,
    .niveles h1 {
      margin-left: 1rem;
    }
    .clasesengrupo{
        margin-left: 1rem;
    }

    .listaalquilertablas,
    .listaalquilersup,
    .preciosbonos,
    .preciossparticular {
      margin-left: 1.5rem;
    }

    .listaalquilertablas,
    .listaalquilersup {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .ensenandoparticular,
    .particularimg,
    .bono,
    .grupoo,
    .enaccion,
    .enacionn2,
    .gorakide,
    .adaptado {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      max-width: 300px;
      margin-left: 1rem;
    }

    .tabla_iniciacion,
    .cajagrupofoto,
    .preciossgrupo {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-left: 1rem;
    }
    img {
        width: 100%;
        margin-left: 1.5rem;
        margin-right: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .listacursos{
        margin-left: 1.5rem;
      }
  }
  @media screen and (max-width: 768px) {
    img {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-left: solid 5px rgba(0, 0, 0, 0.287);
        padding-left: 0.5rem;

      }
  }

</style>

