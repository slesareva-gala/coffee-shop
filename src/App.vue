<template>
  <div class="wrapper">
    <herro-view />
    <footer-component />
  </div>
</template>

<script>
import HerroView from "@/views/HerroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HerroView, FooterComponent },
};
</script>

<style lang="scss" scoped>
</style>
