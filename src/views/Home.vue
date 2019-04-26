<template>
  <div class="home-view">
    <div class="home-view-media">
        <div class="down-arrow"></div>
    </div>
    <div class="page-wrapper">
        <div class="home-view-hero">
            <h1 class="title">Welcome to Good Life On Demand Productions</h1>
            <p class="subtitle">Good Life on Demand is here to provide a film truly personal and authentic for the most significant day in a couple’s existence. We are a Pittsburgh and Los Angeles based videographers who are contracted all across the continental US. If you are planning a wedding with a concrete layout to celebrate the love of two people and rejoice with your friends and family, Good Life on Demand may be the perfect fit for you!</p>
        </div>
        <div class="callout-work">
            <h2 class="callout-work-title">Our Work</h2>
            <div class="callout-work-items">
                <div class="callout-work-item" v-for="item in workItems" :key="item.id">
                    <div class="content">
                        <div class="callout-work-item-title">
                            {{item.title}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="callout-contact">
            <h2 class="callout-contact-title"></h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            workItems: [
                {
                    id: 1,
                    title: 'title',
                    path: '',
                },
                {
                    id: 2,
                    title: 'title2',
                    path: '',
                },
                {
                    id: 3,
                    title: 'title3',
                    path: '',
                }
            ]
        }
    },
    beforeCreate: function() {
        document.body.className = 'home';
    }
}
</script>


<style lang="scss">
.down-arrow {
    width: 14px;
    height: 14px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
}

.home {
    .nav {
        position: absolute;
        width: 100%;

        a {
            color: #fff;
            transition: color .3s;

            &:hover {
                color: $accent;
                transition: color .3s;
            }
        }
    }
}

.home-view {
    &-media {
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-color: #222;
        background-image: url('../assets/img/glod-home.png');
        background-size: cover;
        background-position: center;
        z-index: -1;
        position: relative;

        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 10%;
            pointer-events: none;
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
    }

    &-hero {
        max-width: 700px;
        margin: 0 auto;

        @media screen and (max-width: $screen-sm) {
            text-align: left;
        }
    }
}

.callout {
    &-work {
        margin-top: 100px;
    }

    &-work-items {
        // display: grid;
        // grid-template-columns: 1fr 1fr 1fr;
        max-width: 700px;
        margin: 40px auto 0;
        // grid-gap: 1em;

        @media screen and (max-width: $screen-xs) {
            grid-template-columns: 1fr;
        }
    }

    &-work-item {
        @include aspect-ratio(16, 9);
        // height: 200px;
        background-color: #ccc;
        margin-bottom: 40px;

        @media screen and (max-width: $screen-xs) {
            margin-bottom: 20px;
        }

        .content {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
        }
    }
}

</style>
