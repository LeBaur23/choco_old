<template>
  <div id="app">
    <chocomart-link-header></chocomart-link-header>
    <div style="margin-bottom: 40px"></div>
    <chocomart-header></chocomart-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
