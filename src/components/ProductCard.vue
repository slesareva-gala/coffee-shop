<template>
  <div :class="classCard">
    <img :src="require(`@/assets/img/${card.image}`)" :alt="card.image" />
    <div :class="classCard + '-title'">{{ card.name }}</div>
    <div v-show="card.country" :class="classCard + '-country'">
      {{ card.country }}
    </div>
    <div :class="classCard + '-price'">{{ card.price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      name: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
      image: {
        type: String,
        require: true,
      },
      country: {
        type: String,
        require: false,
      },
    },
    classCard: {
      type: String,
      default: "shop__item",
    },
  },
};
</script>