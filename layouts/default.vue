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

<style lang="scss">
  body {
    color: #333;
    font-family: theme('fontFamily.default');
    word-break: break-word;
    word-wrap: break-word;
  }

  *,
  *::before,
  *::after {
    @apply box-border;
  }
</style>
