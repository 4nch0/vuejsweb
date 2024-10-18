//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//createApp(App) as a variable
const app = createApp(App);

// Optionally install the BootstrapVue icon components plugin
app.use(BootstrapVue);
app.use(IconsPlugin);

app.use(root);
app.mount('#app');

