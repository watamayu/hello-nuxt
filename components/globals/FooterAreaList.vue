<template>
  <ul class="footer-area-list">
    <slot name="areaIndex" />
    <slot name="area" />
  </ul>
</template>

<style lang="scss" scoped>
  .footer-area-list {
    @apply flex items-center flex-wrap;
  }

  .footer-area-list:first-of-type {
    @apply flex items-center flex-wrap;
  }

  .footer-area-list /deep/ li {
    @apply py-8;
  }

  .footer-area-list /deep/ li > a {
    font-size: theme('fontSize.fz12');
    line-height: theme('lineHeight.lh12');
    color: theme('colors.base');
    border-color: theme('colors.base');
    @apply flex items-center px-4 border-solid border-r-1;
  }

  .footer-area-list /deep/ li:last-child > a {
    @apply  border-r-0;
  }
</style>
