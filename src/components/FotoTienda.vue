<template>

<div class="fotosLink">

    <div class="linkTienda">
        <a href="UdalekusView"><img class="udalekus" src="../assets/imgHome/tablas.jpg" alt="tiendaTablas"></a>

        <h3>UDALEKUS</h3>
    </div>

    <div>
        <a href="CursosView"><img class="cursillo" src="../assets/imgHome/surf-academy.jpg" alt="cursos"></a>

        <h3>CURSOS</h3>
    </div> 

    <div>
        <a href="BlogView"><img class="blog" src="../assets/imgHome/blog.png" alt="blog"></a>

        <h3>BLOG</h3>
    </div> 

    <div>
        <a href="InformacionView"><img class="info" src="../assets/imgHome/infoBakio.png" alt="info"></a>

        <h3>INFO</h3>
    </div>

</div>

</template>

<style>

h3{
    width: fit-content;
    background-color:rgba(58, 133, 8, 0.143); ;

}

.fotosLink {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 3rem;
}

.udalekus{
    width: 25rem;
}

.cursillo{
    width: 25rem;
}

.blog{
    width: 25rem;
}

.info{
    width: 25rem;
}

img{   
    border: 15px solid rgba(58, 133, 8, 0.206);
    /* box-shadow: 15px 15px 15px 15px rgba(58, 133, 8, 0.206); */
    
}
/* .linkTienda{ */
    /* font-size: 2rem;
    color:black;
    margin-right: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap; 
    background-color: rgba(58, 133, 8, 0.206);
    width: 2rem;  
    margin: auto; 
} */

</style>