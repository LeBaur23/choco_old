<template>
  <div class="header-navigation d-flex justify-content-center align-items-center">
    <router-link :to="{name: 'Bauka'}" class="header-navigation_back">
      <chocomart-icon :icon="'arrow-thin'" :color="'black'"></chocomart-icon>
    </router-link>
    <h4 class="text-center">
      {{ title }}
    </h4>
  </div>
</template>
<script>
  export default {
    props: ['back_link', 'title']
  }
</script>

