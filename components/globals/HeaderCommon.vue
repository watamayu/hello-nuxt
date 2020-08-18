<template>
  <header class="header-common">

    <ul class="region-list">
      <li v-for="region in regionLinks"
          :key="region.name"
      >
        <a :href="region.path">{{ region.name }}</a>
      </li>
    </ul>

    <form action="">
      <FreeWordSearch :placeholder="placeholder" :classWidth="classWidth" />
    </form>

    <AppButton :link="link">
      <span slot="name">ふつーのボタン</span>
    </AppButton>

     <AppAccentButton>
      <span slot="name">ログイン</span>
    </AppAccentButton>




    <div class="wrapper">
      <a href="/">
        <img src="~assets/images/logo-purelovers.png"
             alt="風俗情報ぴゅあらば"
             width="164"
             height="63"
        >
      </a>
      <h1>wwwwwwwwwwww</h1>
      <p>りーど</p>
    </div>


    <HeaderGuideNav>
      <li slot="navItem"
          v-for="link in navLinks"
          :key="link.name"
      >
        <template v-if="link.name === 'トップ'">
          <a :href="link.path">
            <IconHome class="icon fill-current" width="30" height="28" />
          </a>
        </template>
        <template v-else>
          <a :href="link.path">
            {{ link.name }}
          </a>
        </template>
      </li>
    </HeaderGuideNav>
  </header>
</template>

<script>
  import HeaderGuideNav from '~/components/globals/HeaderGuideNav.vue'
  import FreeWordSearch from '~/components/modules/FreeWordSearch.vue'
  import AppButton from '~/components/parts/AppButton.vue'
  import AppAccentButton from '~/components/parts/AppAccentButton.vue'
  import IconHome from '~/components/icons/IconHome.vue'

  export default {
    components: {
      HeaderGuideNav,
      FreeWordSearch,
      AppButton,
      IconHome,
    },
    data() {
      return {
        placeholder: 'フリーワード検索',
        classWidth: 'w-30',
        link: '',
        navLinks: [
          { name: 'トップ', path: '/' },
          { name: 'お店検索', path: '/' },
          { name: '女の子検索', path: '/' },
          { name: 'クーポン', path: '/' },
          { name: 'ランキング', path: '/' },
          { name: '口コミ', path: '/' },
          { name: '写メ日記', path: '/' },
          { name: '動画･画像･マンガ', path: '/' },
        ],
        regionLinks: [
          { name: '北海道･東北', path: '/' },
          { name: '関東', path: '/' },
          { name: '北陸', path: '/' },
          { name: '甲信越', path: '/' },
          { name: '東海', path: '/' },
          { name: '関西', path: '/' },
          { name: '中国･四国', path: '/' },
          { name: '九州･沖縄', path: '/' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .header-common {
    // min-height: 190px;
    border-top-width: 5px;
    border-color: theme('colors.base');
    @apply relative border-solid bg-white;
  }

  .header-common::before {
    content: "";
  }

  .header-common::after {
    content: "";
    width: 45.57%;
    height: 25px;
    background-color: theme('colors.base');
    @apply inline-block absolute top-0 right-0;
  }

  .header-common .wrapper {
    width: theme('width.wrapper-common');
    @apply my-0 mx-auto py-16 px-0;
  }

  .header-common form {
    width: 192px;
    height: 30px;
  }

  .header-common .region-list {
    @apply flex items-center text-white;
  }

  .header-common .region-list li {
    @apply border-solid border-l-1 border-white;
  }

  .header-common .region-list li:first-child {
    @apply border-l-0;
  }

  .header-common .region-list a {
    font-size: theme('fontSize.fz12');
    @apply text-white;
  }
</style>
