<template>
  <div class="product-wrapper d-flex flex-column align-items-center">
    <div class="product-wrapper__promotion promotion-wrapper w-100 d-flex justify-content-end align-items-center">
      <chocomart-icon :icon="'bonus'" :font_size="'25px'"></chocomart-icon>
      <div class="promotion-wrapper__bonus-value">Бонус <br><span class="font-weight-bold">2226 ₸</span></div>
    </div>
    <div class="product-wrapper__image image-wrapper d-flex justify-content-center">
      <img src="/static/iphone.png" class="image-wrapper__img h-100">
    </div>
    <div class="product-wrapper__description description-wrapper text-center">
      Смартфон Apple iPhone 6 32 Gb Gold
    </div>
    <div class="product-wrapper__rating rating-wrapper"></div>
    <div class="product-wrapper__price price-wrapper d-flex align-items-center justify-content-center font-weight-bold">
      250 000 тг
    </div>
  </div>
</template>
