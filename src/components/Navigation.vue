<template>
    <div id="nav" class="nav" :class="[ this.$attrs.lightNav ? 'nav-light' : '' ]">
        <div class="nav-wrapper">
            <router-link to="/" class="logo">
                <img src="../assets/logo.png" alt="Good Life on Demand Logo">
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
$accent: #FF9683;

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
        align-items: center;
    }

    a {
        font-weight: bold;
        color: #222;
        text-decoration: none;
        transition: color .3s;

        &.router-link-exact-active {
            // color: #42b983;
            color: $accent;
        }

        &:hover {
            // color: #42b983;
            color: $accent;
            transition: color .3s;
        }
    }

    .links {
        a {
            margin-left: 40px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 2px;
        }
    }

    .logo {
        img {
            max-width: 50px;
            display: block;
        }
    }
}
</style>

