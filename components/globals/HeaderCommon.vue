<template>
  <header class="header-common">

    <!-- <div style="display: flex;
    height: 25px;
    align-items: center;">

      <div style="width: 54.43%;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    font-size: 12px;
    color: #333;">
        <span style="font-size: 18px;
    color: #FD306A;
    font-weight: bold;">1,234</span>店舗
        <span>1,234,567</span>女の子
        <span>1,234,567,890</span>口コミ
      </div>

      <ul class="region-list">
        <li v-for="regionLink in regionLinks"
            :key="regionLink.name"
        >
          <a :href="regionLink.path">{{ regionLink.name }}</a>
        </li>
      </ul>

    </div> -->










    <div class="wrapper">

      <ul class="header-side-menu">
        <li>
          <NoUnderEighteen />
        </li>
        <li>
          <form action="">
            <FreeWordSearch :isWidth="isWidth"
                            :placeholder="placeholder"
            />
          </form>
        </li>
        <li>
          <MembersNav />
        </li>
      </ul>

      <HeadPrimary>
        <a slot="image" class="image" href="/">
          <img src="~assets/images/logo-purelovers.png"
              alt="風俗情報ぴゅあらば"
              width="164"
              height="63"
          >
        </a>
        <template slot="title">
          【関東】の<br>
          風俗店情報
        </template>
        <p slot="lead" class="lead">
          wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。
        </p>
      </HeadPrimary>

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
  import MembersNav from '~/components/modules/MembersNav.vue'
  import NoUnderEighteen from '~/components/modules/NoUnderEighteen.vue'
  import HeadPrimary from '~/components/parts/HeadPrimary.vue'
  import AppButton from '~/components/parts/AppButton.vue'
  import AppAccentButton from '~/components/parts/AppAccentButton.vue'
  import IconHome from '~/components/icons/IconHome.vue'
  import IconKey from '~/components/icons/IconKey.vue'


  export default {
    components: {
      HeaderGuideNav,
      FreeWordSearch,
      MembersNav,
      NoUnderEighteen,
      HeadPrimary,
      AppButton,
      IconHome,
      IconKey,
    },
    data() {
      return {
        isHead: true,
        isIcon: true,
        isWidth: true,
        placeholder: 'フリーワード検索',
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
    @apply relative my-0 mx-auto pt-0 pb-16 px-0;
  }

  .header-common form {
    width: 192px;
    height: 30px;
  }

  .header-common .region-list {
    @apply relative flex items-center text-white z-10;
  }

  .header-common .region-list li {
    @apply py-4;
  }

  .header-common .region-list a {
    font-size: theme('fontSize.fz12');
    @apply px-4 text-white border-solid border-r-1 border-white cursor-pointer ;
  }

  .header-common .region-list a.active {
    color: theme('colors.accent');
  }

  .header-common .region-list a:hover {
    color: theme('colors.accent');
  }

  .header-common .region-list li:last-child > a {
    @apply border-r-0 ;
  }

  .header-common .header-side-menu {
    top: 28px;
    @apply absolute right-0 flex items-center -ml-8 -mb-8;
  }

  .header-common .header-side-menu li {
    @apply pl-8 pb-8;
  }
</style>
