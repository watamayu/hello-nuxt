<template>
  <p class="footer-search-index">
    <span>
      <slot name="title" />
    </span>
  </p>
</template>

<style lang="scss" scoped>
  .footer-search-index {
    font-size: theme('fontSize.fz18');
    line-height: theme('lineHeight.lh25');
    color: theme('colors.accent');
    border-color: theme('colors.accent');
    @apply flex items-center mb-4 font-bold border-l-4 border-solid;
  }

  .footer-search-index span {
    @apply px-4;
  }
</style>
