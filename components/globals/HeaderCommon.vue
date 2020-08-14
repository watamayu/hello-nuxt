<template>
  <header class="header-common">

    <ul class="region-list">
      <li v-for="region in regionLinks"
          :key="region.name"
      >
        <a :href="region.path">{{ region.name }}</a>
      </li>
    </ul>

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
  import HeaderGuideNav from '~/components/modules/HeaderGuideNav.vue'
  import iconHome from '~/components/icons/iconHome.vue'

  export default {
    components: {
      HeaderGuideNav,
      iconHome,
    },
    data() {
      return {
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
    border-color: theme('colors.border-dark-gray');
    @apply relative border-solid bg-white;
  }

  .header-common .wrapper {
    width: theme('width.wrapper-common');
    @apply my-0 mx-auto py-16 px-0;
  }

  .header-common .region-list {
    background: #333;
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
