import { createApp } from 'vue'
import './assets/style/common.scss'
import './assets/style/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
