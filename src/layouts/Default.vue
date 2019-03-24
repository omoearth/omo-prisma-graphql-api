<template>
  <div class="layout">
   
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <g-link to="/" class="navbar-item">
            <img src="@/assets/logo.png" alt="STYL EARTH">
          </g-link>
        </div>
        <div id="navbarMenuHero" class="navbar-menu">
          <div class="navbar-end">
            <g-link class="navbar-item" to="/about">About</g-link>  
            <g-link class="navbar-item" to="/imprint">Imprint</g-link>  
          </div>
        </div>
      </div>
    </nav> 

    <slot/>

  </div>
</template>

<style>

.navbar {
  background-color: #000B2C;
}

</style>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
