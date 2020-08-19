<template>
  <div class="no-under-eighteen">
    <IconNoUnderEighteen class="icon fill-current"
                         width="36"
                         height="34"
    />
    <p>
      18歳未満の御利用は<br>
      固くお断りいたします。
    </p>
  </div>
</template>

<script>
  import IconNoUnderEighteen from '~/components/icons/IconNoUnderEighteen.vue'

  export default {
    components: {
      IconNoUnderEighteen,
    },
  }
</script>

<style lang="scss" scoped>
  .no-under-eighteen {
    @apply flex;
  }

  .no-under-eighteen .icon {
    color: theme('colors.no-under-eighteen');
  }

  .no-under-eighteen p {
    font-size: theme('fontSize.fz12');
    line-height: theme('lineHeight.lh17');
    color: theme('colors.no-under-eighteen');
    @apply ml-4;
  }
</style>
