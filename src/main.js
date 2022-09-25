import Vue from 'vue'
// import App from './App.vue'
// import Method from './Method.vue'
import Main from './timeLoggingApp/Main.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#app')
 