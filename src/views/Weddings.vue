<template>
    <div class="weddings-view page-wrapper">
        <div class="overlay-image" :style="{backgroundImage: 'url(' + require('@/assets/img/work-hero.jpg')}"></div>

        <section class="weddings-hero">
          <div class="copy-container">
            <h1>{{fields.title}}</h1>
            <p>{{fields.subtitle}}</p>
          </div>
          <div class="image-container">
            <a target="_blank" href="https://www.theknot.com/marketplace/redirect-2063910" class="the-knot-link"><img src="../assets/img/the-knot-23.png" alt="The Knot Best of Weddings - 2023 Pick"></a>
          </div>
        </section>

        <section class="videos-container">
          <video-small v-for="(item, index) in fields.videos" :index="index" :key="index" :item="item"></video-small>
        </section>
    </div>
</template>

<script>
import VideoSmall from '../components/VideoSmall';

export default {
  name: 'Weddings',
  components: {
    'video-small': VideoSmall
  },
  data() {
    return {
      fields: {
        title: '',
        subtitle: '',
        videos: []
      },
      // workItems: [
      //   {
      //     title: 'Kazimer Wedding',
      //     VIDEO_ID: '378695844',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Henney Wedding',
      //     VIDEO_ID: '373809922',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Rosemeier Wedding',
      //     VIDEO_ID: '381977146',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Heath Wedding',
      //     VIDEO_ID: '355890720',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Fornear Wedding',
      //     VIDEO_ID: '337074132',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Walter Wedding',
      //     VIDEO_ID: '332339318',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Hall Wedding',
      //     VIDEO_ID: '340514758',
      //     type: 'vimeo'
      //   },
      //   {
      //     title: 'Landman Wedding',
      //     VIDEO_ID: '340515268',
      //     type: 'vimeo'
      //   }
      // ]
    }
  },
  beforeCreate() {
    document.body.className = 'weddings';
    window.scrollTo(0, 0);

    this.videoIds = [];
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {

      this.$prismic.client.getSingle('work').then((document) => {

        this.fields.title = document.data.title[0].text;
        this.fields.subtitle = document.data.subtitle[0].text;
        document.data.videos.forEach(e => {
          this.videoIds.push(e.video.id);
        });

      }).then(() => {

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
.page-wrapper {
  padding-top: 300px;
}

.weddings-hero {
  max-width: 900px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: $screen-sm) {
    margin-top: -37px;
  }

  .copy-container {
    padding-right: 30px;
  }
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
    background: linear-gradient(180deg,rgba(255,255,255,0), rgba(255,255,255,1));
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

.the-knot-link {
  display: block;
}
</style>

