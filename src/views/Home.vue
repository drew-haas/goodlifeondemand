<template>
  <div class="home-view">
    <div class="home-hero">
        <video class="home-bg-video" autoplay loop muted>
            <source src="../assets/media/hero-video.mp4" type="video/mp4">
        </video>
        <div class="down-arrow"></div>
    </div>
    <div class="page-wrapper">
        <img src="../assets/img/flower-bg.jpg" alt="Flower Background" class="home-headline-image">
        <section class="home-headline">
            <div class="home-headline-copy">
                <h1 class="title">Welcome to Good Life On Demand Productions!</h1>
                <p class="subtitle">Good Life on Demand is here to provide a film truly personal and authentic for the most significant day in a couple’s relationship. We are a Pittsburgh and Los Angeles based videographers who are contracted all across the continental US. If you are planning a wedding with a concrete layout to celebrate the love of two people and rejoice with your friends and family, Good Life on Demand may be the perfect fit for you!</p>
            </div>
        </section>
        <section class="home-work">
            <div class="home-work-header">
                <h2 class="home-work-title">Our Work</h2>
            </div>
            <div class="home-work-items">
                <div class="home-work-item" v-for="item in workItems" :key="item.id">
                    <p class="item-title">{{item.title}}</p>
                    <div class="video-container">
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
        </section>
    </div>
  </div>
</template>

<script>
/*
    Work Items
    -----------
    id: must be unique
    title: title to be displayed with video
    VIDEO_ID: must match the unique video ID for the type used
    type: supports 'vimeo' or 'youtube'
*/

export default {
    name: 'home',
    data() {
        return {
            workItems: [
                {
                    id: 1,
                    title: 'Heath Wedding',
                    VIDEO_ID: '355890720',
                    type: 'vimeo'
                },
                {
                    id: 2,
                    title: 'Fornear Wedding',
                    VIDEO_ID: '337074132',
                    type: 'vimeo'
                },
                {
                    id: 3,
                    title: 'Walter Wedding',
                    VIDEO_ID: '332339318',
                    type: 'vimeo'
                },
                {
                    id: 4,
                    title: 'Hall Wedding',
                    VIDEO_ID: '340514758',
                    type: 'vimeo'
                },
                // {
                //     id: 4,
                //     title: 'Landman Wedding',
                //     VIDEO_ID: '340515268',
                //     type: 'vimeo'
                // },
            ]
        }
    },
    beforeCreate: function() {
        document.body.className = 'home';
    }
}
</script>


<style lang="scss">
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
            z-index: 1;
            position: relative;
            opacity: .7;
            display: none;
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
        width: 100%;
        max-width: 1300px;
        position: absolute;
        top: 0;
        right: -10%;
        z-index: -1;

        @media screen and (max-width: $screen-sm) {
            display: none;
        }
    }

    &-work {
        margin-top: 100px;

        &-header {
            text-align: center;
        }

        h2 {
            border-bottom: 1px solid $gray-light;
            padding-bottom: 14px;
            display: inline-block;
            margin-bottom: 0;
        }
    }

    &-work-items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1400px;
        margin: 40px auto 60px;
        grid-gap: 2em;

        @media screen and (max-width: $screen-xs) {
            grid-template-columns: 1fr;
        }
    }

    &-work-item {
        p {
            margin: 15px 0 10px;
            font-family: 'Dancing Script', cursive;
            font-size: 24px;
        }

        .video-container {
            @include aspect-ratio(16, 9);
            background-color: #ccc;
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
