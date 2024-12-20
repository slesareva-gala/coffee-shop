<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <title-page text="Everything You Love About Coffee" />
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <router-link :to="links[0].link" class="preview__btn"
              >More</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <product-card
                v-for="bestseller in bestsellers"
                :key="bestseller.id"
                :name="bestseller.name"
                :price="bestseller.price"
                :image="bestseller.image"
                classItem="best__item"
              />
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
import TitlePage from "@/components/TitlePage.vue";

export default {
  components: { NavBarComponent, ProductCard, TitlePage },
  data() {
    return {
      links: [
        {
          id: 1,
          link: "/our-cofee",
        },
      ],
      bestsellers: [
        {
          id: 0,
          name: "Solimo Coffee Beans 2kg",
          price: 10.73,
          image: "coffee-1.jpg",
        },
        {
          id: 1,
          name: "Presto Coffee Beans 1kg",
          price: 15.99,
          image: "coffee-2.jpg",
        },
        {
          id: 2,
          name: "AROMISTICO Coffee 1kg",
          price: 6.99,
          image: "coffee-3.jpg",
        },
      ],
    };
  },
};
</script>