<template>
    <section class="section has-video">
      <iframe :src="videoLink" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>
    </section>
</template>

<script>
  export default {
    props: [
      "videoLink"
    ],
  }
</script>

<style scoped>
  .has-video {
    position: relative;
    padding-bottom: 56.25%; /*16:9*/
    padding-top: 30px; 
    height: 0; 
    overflow: hidden;
  }
 
  .has-video iframe,
  .has-video object,
  .has-video embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
