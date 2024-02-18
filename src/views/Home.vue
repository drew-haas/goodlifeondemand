<template>
  <div class="home-view">
    <div class="home-hero">
      <!-- <video class="home-bg-video" autoplay loop muted playsinline>
          <source src="https://goodlifeondemandproductions.s3-us-west-1.amazonaws.com/hall-wedding.mp4" type="video/mp4">
        </video> -->
      <div class="vimeo-wrapper" role="presentation">
        <iframe src="https://player.vimeo.com/video/676497734?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>

      <div class="badges">
        <a target="_blank" href="https://www.theknot.com/marketplace/redirect-2063910"
          class="the-knot-link the-knot-23"><img src="../assets/img/the-knot-23.png"
            alt="The Knot Best of Weddings - 2023 Pick"></a>
        <a target="_blank" href="https://www.theknot.com/marketplace/redirect-2063910"
          class="the-knot-link the-knot-24"><img src="../assets/img/the-knot-24.png"
            alt="The Knot Best of Weddings - 2024 Pick"></a>
        <a target="_blank" href="https://www.weddingwire.com/biz/goodlifeondemandproductions/4e26b1b659a2d4fc.html"
          class="the-knot-link wedding-wire-24"><img src="../assets/img/wedding-wire-24.png"
            alt="Wedding Wire Couples Choice Awards - 5 Stars - 2024"></a>
      </div>

      <div class="down-arrow" role="presentation"></div>
    </div>

    <div class="home-headline">
      <img src="../assets/img/flower-bg.jpg" alt="Flower Background" class="home-headline-image">

      <div class="scrolling-text">goodlifeondemand</div>

      <div class="home-headline-content">
        <div class="home-headline-copy">
          <h1 class="title fade-item">{{ fields.title }}</h1>
          <p class="subtitle fade-item">{{ fields.description }}</p>
        </div>
      </div>
    </div>

    <section class="home-work">
      <div class="home-work-header">
        <h2 class="home-work-title fade-item">Weddings</h2>
      </div>
      <div class="home-work-container">
        <video-small v-if="fields.featuredVideo" class="fade-item featured-video"
          :item="fields.featuredVideo"></video-small>

        <div class="home-work-items fade-item">
          <video-small v-for="(item, index) in fields.videos" :index="index" :key="index" :item="item"></video-small>
        </div>

        <div class="link-container">
          <router-link to="/weddings" class="fade-item">View All</router-link>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
/*
    Work Items (coming from prismic)
    https://goodlifeondemandproductions.prismic.io/documents/working/

    title: title to be displayed with video
    VIDEO_ID: must match the unique video ID for the type used
    type: supports 'vimeo' or 'youtube'
*/
import VideoSmall from '../components/VideoSmall';
import { gsap, Expo } from 'gsap';

export default {
  name: 'home',
  components: {
    'video-small': VideoSmall
  },
  data() {
    return {
      fields: {
        title: null,
        description: null,
        featuredVideo: {
          title: '',
          VIDEO_ID: '',
          type: 'vimeo'
        },
        videos: []
      }
    }
  },
  beforeCreate() {
    document.body.className = 'home';
    window.scrollTo(0, 0);

    this.featuredId = '';
    this.videoIds = [];
  },
  created() {
    this.getContent();
  },
  mounted() {
    // global mount variables
    const controller = new ScrollMagic.Controller;
    let ww = window.innerWidth;
    let wh = window.innerWidth;

    // fade-text
    let fadeItems = document.querySelectorAll('.fade-item');
    fadeItems.forEach((e) => {
      gsap.set(e, { opacity: 0, y: '30px' });
      let scene = new ScrollMagic.Scene({
        triggerElement: e,
        triggerHook: .85,
      })
        .setTween(gsap.to(e, { duration: .7, y: 0, opacity: 1, ease: Expo.easeOut }))
        .addTo(controller);
    });

  },
  methods: {
    getContent() {

      this.$prismic.client.getSingle('home').then((document) => {
        // set home fields
        this.fields.title = document.data.title[0].text;
        this.fields.description = document.data.description[0].text;

        // set video ID's
        this.featuredId = document.data.featured_video.id;
        document.data.videos.forEach((e) => {
          this.videoIds.push(e.video.id);
        });

      }).then(() => {

        // featured video
        this.$prismic.client.query(
          this.$prismic.Predicates.at('document.id', this.featuredId),
        ).then((response) => {
          this.fields.featuredVideo.title = response.results[0].data.video_title[0].text;
          this.fields.featuredVideo.VIDEO_ID = response.results[0].data.video_id;
        });

        // other videos
        this.$prismic.client.query(
          this.$prismic.Predicates.in('document.id', this.videoIds),
        ).then((response) => {
          response.results.forEach(e => {
            this.fields.videos.push({
              title: e.data.video_title[0].text,
              VIDEO_ID: e.data.video_id,
              type: 'vimeo'
            })
          });
        });
      });
    }
  }
}
</script>


