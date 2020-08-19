<template>
  <p class="free-word-input">
    <input type="text"
           :placeholder="placeholder"
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
      placeholder: String,
    },
  }
</script>

<style lang="scss" scoped>
  .free-word-input {
    @apply w-full h-full;
  }

 .free-word-input input {
   padding: 1px 0;
   font-size: theme('fontSize.fz14');
   line-height: theme('lineHeight.lh20');
   @apply w-full h-full flex items-center px-20 border-solid border-2  text-center bg-white;
    border: 2px solid #E2E2E2;
    color: #333;
    outline: 0;
 }
</style>
