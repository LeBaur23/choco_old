<template>
  <div id="MainPage" class="main">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in carousel_data" v-bind:key="'main-carousel-' + index">
        <a :href="slide.link">
          <div class="main-carousel-slider" v-bind:style="{ 'background-image': 'url(' + slide.image + ')' }">
          </div>
        </a>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <h4 class="text-center main-title">Популярные товары</h4>
    <div class="main-popular-products">
      <swiper :options="popularOption">
        <swiper-slide v-for="(slide,index) in 5">
          <a :href="slide.link">
            <item-card :title="'Смартфон Apple iPhone 6 32 Gb Gold-' + index" :price="'10000'"></item-card>
          </a>
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white popular-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white popular-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <h4 class="text-center main-title">Новинки</h4>
    <div class="main-popular-products">
      <swiper :options="popularOption">
        <swiper-slide v-for="(slide,index) in 5">
          <a :href="slide.link">
            <item-card :title="'Смартфон Apple iPhone 6 32 Gb Gold-' + index" :price="'10000'"></item-card>
          </a>
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white popular-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white popular-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <h4 class="text-center main-title">Категории товаров</h4>
    <div class="product-categories d-flex flex-wrap">
      <category-card v-for="i in categories" :icon="i.img" :title="i.title"></category-card>
<!--      <category-card :discount="true"></category-card>-->
    </div>
    <h4 class="text-center main-title">Распродажа</h4>
    <swiper :options="popularOption">
      <swiper-slide v-for="(slide,index) in 5">
        <a :href="slide.link">
          <item-card :title="'Смартфон Apple iPhone 6 32 Gb Gold-' + index" :price="'10000'"></item-card>
        </a>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white popular-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white popular-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // datas
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
        categories: [
          {
            img: 'fridge.svg',
            title: 'БЫТОВАЯ ТЕХНИКА'
          },
          {
            img: 'tablet.svg',
            title: 'СМАРТФОНЫ И ГАДЖЕТЫ'

          },
          {
            img: 'printer.svg',
            title: 'КОМПЬЮТЕРЫ И ОФИС'

          },
          {
            img: 'computer.svg',
            title: 'ТВ, АУДИО И ВИДЕО'

          },
          {
            img: 'bedside-table.svg',
            title: 'ТОВАРЫ ДЛЯ ДОМА'

          },
          {
            img: 'open-book.svg',
            title: 'КНИГИ'

          },
          {
            img: 'baby-stroller.svg',
            title: 'ТОВАРЫ ДЛЯ ДЕТЕЙ'

          },
          {
            img: 'lotion.svg',
            title: 'КРАСОТА И ЗДОРОВЬЕ'

          },
          {
            img: 'palette.svg',
            title: 'ДОСУГ'

          },
          {
            img: 'tent.svg',
            title: 'АКТИВНЫЙ ОТДЫХ'

          },
          {
            img: 'oven.svg',
            title: 'ПРОМЫШЛЕННАЯ ТЕХНИКА'

          },
          {
            img: 'discount.svg',
            title: 'Акции'

          }
        ],
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
