import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from 'prismic-vue';
import PrismicDOM from 'prismic-dom';
import linkResolver from './link-resolver';

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
