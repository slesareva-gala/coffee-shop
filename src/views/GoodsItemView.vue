<template>
  <main>
    <div
      class="banner"
      :class="name === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-page :text="product.name" v-if="!isLoading && product" />
      </div>
    </div>

    <section class="shop" v-if="!isLoading && product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-0 offset-lg-1">
            <img class="shop__girl" :src="product.image" :alt="product.image" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div v-show="product.country" class="shop__point">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div v-show="product.description" class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div v-show="product.price" class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price"> {{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="shop" v-else-if="isLoading">
      <div class="container">
        <spinner-component class="row"></spinner-component>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import TitlePage from "@/components/TitlePage.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

import { getData } from "../mixins/serverData";

export default {
  components: { NavBarComponent, TitlePage, SpinnerComponent },
  computed: {
    product() {
      return this.$store.getters["getProduct"];
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  data() {
    return {
      name: this.$route.name,
    };
  },
  mounted() {
    this.$store.dispatch("setIsLoading", true);
    getData({
      name: this.name,
      id: this.$route.params.id,
      callback: (data) => {
        this.$store.dispatch("setIsLoading", false);
        this.$store.dispatch("setProductData", data);
      },
      delay: 500,
    });
  },
  destroyed() {
    this.$store.dispatch("setProductData", null);
  },
};
</script>