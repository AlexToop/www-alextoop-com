import Vue from 'vue'
import App from '../components/Blog.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})

vm.$mount('#app')
