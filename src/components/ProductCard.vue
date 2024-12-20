<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div :class="classItem + '-title'">{{ name }}</div>
    <div v-show="country" :class="classItem + '-country'">{{ country }}</div>
    <div :class="classItem + '-price'">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    country: {
      type: String,
      require: false
    },
    classItem: {
      type: String,
      default: 'shop__item',
    }
  }
}
</script>