<template>
  <p class="free-word-search-button">
    <IconSearch class="icon fill-current"
                width="22"
                height="22"
    />
    <input type="submit"
           value=""
           :class="{ 'w-30' : isWidth }"
    >
  </p>
</template>

<script>
  import IconSearch from '~/components/icons/IconSearch.vue'

  export default {
    components: {
      IconSearch,
    },
    props: {
      isWidth: Boolean,
    },
  }
</script>

<style lang="scss" scoped>
  .free-word-search-button {
    background-color: theme('colors.bg-light-blue');
    @apply relative h-full flex items-center justify-center cursor-pointer;
  }

  .free-word-search-button input {
    @apply relative h-full bg-transparent cursor-pointer z-10;
  }

  .free-word-search-button input:focus {
    @apply outline-none;
  }

  .free-word-search-button input.w-30 {
    width: 30px;
  }

  .free-word-search-button .icon {
    @apply absolute h-full text-white;
  }
</style>
