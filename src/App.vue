<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
// "global" styles
$green: #42b983;

body {
    margin: 0;
}

h2 {
    margin-bottom: 0;
}

.subtitle {
    margin: 10px 0 50px 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #222;
}

.page-wrapper {
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    padding: 100px 0;
    text-align: center;
}
</style>
