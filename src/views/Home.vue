<template>
  <div class="home-view">
    <div class="home-hero">
        <video class="home-bg-video" autoplay loop muted>
          <source src="https://goodlifeondemandproductions.s3-us-west-1.amazonaws.com/hall-wedding.mp4" type="video/mp4">
        </video>

        <div class="down-arrow"></div>
    </div>

      <div class="home-headline">
          <img src="../assets/img/flower-bg.jpg" alt="Flower Background" class="home-headline-image">

          <div class="scrolling-text">goodlifeondemand</div>

          <div class="home-headline-content">
            <div class="home-headline-copy">
                <h1 class="title fade-item">Welcome to Good Life On Demand Productions!</h1>
                <p class="subtitle fade-item">Good Life on Demand is here to provide a film truly personal and authentic for the most significant day in a couple’s relationship. We are a Pittsburgh and Los Angeles based videographers who are contracted all across the continental US. If you are planning a wedding with a concrete layout to celebrate the love of two people and rejoice with your friends and family, Good Life on Demand may be the perfect fit for you!</p>
            </div>
          </div>
      </div>

      <section class="home-work">
        <div class="home-work-header">
            <h2 class="home-work-title fade-item">Our Work</h2>
        </div>

        <div class="home-work-container">
          <video-small class="fade-item featured-video" :item="featuredItem"></video-small>

          <div class="home-work-items fade-item">
            <video-small v-for="(item, index) in workItems" :index="index" :key="index" :item="item"></video-small>
          </div>

          <div class="link-container">
            <router-link to="/work" class="fade-item">View All</router-link>
          </div>
        </div>

      </section>

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
import VideoSmall from '../components/VideoSmall';
import { TweenMax } from 'gsap';

export default {
  name: 'home',
  components: {
    'video-small': VideoSmall
  },
  data() {
    return {
      featuredItem: {
        title: 'Kazimer Wedding',
        VIDEO_ID: '378695844',
        type: 'vimeo'
      },
      workItems: [
        {
            title: 'Walter Wedding',
            VIDEO_ID: '332339318',
            type: 'vimeo'
        },
        {
          title: 'Henney Wedding',
          VIDEO_ID: '373809922',
          type: 'vimeo'
        },
      ]
    }
  },
  beforeCreate() {
      document.body.className = 'home';
      window.scrollTo(0,0);
  },
  mounted() {
    // global mount variables
    const controller = new ScrollMagic.Controller;
    let ww = window.innerWidth;
    let wh = window.innerWidth;

    // scrolling text
    // const scrollingItem = document.querySelector('.scrolling-text');
    // let scrollRect = scrollingItem.getBoundingClientRect();
    // let scrollAmt = scrollRect.left + (scrollRect.width - window.innerWidth); // amount that the scroll text should scroll so it goes all the way to the end

    // let scene = new ScrollMagic.Scene({
    //   triggerElement: scrollingItem,
    //   triggerHook: 1,
    //   duration: wh + 500
    // })
    // .on('progress', function(e) {
    //   TweenMax.to(scrollingItem, 2, {x: -(e.progress) * ww / 2, ease: Expo.easeOut});
    // })
    // .addTo(controller);

    // fade-text
    let fadeItems = document.querySelectorAll('.fade-item');
    fadeItems.forEach((e) => {
      TweenMax.set(e, {opacity: 0, y: '30px'});
      let scene = new ScrollMagic.Scene({
        triggerElement: e,
        triggerHook: .85,
      })
      .setTween(TweenMax.to(e, .7, {y: 0, opacity: 1, ease: Expo.easeOut}))
      .addTo(controller);
    });
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
  z-index: -1;
  position: relative;
  overflow: hidden;
  max-height: 1024px;

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
    z-index: -1;
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
</style>