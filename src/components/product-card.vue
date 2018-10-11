<template>
  <div class="product-wrapper d-flex flex-column align-items-center" :class="product_size === true && discount === false ? 'product-wrapper--big' : (product_size === true && discount === true ? 'discount' : (product_size === false ? 'product-wrapper--small' : ''))">
    <div class="row product-wrapper__row w-100 m-0">
      <div v-if="discount === false" class="product-wrapper__promotion promotion-wrapper w-100 d-flex justify-content-end align-items-center" :class="product_size === false ? 'promotion-wrapper--small' : ''">
        <chocomart-icon :icon="'bonus'" :font_size="'25px'"></chocomart-icon>
        <div class="promotion-wrapper__bonus-value">Бонус <br><span class="font-weight-bold">{{product_info.bonus}} ₸</span></div>
      </div>
      <div v-if="discount === false" class="row m-0 justify-content-center align-items-center" :class="product_size === false ? 'product-wrapper__row--small' : ''">
        <div class="product-wrapper__image image-wrapper d-flex justify-content-center" :class="product_size === true ? 'image-wrapper--big' : (product_size === false ? 'image-wrapper--small' : '')">
          <img :src="product_info.img" class="image-wrapper__img h-100">
        </div>
        <div class="product-wrapper__description description-wrapper">
          <div class="description-wrapper__text text-wrapper text-center w-100">
            {{product_info.title}}
          </div>
          <div class="description-wrapper__rating rating-wrapper w-100 d-flex justify-content-between align-items-center">
            <div class="rating-wrapper__stars stars-wrapper d-flex align-items-center h-100">
              <div class="stars-wrapper__percentage h-100" :style="{width: rating_score + '%'}"></div>
              <img src="/static/icons/start.svg" class="stars-wrapper__image h-100 w-100">
            </div>
            <div class="rating-wrapper__rating-count rating-count-wrapper h-100">
              ({{product_info.rate_count}} отзыв{{product_info.rate_count > 4 ? 'ов' : (product_info.rate_count > 1 && product_info.rate_count < 5 ? 'а' : '')}})
            </div>
          </div>
          <div class="description-wrapper__price price-wrapper d-flex align-items-center justify-content-center font-weight-bold w-100">
            {{product_info.price}} тг
          </div>
        </div>
      </div>
    </div>
    <div v-if="discount" class="product-wrapper__discount h-100 w-100">
      <img :src="product_info.discountImg" class="m-0 p-0 h-100 w-100">
    </div>
    <div class="product-wrapper__actions actions-wrapper d-none w-100 flex-column justify-content-center m-0" :class="product_size === true || product_size === false ? 'actions-wrapper--modified' : ''">
      <div class="actions-wrapper__action action-wrapper w-100 h-50 d-flex align-items-center justify-content-around">
        <button class="action-wrapper__buttons buttons-wrapper buttons-wrapper--bordered d-flex align-items-center p-0">
          <span class="button-plus">+</span>
          <chocomart-icon :icon="'cart'" :font_size="'24px'"></chocomart-icon>
        </button>
        <button class="buttons-wrapper__input-action input-action-wrapper d-flex align-items-center justify-content-center p-0 input-action--buy">
          Купить в один клик
        </button>
        <!--<div class="buttons-wrapper__input-action input-action-wrapper input-action&#45;&#45;input-wrapper d-flex">-->
          <!--<input type="tel" class="input-action&#45;&#45;input-wrapper input-wrapper__input input-wrapper__input&#45;&#45;buy h-100" placeholder="+7 (777) 85 88 555">-->
          <!--<button class="h-100 input-action-wrapper__button input-action-wrapper__button&#45;&#45;buy p-0 d-flex justify-content-center align-items-center">-->
            <!--<chocomart-icon :icon="'arrow-thin'" :font_size="'18px'"></chocomart-icon>-->
          <!--</button>-->
        <!--</div>-->
      </div>
      <div class="actions-wrapper__action action-wrapper w-100 h-50 d-flex align-items-center justify-content-around" :class="product_size === true || product_size === false ? 'action-wrapper--modified' : ''">
        <div class="action-wrapper__buttons buttons-wrapper d-flex align-items-center justify-content-around p-0">
          <chocomart-icon :icon="'growth'" :font_size="'18px'"></chocomart-icon>
          <chocomart-icon :icon="'heart'" :font_size="'18px'"></chocomart-icon>
        </div>
        <button class="buttons-wrapper__input-action input-action-wrapper d-flex align-items-center justify-content-center p-0 input-action--focus">
          Следить за ценой
        </button>
        <!--<div class="buttons-wrapper__input-action input-action-wrapper input-action&#45;&#45;input-wrapper input-action&#45;&#45;input-focus d-flex">-->
          <!--<input type="tel" class="input-action&#45;&#45;input-wrapper input-wrapper__input input-wrapper__input&#45;&#45;focus h-100" placeholder="+7 (777) 85 88 555">-->
          <!--<button class="h-100 input-action-wrapper__button input-action-wrapper__button&#45;&#45;focus p-0">-->
            <!--<chocomart-icon :icon="'arrow-thin'" :font_size="'18px'"></chocomart-icon>-->
          <!--</button>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size', 'product_info', 'discount'],
  data () {
    return {
      product_size: '',
      rating_score: 0
    }
  },
  beforeMount () {
    if (this.size != null) {
      if (this.size == 1) {
        this.product_size = true
      } else {
        this.product_size = false
      }
    }
    if (this.product_info.rating !== undefined) {
      this.rating_score = (this.product_info.rating / 5) * 100
      console.log(this.product_info.discount)
    }
  }
}
</script>
