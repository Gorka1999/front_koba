<template>
<div class="navBar">

    <router-link to ='/' ><img class="logo" src="../assets/logo/LOGOKOBA.png" alt="logo"></router-link>
    

    <ul>
    <router-link to ='/' ><button><span>Home</span></button></router-link> 
    <router-link to ='/UdalekusView' @click="bajar"><button><span>Udalekus</span></button></router-link> 
    <router-link to ='/CursosView' @click="bajar"><button><span>Cursos</span></button></router-link> 
    <router-link to ='/BlogView' @click="bajar"><button><span>Blog</span></button></router-link> 
    <router-link to ='/InformacionView' @click="bajar"><button><span>Información</span></button></router-link>  
    </ul>
    
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

.navBar{
    
    justify-content: center;
    object-fit: contain;
    height: 36rem;
    background-image: url(../assets/imgHome/MyA.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

ul{
    display: flex;
    flex-direction: row;    
    position: center;   
    padding-top: 5rem;
    justify-content: center;
}

a{
    margin: 3rem;
    
    /* background-color: aqua; */
}

.containerFotos{
    display: flex;
    flex-direction: row;

}

.containerFoto{
    width: 40%;
    margin-top: 2rem;
   
   
}
.containerFoto > img  {
    height: 40rem;
    width: 50rem;
    object-fit: cover;
}

button{
    width: 10rem;
    height: 3rem;
    background-color:   rgba(245, 245, 245, 0.771);
    border-radius: 0.5rem;  
    border : 0.1rem solid rgba(0, 0, 0, 0.539);;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
    text-transform: uppercase;
    transition: .3s ease all;    
}

button:hover{
    background-color: #45494C;
}


 i{
    font-size: 2rem;
    color:black;
    margin-right: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;   
    background-color: rgba(0, 0, 0, 0.287);
    width: 2rem;  
    margin: auto; 
    margin-top: 12rem;
    cursor: pointer;
 }



    /* margin-left: 25rem;
    margin-right: 25rem; */


.logo{
    width: 10%;
    height: 10%;
    margin-top: 2rem;
    margin-left: 2rem;

}



 .router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 

</style>