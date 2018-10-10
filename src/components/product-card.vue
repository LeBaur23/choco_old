<template>
  <div class="product-wrapper d-flex flex-column align-items-center" :class="product_size === true ? 'product-wrapper--big' : ( product_size === false ? 'product-wrapper--small' : '')">
    <div class="product-wrapper__promotion promotion-wrapper w-100 d-flex justify-content-end align-items-center" :class="product_size === false ? 'promotion-wrapper--small' : ''">
      <chocomart-icon :icon="'bonus'" :font_size="'25px'"></chocomart-icon>
      <div class="promotion-wrapper__bonus-value">Бонус <br><span class="font-weight-bold">{{product_info.bonus}} ₸</span></div>
    </div>
    <div class="row" :class="product_size === false ? 'product-wrapper__row--small' : ''">
      <div class="product-wrapper__image image-wrapper d-flex justify-content-center" :class="product_size === true ? 'image-wrapper--big' : (product_size === false ? 'image-wrapper--small' : '')">
        <img :src="product_info.img" class="image-wrapper__img h-100">
      </div>
      <div class="product-wrapper__description description-wrapper">
        <div class="description-wrapper__text text-wrapper text-center w-100">
          {{product_info.title}}
        </div>
        <div class="description-wrapper__rating rating-wrapper w-100 d-flex justify-content-between align-items-center">
          <div class="rating-wrapper__stars stars-wrapper h-100">
            <div class="stars-wrapper__percentage h-100" :style="{width: rating_score + '%'}"></div>
            <img src="/static/icons/start.svg" class="stars-wrapper__image">
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
</template>

<script>
export default {
  props: ['size', 'product_info'],
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
    }
  }
}
</script>
