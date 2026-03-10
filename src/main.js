import { createApp } from 'vue' // Function that starts our Vue app
import { createPinia } from 'pinia' // "Global brain" to store our data

// UI Framework (Vuetify) imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import '@fontsource/roboto-condensed';

// Components
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
    defaultSet: 'mdi',
    },
    theme:{
        defaultTheme: 'light'
    },
})

import router from './router' 

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
