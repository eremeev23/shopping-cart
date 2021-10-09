<template>
    <div class="seen">
        <h1>Просмотренные товары</h1>
        <div class="slider__buttons">
            <button @click="prev" class="slider__button"><i class="fas fa-chevron-circle-left"></i></button>
            <span class="index"><span class="current-index">{{slideIndex}} </span>/ 6</span>
            <button @click="next" class="slider__button"><i class="fas fa-chevron-circle-right"></i></button>
        </div>
        <div class="slider">
            <div v-for="seen in seen__data" :key="seen.id"></div>
                <div v-for="seen in seen__slide" :key="seen.id" class="slider__item">
                    <img :src="seen.image" alt="bxc">
                    <h2 class="slider__item-title">{{seen.title}}</h2>
                    <p class="slider__item-desription">{{seen.description}}</p>
                    <p class="price__range-rub">{{seen.priceLowRub}} ₽ – {{seen.priceHighRub}} ₽</p>
                    <p class="price__range-eu">{{seen.priceLowEu}} € – {{seen.priceHighEu}} €</p>
                    <button class="more__info">Подробнее</button>
                </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Seen',
    data() {
        return {
            slideIndex: 1
        }
    },
    props: {
        seen__data: {
        type: Array,
        default: () => []
        },
        seen__slide: {
        type: Array,
        default: () => []
        }
    },
    methods: {
        ...mapMutations(['nextSlide', 'prevSlide']),
        next: function() {
            this.nextSlide();
            
            if (this.slideIndex >= 0 && this.slideIndex < this.seen__data.length) {
                this.slideIndex++
            }
        },
        prev: function() {
            this.prevSlide();
            if (this.slideIndex > 1) {
                this.slideIndex--
            }
        }
    }
}
</script>

<style>
.seen {
    position: relative;
    margin: 5vh 5vw;
}
.seen h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
}
/* SLIDER BUTTONS */
.slider__buttons {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
}
.slider__button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 0;
    font-size: 50px;
    border: none;
    margin: 0 20px;
}
.fas {
    color: #90A2B5;
    transition: all .3s ease;
}
.fas:hover {
    color: #6e7c8b;
}
.index {
    font-size: 18px;
    color: #90A2B5;
}
.current-index {
    color: #1F2432;
    font-weight: 500;
    font-size: 24px;
}
/* SLIDER */
.slider {
    max-width: 1220px;
    /* overflow: hidden; */
    display: flex;
}
.slide {
    display: flex;
    margin: 0 auto;
}
/* SLIDER ITEM */
.slider__item {
    max-width: 305px;
    height: 565px;
    transition: all 1s ease;
}
.slider__item img {
    width: 245px;
    height: 245px;
    margin: 25px 25px 0;
}
.slider__item-title {
    font-weight: bold;
    font-size: 22px;
    line-height: 120.52%;
    margin: 5px 25px 10px;
}
.slider__item-desription {
    display: inline-block;
    height: 60px;
    font-weight: normal;
    font-size: 14px;
    line-height: 145%;
    margin: 0 25px 40px;
}
.price__range-rub {
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    margin: 0 25px;
}
.price__range-eu {
    font-weight: normal;
    font-size: 16px;
    line-height: 145%;
    color: #797B86;
    margin: 0 25px 20px;
}
.more__info {
    cursor: pointer;
    padding: 15px 85px;
    background: #0069B4;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 0 25px 25px;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    transition: all .3s ease;
}
.more__info:hover {
    background: #005694;
}
</style>