<template>
  <div class="product-page">
    <header-navigation :title="'SMARTHPONES'"></header-navigation>
    <h4 class="product-title">
      {{ product_data.title }}
    </h4>
    <h4 class="product-code">
      <span>Код товара:</span> 150995
    </h4>
    <swiper :options="swiperOption" class="product-slider-wrapper">
      <swiper-slide v-for="(slide,index) in carousel_data" v-bind:key="'main-carousel-' + index">
          <div class="product-main-carousel-slider" v-bind:style="{ 'background-image': 'url(' + slide.image + ')' }">
          </div>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="product-price-wrapper d-flex justify-content-between align-items-center">
      <div class="product-price-info">
        <div class="product-price_discount">300 000 тг</div>
        <div class="product-price">250 000 тг</div>
      </div>
      <div class="product-price_bonus-info d-flex justify-content-center align-items-center">
        <div class="product-price_icon d-flex align-items-center justify-content-center">
          <chocomart-icon :icon="'bonus'" :color="'#fdcc05'" :font_size="'30px'"></chocomart-icon>
        </div>
        <div class="product-price_bonus">
          <h4>
            Бонус <br>
            <span>2276 ₸</span>
          </h4>
        </div>
      </div>
    </div>
    <div class="product-info">
      <!--   Характеристики    -->
      <div class="product-characteristic">
        <div class=" d-flex align-items-center flex-wrap w-100" @click="char.info_1 *= -1">
          <h4 class="m-0">Характеристики</h4>
          <chocomart-icon class="ml-3" :icon="'arrow-down'"></chocomart-icon>
        </div>
        <div class="product-characteristics-info " v-if="char.info_1 !== -1">
          <div v-for="i in 5" class="product-characteristics-info-wrapper d-flex justify-content-between">
            <div class="product-characteristic_title">
              Some t
            </div>
            <div class="product-characteristic_dots flex-grow-1"></div>
            <div class="product-characteristic_info">64 gvgvgvgvgv Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
      <!--   Рассрочка и кредит    -->
      <div class="product-characteristic">
        <div class=" d-flex align-items-center flex-wrap w-100" @click="char.info_2 *= -1">
          <h4 class="m-0">Рассрочка и кредит</h4>
          <chocomart-icon class="ml-3" :icon="'arrow-down'"></chocomart-icon>
        </div>
        <div class="product-characteristics-info " v-if="char.info_2 !== -1">
          <div class="product-credit-buttons d-flex justify-content-between">
            <button class="product-credit_button product-credit_button__active">Рассрочка</button>
            <button class="product-credit_button">Кредит</button>
          </div>
          <div class="product-credit-time">
            <h4 class="text-center mb-1">Количество месяцев</h4>
            <div class="product-credit-time_buttons d-flex flex-wrap">
              <div class="product-credit-time_button">2</div>
              <div class="product-credit-time_button">2</div>
              <div class="product-credit-time_button">2</div>
              <div class="product-credit-time_button">2</div>
              <div class="product-credit-time_button">2</div>
              <div class="product-credit-time_button">2</div>
            </div>
          </div>
          <div class="product-credit-banks">
            <div class="product-credit-bank d-flex align-items-center" v-for="i in 3">
              <div class="product-credit-bank_image">
                <img width="100%" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/BTA_Bank_Logo.svg/1200px-BTA_Bank_Logo.svg.png" alt="">
              </div>
              <div class="product-credit-bank_price">
                240 000 тг/мес
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      Доставка и оплата    -->
      <div class="product-characteristic">
        <div class=" d-flex align-items-center flex-wrap w-100" @click="char.info_3 *= -1">
          <h4 class="m-0">Доставка и оплата</h4>
          <chocomart-icon class="ml-3" :icon="'arrow-down'"></chocomart-icon>
        </div>
        <div class="product-characteristics-info " v-if="char.info_3 !== -1">
          <div v-for="i in 5" class="product-characteristics-info-wrapper d-flex justify-content-between">
            <div class="product-characteristic_title">
              Some t
            </div>
            <div class="product-characteristic_dots flex-grow-1"></div>
            <div class="product-characteristic_info">64 gvgvgvgvgv Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
      <!--    Отзывы    -->
      <div class="product-characteristic">
        <div class=" d-flex align-items-center flex-wrap w-100" @click="char.info_4 *= -1">
          <h4 class="m-0">Отзывы</h4>
          <chocomart-icon class="ml-3" :icon="'arrow-down'"></chocomart-icon>
        </div>
        <div class="product-characteristics-info " v-if="char.info_4 !== -1">
          <div v-for="i in 5" class="product-characteristics-info-wrapper d-flex justify-content-between">
            <div class="product-characteristic_title">
              Some t
            </div>
            <div class="product-characteristic_dots flex-grow-1"></div>
            <div class="product-characteristic_info">64 gvgvgvgvgv Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // datas
        char: {
          info_1: -1,
          info_2: -1,
          info_3: -1,
          info_4: -1

        },
        carousel_data: [
          {
            link: 'https://chocomart.kz/?gclid=EAIaIQobChMI8o28icjD3QIVjIKyCh2FHglwEAAYASAAEgI5YfD_BwE',
            image: 'https://img.freepik.com/free-photo/abstract-polygonal-space-low-poly-dark-background-3d-rendering_7247-223.jpg?size=626&ext=jpg'
          },
          {
            link: 'https://chocomart.kz/?gclid=EAIaIQobChMI8o28icjD3QIVjIKyCh2FHglwEAAYASAAEgI5YfD_BwE',
            image: 'https://www.wallpaperup.com/uploads/wallpapers/2013/12/17/197442/1f55707e4bd3575a69d593a68baae658-187.jpg'
          },
          {
            link: 'https://chocomart.kz/?gclid=EAIaIQobChMI8o28icjD3QIVjIKyCh2FHglwEAAYASAAEgI5YfD_BwE',
            image: 'http://www.4usky.com/data/out/32/164271494-facets-wallpapers.png'
          },
        ],
        product_data: {
          title: 'IPhone 6 64 gb'
        },
        // options
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          effect: 'fade',
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },
        popularOption: {
          slidesPerView: 2,
          loop: true,
          spaceBetween: 1,
          // autoplay: {
          //   delay: 2500,
          //   disableOnInteraction: false
          // },
          navigation: {
            nextEl: '.popular-button-next',
            prevEl: '.popular-button-prev'
          }
        }
      }
    }
  }
</script>
