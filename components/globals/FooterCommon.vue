<template>
  <footer class="footer-common">
    <div class="wrapper">
      <FooterGuideList>
        <li slot="listItem"
            v-for="link in listLinks"
            :key="link.name"
        >
          <a :href="link.path">
            <IconArrow class="icon fill-current" width="12" height="12" />
            {{ link.name }}
          </a>
        </li>
      </FooterGuideList>
    </div>
    <p class="copyright">
      Copyright© 1999-{{ nowYear }} ぴゅあらば All rights reserved.
    </p>
  </footer>
</template>

<script>
  import FooterGuideList from '~/components/modules/FooterGuideList.vue'
  import IconArrow from '~/components/icons/IconArrow.vue'

  export default {
    components: {
      FooterGuideList,
      IconArrow,
    },
    data() {
      return {
        nowYear: '',
        logoAlt: '風俗情報ぴゅあらば',
        listLinks: [
          { name: '風俗情報ぴゅあらばTOP', path: '/next' },
          { name: '利用規約', path: '/' },
          { name: 'プライバシーポリシー', path: '/' },
          { name: 'よくある質問', path: '/' },
          { name: 'お問い合わせ', path: '/' },
          { name: 'リンク', path: '/' },
          { name: '運営者情報', path: '/' },
        ]
      }
    },
    created() {
      /**
      * 年数を取得
      */
      const date   = new Date()
      this.nowYear = date.getFullYear()
    },
  }
</script>

<style lang="scss" scoped>
  .footer-common {
    border-color: theme('colors.border-dark-gray');
    background-color: theme('colors.bg-gray');
    @apply relative border-solid border-t-2 border-b-2;
  }

  .footer-common::before {
    content: "";
    background-color: theme('colors.base');
    @apply block h-4 top-0 right-0 left-0;
  }

  .footer-common .icon {
    color: theme('colors.base');
    @apply mr-4;
  }

  .footer-common .wrapper {
    width: theme('width.wrapper-common');
    @apply my-0 mx-auto py-16 px-0;
  }

  .footer-common .copyright {
    font-size: theme('fontSize.fz12');
    line-height: theme('lineHeight.lh12');
    background-color: theme('colors.base');
    @apply flex items-center justify-center text-white py-8 px-0;
  }
</style>
