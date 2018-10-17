<template>
  <div id="ChocomartHeader">
    <div class="header">
      <div class="header_logo-img">
        <img src="../assets/images/logo.svg" alt="">
      </div>
      <div class="header_input">
        <input-text></input-text>
      </div>
      <div class="header-buttons">
        <chocomart-icon :icon="'compare'" :font_size="'22px'"></chocomart-icon>
        <chocomart-icon :icon="'heart'" :font_size="'22px'"></chocomart-icon>
        <div class="header-icon">
          <chocomart-icon :counted="'top'" :count="'3'" :icon="'shopping'" :font_size="'22px'">
            <div class="header-icon-dropdown">
              <div v-for="i in 3" class="header-basket-product">
                <div class="basket-img">
                  <img width="100%" class="header-basket_img" src="https://www.bellmts.ca/file_source/mts/content_types/wireless_devices/iphones/Apple-iPhone-XsMax@2x.png" alt="">
                </div>
                <div class="basket-description">
                  <div class="basket-title">
                    <h4 class="m-0">Смартфон Apple
                      iPhone 6 32 Gb Gold
                    </h4>
                  </div>
                  <div class="basket-info">
                    <div class="basket-amount w-25">
                      <h4 class="m-0">1 шт.</h4>
                    </div>
                    <div class="basket-price w-75 text-right">
                      <h4 class="m-0">125 000 тг
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="basket-total d-flex justify-content-center">
                <h4 class="m-0"><span>ИТОГО:</span> 250 000 тг</h4>
              </div>
              <div class="basket-button d-flex justify-content-center">
                <button class="basket_button">
                  Оформить заказ
                </button>
              </div>

            </div>
          </chocomart-icon>
        </div>
        <button class="header_button">
          Войти
        </button>
      </div>
    </div>
    <div class="categories" @mouseleave="leave_category()">
      <div class="categories-wrapper">
        <div class="category" v-for="category,y in categories_info" :id="'category-'+ y" @mouseover="hover_subcategory(y)">
          <h4>
            {{ category.title }}
          </h4>
        </div>
      </div>
      <div class="subcategory" v-for="category,y in  categories_info " v-show="current_id === y && category.subcategories_info.length !== 0">
        <div class="subcategory-wrapper">
          <div class="subcategory-item col-2 pb-4" v-for="subcategory in category.subcategories_info">
            <img src="/static/category/fridge.svg" alt="">
            <h4>ТЕХНИКА ДЛЯ ДОМА</h4>
            <ul>
              <li >
                <a href="">
                  <!--Акустические системы-->
                  {{ subcategory.title }}
                </a>
              </li>
              <li>
              <a href="">
              Музыкальные центры
              </a>
              </li>
              <li>
              <a href="">
              Наушники
              </a>
              </li>
              <li>
              <a href="">
              Портативная акустика
              </a>
              </li>
              <li>
              <a href="">
              Диктофоны
              </a>
              </li>
              <li>
              <a href="">
              Микрофоны
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        show_sub: false,
        current_id: -1,
        categories_info: [
          {
            title: 'Бытовая техника',
            subcategories_info: [
              {
                title: 'Links'
              }
            ]
          },
          {
            title: 'Смартфоны и гаджеты',
            subcategories_info: [
              {
                title: 'Links somtehiasda '
              }
            ]
          },
          {
            title: 'Компьютеры и офис',
            subcategories_info: []
          },
          {
            title: 'ТВ, аудио и видео',
            subcategories_info: []
          },
          {
            title: 'Товары для дома',
            subcategories_info: []
          },
          {
            title: 'Книги',
            subcategories_info: []
          },
          {
            title: 'Товары для детей',
            subcategories_info: []
          },
          {
            title: 'Красота и здоровье',
            subcategories_info: []
          },
          {
            title: 'Досуг',
            subcategories_info: []
          },
          {
            title: 'Активный отдых',
            subcategories_info: []
          },
          {
            title: 'Промышленная техника',
            subcategories_info: []
          }
        ]
      }
    },
    methods: {
      leave_category() {
        var category = document.getElementById('category-'+ this.current_id)
        category.classList.remove('category-active')
        this.current_id = -1
      },
      hover_subcategory (id) {
        if (this.current_id !== id) {
          var category = document.getElementById('category-'+ id)
          category.classList.add('category-active')
          var last_category = document.getElementById('category-'+ this.current_id)
          if (last_category!== null) {
            last_category.classList.remove('category-active')
          }
        }
        this.current_id = id
      }
    }
  }
</script>
