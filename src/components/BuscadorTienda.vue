<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Buscar...">
      <button @click="search">Buscar</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  
  const search = () => {
    // Aquí puedes implementar la lógica de búsqueda y mostrar los resultados
    // Puedes utilizar searchQuery.value para acceder al valor del campo de búsqueda
    console.log('Realizando búsqueda:', searchQuery.value);
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  input[type="text"] {
    padding: 0.5rem;
    margin-top: 2rem;
    margin-right: 2rem;
    
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-right: 50rem;

  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  

