import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let page = document.body;
let array = [];
page.addEventListener('keydown' , (e) => {
    array.push(e.key)
    if(array.includes('n') && array.includes('i') && array.includes('c') && array.includes('k') === true){
        let link = document.querySelector('.footer-link');
      link.style.pointerEvents = "all"
    }
})

createApp(App).use(router).mount('#app')
