<template>
  <div class="home-view">
    <div class="home-hero">
        <video class="home-bg-video" autoplay loop muted>
          <source src="https://goodlifeondemandproductions.s3-us-west-1.amazonaws.com/hall-wedding.mp4" type="video/mp4">
        </video>

        <div class="down-arrow"></div>
    </div>

      <div class="home-headline">
          <div class="scrolling-text">goodlifeondemand</div>

          <div class="home-headline-content">
            <div class="home-headline-copy">
                <h1 class="title fade-item">Welcome to Good Life On Demand Productions!</h1>
                <p class="subtitle fade-item">Good Life on Demand is here to provide a film truly personal and authentic for the most significant day in a couple’s relationship. We are a Pittsburgh and Los Angeles based videographers who are contracted all across the continental US. If you are planning a wedding with a concrete layout to celebrate the love of two people and rejoice with your friends and family, Good Life on Demand may be the perfect fit for you!</p>
            </div>

            <div class="slider-container">

              <div class="slider">
                <div class="petal petal-2"></div>
                <div class="image" :style="{backgroundImage: 'url(' + require('@/assets/img/grass-flowers-women.jpg')}"></div>
                <div class="slider-navigation"></div>
              </div>

            </div>
          </div>

          <div class="petal petal-1"></div>
          <div class="petal petal-3"></div>
          <div class="petal petal-4"></div>
      </div>

      <section class="home-work">
        <div class="home-work-header">
            <h2 class="home-work-title fade-item">Our Work</h2>
        </div>

        <div class="home-work-items fade-item">
          <video-small v-for="(item, index) in workItems" :index="index" :key="index" :item="item"></video-small>
        </div>

        <div class="link-container">
          <router-link to="/work" class="fade-item">View All</router-link>
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
      workItems: [
        {
          title: 'Heath Wedding',
          VIDEO_ID: '355890720',
          type: 'vimeo'
        },
        {
          title: 'Kazimer Wedding',
          VIDEO_ID: '378695844',
          type: 'vimeo'
        },
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
    let ww = window.innerWidth;
    let wh = window.innerWidth;

    // Create animation for each petal
    let petals = document.querySelectorAll('.petal');
    const controller = new ScrollMagic.Controller;

    petals.forEach((petal) => {
      let rotationDirection = Math.random() >= .5 ? '-' : '+';
      // deltas for random movement
      let d1 = this.getRandomInt(100, 250),
          d2 = this.getRandomInt(20, 100),
          d3 = this.getRandomInt(70, 150),
          d4 = this.getRandomInt(20, 100),
          xd1 = this.getRandomInt(0, 20),
          xd2 = this.getRandomInt(0, 20)

      let scene = new ScrollMagic.Scene({
        triggerElement: petal,
        triggerHook: 1,
        duration: wh
      })
      .on('progress', (event) => {
        TweenMax.to(petal, 2, {x: event.progress * xd1 + xd2, y: event.progress * d1 + d2, rotation: rotationDirection + (event.progress * d3 + d4)});
      })
      .addTo(controller);

    });

    // scrolling text
    const scrollingItem = document.querySelector('.scrolling-text');
    let scrollRect = scrollingItem.getBoundingClientRect();
    let scrollAmt = scrollRect.left + (scrollRect.width - window.innerWidth); // amount that the scroll text should scroll so it goes all the way to the end

    let scene = new ScrollMagic.Scene({
      triggerElement: scrollingItem,
      triggerHook: 1,
      duration: wh + 500
    })
    .on('progress', function(e) {
      TweenMax.to(scrollingItem, 2, {x: -(e.progress) * ww / 2, ease: Expo.easeOut});
    })
    .addTo(controller);

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
  },

  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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
}

.home-headline {
  padding: 130px 0 160px;
  position: relative;
  background: linear-gradient(45deg, rgba(233,168,157,.7) 0%,rgba(240,158,95,0.5) 26%,rgba(247,147,30,0.45) 53%,rgba(247,146,33,0.45) 54%,rgba(255,123,172,0.2) 100%);

  @media screen and (max-width: $screen-sm) {
    padding: 100px 0;
    background: linear-gradient(45deg, rgba(233,168,157,1) 0%,rgba(240,158,95,0.5) 26%,rgba(247,147,30,0.5) 53%,rgba(247,146,33,0.5) 54%,rgba(255,123,172,0.3) 100%);
  }

  h1 {
    color: #fff;
    font-size: 54px;
    max-width: 700px;
    margin: 100px 0 20px;

    @media screen and (max-width: $screen-sm) {
      font-size: 36px;
    }
  }

  p {
    max-width: 620px;
    margin-left: 45px;

    @media screen and (max-width: $screen-md) {
      margin-left: 0;
    }
  }

  &-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: $screen-md) {
      padding-right: 0;
    }

    @media screen and (max-width: $screen-sm) {
      display: block;
      padding: 0 20px;
    }
  }

  .scrolling-text {
    font-size: 250px;
    opacity: .2;
    position: absolute;
    text-transform: uppercase;
    color: #fff;
    top: -20px;
    left: 10%;
    line-height: .8;
    font-family: $serif-thin;

    @media screen and (max-width: $screen-sm) {
      left: 0;
    }
  }
}

.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: $screen-sm) {
    display: none;
  }

  .slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 280px;
    height: 475px;
  }

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    background-size: cover;
    background-position: center;
  }

  .slider-navigation {
    background-color: #ccc;
    // height: 100px;
    width: 100%;
  }
}

.petal {
  width: 100px;
  height: 85px;
  position: absolute;
  background-image: url('../assets/img/petals/petals-2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  &-1 {
    width: 100px;
    height: 90px;
    top: -46px;
    right: 35%;
    transform: rotate(-11deg);

    @media screen and (max-width: $screen-sm) {
      top: -150px;
      right: -5%;
    }
  }

  &-2 {
    top: -40px;
    left: calc(100% - 10px);
    width: 110px;
    background-image: url('../assets/img/petals/petals-3.png');
  }

  &-3 {
    top: -150px;
  }

  &-4 {
    @media screen and (max-width: $screen-sm) {
      display: none;
    }
  }
}

.home-work {
    margin-top: 160px;
    padding-bottom: 160px;

    @media screen and (max-width: $screen-md) {
      padding-bottom: 80px;
    }

    @media screen and (max-width: $screen-sm) {
      margin-top: 100px;
    }

    h2 {
        padding-bottom: 14px;
        display: inline-block;
        margin-bottom: 0;
        font-size: 70px;
        font-family: $serif-thin;
        z-index: 1;
        position: relative;
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
    transition: color .5s;

    &:hover {
      color: #fff;
      transition: color .5s;

      &:before {
        opacity: 1;
        transition: opacity .5s;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: $color-gradient;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity .5s;
      z-index: -1;
    }
  }
}
</style>