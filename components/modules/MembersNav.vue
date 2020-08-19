<template>
  <ul class="members-nav">
    <li>
      <AppAccentButton :isIcon="isIcon"
                       :isHead="isHead"
      >
        <IconKey slot="icon"
                 class="icon fill-current"
                 width="16"
                 height="16"
          />
        <span slot="name">ログイン</span>
      </AppAccentButton>
    </li>
    <li>
      <AppAccentButton :isIcon="isIcon"
                       :isHead="isHead"
      >
        <IconPen slot="icon"
                 class="icon fill-current"
                 width="16"
                 height="16"
          />
        <span slot="name">会員登録</span>
      </AppAccentButton>
    </li>
  </ul>
</template>

<script>
  import AppAccentButton from '~/components/parts/AppAccentButton.vue'
  import IconKey from '~/components/icons/IconKey.vue'
  import IconPen from '~/components/icons/IconPen.vue'

  export default {
    components: {
      AppAccentButton,
      IconKey,
      IconPen,
    },
    data() {
      return {
        isHead: true,
        isIcon: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .members-nav {
    @apply flex items-center -ml-8 -mb-8;
  }

  .members-nav li {
    @apply pl-8 pb-8;
  }
</style>
