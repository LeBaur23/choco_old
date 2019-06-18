<template>
  <div class="category-card d-flex justify-content-center align-items-center">
    <a :href="link">
      <div v-if="discount === false || discount === undefined" class="category-card-info d-flex flex-wrap">
        <div v-if="icon !== undefined" class="category-card-img d-flex justify-content-center align-items-center w-100">
          <chocomart-icon :category="'../static/category/' + icon" :color="'#fb443f'" ></chocomart-icon>
          <!--<img :src="'/static/category/' + icon" alt="">-->
        </div>
        <div v-if="title !== undefined" class="category-card-text d-flex justify-content-center align-items-center w-100 text-center text-uppercase">
          {{title}}
        </div>
      </div>
      <img width="100%" v-if="discount === true" src="../assets/images/book_discount.png" alt="">
      <div v-if="discount === false || discount === undefined " class="category-card-border"></div>
    </a>
  </div>
</template>
<script>
  export default {
    props: ['icon', 'title', 'discount', 'link']
  }
</script>