<style lang="scss" scoped>
.home-view {
  overflow: hidden;
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

.home-hero {
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-color: #000;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  max-height: 1024px;
  min-height: 550px;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 10%;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
    position: relative;
    opacity: .7;
    display: none;
  }

  @media screen and (max-width: $screen-xs) {
    max-height: 400px;
  }
}

.home-bg-video {
  @include center(absolute);
  min-width: 100%;
  min-height: 100%;
  opacity: .8;
  pointer-events: none;

  video {
    pointer-events: none;
  }
}

.vimeo-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.vimeo-wrapper iframe {
  width: 100vw;
  height: 56.25vw;
  /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh;
  /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home-headline {
  padding: 300px 0 80px;
  position: relative;

  @media screen and (max-width: $screen-sm) {
    padding: 100px 0 80px;
  }

  h1 {
    color: $accent;
    font-size: 54px;
    max-width: 700px;
    margin: 0 0 20px;
    font-family: 'Dancing Script';

    @media screen and (max-width: $screen-sm) {
      font-size: 36px;
    }
  }

  p {
    max-width: 620px;
    margin-left: 40px;

    @media screen and (max-width: $screen-md) {
      margin-left: 0;
    }
  }

  &-content {
    max-width: 1440px;
    margin: 0 auto;
    width: 90%;

    @media screen and (max-width: $screen-sm) {
      padding: 0 20px;
    }
  }

  &-image {
    width: 100%;
    max-width: 1300px;
    position: absolute;
    top: 0;
    right: -120px;
    opacity: .9;

    @media screen and (max-width: $screen-sm) {
      display: none;
    }
  }

  .scrolling-text {
    font-size: 250px;
    opacity: .4;
    position: absolute;
    text-transform: uppercase;
    color: $gray-lighter;
    top: -10px;
    left: -23px;
    line-height: 1;
    font-family: $serif-thin;

    @media screen and (max-width: $screen-sm) {
      display: none;
    }
  }
}

.home-work {
  margin-top: 160px;
  padding-bottom: 120px;

  @media screen and (max-width: $screen-md) {
    padding-bottom: 80px;
  }

  @media screen and (max-width: $screen-sm) {
    margin-top: 50px;
  }

  h2 {
    font-size: 120px;
    margin: 0 0 30px -10px;
    padding: 0;
    font-family: $serif;
    color: $gray-lighter;
    z-index: 1;
    position: relative;

    @media screen and (max-width: $screen-sm) {
      font-size: 56px;
      padding-bottom: 0;
    }
  }

  .featured-video {
    margin-bottom: 46px;

    @media screen and (max-width: $screen-sm) {
      margin-bottom: 0;
    }
  }

  &-container {
    max-width: 80%;
    margin: 0 auto;

    @media screen and (max-width: $screen-sm) {
      max-width: none;
    }
  }

  &-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 40px auto 60px;
    grid-gap: 3em;

    @media screen and (max-width: $screen-sm) {
      grid-template-columns: 1fr;
    }
  }
}

.link-container {
  width: 100%;
  text-align: center;

  a {
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    font-weight: bold;
    color: $accent;
    border: 1px solid $accent;
    padding: 8px 16px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    transition: color .3s, background-color .3s;

    &:hover {
      color: #fff;
      background-color: $accent;
      transition: color .3s, background-color .3s;
    }
  }
}

.badges {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, var(--badge-size));
  grid-template-rows: repeat(2, var(--badge-size));
  grid-gap: 10px;
  right: var(--badge-offset);
  bottom: var(--badge-offset);

  .the-knot-24 {
    grid-area: 1 / 2 / 2 / 3; // Top right corner
  }

  .the-knot-23 {
    grid-area: 2 / 2 / 3 / 3; // bottom right
  }

  .wedding-wire-24 {
    grid-area: 2 / 1 / 3 / 2; // bottom left
    --badge-size: 94px;
    align-self: center;
    justify-self: center;

    @media screen and (max-width: $screen-sm) {
      --badge-size: 74px;
    }
  }
}

.down-arrow {
  @media screen and (max-width: $screen-sm) {
    left: var(--badge-offset);
    bottom: var(--badge-offset);
    translate: none;
  }
}
</style>