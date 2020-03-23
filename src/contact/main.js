import Vue from 'vue'
import App from '../components/Contact.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})

vm.$mount('#app')
