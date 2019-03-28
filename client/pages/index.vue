<template>
  <section class="">
    <Header :title="header.title" :subtitle="header.subtitle"/>
    <Illustration :title="illustration.title" :subtitle="illustration.subtitle" :imageUrl="illustration.imageUrl" :text="illustration.text"/>
    <Vimeo :videoLink="vimeo.videoLink"/>
    <Explain />
    <Cities />
    <Pricing />
  </section>
</template>

<script>

import Header from '~/components/Header'
import Illustration from '~/components/Illustration'
import Explain from '~/components/Explain'
import Vimeo from '~/components/Vimeo'
import Cities from '~/components/Cities'
import Pricing from '~/components/Pricing'

export default {
  data() {
    return {
      header: {
        title: 'IT IS YOUR ERA NOW',
        subtitle: 'to inspire and build together the most extraordinary green earth'
      },
      illustration: {
        title: "THE POWER OF MOVEMENT",
        subtitle: "in one green mobility flatrate",
        imageUrl: "banner.png",
        text: "imagine you can jump on any eBike, speed around with any eScooter and drive with any eCar while consuming only green energy and sustaining the earth, all within one simple subscription"
      },
      vimeo: {
        videoLink: "https://player.vimeo.com/video/323399729"   
      },
    }
  },
  components: {
    Header,
    Explain,
    Illustration,
    Cities,
    Pricing,
    Vimeo
  }
}
</script>


<style>

a {
  color: #20bc56;
}

.has-text-green {
  color: #00DD64;
}
.has-text-blue {
  color: #000B2C;
}

</style>