<template>
  <a class="app-accent-button"
     :class="addClass"
     :href="link"
  >
    <slot name="name" />
  </a>
</template>

<script>
  export default {
    props: {
      link: String,
      addClass: String,
    },
  }
</script>

<style lang="scss" scoped>
  .app-accent-button {
    height: 35px;
    font-size: theme('fontSize.fz14');
    line-height: theme('lineHeight.lh14');
    color: theme('colors.accent');
    border-color: theme('colors.accent');
    border-radius: theme('borderRadius.pills');
    @apply flex items-center justify-center px-10 border border-solid font-bold bg-white cursor-pointer;
  }
</style>
