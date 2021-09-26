<template>
    <div class="header">
      <div class="cart__box">
            <img src="../assets/cart.png" width="32px" height="32px" alt="cart">
            <ul class="cart__ul">
                <li class="ul__item">
                    <h5 class="cart__title cart">Ваша корзина</h5>
                </li>
                <li class="ul__item">
                    <h6 class="cart__title description">
                        {{total__items}}
                    </h6>
                </li>
                <li class="ul__item">
                    <h5 class="cart__title sum">{{sum__data}} ₽</h5>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        total__items: {
        type: String,
        default: ''
        },
        sum__data: {
        type: Number,
        default: 0
        }
    },
}
</script>

<style scoped>
    .cart__box {
        margin-top: 45px;
        height: 95px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .cart__ul {
        margin-right: 5vw;
        margin-left: 1vw;
        list-style: none;
    }
    .ul__item {
        color: #2C3242;
    }
    .cart {
        font-size: 14px;
        line-height: 150%;
        font-weight: normal;
    }
    .description, .sum {
        font-size: 12px;
        line-height: 145%;
        color: #8F919B;
    }
    .sum {
        color: #1F2432;
    }
</style>