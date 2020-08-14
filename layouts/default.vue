<template>
  <div>
    <HeaderCommon />
    <nuxt />
    <FooterCommon />
  </div>
</template>

<script>
  import HeaderCommon from '~/components/globals/HeaderCommon.vue'
  import FooterCommon from '~/components/globals/FooterCommon.vue'

  export default {
    components: {
      HeaderCommon,
      FooterCommon,
    },
  }
</script>

<style lang="scss" scoped>
  html {
    color: #333;
    font-family: theme('fontFamily.default');
  }

  *,
  *::before,
  *::after {
    @apply box-border;
  }
</style>
