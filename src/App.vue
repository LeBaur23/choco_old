<template>
  <div id="app">
    <chocomart-link-header></chocomart-link-header>
    <chocomart-header></chocomart-header>
    <router-view/>
    <chocomart-footer></chocomart-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
