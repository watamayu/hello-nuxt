<template>
  <p class="free-word-search">
    <FreeWordInput :placeholder="placeholder" />
    <FreeWordSearchButton :isWidth="isWidth" />
  </p>
</template>

<script>
  import FreeWordInput from '~/components/parts/FreeWordInput.vue'
  import FreeWordSearchButton from '~/components/parts/FreeWordSearchButton.vue'

   export default {
    components: {
      FreeWordInput,
      FreeWordSearchButton,
    },
    props: {
      isWidth: Boolean,
      placeholder: String,
    },
  }
</script>

<style lang="scss" scoped>
 .free-word-search {
   @apply flex items-center h-full;
 }
</style>
