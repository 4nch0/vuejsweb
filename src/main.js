//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';

//createApp(App) as a variable
const app = createApp(App);

// Optionally install the BootstrapVue icon components plugin

app.use(IconsPlugin);

app.use(root);
app.mount('#app');

