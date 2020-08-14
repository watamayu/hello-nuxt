<template>
  <ul class="footer-guide-list">
    <slot name="listItem" />
  </ul>
</template>

<style lang="scss" scoped>
  .footer-guide-list {
    @apply flex justify-start -ml-20 -mb-20;
  }

  .footer-guide-list /deep/ li {
    @apply pl-20 pb-20;
  }

  .footer-guide-list /deep/ a {
    height: 24px;
    font-size: theme('fontSize.fz16');
    color: theme('colors.base');
    @apply flex items-center font-bold no-underline;
  }
</style>
