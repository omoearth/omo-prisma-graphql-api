<template>
    <section class="section is-medium has-background-white-ter">
      <div class="container has-text-centered">         
        <p class="title has-text-blue is-size-1 is-size-3-mobile">
          THE GREEN RACE
        </p>
        <p class="subtitle is-4 is-size-5-mobile">
          everyone wins - you - your city - your earth
        </p>
      </div>
      <br>
      <br>
      <div class="container">
        <div class="columns is-multiline">

          <div class="column is-one-quarter" v-for="city in cities" :key="city.id">

            <div class="card">
             <div class="card-image has-text-centered">
                <figure class="image is-3by2">
                  <img :src="buildImageUrl(city.name)" />
                </figure>
                <div class="card-content is-overlay is-clipped is-center">
                  <p class="title is-1 has-text-white">{{city.votes}}</p>  
                </div>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{city.name}}</p>
                    <p class="subtitle is-6">{{city.country.name}}</p>
                  </div>
                </div>
                
              </div>
              <footer class="card-footer">
                <button class="button is-success is-fullwidth" @click="vote(city.name, city.id)">VOTE FOR {{city.name}}</button>
              </footer> 
            </div>

          </div>
        </div>
      </div>
    </section>

</template>


<script>

import cities from '~/apollo/queries/cities'

export default {
  apollo: {
    cities: {
      prefetch: true,
      query: cities
    }
  },
  methods: {
    vote: function(name, id) {
      alert('voted for ' + name)
    },
    buildImageUrl: function (name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`);
    },
  }
}
</script>

<style scoped>

.is-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
