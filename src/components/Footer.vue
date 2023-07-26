<template>

   <footer class="footer">

        <div class="redesSociales">

            <div class="iconos">
                <p>
                <a href="tel:620685753" > <i class="fa-solid fa-phone fa-bounce" style="color: #000000;"></i>(34+) 620685753</a>
                </p>
                <p>

                    <a href="mailto:kobasurfeskola@gmail.com"> <i class="fa-solid fa-envelope fa-bounce" style="color: #000205;"></i>kobasurfeskola@gmail.com</a>
                </p>
                <p>

                    <a href="https://www.instagram.com/kobasurfeskola/" target="_blank"><i class="fa-brands fa-instagram fa-bounce"></i>@kobasurfeskola</a>
                </p>
                <p>

                    <a href="https://www.google.es/maps/place/Zarrakoa+Bidea,+5,+48130+Bakio,+Bizkaia/@43.429945,-2.8146165,550m/data=!3m2!1e3!4b1!4m5!3m4!1s0xd4e40361e3d15c1:0xc7cc8cf52845ed47!8m2!3d43.4299411!4d-2.8120362?entry=ttu" target="_blank"><i class="fa-solid fa-location-dot fa-bounce" style="color: #000000;"></i>Zarrakoa Bidea, 5</a>

                    <p> &copy; 2023 <a >Koba.S.L.</a>.</p>
                </p>
                
            </div>

            <!-- <div class="copyright">
                
            </div> -->

        </div>   

   </footer>
    
</template>

<style scoped>
@font-face {
  font-family: 'Original Surfer';
  src: url('../assets/original-surfer/OriginalSurfer-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.iconos{
  display: flex;
  flex-direction: row;
}

p{
    font-family: "Original Surfer";
    text-decoration: none;
    color: black;
    justify-content: center;
  
}

.redesSociales{
    display:flex;
    
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;    
    background-color: rgba(0, 0, 0, 0.287);
}

i{
    font-size: 2rem;
    margin: 2rem;
}

a{
    text-decoration: none;
    color: black;
}




/* Media Queries */
@media screen and (max-width: 768px) {
  .redesSociales {
    justify-content: space-around;
  }
  .iconos{
    flex-direction: column;
    font-family: "Original Surfer";
  }
}

@media screen and (max-width: 480px) {
  .iconos{
    font-family: "Original Surfer";
  }
  .redesSociales {    
    flex-direction: column;
  

  }  


}

@media screen and (max-width: 320px) {
    .copyright{
        flex-direction: column;
    }
    .iconos>p>a{
        font-family: "Original Surfer";
    }
    .iconos{
    font-family: "Original Surfer";
  }
  i {
    font-size: auto;
    font-family: "Original Surfer";
  }
  p{
    font-size: auto;
    font-family: "Original Surfer";
  }
  .iconos{
    flex-direction: column;
  }
  .redesSociales {
    flex-direction: column;
  }
}
</style>