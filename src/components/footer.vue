<template>
  <div id="ChocomartFooter" class="chocomart-footer-wrapper w-100 d-flex justify-content-center">
    <div class="footer-content-wrapper h-100 d-flex flex-column">
      <div class="footer-content__actions actions-wrapper w-100 d-flex">
        <div class="actions-wrapper__links links-wrapper h-100 d-flex flex-column align-items-start justify-content-starts">
          <h3 class="links-wrapper__heading">О нас</h3>
          <a :href="link.source" class="links-wrapper__link text-left" v-for="link in aboutUs">
            {{link.linkName}}
          </a>
        </div>
        <div class="actions-wrapper__links links-wrapper h-100 d-flex flex-column align-items-start justify-content-start">
          <h3 class="links-wrapper__heading">Партнерам</h3>
          <a :href="link.source" class="links-wrapper__link text-left" v-for="link in partners">
            {{link.linkName}}
          </a>
        </div>
        <div class="actions-wrapper__social social-wrapper h-100 d-flex flex-column">
          <div class="social-wrapper__social-block social-block-wrapper w-100 d-flex flex-column" style="margin-bottom: 10px;">
            <h3 class="social-block-wrapper--heading">Мы в соц.сетях</h3>
            <div class="social-block-wrapper__social-links social-links-wrapper w-100 d-flex flex-wrap">
              <div class="social-links-wrapper__link">
                <img class="h-100 w-100" src="/static/icons/vk.svg">
              </div>
              <div class="social-links-wrapper__link">
                <img class="h-100 w-100" src="/static/icons/fb.svg">
              </div>
              <div class="social-links-wrapper__link">
                <img class="h-100 w-100" src="/static/icons/instagram.svg">
              </div>
            </div>
          </div>
          <div class="social-wrapper__social-block social-block-wrapper w-100 d-flex flex-column" style="margin-bottom: 10px;">
            <h3 class="social-block-wrapper--heading">Отзывы покупателей</h3>
            <div class="social-block-wrapper__social-links social-links-wrapper w-100 d-flex flex-wrap">
              <div class="social-links-wrapper__rating rating-wrapper d-flex">
                <div class="rating-wrapper__value d-flex align-items-center justify-content-center text-left h-100 w-50">Рейтинг <br> магазина</div>
                <div class="rating-wrapper__yandex yandex-wrapper w-50 h-100 d-flex flex-column">
                  <div class="yandex-wrapper__logo w-100 h-50 d-flex align-items-end justify-content-center">
                    <img src="../assets/images/yandex.png">
                  </div>
                  <div class="yandex-wrapper__rating w-100 h-50 d-flex align-items-start justify-content-center">
                    <div class="rating-yandex-wrapper">
                      <div class="rating-yandex-wrapper__stars-background h-100" :style="{width: '100%'}"></div>
                      <img src="/static/icons/start.svg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content__company-name company-name-wrapper w-100 d-flex align-items-end">
        © 2018 ТОО "НУРСАТ+". Все права защищены
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aboutUs: [
        {
          linkName: 'Как сделать заказ',
          source: '#'
        },
        {
          linkName: 'Доставка',
          source: '#'
        },
        {
          linkName: 'Мы гарантируем',
          source: '#'
        },
        {
          linkName: 'Договор публичной оферты',
          source: '#'
        },
        {
          linkName: 'Политика возврата',
          source: '#'
        },
        {
          linkName: 'Карта сайта',
          source: '#'
        },
        {
          linkName: 'Онлайн оплата',
          source: '#'
        }
      ],
      partners: [
        {
          linkName: 'Торговля на Chocomart',
          source: '#'
        },
        {
          linkName: 'Почему да?',
          source: '#'
        },
        {
          linkName: 'Поддержка партнеров',
          source: '#'
        },
        {
          linkName: 'Юридическая информация',
          source: '#'
        },
        {
          linkName: 'Для СМИ',
          source: '#'
        }
      ]
    }
  }
}
</script>
