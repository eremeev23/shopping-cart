<template>
    <section class="cart">
        <!-- NAVIGATION -->
        <ul class="router">
            <li class="router__list-item">
                <a class="router__link" href="#">Главная</a>
            </li>
            <li class="router__list-item">
                <i class="fas fa-caret-right"></i>
            </li>
            <li class="router__list-item">
                <a class="router__link active" href="#">Корзина</a>
            </li>
        </ul>
        <!-- MAIN CONTENT -->
        <section class="cart__content">
                
                <div class="items">
                    <div class="items__box">
                        <div class="items__header">
                            <span class="main__title">
                                Ваша корзина
                                <span class="number__cart">4 товара</span>
                            </span>
                            <button @click="clCart" class="clear-cart">Очистить корзину</button>
                        </div>
                        <!-- CART BOX -->
                        <ul class="items__list">
                            <li v-for="product in products__data" :key="product.id">
                                <div class="item">
                                    <img :src="product.image" alt="" class="item__img">
                                    <div class="item__info">
                                        <h2 class="item__title">
                                            {{product.title}}
                                        </h2>
                                        <span class="item__description">{{product.description}}</span>
                                        <h3 class="articul">Артикул: {{product.vendor}}</h3>
                                    </div>
                                    <div class="item__number">
                                        <button class="min__item"><i @click="reduceItem" class="fas fa-minus"></i></button>
                                        <span class="number">{{product.number}}</span>
                                        <button class="plus__item"><i @click="addItem" class="fas fa-plus"></i></button>
                                    </div>
                                    <span class="price">{{product.price * product.number}} ₽</span>
                                    <button @click="delItem" class="delete-item"><span></span></button>
                                </div>
                            </li>
                        </ul>
                        <form v-show="hasItems" class="montage__check">
                            <input @click="montage = !montage" type="checkbox" id="checkbox__montage">
                            <img src="../assets/montage.png" alt="">
                            <label for="checkbox__montage">
                                <h4 class="montage__title">Установка</h4>
                                <span class="montage__descr">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</span>
                            </label>
                        </form>
                        <div v-show="!hasItems" class="empty__cart">
                            <h1 class="empty__cart-title">Корзина пуста</h1>
                            <a class="empty__cart-link" href="shop.vue">
                                Перейти к каталогу для выбора товара
                            </a>
                        </div>
                    </div>
                    <!-- CART BILL  -->
                    <div class="result">
                        <h3 class="result__title">Итого</h3>
                        <div class="row">
                            <span class="row__title">
                                Сумма заказа
                            </span>
                            <span v class="row__number">
                                {{sum__data}} ₽
                            </span>
                        </div>
                        <div class="row">
                            <span class="row__title">
                                Количество
                            </span>
                            <span class="row__number">
                                {{total__number}} шт
                            </span>
                        </div>
                        <div class="row">
                            <span class="row__title">
                                Установка
                            </span>
                            <span v-show="!montage" class="row__number">
                                Нет
                            </span>
                            <span v-show="montage" class="row__number">
                                Да
                            </span>
                        </div>
                        <hr>
                        <div class="row">
                            <span class="row__price">
                                Стоимость товаров
                            </span>
                            <span class="row__sum">
                                {{sum__data}} ₽
                            </span>
                        </div>
                        <button @click="postOrder" class="accept btn">Оформить заказ</button>
                        <button @click="postOrder" class="one-click btn">Купить в 1 клик</button>
                    </div>
                </div>
        </section>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
    name: 'Cart',
    data() {
        return {
            hasItems: true,
            montage: false,
        }
    },
    props: {
        products__data: {
        type: Array,
        default: () => []
        },
        all__names: {
        type: Array,
        default: () => []
        },
        sum__data: {
        type: Number,
        default: 0
        },
        total__number: {
        type: Number,
        default: 0
        }
    },
    methods: {
        ...mapMutations(['plusItem', 'minusItem', 'deleteItem', 'clearCart']),
        addItem: function(e) {
            let plusIcon = e.target;
            let plusButton = plusIcon.parentElement;
            let title = plusButton.parentElement.parentElement.children[1].children[0].innerText
            this.plusItem(title)
        }, 
        reduceItem: function(e) {
            let minusIcon = e.target;
            let minusButton = minusIcon.parentElement;
            let title = minusButton.parentElement.parentElement.children[1].children[0].innerText
            this.minusItem(title)
        },
        delItem: function(e) {
            let delButton = e.target;
            let title = delButton.parentElement.parentElement.children[1].children[0].innerText;
            this.deleteItem(title)
            if (this.products__data.length == 0) {
                this.hasItems = false
            }
        },
        clCart() {
            this.clearCart();
            this.hasItems = false
        },
        postOrder() {
            axios.post(
                `https://shopping-cart-f1829-default-rtdb.europe-west1.firebasedatabase.app/posts.json`,
                {   order: this.all__names,
                    numberOfItems: this.total__number,
                    totalBill: this.sum__data,
                    montage: this.montage
                }
            )
        }
    },
}
</script>

