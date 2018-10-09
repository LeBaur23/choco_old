<template>
  <div class="product-wrapper product-wrapper--big product-wrapper--small d-flex flex-column align-items-center">
    <div class="product-wrapper__promotion promotion-wrapper promotion-wrapper--small w-100 d-flex justify-content-end align-items-center">
      <chocomart-icon :icon="'bonus'" :font_size="'25px'"></chocomart-icon>
      <div class="promotion-wrapper__bonus-value">Бонус <br><span class="font-weight-bold">2226 ₸</span></div>
    </div>
    <div class="row product-wrapper__row--small">
      <div class="product-wrapper__image image-wrapper image-wrapper--big image-wrapper--small d-flex justify-content-center">
        <img src="/static/iphone.png" class="image-wrapper__img h-100">
      </div>
      <div class="product-wrapper__description description-wrapper">
        <div class="description-wrapper__text text-wrapper text-center w-100">
          Смартфон Apple iPhone 6 32 Gb Gold
        </div>
        <div class="description-wrapper__rating rating-wrapper w-100"></div>
        <div class="description-wrapper__price price-wrapper d-flex align-items-center justify-content-center font-weight-bold w-100">
          250 000 тг
        </div>
      </div>
    </div>
  </div>
</template>
