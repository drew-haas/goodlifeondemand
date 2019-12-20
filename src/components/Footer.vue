<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-column">
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:GoodLifeOnDemandProductions@gmail.com" class="email white-hover-link">goodlifeondemandproductions@gmail.com</a></li>
          <li><a href="tel:724-986-7862" class="white-hover-link">724-986-7862</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h2>Social</h2>
        <ul>
          <li><a href="https://vimeo.com/user97759962" target="_blank" class="white-hover-link">Vimeo</a></li>
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
        background: linear-gradient(45deg, rgba(233,168,157,1) 0%,rgba(240,158,95,0.7) 26%,rgba(247,147,30,0.5) 53%,rgba(247,146,33,0.5) 54%,rgba(255,123,172,0.3) 100%);

        a {
          color: #fff;
          transition: color .3s;

          &:hover {
            color: $gray-lighter;
            transition: color .3s;
          }
        }

        h2 {
          margin-bottom: 20px;
          padding-bottom: 14px;
          color: #fff;
          border-bottom: 1px solid #fff;
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
        margin-right: 50px;

        @media screen and (max-width: $screen-sm) {
          margin: 0 0 50px 0;
        }
      }
    }
</style>