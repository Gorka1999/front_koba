<template>
<div class="navBar">

    <router-link to ='/' ><img class="logo" src="@/assets/imgHome/logoKoba.png" alt="logo"></router-link>
    

    <ul>
    <router-link to ='/' ><button>Home</button></router-link> 
    <router-link to ='/UdalekusView'><button>Udalekus</button></router-link> 
    <router-link to ='/CursosView'><button>Cursos</button></router-link> 
    <router-link to ='/BlogView'><button>Blog</button></router-link> 
    <router-link to ='/InformacionView'><button>Informacion</button></router-link>  
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
    background-image: url(@/assets/imgHome/fotoNabVar2.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

ul{
    display: flex;
    flex-direction: row;    
    position: center;   
    padding-top: 15rem;
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
    width: 6rem;
    height: 3rem;
    background-color:   rgba(245, 245, 245, 0.771);
    border-radius: 0.5rem;  
    border : 0.1rem solid rgba(0, 0, 0, 0.539);;
    justify-content: center;
    align-items: center;
    color: black;
}


 i{
    font-size: 2rem;
    color:black;
    margin-right: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap; 
    background-color: rgba(58, 133, 8, 0.206);
    width: 2rem;  
    margin: auto; 
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