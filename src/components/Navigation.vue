<template>
    <div id="nav" class="nav" :class="[ this.$attrs.lightNav ? 'nav-light' : '' ]">
        <div class="nav-wrapper">
            <router-link to="/" class="logo">
                <img src="../assets/img/glod-logo-white.png" alt="Good Life on Demand Logo">
            </router-link>
            <div class="links">
                <router-link to="/work">All Work</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      lightNav: Boolean,
    },
}
</script>

<style lang="scss">
.nav {
    z-index: 1;
    position: fixed;
    width: 100%;

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      opacity: .7;
      height: 180px;
      background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 90%);
      z-index: -1;
    }

    .nav-wrapper {
        max-width: $container-xl;
        width: 95%;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
    }

    a {
        font-weight: bold;
        text-decoration: none;
        transition: color .3s;

        &.router-link-exact-active {
            color: $accent;
        }

        &:hover {
            color: $accent;
            transition: color .3s;
        }
    }

    .links {
        padding: 26px 0 0;

        a {
            margin-left: 40px;
            text-transform: uppercase;
            font-size: 15px;
            letter-spacing: 2px;
            color: #fff;

            &:hover {
              color: $accent;
            }

            @media screen and (max-width: $screen-xs) {
                margin-left: 20px;
            }
        }
    }

    .logo {
        img {
            max-width: 96px;
            display: block;

            @media screen and (max-width: $screen-xs) {
              max-width: 70px;
            }
        }
    }
}
</style>

