<template>
    <div id="nav" class="nav" :class="[ this.$attrs.lightNav ? 'nav-light' : '' ]">
        <div class="nav-wrapper">
            <router-link to="/" class="logo">
                <img src="../assets/img/glod-logo-white.png" alt="Good Life on Demand Logo">
            </router-link>
            <!-- <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/our-work">Our Work</router-link>
                <router-link to="/contact">Contact</router-link>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        lightNav: Boolean,
    },
    methods: {
        // getLogo: function() {
        //     console.log(this.$route.name)
        //     let logoSrc = this.$route.name === 'home' ? require.context('../assets/img/glod-logo-white.png') : require.context('../assets/img/glod-logo-black.png');
        //     return logoSrc;
        // }
    }
}
</script>

<style lang="scss">
.nav {
    z-index: 1;
    position: relative;

    .nav-wrapper {
        max-width: $container-xl;
        width: 95%;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: $screen-xs) {
            justify-content: center;
        }
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

        @media screen and (max-width: $screen-xs) {
            display: none;
        }

        a {
            margin-left: 40px;
            text-transform: uppercase;
            font-size: 15px;
            letter-spacing: 2px;

            @media screen and (max-width: $screen-xs) {
                margin-left: 20px;
            }
        }
    }

    .logo {
        img {
            max-width: 96px;
            display: block;
        }
    }
}
</style>

