import Vue from 'vue'
import App from './FrontPage.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
