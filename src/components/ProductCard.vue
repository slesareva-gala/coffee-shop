<template>
  <div :class="classCard" @click="onEmmit(card.id)">
    <img :src="card.image" :alt="card.image" />
    <div :class="classCard + '-title'">{{ card.name }}</div>
    <div v-show="card.country" :class="classCard + '-country'">
      {{ card.country }}
    </div>
    <div :class="classCard + '-price'">{{ card.price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    classCard: {
      type: String,
      default: "shop__item",
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>