<template>
    <div id="nav" class="nav" :class="[ this.$attrs.lightNav ? 'nav-light' : '' ]">
        <div class="nav-wrapper">
            <router-link to="/" class="logo">
                <img src="../assets/img/glod-logo-white.png" alt="Good Life on Demand Logo">
            </router-link>
            <div class="links">
                <router-link class="link" to="/weddings">Weddings</router-link>
                <!-- <a class="wedding-wire-link" rel='nofollow' target='_blank' href='https://www.weddingwire.com/biz/goodlifeondemandproductions/4e26b1b659a2d4fc.html' title='weddingwire.com'>
                  <img alt='weddingwire.com' src='https://www.weddingwire.com/images/sellos/partner--pp2108165.png' srcset='https://www.weddingwire.com/images/sellos/partner--pp2108165.png 1x, https://www.weddingwire.com/images/sellos/partner--pp2108165.png?largeImg=true 2x' style='border-width:0px;' />
                </a> -->
                <a class="wedding-wire-link" rel='nofollow' target='_blank' href='https://www.weddingwire.com/biz/goodlifeondemandproductions/4e26b1b659a2d4fc.html' title='weddingwire.com'>
                    <span>Find me on</span>
                    <wedding-wire-logo/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import WeddingWireLogo from '../svg/WeddingWireLogo.vue';

export default {
    props: {
      lightNav: Boolean,
    },
    components: {
        'wedding-wire-logo': WeddingWireLogo
    },
}
</script>

<style lang="scss">
.nav {
    z-index: 2;
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

    .links {
        display: flex;
        align-items: start; // make sure items align at top and don't receive full height
        padding: 26px 0 0;
    }

    .link {
        font-weight: bold;
        text-decoration: none;
        transition: color .3s;
        margin-left: 40px;
        margin-top: 10px;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 2px;
        color: #fff;

        &:hover {
            color: $accent;
            transition: color .3s;
        }

        // @media screen and (max-width: $screen-sm) {
        //     margin-top: 5px;
        // }

        @media screen and (max-width: $screen-xs) {
            margin-left: 20px;
        }

        &.router-link-exact-active {
            color: $accent;
        }
    }

    .wedding-wire-link {
        width: 140px;
        // display: inline-block;
        // margin-left: 26px;
        // transition: .3s;
        // display: flex;

        // @media screen and (max-width: $screen-sm) {
        //     width: 90px;
        //     margin-left: 16px;
        // }

        // @media screen and (max-width: $screen-se) {
        //     display: none;
        // }

        // &:hover {
        //     transform: scale(1.03);
        //     box-shadow: 10px 10px 36px -1px rgba(0,0,0,0.1);

        //     @media screen and (max-width: $screen-sm) {
        //         transform: scale(1.01);
        //         box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.1);
        //     }
        // }

        font-weight: bold;
        margin-left: 40px;
        color: #fff;
        $accent: #13B3BA;

        @media screen and (max-width: $screen-sm) {
            margin-left: 25px;
        }

        &:hover {
            color: $accent;

            svg {
                circle, path {
                    fill: $accent;
                }
            }
        }

        span {
            display: block;
            text-align: center;
        }

        svg {
            width: 100%;

            circle, path {
                transition: .3s;
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

