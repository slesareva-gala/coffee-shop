<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-page text="Our Coffee" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div v-if="!isLoading" class="line"></div>
        <div v-if="!isLoading" class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                v-model="searchValue"
                @input="onSearch($event)"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
                <button
                  v-show="searchValue"
                  class="shop__filter-btn"
                  @click="onSort('')"
                >
                  All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isLoading && coffee.length > 0" class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="card in coffee"
                :key="card.id"
                :card="card"
                @onNavigate="navigate"
              />
            </div>
          </div>
        </div>
        <spinner-component
          v-else-if="isLoading"
          class="shop"
        ></spinner-component>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import TitlePage from "@/components/TitlePage.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

import { navigate } from "../mixins/navigate";
import { getData } from "../mixins/serverData";
import debounce from "debounce";

export default {
  components: { NavBarComponent, ProductCard, TitlePage, SpinnerComponent },
  computed: {
    coffee() {
      return this.$store.getters["getCoffee"];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("setSearchValue", value);
      },
      get() {
        return this.$store.getters["getSearchValue"];
      },
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  data() {
    return {
      name: "coffee",
    };
  },
  mixins: [navigate],
  methods: {
    onSearch: debounce(function (e) {
      this.onSort(e.target.value);
    }, 500),
    onSort(value) {
      this.$store.dispatch("setSearchValue", value);

      getData({
        name: this.name,
        q: value,
        callback: (data) => {
          this.$store.dispatch("setCoffeeData", data);
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("setIsLoading", true);
    getData({
      name: this.name,
      callback: (data) => {
        this.$store.dispatch("setIsLoading", false);
        this.$store.dispatch("setCoffeeData", data);
      },
      delay: 1000,
    });
  },
  destroyed() {
    this.$store.dispatch("setCoffeeData", []);
  },
};
</script>
