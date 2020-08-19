<template>
  <p class="footer-area-index">
    <span v-if="isColon">
      <IconArrow class="icon fill-current"
                 width="12"
                 height="12"
      />
      <slot name="colon" />:
    </span>
    <span v-if="isParentheses" >
      【<slot name="parentheses" />】
    </span>
  </p>
</template>

<script>
import IconArrow from '~/components/icons/IconArrow.vue'

export default {
  components: {
    IconArrow,
  },
  props: {
    isColon: Boolean,
    isParentheses: Boolean,
  },
}
</script>

<style lang="scss" scoped>
  .footer-area-index {
    @apply flex items-center;
  }

  .footer-area-index span {
    font-size: theme('fontSize.fz12');
    line-height: theme('lineHeight.lh12');
    color: theme('colors.base');
    @apply flex items-center font-bold;
  }

  .footer-area-index .icon {
    color: theme('colors.accent');
    @apply mr-4;
  }
</style>
