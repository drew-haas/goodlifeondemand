<template>
    <div class="work-view page-wrapper">
        <div class="overlay-image" :style="{backgroundImage: 'url(' + require('@/assets/img/work-hero.jpg')}"></div>

        <section class="work-hero">
            <h1>Work</h1>
            <p>Weddings from small to large. Check out our video compilations below.</p>
        </section>

        <section class="videos-container">
          <video-small v-for="(item, index) in workItems" :index="index" :key="index" :item="item"></video-small>
        </section>
    </div>
</template>

<script>
import VideoSmall from '../components/VideoSmall';

export default {
  name: 'Work',
  components: {
    'video-small': VideoSmall
  },
  data() {
    return {
      workItems: [
        {
          title: 'Kazimer Wedding',
          VIDEO_ID: '378695844',
          type: 'vimeo'
        },
        {
          title: 'Henney Wedding',
          VIDEO_ID: '373809922',
          type: 'vimeo'
        },
        {
          title: 'Heath Wedding',
          VIDEO_ID: '355890720',
          type: 'vimeo'
        },
        {
          title: 'Fornear Wedding',
          VIDEO_ID: '337074132',
          type: 'vimeo'
        },
        {
          title: 'Walter Wedding',
          VIDEO_ID: '332339318',
          type: 'vimeo'
        },
        {
          title: 'Hall Wedding',
          VIDEO_ID: '340514758',
          type: 'vimeo'
        },
        {
          title: 'Landman Wedding',
          VIDEO_ID: '340515268',
          type: 'vimeo'
        }
      ]
    }
  },
  beforeCreate() {
    document.body.className = 'work';
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding-top: 300px;
}

.work-hero {
  max-width: 900px;
  margin: 0 auto 50px;
}

h1 {
  margin-bottom: 0;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 270px;
  z-index: -1;
  background-size: cover;
  background-position: center;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(255,255,255,1) 100%);
  }
}

.videos-container {
  max-width: 900px;
  margin: 40px auto 60px;

  .video-small-container {
    margin-bottom: 130px;

    @media screen and (max-width: $screen-sm) {
      margin-bottom: 70px;
    }
  }
}
</style>

