import { createApp, defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'
import router from './router'
import './assets/styles/base.css'
import './assets/styles/variables.css'

import '@splidejs/splide/dist/css/splide.min.css'

const savedTheme = localStorage.getItem('theme') || 'theme-dark'
document.body.className = savedTheme
console.log('Theme at load:', document.body.className);



const Root = defineComponent({
  name: 'Root',
  render() {
    return h(RouterView)
  },
})

createApp(Root).use(router).mount('#app')
