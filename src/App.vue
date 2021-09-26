<template>
  <div id="app">
    <Header :total__items='totalNumberHeader' :sum__data=sum />
    <Cart :products__data='orderedProducts' :sum__data=sum :total__number=totalNumber :all__names=allNames />
    <Seen :seen__data='seenProducts' :seen__slide='seenSlide' />
  </div>
</template>

<script>
import Header from './components/Header'
import Cart from './components/Cart'
import Seen from './components/Seen'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Cart,
    Seen
  },
  computed: mapGetters(['orderedProducts', 'seenProducts', 'totalNumberHeader', 'seenSlide', 'sum', 'totalNumber', 'allNames'])
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
}
#app {
  color: #1F2432;
  max-width: 1440px;
  margin: 0 auto;
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
