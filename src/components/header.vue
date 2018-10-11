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
  </div>
</template>
