<template>
  <p class="free-word-search-button">
    <input type="submit" :class="classWidth" value="">
    <IconSearch class="icon fill-current" width="22" height="22" />
  </p>
</template>

<script>
  import IconSearch from '~/components/icons/IconSearch.vue'

  export default {
    components: {
      IconSearch,
    },
    props: {
      classWidth: String,
    },
  }
</script>

<style lang="scss" scoped>
  .free-word-search-button {
    @apply relative h-full flex items-center justify-center cursor-pointer;
  }

  .free-word-search-button input {
    background-color: theme('colors.bg-icon-search');
    @apply h-full;
  }

  .free-word-search-button input.w-30 {
    width: 30px;
  }

  .free-word-search-button .icon {
    // top: theme('inset.1/2');
    // left: theme('inset.1/2');
    // @apply absolute h-full -translate-y-1/2 -translate-x-1/2 text-white;
    @apply absolute h-full text-white;
  }
</style>
