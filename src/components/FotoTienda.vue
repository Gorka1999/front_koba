<template>

<div class="fotosLink">

    <div class="linkTienda">
        <a href="UdalekusView"><img class="udalekus" src="../assets/imgHome/udalekus.jpg" alt="tiendaTablas"></a>

        <h3 class="titulo_link">UDALEKUS</h3>
    </div>

    <div>
        <a href="CursosView"><img class="cursillo" src="../assets/imgHome/surf-academy.jpg" alt="cursos"></a>

        <h3 class="titulo_link">CURSOS</h3>
    </div> 

    <div>
        <a href="BlogView"><img class="blog" src="../assets/imgHome/blog.png" alt="blog"></a>

        <h3 class="titulo_link">BLOG</h3>
    </div> 

    <div>
        <a href="InformacionView"><img class="info" src="../assets/imgHome/infoBakio.png" alt="info"></a>

        <h3 class="titulo_link">INFO</h3>
    </div>

</div>

</template>

<style>

.titulo_link{
    width: fit-content;
    /* text-decoration: underline; */
    border-left: solid 3px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}

/* h3{
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.287) ;

} */

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
    border: 15px solid  rgba(0, 0, 0, 0.287);
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