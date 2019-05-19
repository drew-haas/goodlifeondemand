<template>
  <div class="home-view">
    <div class="home-hero">
        <video class="home-bg-video" autoplay loop muted>
            <source src="../assets/video/hall-wedding.mp4" type="video/mp4">
        </video>
        <div class="down-arrow"></div>
    </div>
    <div class="page-wrapper">
        <div class="home-headline">
            <div class="home-headline-copy">
                <h1 class="title">Welcome to Good Life On Demand Productions</h1>
                <p class="subtitle">Good Life on Demand is here to provide a film truly personal and authentic for the most significant day in a couple’s existence. We are a Pittsburgh and Los Angeles based videographers who are contracted all across the continental US. If you are planning a wedding with a concrete layout to celebrate the love of two people and rejoice with your friends and family, Good Life on Demand may be the perfect fit for you!</p>
            </div>
            <div class="home-headline-image"></div>
        </div>
        <div class="home-callout-work">
            <h2 class="callout-work-title">Our Work</h2>
            <div class="callout-work-items">
                <div class="callout-work-item" v-for="item in workItems" :key="item.id">
                    <div class="content">
                        <template v-if="item.type === 'youtube'">
                            <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + item.VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen controls=0></iframe>
                        </template>
                        <template v-if="item.type === 'vimeo'">
                            <iframe :src="'https://player.vimeo.com/video/' + item.VIDEO_ID + '?title=0&byline=0&portrait=0'" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen background=1></iframe>
                        </template>
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
                    VIDEO_ID: 'Vw-CnimqiKk',
                    thumbnail: '',
                    type: 'youtube'
                },
                {
                    id: 2,
                    title: 'title2',
                    VIDEO_ID: 'KUaI6Cg62B8',
                    thumbnail: '',
                    type: 'youtube'
                },
                {
                    id: 3,
                    title: 'title3',
                    VIDEO_ID: '332339318',
                    thumbnail: '',
                    type: 'vimeo'
                },
                {
                    id: 4,
                    title: 'title3',
                    VIDEO_ID: '337074132',
                    thumbnail: '',
                    type: 'vimeo'
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

    &-hero {
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-color: #000;
        background-size: cover;
        background-position: center;
        z-index: -1;
        position: relative;
        overflow: hidden;

        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 10%;
            pointer-events: none;
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
    }


    &-bg-video {
        @include center(absolute);
        min-width: 100%;
        min-height: 100%;
        opacity: .8;
    }

    &-headline {
        padding: 100px 0;
        position: relative;

        @media screen and (max-width: $screen-sm) {
            padding: 40px 0;
        }
    }

    &-headline-copy {
        max-width: 550px;
    }

    &-headline-image {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #ccc;
        // background-image: url('../assets/img/glod-home.png');
        background-size: cover;
        z-index: -1;
        opacity: .7;

        @media screen and (max-width: $screen-sm) {
            display: none;
        }
    }

    &-callout-work {
        margin-top: 100px;
        text-align: center;
    }

    .callout-work-items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1400px;
        margin: 40px auto 0;
        grid-gap: 2em;

        @media screen and (max-width: $screen-xs) {
            grid-template-columns: 1fr;
        }
    }

    .callout-work-item {
        @include aspect-ratio(16, 9);
        background-color: #ccc;

        .content {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
        }
    }
}
</style>
