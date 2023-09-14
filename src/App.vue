<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/header.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Header>
  </Header>
  <RouterView class="map"/>
  <div class="main"></div>
</template>

<style >


</style>
