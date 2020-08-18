<template>
  <a class="app-button" :href="link">
    <slot name="name" />
  </a>
</template>

<script>
  export default {
    props: {
      link: String,
    },
  }
</script>

<style lang="scss" scoped>
  .app-button {
    height: 35px;
    font-size: theme('fontSize.fz14');
    line-height: theme('lineHeight.lh14');
    border-color: theme('colors.button-base');
    border-radius: theme('borderRadius.50');
    @apply flex items-center justify-center px-10 border border-solid bg-white cursor-pointer;
  }
</style>
