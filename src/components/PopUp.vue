<template>
    <div>
      <!-- Modal del pop-up -->
      <div v-if="showPopup" class="modal">
        <div class="modal-content">
          <form @submit.prevent="new_user" class="left-box">
            <!-- Campos del formulario -->
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required>
  
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" v-model="apellido" required>

            <label for="DNI">DNI:</label>
            <input type="text" id="DNI" v-model="DNI" required>
  
            <label for="telefono">Número de teléfono:</label>
            <input type="tel" id="telefono" v-model="telefono" required>
  
            <label for="correo">Correo electrónico:</label>
            <input type="email" id="correo" v-model="correo" required>
  
            <button type="submit">Enviar</button>
          </form>
  
          <div class="right-box">
            <!-- Imagen -->
            <img class="fotoPopUp" src="../assets/imgHome/fotoPopUp.jpg" alt="Imagen">
          </div>
          
          <button @click="closePopup" class="close-button">Cerrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showPopup = ref(true);
  const nombre = ref('');
  const apellido = ref('');
  const DNI = ref('');
  const telefono = ref('');
  const correo = ref('');
  
  const openPopup = () => {
    showPopup.value = true;
  };
  
  const closePopup = () => {
    showPopup.value = false;
  };
  
  const enviarFormulario = () => {
    // Lógica para enviar el formulario
  };
  async function new_user(){
    const url = "http://127.0.0.1:5000/datos"
    await fetch(url,{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      // body: `{"nombre:"${nombre}","apellido:"${nombre}","telefono:"${nombre}","correo:"${nombre}"}`
      body: `{"nombre:"prueba_nombre","apellido:"prueba_apellido","DNI:"prueba_DNI","telefono:"prueba_telefono","correo:"prueba_correo"}`  
    })
    .catch((e) => {
      console.log("ffffffffffffffffffffffff",e)
    })
  }
  </script>
  
  <style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.modal-content {
  width: 400px;
  max-width: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  gap: 2rem;
  
}

.left-box {
  width: 50%;
  display: inline-block;
  vertical-align: top;
}

/* .right-box {
  width: 50%;
  display: inline-block;
  vertical-align:middle;
  
} */

label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #888;
  cursor: pointer;
}

/* .right-box img {
  width: 60%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
} */

.right-box {
  width: 50%;
  display: flex; /* Cambiar a un contenedor flexible */
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
}

.right-box img {
  
  border-radius: 5px;
  
}

.fotoPopUp{
 
  height: 18rem;
  border-radius: 5px;
  
  border: 1px solid #ccc;
  margin-bottom: 2rem;

}





</style>


  