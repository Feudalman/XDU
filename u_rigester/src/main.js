import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { localData, sessionData } from '../src/store/localStorage'
import store from './store/index'


const app = createApp(App);

app.config.globalProperties.$localData = localData;
app.config.globalProperties.$sessionData = sessionData;

app.use(router);
app.use(store);
app.mount('#app');