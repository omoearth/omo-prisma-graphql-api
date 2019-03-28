<template>
    <section class="hero is-dark is-fullheight">
      <div class="hero-body background-image">
        <div class="container has-text-centered">         
          <p class="title is-size-1-mobile is-size-special">
            {{title}}
          </p>
          <p class="subtitle is-2 is-size-4-mobile is-size-3-tablet">
            {{subtitle}}
          </p>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    props: [
      "title", 
      "subtitle"
    ],
  }
</script>

<style scoped>

.background-image {
    background-image: linear-gradient(to bottom, rgba(80, 80, 80, 0.3)  0%,rgba(82, 82, 82, 0.3) 100%), url("https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
.is-size-special {
    font-size: 5rem;
  }

</style>
