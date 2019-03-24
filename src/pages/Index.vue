<template>
  <Layout>
    <Header />
    <Illustration />
    <Vimeo />
    <Explain />
    <Voting />
    <Pricing />

  </Layout>
</template>

<script>

import Header from '~/components/Header.vue'
import Illustration from '~/components/Illustration.vue'
import Vimeo from '~/components/Vimeo.vue'
import Explain from '~/components/Explain.vue'
import Voting from '~/components/Voting.vue'
import Pricing from '~/components/Pricing.vue'

export default {
  components: {
    Header,
    Illustration,
    Vimeo,
    Explain,
    Voting,
    Pricing,
  },
  metaInfo: {
    title: 'home'
  }
}
  
</script>

