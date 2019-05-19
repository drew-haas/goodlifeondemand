<template>
  <div class="footer">
    <ul>
      <li><a href="mailto:GoodLifeOnDemandProductions@gmail.com" class="email">GoodLifeOnDemandProductions@gmail.com</a></li>
      <li><a href="tel:724-986-7862" class="">724-986-7862</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
    .footer {
        width: 100%;
        background-color: #f3f3f3;
        // background-color: #ccc;
    }
</style>