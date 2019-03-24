<template>
  <Layout>
        
    <section class="hero is-dark is-fullheight">  
      <div class="hero-body">
        <div class="container has-text-centered">         
          <p class="title">
            THE POWER OF MOVEMENT
          </p>
          <p class="subtitle">
            Imagine all around the world you can jump on any eBike, speed around with any eScooter, drive with any eCar and use all public transport within one single app
          </p>
          <a class="button is-success" href="mailto:samuel@styl.earth">Contact</a>
          <br><br>
          <g-link to="/imprint">Imprint</g-link> 
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'styl earth'
  }
}
</script>

<style>

  .title {
    font-size: 3.5rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .hero-body {
    background-image: url("https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa") ;
    background-image: linear-gradient(to bottom, rgba(80, 80, 80, 0.3)  0%,rgba(82, 82, 82, 0.3) 100%), url("https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
