<template>
  <div class="basket">
    <div class="basket-header-wrapper">
      <h4 class="mt-0">КОРЗИНА</h4>
      <div class="basket-header d-flex justify-content-between align-items-center">
        <chocomart-icon :icon="'basket-cart'" :font_size="'28px'"></chocomart-icon>
        <div class="basket-header_border"></div>
        <chocomart-icon :icon="'avatar'" :font_size="'27px'"></chocomart-icon>
        <div class="basket-header_border"></div>
        <chocomart-icon :icon="'basket-card'" :font_size="'33px'"></chocomart-icon>
      </div>
      <h4 class="text-center mb-0">Выбранные товары</h4>
    </div>
    <div class="basket-product-list d-flex" v-for="i in 3">
      <div class="basket-product-image">
        <img width="100%" src="https://htstatic.imgsmail.ru/pic_image/13031ebb2c7c90f31e4b4c430a11a34a/450/450/1278196/" alt="">
      </div>
      <div class="basket-product-info">
        <h4>Смартфон Apple iPhone 6S 32GB Смартфон Apple </h4>
        <div class="basket-product-amount d-flex">
          <div class="basket-product-amount_add d-flex justify-content-center align-items-center">+</div>
          <div class="basket-product-amount_text d-flex justify-content-center align-items-center">1</div>
          <div class="basket-product-amount_remove d-flex justify-content-center align-items-center">-</div>
        </div>
        <h5>250 000 тг</h5>
      </div>
      <div class="basket-product-close">
        <chocomart-icon :icon="'close'"></chocomart-icon>
      </div>
    </div>
    <div class="basket-product-total">
      <h4>ИТОГО:</h4>
      <h4>Всего в корзине: <span>5 товаров</span></h4>
      <h4>Общая сумма: <span>500 000 тенге</span></h4>
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center mb-3 mt-3">
      <button class="basket-buy">Оформить заказ</button>
    </div>
  </div>
</template>
