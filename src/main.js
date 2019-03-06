import Vue from 'vue'
import App from './App.vue'
Vue.http.options.root = 'url'
new Vue({
  render: h => h(App)
}).$mount('#app')
