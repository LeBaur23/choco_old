<template>
  <div class="basket">
    <div class="basket-header-wrapper">
      <h4 class="mt-0">КОРЗИНА</h4>
      <div class="basket-header d-flex justify-content-between align-items-center">
        <chocomart-icon :icon="'basket-cart'" :font_size="'28px'" class="choco-icon_done"></chocomart-icon>
        <div class="basket-header_border"></div>
        <chocomart-icon :icon="'avatar'" :font_size="'27px'"></chocomart-icon>
        <div class="basket-header_border"></div>
        <chocomart-icon :icon="'basket-card'" :font_size="'33px'"></chocomart-icon>
      </div>
      <h4 class="text-center mb-0" v-if="buy_step === 0">Выбранные товары</h4>
      <h4 class="text-center mb-0" v-if="buy_step === 1">Информация о покупателе</h4>
    </div>
    <div class="basket-chosen-products" v-if="buy_step === 0">
      <div class="basket-product-list d-flex" v-for="i in products">
        <div class="basket-product-image">
          <img width="100%" src="https://htstatic.imgsmail.ru/pic_image/13031ebb2c7c90f31e4b4c430a11a34a/450/450/1278196/" alt="">
        </div>
        <div class="basket-product-info">
          <h4>{{ i.name }} </h4>
          <div class="basket-product-amount d-flex">
            <div class="basket-product-amount_add d-flex justify-content-center align-items-center" @click="addAmount(i.id)">+</div>
            <div class="basket-product-amount_text d-flex justify-content-center align-items-center">{{ i.amount }}</div>
            <div class="basket-product-amount_remove d-flex justify-content-center align-items-center" @click="removeAmount(i.id)">-</div>
          </div>
          <h5>{{ i.price }} тг</h5>
        </div>
        <div class="basket-product-close">
          <div  @click="removeProduct(i.id)">
            <chocomart-icon :icon="'close'"></chocomart-icon>
          </div>
        </div>
      </div>
      <div class="basket-product-total">
        <h4>ИТОГО:</h4>
        <h4>Всего в корзине: <span>{{ total_amount }} товаров</span></h4>
        <h4>Общая сумма: <span>{{ total_price }} тенге</span></h4>
      </div>
    </div>
    <div class="basket-customer-information">
      <h4>Имя*</h4>
      <input type="text">
      <h4>Фамилия*</h4>
      <input type="text">
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center mb-3 mt-3">
      <button class="basket-buy" @click="approveOrder()">Оформить заказ</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //  datas
        products: [
          {
            id: 0,
            name: 'some cellphone',
            amount: 1,
            price: 120000
          },
          {
            id: 1,
            name: 'some cellphone Iphone 4 apple ios',
            amount: 1,
            price: 150000
          },
          {
            id: 2,
            name: 'some cellphone',
            amount: 1,
            price: 200000
          },
          {
            id: 3,
            name: 'some cellphone',
            amount: 1,
            price: 130000
          }
        ],
        total_amount: 0,
        total_price: 0,
        buy_step: 1
      }
    },
    mounted() {
      this.totalAmount();
    },
    methods: {
      totalAmount() {
        this.total_amount = 0;
        this.total_price = 0;
        this.products.forEach(product => {
          this.total_amount += product.amount;
          this.total_price += product.price * product.amount;
        })
      },
      addAmount (id) {
        this.products.forEach(product => {
          if (product.id === id) {
            product.amount += 1;
            this.totalAmount();
            // console.log(product.amount);
          }
        })
      },
      removeAmount (id) {
        this.products.forEach(product => {
          if (product.id === id) {
            if (product.amount - 1 > 0) {
              product.amount -= 1;
              this.totalAmount();
            }
          }
        })
      },
      removeProduct(id) {
        for (let i =0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
            this.products.splice(i, 1);
            this.totalAmount();
          }
        }

      },
      approveOrder () {

      }
    }
  }
</script>
