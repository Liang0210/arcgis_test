<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    <nav>
      <RouterLink to="/3D">3D</RouterLink>
      <RouterLink to="/">2D</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  max-height: 50px;
  width: 100%;
  z-index: 9999;
  justify-content: flex-end;
}

.logo {
  display: block;
  margin-right: 1rem;
}


nav {
  font-size: 20px;
  text-align: center;
  display: flex;
  align-self: center;
  margin-right: 1rem;
}

nav a.router-link-exact-active {
  color: rgb(101, 185, 45);
}

nav a:hover {
  background-color: rgb(51, 143, 39);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: flex-end;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo{
    width: 50px;
    height: 50px;
  }
  html,
  body,
  .main{
    width: 100%;
    height:calc(100%-50px);
    padding: 0;
    margin: 0;
  }

}
</style>