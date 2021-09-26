export default {
    actions: {},
    mutations: {
        plusItem(state, title) {
            for(let i = 0; i < state.products.length; i++) {
                if (title == state.products[i].title) {
                    state.products[i].number++;
                }
            }

        },
        minusItem(state, title) {
            for (let i = 0; i < state.products.length; i++) {
                if (title == state.products[i].title && state.products[i].number >= 0) {
                    if (state.products[i].number > 0) {
                        state.products[i].number--;
                    }
                }
            }
        },
        deleteItem(state, title) {
            console.log(title);
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].title == title) {
                    state.products.splice(i, 1);
                }
              }
        },
        clearCart(state) {
            console.log(state.products);
            state.products.splice(0, state.products.length);
        },
        nextSlide(state) {
            if (state.currentSlide >= 0 && state.currentSlide < state.seen.length-1) {
                state.currentSlide++
            }
        },
        prevSlide(state) {
            if (state.currentSlide > 0) {
                state.currentSlide--
            }
        }
        
    },
    state: {
        products: [{
                  id: 1,
                  image: require('../../assets/item1.png'),
                  title: 'Вытяжное устройство G2H',
                  description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                  vendor: 'G2H1065',
                  number: 1, 
                  price: 12644,
                },
                {
                  id: 2,
                  image: require('../../assets/item2.png'),
                  title: 'Вытяжное устройство BXC',
                  description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                  vendor: 'G2H1066',
                  number: 2,
                  price: 12644,
                },
                {
                  id: 3,
                  image: require('../../assets/item3.png'),
                  title: 'Вытяжное устройство GHN',
                  description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                  vendor: 'G2H1067',
                  number: 1,
                  price: 12644,
                }
        ],
        currentSlide: 0,
        seen: [
            [{
                id: 1,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 2,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 3,
                image: require('../../assets/slider3.png'),
                title: 'GHN',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 4,
                image: require('../../assets/slider4.png'),
                title: 'TDA',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            }],[{
                id: 1,
                image: require('../../assets/slider3.png'),
                title: 'GHN',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 2,
                image: require('../../assets/slider4.png'),
                title: 'TDA',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
                
            },
            {
                id: 3,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 4,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            }],[{
                id: 1,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 2,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 3,
                image: require('../../assets/slider3.png'),
                title: 'GHN',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 4,
                image: require('../../assets/slider4.png'),
                title: 'TDA',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            }],[{
                id: 1,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 2,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 3,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 4,
                image: require('../../assets/slider4.png'),
                title: 'TDA',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            }],[{
                id: 1,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 2,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 3,
                image: require('../../assets/slider3.png'),
                title: 'GHN',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 4,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            }],[{
                id: 1,
                image: require('../../assets/slider1.png'),
                title: 'BXC',
                description: 'Вытяжное устройство для механической системы вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 2,
                image: require('../../assets/slider2.png'),
                title: 'G2H',
                description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 3,
                image: require('../../assets/slider3.png'),
                title: 'GHN',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            },
            {
                id: 4,
                image: require('../../assets/slider4.png'),
                title: 'TDA',
                description: 'Вытяжное устройство с датчиком присутствия',
                priceLowRub: 6848,
                priceHighRub: 56584,
                priceLowEu: '77.60',
                priceHighEu: 643.86
            }],

        ],
        statusModuleWindow: false
    },
    getters: {
        orderedProducts(state) {
            return state.products
        },
        seenSlide(state) {
            return state.seen[state.currentSlide];
        },
        seenProducts(state) {
            return state.seen
        },
        currentStatus(state) {
            return state.statusModuleWindow
        },
        sum(state) {
            let sum = 0;
            for (let i = 0; i < state.products.length; i++) {
                sum = sum + (state.products[i].price * state.products[i].number);
            }
            return sum
        },
        totalNumber(state) {
            let total = 0;
            for (let i = 0; i < state.products.length; i++) {
                total = total + state.products[i].number;
            }
            return total
        },
        allNames(state) {
            let allTitles = []
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].number > 0) {
                    allTitles.push({title: state.products[i].title, number: state.products[i].number})
                }
            }
            return allTitles
        },
        totalNumberHeader(state) {
            let total = 0;
            for (let i = 0; i < state.products.length; i++) {
                total = total + state.products[i].number;
            }
            if (total == 0) {
                total = 'Корзина пуста'
            }
            if (total == 1 || total == 21 || total == 31 || total == 41 || total == 51) {
                total = total + ' товар'
            }
            if (total > 1 && total < 5 || total > 21 && total < 25 || total > 31 && total < 35) {
                total = total + ' товара'
            }
            if (total >= 5 && total < 21 || total >= 25 && total < 31 || total >= 35 && total < 41) {
                total = total + ' товаров'
            }
            return total
        }
    },
}