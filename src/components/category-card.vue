<template>
  <div class="category-card d-flex justify-content-center align-items-center">
    <div v-if="discount === true" class="category-card-discount">

    </div>
    <div v-if="discount === false || discount === undefined" class="category-card-info d-flex flex-wrap">
      <div v-if="icon !== undefined" class="category-card-img d-flex justify-content-center align-items-center w-100">
        <img :src="'/static/icons/' + icon" alt="">
      </div>
      <div v-if="title !== undefined" class="category-card-text d-flex justify-content-center align-items-center w-100 text-center text-uppercase">
        {{title}}
      </div>
    </div>
    <img v-if="discount === true" src="../assets/images/book_discount.png" alt="">
    <div v-if="discount === false || discount === undefined " class="category-card-border"></div>
  </div>
</template>
<script>
  export default {
    props: ['icon', 'title', 'discount']
  }
</script>
