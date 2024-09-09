
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@/assets/fonts.css'
// Import icon libraries
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
// Import Quasar css
import 'quasar/dist/quasar.css'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Quasar,{})
app.mount('#app')
