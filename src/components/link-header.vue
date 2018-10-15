<template>
  <div id="LinkHeader" class="link-header-wrapper w-100 d-flex justify-content-center">
    <div class="link-header-wrapper__content content-wrapper">
      <div class="content-wrapper__feedback feedback-wrapper h-100 d-flex align-items-center justify-content-center" v-on:click="showFeedback()">
        Поддержка
        <div class="feedback-wrapper__arrow-down" :class="isOpened === true ? 'feedback-wrapper--showed' : 'feedback-wrapper--hided'"></div>
        <div class="feedback-wrapper__dropdown dropdown-wrapper flex-column" :class="isOpened === true ? 'dropdown-wrapper--showed' : 'dropdown-wrapper--hided'">
          <div class="dropdown-wrapper__type type-wrapper w-100 d-flex align-items-center">
            <div class="type-wrapper__icon h-100 d-flex align-items-center justify-content-center">
              <chocomart-icon :icon="'credit-card'" :font_size="'26px'"></chocomart-icon>
            </div>
            <a href="#">Оплата</a>
          </div>
          <div class="dropdown-wrapper__type type-wrapper w-100 d-flex align-items-center">
            <div class="type-wrapper__icon h-100 d-flex align-items-center justify-content-center">
              <chocomart-icon :icon="'shipping'" :font_size="'26px'"></chocomart-icon>
            </div>
            <a href="#">Доставка</a>
          </div>
          <div class="dropdown-wrapper__type type-wrapper w-100 d-flex align-items-center">
            <div class="type-wrapper__icon h-100 d-flex align-items-center justify-content-center">
              <chocomart-icon :icon="'return'" :font_size="'26px'"></chocomart-icon>
            </div>
            <a href="#">Возврат</a>
          </div>
          <div class="dropdown-wrapper__type type-wrapper w-100 d-flex align-items-center">
            <div class="type-wrapper__icon h-100 d-flex align-items-center justify-content-center">
              <chocomart-icon :icon="'chat'" :font_size="'26px'"></chocomart-icon>
            </div>
            <a href="#">Обратная-связь</a>
          </div>
        </div>
      </div>
      <div class="content-wrapper__numbers numbers-wrapper h-100 d-flex">
        <div class="numbers-wrapper__phone phone-wrapper h-100 d-flex align-items-center">
          <chocomart-icon :color="'#fb443f'" :icon="'phone-call'" :font_size="'20px'"></chocomart-icon>
          <a href="tel: 87272210099" class="phone-wrapper__number">8 (727) 221-00-99</a>
        </div>
        <div class="numbers-wrapper__phone phone-wrapper h-100 d-flex align-items-center justify-content-around">
          <chocomart-icon :color="'#fb443f'" :icon="'phone-call'" :font_size="'20px'"></chocomart-icon>
          <a href="tel: 88000805595" class="phone-wrapper__number" style="margin-right: 10px;">8 (800) 080-55-95</a>
          <span class="text-uppercase" style=" font-size: 12px;">бесплатно</span>
        </div>
      </div>
      <div class="content-wrapper__promotion promotion-wrapper d-flex align-items-center">
        <chocomart-icon :icon="'promotion'" :font_size="'24px'" :color="'#fb443f'"></chocomart-icon>
        <span class="promotion-wrapper__p-value font-weight-bold">2000 тг</span>
        <span class="promotion-wrapper__first-buy">На первую покупку</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    showFeedback: function () {
      this.isOpened = !this.isOpened
      console.log(this.isOpened)
    }
  }
}
</script>
