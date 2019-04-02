<template>
    <section class="section is-medium">
      <div class="container has-text-centered">         
        <p class="title has-text-blue is-size-1 is-size-3-mobile is-spaced">
          LEAD YOUR CITY
        </p>
        <p class="subtitle is-4 is-size-5-mobile">
           you are holding the power to become the leader of the most important sustainable city enterprises of our time
        </p>
      </div>

      <div class="container has-text-centered">
        <div class="columns" >
          <div class="column" v-for="item in items" :key="item.icon">
            <img :src="buildImageUrl(item.icon)" />
            <h1 class="title is-4">{{item.title}}</h1>
            <h2 class="subtitle is-5">{{item.subtitle}}</h2>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  data() {
    return {
        items: [
          {
            title: "1. VOTE",
            subtitle: "for your city and join the race to decide in which city we will start",
            icon: "vote" 
          },
           {
            title: "2. LEAD",
            subtitle: "your fellow citizens at the forefront and collect invitation points",
            icon: "lead" 
          },
          {
            title: "3. EMPOWER",
            subtitle: "the growing movement and break the doors open into a new exciting era",
            icon: "empower" 
          }
        ]
    }
  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.png`);
    },
  }
}
</script>