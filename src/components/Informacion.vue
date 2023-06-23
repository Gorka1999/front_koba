<template>
<div class="contenedor_info_sitio" >
    <div class="google_map" >
        <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d755.6304307577554!2d-2.8122187454826117!3d43.42948131490225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shttps%3A%2F%2Fwww.google.es%2Fmaps%2Fplace%2FZarrakoa%2BBidea%2C%2B5%2C%2B48130%2BBakio%2C%2BBizkaia%2F%4043.429945%2C-2.8146165%2C550m%2Fdata%3D*213m2*211e3*214b1*214m5*213m4*211s0xd4e40361e3d15c1%3A0xc7cc8cf52845ed47*218m2*213d43.4299411*214d-2.8120362%3Fentry%3Dttu%22%3E!5e1!3m2!1ses!2ses!4v1687519325943!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="encuentranos" >   
        <a class="texto" >Aurki gaitzazu hamen!!<br> // Encuentranos aqui!! </a>
    </div>
</div>


</template>

<style>
.encuentranos{
    margin-top: 8rem;
    margin-left: 4rem;
}
.contenedor_info_sitio{
    display: flex;
}

.texto{
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #0d0606;
    text-align: center;
    text-transform: uppercase;

    margin-left: 3rem;
    margin-bottom: 10rem;
}
.mapa{
    width: 25rem;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 15rem; 
}

.router-link-exact-active{
    background-color: rgba(0, 0, 0, 0.287);
} 

</style>