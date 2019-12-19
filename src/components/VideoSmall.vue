<template>
  <div class="video-small-container">
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
</template>

<script>
export default {
  name: 'VideoSmall',
  props: ['item', 'index'],
}
</script>

<style lang="scss">
.video-small-container {
  p {
    margin: 0 0 10px;
    font-family: $sans-serif;
    font-size: 18px;
    color: $gray-body;
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
</style>