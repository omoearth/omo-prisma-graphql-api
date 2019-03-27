<template>
  <section class="">
    <Header />
    <Illustration />
    <Vimeo />
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

  name: 'HomePage',

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