<template>
    <div id="nav" class="nav" :class="[ this.$attrs.lightNav ? 'nav-light' : '' ]">
        <div class="nav-wrapper">
            <router-link to="/" class="logo">
                <img src="../assets/img/glod-logo-white.png" alt="Good Life on Demand Logo">
            </router-link>
            <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/our-work">Our Work</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        lightNav: Boolean
    },
}
</script>

<style lang="scss">
.nav {
    z-index: 1;
    position: relative;

    .nav-wrapper {
        max-width: 1440px;
        width: 95%;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
    }

    a {
        font-weight: bold;
        color: #222;
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
        padding: 20px 0 10px 0;

        a {
            margin-left: 40px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 2px;

            @media screen and (max-width: $screen-xs) {
                margin-left: 20px;
            }
        }
    }

    .logo {
        img {
            max-width: 90px;
            display: block;
        }
    }
}
</style>

