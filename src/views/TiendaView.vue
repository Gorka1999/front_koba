<template>
<NavBar/>
<!-- <NavBarSinFoto/>  -->
<BuscadorTienda/>
<Tienda /> 
<Footer />


<h1>Tienda</h1>

</template>


<script setup>

import Tienda from "@/components/Tienda.vue"
 import NavBar from "@/components/NavBar.vue"
// import NavBarSinFoto from "@/components/NavBarSinFoto.vue";
import Footer from "@/components/Footer.vue"
import BuscadorTienda from "@/components/BuscadorTienda.vue";
</script>