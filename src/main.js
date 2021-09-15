import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from 'prismic-vue';
// import PrismicDOM from 'prismic-dom';
import linkResolver from './link-resolver';
import VueGtag from "vue-gtag";

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

Vue.use(VueGtag, {
  config: { id: "UA-157004283-1" }
}, router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
