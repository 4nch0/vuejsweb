//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';

//createApp(App) as a variable
const app = createApp(App);

app.use(IconsPlugin);

app.use(root);
app.mount('#app');

