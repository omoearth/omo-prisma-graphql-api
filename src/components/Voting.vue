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

          <div class="column is-one-quarter" v-for="city in cities">
            <div class="card">
             <div class="card-image has-text-centered">
                <figure class="image is-3by2">
                  <img src="@/assets/cities/munich.jpg" :alt="city.name">
                </figure>
                <div class="card-content is-overlay is-clipped is-center">
                  <p class="title has-text-white is-size-special">{{city.votes}}</p>  
                </div>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{city.name}}</p>
                    <p class="subtitle is-6">{{city.country}}</p>
                  </div>
                </div>
                <button onclick="growsurf.open('a8fn95')" class="growsurf-button green">VOTE FOR {{city.name}}</button>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>

</template>


<script>
export default {
    data () {
        return {
            cities: [
                {
                    name: "Munich",
                    country: "Germany",
                    votes: 1500,  
                    url: "/assets/img/munich.jpg"
                },
                {
                    name: "Barcelona",
                    country: "Spain",
                    votes: 1300,
                    url: "/assets/img/barcelona.jpg"
                },
                {
                    name: "Milano",
                    country: "Italy",
                    votes: 900,
                    url: "/assets/img/milano.jpg"
                },
                {
                    name: "Amsterdam",
                    country: "Netherlands",
                    votes: 500,
                    url: "/assets/img/amsterdam.jpg"
                },
                {
                    name: "Paris",
                    country: "France",
                    votes: 200,
                    url: "/assets/img/paris.jpg"
                },
                {
                    name: "London",
                    country: "England",
                    votes: 65,
                    url: "/assets/img/london.jpg"
                }
            ]
        }
    },
    metaInfo: {
        script: [
            { src: '//js.growsurf.com/v1' }
        ],
    }
}
</script>