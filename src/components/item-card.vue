<template>
  <div class="item-card">
    <div class="item-card_image">
      <img src="https://galaxystore.ru/upload/resize_cache/iblock/a64/447_447_17f5c944b3b71591cc9304fac25365de2/a647e0abe0f306cc11529a51207dda80.jpg" alt="">
    </div>
    <div class="item-card_title">
      <h4 class="text-center">{{ title }}</h4>
    </div>
    <div class="item-card_price">
      <h4 class="text-center">{{ price }} тг </h4>
    </div>
    <div class="item-card_bonus">
      <div class="d-flex justify-content-center align-items-center">
        <chocomart-icon :icon="'bonus'" :font_size="'22px'" :color="'#fdcc05'" ></chocomart-icon>
        <div class="ml-2">
          Бонус <br>
          <span>2276</span> ₸
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['image', 'title', 'price', 'bonus']
  }
</script>
