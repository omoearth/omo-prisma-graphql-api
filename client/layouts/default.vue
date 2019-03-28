<template>
  <div>
    <nav
      class="navbar header is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/logo.png"
            alt="styl earth"
            height="28"
          >
        </a>
        
        <div class="navbar-menu">

          <div class="navbar-end" v-for="(item, key) of items" :key="key">
              <nuxt-link class="navbar-item" :to="item.to" exact-active-class="is-active">
                {{ item.title }}
              </nuxt-link>
          </div>

        </div>
        
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>

    </nav>
    
    <nuxt />

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: { name: 'index' }
        },
        {
          title: 'About Us',
          to: { name: 'about' }
        },
      ]
    }
  }
}
</script>
