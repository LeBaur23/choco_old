<template>
  <div id="StyleTesting">
    <div class="container-fluid mt-5">
      <div class="row m-0 justify-content-center">
        <div id="CategoryProducts" >
          <category-card v-for="i in datas" :icon="i.img" :title="i.title"></category-card>
          <category-card :discount="true"></category-card>
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

          }
        ]
      }
    }
  }

</script>
