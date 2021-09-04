import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
createApp(App).use(store).use(router).mixin(mixins).mount('#app')
window.Kakao.init('a84ba67045f0c932cd16c081b94f3764')
