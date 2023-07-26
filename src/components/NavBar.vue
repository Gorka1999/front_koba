<template>
<div class="navBar">

    <router-link to ='/' ><img class="logo" src="../assets/logo/LOGOKOBA.png" alt="logo"></router-link>
    

    <div class="barranav" >
    <router-link to ='/' ><button><span>Home</span></button></router-link> 
    <router-link to ='/UdalekusView' @click="bajar"><button><span>Udalekus</span></button></router-link> 
    <router-link to ='/CursosView' @click="bajar"><button><span>Cursos</span></button></router-link> 
    <router-link to ='/BlogView' @click="bajar"><button><span>Blog</span></button></router-link> 
    <router-link to ='/InformacionView' @click="bajar"><button><span>Información</span></button></router-link>  
    </div>
    <!-- <nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start mt-5">
    <router-link to ='/' ><button class="btn btn-outline-success me-2 " type="button">HOME</button></router-link> 
    <router-link to ='/UdalekusView' @click="bajar"><button class="btn btn-outline-success me-2" type="button">UDALEKUAK</button></router-link> 
    <router-link to ='/CursosView' @click="bajar"><button class="btn btn-outline-success me-2" type="button">CURSOS</button></router-link> 
    <router-link to ='/BlogView' @click="bajar"><button class="btn btn-outline-success me-2" type="button">BLOG</button></router-link>
    <router-link to ='/InformacionView' @click="bajar"><button class="btn btn-outline-success me-2" type="button">INFORMACION</button></router-link>
    
  </form>
</nav> -->
    <div class="desplazar">

        <i @click="bajar" class="fa-sharp fa-solid fa-arrow-down fa-bounce"></i>       

    </div>
  
</div>        
   
</template>

<script setup>

function bajar(){
    window.scrollTo ({
        top:600,
        behavior:'smooth'
    })
}

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
.logo{
    margin-top: 2rem;
    margin-left: 2rem;
  }
.navBar{
  background-image: url("../assets/imgHome/MyA.jpg") ;
  
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
.barranav{
  display: flex;
  justify-content: space-around;
  margin-top:6rem;

  
}
button{
  width: 9rem;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
}
.logo{
  width: 10rem;
}

@media (max-width: 450px) {
  
.barranav{
  flex-direction: column;
  margin-left: 8rem;   

}
button{
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
  border-radius: 1rem;
}
.logo{
  width: 5rem;
}
  .navBar {    
    
    background-size: contain; 
  }
}

</style>