<template>
  <li :class="classLink">
    <router-link :to="link"
      >{{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: false,
    },
    classLink: {
      type: String,
      require: true,
    },
  },
};
</script>