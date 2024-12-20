<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <title-page text="For your pleasure" />
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card :name="goods[0].name" :price="goods[0].price" :image="goods[0].image"
                                :country="goods[0].country" />
                            <product-card :name="goods[1].name" :price="goods[1].price" :image="goods[1].image"
                                :country="goods[1].country" />
                            <product-card :name="goods[2].name" :price="goods[2].price" :image="goods[2].image"
                                :country="goods[2].country" />
                            <product-card :name="goods[3].name" :price="goods[3].price" :image="goods[3].image"
                                :country="goods[3].country" />
                            <product-card :name="goods[4].name" :price="goods[4].price" :image="goods[4].image"
                                :country="goods[4].country" />
                            <product-card :name="goods[5].name" :price="goods[5].price" :image="goods[5].image"
                                :country="goods[5].country" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import TitlePage from '@/components/TitlePage.vue';

export default {
    components: { NavBarComponent, ProductCard, TitlePage },
    data() {
        return {
            goods: [
                {
                    id: 0,
                    name: 'Solimo Coffee Beans 2kg your',
                    country: 'Brazil',
                    price: '10.73',
                    image: 'good-1.jpg',
                },
                {
                    id: 1,
                    name: 'Presto Coffee Beans 1kg your',
                    country: 'Brazil',
                    price: '15.99',
                    image: 'good-1.jpg',
                },
                {
                    id: 2,
                    name: 'AROMISTICO Coffee 1kg your',
                    country: 'Brazil',
                    price: '6.99',
                    image: 'good-1.jpg',
                },
                {
                    id: 3,
                    name: 'Solimo Coffee Beans 2.1kg your',
                    country: 'Brazil',
                    price: '10.73',
                    image: 'good-1.jpg',
                },
                {
                    id: 4,
                    name: 'Solimo Coffee Beans 2.2kg your',
                    country: 'Brazil',
                    price: '11.73',
                    image: 'good-1.jpg',
                },
                {
                    id: 5,
                    name: 'Solimo Coffee Beans 2.3kg your',
                    country: 'Brazil',
                    price: '12.73',
                    image: 'good-1.jpg',
                },
            ]
        }
    }
};
</script>