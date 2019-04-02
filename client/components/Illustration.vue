<template>    
    <section class="section is-medium">
      <div class="container has-text-centered">         
        <p class="title has-text-blue is-size-1 is-size-3-mobile is-spaced">
          {{title}}
        </p>
        <p class="subtitle is-3 is-size-5-mobile has-text-green has-text-weight-semibold">
          {{subtitle}} 
        </p>
      </div>
      <div class="container">         
        <img :src="buildImageUrl()" />
      </div>
      <br>
      <div class="container has-text-centered">         
        <p class="subtitle is-4 is-size-5-mobile">
          {{text}}
        </p>
      </div>
    </section>
</template>

<script>
  export default {
    props: [
      "title", 
      "subtitle",
      "imageUrl",
      "text"
    ],
    methods: {
      buildImageUrl: function () {
        return require(`@/assets/banner.png`);
      },
    }
  }
</script>