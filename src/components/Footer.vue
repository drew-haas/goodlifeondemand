<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-column">
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:GoodLifeOnDemandProductions@gmail.com" class="email">goodlifeondemandproductions@gmail.com</a></li>
          <li><a href="tel:724-986-7862">724-986-7862</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h2>Social</h2>
        <ul>
          <li><a href="https://vimeo.com/user97759962" target="_blank">Vimeo</a></li>
        </ul>
      </div>
    </div>
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
        padding: 60px 0;
        background-color: $gray-lighter;
        h2 {
          margin-bottom: 20px;
          padding-bottom: 14px;
          color: $accent;
          border-bottom: 1px solid $accent;
        }

        a {
          color: $gray;
          transition: color .3s;

          &:hover {
            color: $accent;
            transition: color .3s;
          }
        }
    }

    .footer-wrapper {
      width: 90%;
      max-width: $container-xl;
      margin: 0 auto;
      display: flex;
      word-break: break-all;

      @media screen and (max-width: $screen-sm) {
        display: block;
      }

      .footer-column {
        margin-right: 100px;

        @media screen and (max-width: $screen-sm) {
          margin: 0 0 50px 0;
        }
      }
    }
</style>