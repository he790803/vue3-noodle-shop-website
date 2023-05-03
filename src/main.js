import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'animate.css';
import './assets/main.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/plugins/fontawsome';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
