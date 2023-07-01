// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

// import { createApp } from 'vue';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// // Importa los estilos de Font Awesome
// import '@fortawesome/fontawesome-free/css/all.css';

// library.add(fas, far, fab);

// const app = createApp(App);
// app.component('font-awesome-icon', FontAwesomeIcon);
// app.mount('#app');

import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';




// Importa los estilos de Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'; 

import App from './App.vue';
import router from './router';

library.add(fas, far, fab);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

