<template>
    <div class="navBar">
    
       <router-link to ='/' ><img class="logo" src="../assets/logo/LOGOKOBA.png" alt="logo"></router-link> 
    
        <ul>
        <router-link  to ='/' ><button>Home</button></router-link> 
        <router-link class="fit" to ='/UdalekusView' ><button >Udalekus</button></router-link> 
        <router-link class="fit" to ='/CursosView' ><button >Cursos</button></router-link> 
        <router-link class="fit" to ='/BlogView' ><button >Blog</button></router-link> 
        <router-link class="fit" to ='/InformacionView' ><button >Informacion</button></router-link>  
        </ul>
        
      
    </div>        
    
       
    </template>
    
    <script setup>
    // const routs =
    </script>
    
    <style scoped>

    .fit{
        height: fit-content;
    }
     
    .navBar{
        display: flex;
        
        justify-content: center;
        object-fit: contain;
        height: 10rem;
        background-color:  rgba(0, 0, 0, 0.287);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    ul{
        display: flex;
        flex-direction: row;    
        position: center;   
        
        justify-content: center;
    }
    
    a{
        margin: 3rem;
        /* height: fit-content; */
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
        width: 6rem;
        height: 3rem;
        background-color:  rgba(0, 0, 0, 0.539);
        border-radius: 0.5rem;  
    }
    
    .logo{
        
        height: 80%;
        /* margin-top: 2rem; */
        /* margin-left: 2rem; */
    }

   

    .router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
}  

    
    
    </style>

    rgba(0, 0, 255, 0.245)

    color_navBar,verde. ==> rgba(58, 133, 8, 0.206);