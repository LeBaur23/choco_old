<template>
  <div id="StyleTesting">
    <h2 class="text-center">TEST</h2>
    <div class="container-fluid">
      <div class="row m-0 justify-content-center">
        <chocomart-icon :icon="'heart'" :font_size="'22px'" :counted="true"></chocomart-icon>
      </div>
      <div class="row m-0 justify-content-center">
        <div id="CategoryProducts" >
            <category-card v-for="i in datas" :icon="i.img" :title="i.title"></category-card>
            <category-card :discount="true"></category-card>
        </div>
      </div>
    </div>


    <!--TEST-->
    <h2 class="text-center">TEST</h2>
    <div class="container-fluid d-flex justify-content-center" style="background: #f6f6f6;">
      <div class="row m-0" style="width: 1130px;">
        <chocomart-product :product_info="obj"></chocomart-product>
        <chocomart-product :size="1" :product_info="obj"></chocomart-product>
        <chocomart-product :size="2"  :product_info="obj"></chocomart-product>
      </div>
    </div>
    <!-- GIRD START-->
    <h2 class="text-center">CHOCOMART GRID SYSTEM</h2>
    <div class="container-fluid" style="background-color: lightgray;border: 1px solid purple">
      <h4>div container-fluid</h4>
      <div class="row m-0" style="background-color: #ddd;border: 1px solid red">
        <div class="col-12">
          <h4>div row, with class => .m-0</h4>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <h4>div col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4</h4>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <h4>div col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4</h4>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <h4>div col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0 mt-3 overflow-auto" style="background-color: #f6f6f6">
      <div class="col-2 float-left">
        Float Left
      </div>
      <div class="col-2 float-right text-right">
        Float right
      </div>
    </div>
    <!--GRID END-->
    <h2 class="text-center mt-5"> CHOCOMART TYPOGRAPHY </h2>
    <div class="container-fluid">
      <div class="row m-0">
        <div class="col-4 text-left" style="">
          Text left
        </div>
        <div class="col-4 text-center">
          Text center
        </div>
        <div class="col-4 text-right">
          Text right
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        datas: [
          {
            img: 'fridge.png',
            title: 'БЫТОВАЯ ТЕХНИКА'
          },
          {
            img: 'tablet.png',
            title: 'СМАРТФОНЫ И ГАДЖЕТЫ'

          },
          {
            img: 'printer.png',
            title: 'КОМПЬЮТЕРЫ И ОФИС'

          },
          {
            img: 'computer.png',
            title: 'ТВ, АУДИО И ВИДЕО'

          },
          {
            img: 'bedside-table.png',
            title: 'ТОВАРЫ ДЛЯ ДОМА'

          },
          {
            img: 'open-book.png',
            title: 'КНИГИ'

          },
          {
            img: 'baby-stroller.png',
            title: 'ТОВАРЫ ДЛЯ ДЕТЕЙ'

          },
          {
            img: 'lotion.png',
            title: 'КРАСОТА И ЗДОРОВЬЕ'

          },
          {
            img: 'palette.png',
            title: 'ДОСУГ'

          },
          {
            img: 'tent.png',
            title: 'АКТИВНЫЙ ОТДЫХ'

          },
          {
            img: 'oven.png',
            title: 'ПРОМЫШЛЕННАЯ ТЕХНИКА'

          }
        ],
        obj: {
          img: '/static/iphone.png',
          title: 'Смартфон Apple iPhone 6 32 Gb Gold',
          price: '250 000',
          rating: '4',
          rate_count: '13',
          bonus: '2226'
        }
      }
    }
  }

</script>