<style scoped>
.cart {
    min-height: 780px;
    margin-left: 5vw;
}
.router {
    list-style: none;
    display: flex;
}
a, i{
    margin: 0 5px;
    text-decoration: none; 
    color: #33374E
}
.active {
    color: #8F919B
}
.items__list {
    list-style: none;
}

.cart__content {
    max-width: 90vw;
}
.items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5vw;
}
.items__header {
    min-width: 805px;
    position: relative;
    margin: 50px 3px 60px;
}
.main__title {
    font-weight: bold;
    font-size: 44px;
    line-height: 120.52%;
}
.number__cart {
    font-weight: normal;
    font-size: 18px;
    line-height: 145%;
    color: #8F919B;
    margin: 0 22px;
}
.clear-cart {
    position: absolute;
    bottom: 6px;
    right: 0;
    cursor: pointer;
    font-weight: normal;
    font-size: 14px;
    height: 16px;
    color: #8F919B;
    border: none;
    background: none;
    text-decoration: underline;
}
.empty__cart {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.empty__cart-title {
    font-size: 36px;
    font-weight: 300;
    margin: 20px auto 60px;
}
.empty__cart-link {
    border: 1px solid #0069B4;
    margin: 0;
    padding: 15px 45px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 200;
    color: #fff;
    background: #0069B4;
    transition: all .3s ease;
}
.empty__cart-link:hover {
    background: #fff;
    color: #0069B4;
}
.item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 13px 0;
    padding: 20px 40px 20px 10px;
    min-height: 120px;
    border-bottom: 1px solid #C4C4C4;
}
.items__box {
    min-height: 800px;
}
.item__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    margin: 7px 0;
}
.item__description {
    display: inline-block;
    max-width: 260px;
    margin: 7px 0;
    font-size: 12px;
    line-height: 150%;
}
.articul {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #8F919B;
}
.min__item, .plus__item {
    cursor: pointer;
    color: #33374E;
    border: none;
    margin: 0 15px;
    font-size: 12px;
}
.number {
    font-size: 14px;
}
.price {
    display: inline-block;
    max-width: 79px;
    min-width: 68px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
}
.delete-item {
    height: 1px;
    width: 1px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 10px;
    border: none;
    font-size: 14px;
    font-weight: 200;
}
.delete-item span {
    display: inline-block;
    height: 1px;
    width: 15px;
    background: #000;
    transform: rotate(45deg);
    transition: all 1s ease;
}
.delete-item span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 1px;
    width: 15px;
    background: #000;
    transform: rotate(90deg);
    transition: all 1s ease;
}
.montage__check {
    display: flex;
    align-items: center;
    min-height: 80px;
}
input[type=checkbox] {
    cursor: pointer;
    transform: scale(1.5);
    margin: 20px;
}
.montage__check img {
    margin: 20px 20px 20px 0;
}
.montage__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
}
.montage__descr {
    color: #8F919B;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
}
.result {
    min-height: 460px;
    width: 425px;
    padding: 35px 30px;
}
.result__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 120.52%;
    margin-bottom: 35px;
}
.row {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.row__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
}
.row__number {
    font-weight: normal;
    font-size: 16px;
    line-height: 145%;
}
.row__price {
    font-weight: 600;
    font-size: 18px;
    line-height: 170%;
}
.row__sum {
    font-weight: bold;
    font-size: 26px;
}
.btn {
    cursor: pointer;
    width: 365px;
    padding: 15px 0;
    margin: 5px 0;
    border: 1px solid #0069B4;
    border-radius: 5px;
    font-weight: 500;
    font-size: 18px;
    transition: all .3s ease;
}
.accept {
    background: #0069B4;
    color: #fff;
}
.one-click {
    background: none;
    color: #0069B4;
}
.accept:hover {
    background: #005694;
}
.one-click:hover {
    color: #005694;
    border: 1px solid #fff;
    box-shadow: inset 0 0 3px 2px #004577;
}
</style>
