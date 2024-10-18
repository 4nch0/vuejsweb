//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from "./router"
import 'bootstrap/dist/css/bootstrap.css';
import './App.vue'; // Your global styles should be here

//createApp(App) as a variable
const app = createApp(App);

app.use(router);
app.mount('#app');

