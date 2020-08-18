<template>
  <footer class="footer-common">
    <div class="wrapper">
      <FooterGuideList>
        <li slot="guideItem"
            v-for="link in footerNavLinks"
            :key="link.name"
        >
          <a :href="link.path">
            <IconArrow class="icon fill-current"
                       width="12"
                       height="12"
            />
            {{ link.name }}
          </a>
        </li>
      </FooterGuideList>
      <ul class="information-list">
        <li v-for="info in informationLinks"
            :key="info.name"
        >
          <AppAccentButton :link="info.path"
                           :addClass="info.class"
          >
            <span slot="name">
              {{ info.name }}
            </span>
          </AppAccentButton>
        </li>
      </ul>
      <hr>
      <FooterContentsList>
        <div slot="contents"
             v-for="area in areaList"
             :key="area.id"
          >
            <FooterAreaList>
              <li slot="areaIndex">
                <FooterAreaIndex :isIcon="isIcon">
                  <template slot="indexArrow">
                    {{ area.region }}
                  </template>
                </FooterAreaIndex>
              </li>
              <li slot="area"
                  v-for="prefecture in area.prefecture"
                  :key="prefecture.id"
              >
                <a :href="prefecture.path">
                  {{ prefecture.name }}
                </a>
              </li>
            </FooterAreaList>
          </div>
      </FooterContentsList>
      <hr>
      <FooterContentsList>
        <div slot="contents">
          <FooterSearchIndex>
            <template slot="title">
              風俗主要エリア
            </template>
          </FooterSearchIndex>
          <template v-for="area in areaList">
            <FooterAreaList v-for="prefecture in area.prefecture"
                            :key="prefecture.id"
            >
              <li slot="areaIndex"
                  class="w-full"
              >
                <FooterAreaIndex :iskako="iskako">
                  <template slot="index">
                    {{ prefecture.name }}
                  </template>
                </FooterAreaIndex>
              </li>
              <li slot="area"
                  v-for="city in prefecture.city"
                  :key="city.name"
              >
                <a :href="city.path">
                  {{ city.name }}
                </a>
              </li>
            </FooterAreaList>
          </template>
        </div>
        <div slot="contents">
          <div
               v-for="shop in searchbusiness"
               :key="shop.name"
          >
            <FooterSearchIndex>
              <template slot="title">
                {{ shop.name }}
              </template>
            </FooterSearchIndex>
            <div slot="item"
                 v-for="area in areaList"
                 :key="area.id"
                 class="item"
            >
              <FooterAreaList v-for="prefecture in area.prefecture"
                              :key="prefecture.id"
              >
                <li slot="areaIndex">
                  <FooterAreaIndex :iskako="iskako">
                    <template slot="index">
                      {{ prefecture.name }}
                    </template>
                  </FooterAreaIndex>
                </li>
                <li slot="area"
                    v-for="city in prefecture.city"
                    :key="city.name"
                >
                  <a :href="city.path">
                    {{ city.name }}
                  </a>
                </li>
              </FooterAreaList>
            </div>
          </div>
        </div>
      </FooterContentsList>
    </div>
    <p class="copyright">
      Copyright© 1999-{{ nowYear }} ぴゅあらば All rights reserved.
    </p>
  </footer>
</template>

<script>
  import FooterGuideList from '~/components/globals/FooterGuideList.vue'
  import FooterAreaList from '~/components/globals/FooterAreaList.vue'
  import FooterAreaIndex from '~/components/globals/FooterAreaIndex.vue'
  import FooterContentsList from '~/components/globals/FooterContentsList.vue'
  import FooterSearchIndex from '~/components/globals/FooterSearchIndex.vue'
  import AppAccentButton from '~/components/parts/AppAccentButton.vue'
  import IconArrow from '~/components/icons/IconArrow.vue'


  export default {
    components: {
      FooterGuideList,
      FooterAreaList,
      FooterAreaIndex,
      FooterContentsList,
      FooterSearchIndex,
      AppAccentButton,
      IconArrow,
    },
    data() {
      return {
        isIcon: true,
        iskako: true,
        nowYear: '',
        logoAlt: '風俗情報ぴゅあらば',
        footerNavLinks: [
          { name: '風俗情報ぴゅあらばTOP', path: '/' },
          { name: '利用規約', path: '/' },
          { name: 'プライバシーポリシー', path: '/' },
          { name: 'よくある質問', path: '/' },
          { name: 'お問い合わせ', path: '/' },
          { name: 'リンク', path: '/' },
          { name: '運営者情報', path: '/' },
        ],
        informationLinks: [
          { name: '掲載お申込み', path: '/', class: 'rounded' },
          { name: '掲載についてのお問い合わせ', path: '/', class: 'rounded' },
          { name: '店舗様ログイン', path: '/', class: 'rounded' },
        ],
        searchbusiness: [
          { name: 'デリヘル店の主要エリア' },
          { name: 'ホテヘル店の主要エリア' },
          { name: '店舗型ヘルス店の主要エリア' },
          { name: 'ソープ店の主要エリア' },
        ],
        areaList: [
          {
            id: 'hokkaido-tohoku',
            region: '北海道・東北',
            prefecture: [
              { id: 'hokkaido', name: '北海道', path: '/' },
              { id: 'aomori', name: '青森', path: '/' },
              { id: 'akita', name: '秋田', path: '/' },
              { id: 'iwate', name: '岩手', path: '/' },
              { id: 'yamagata', name: '山形', path: '/' },
              { id: 'miyagi', name: '宮城', path: '/' },
              { id: 'hukushima', name: '福島', path: '/' },
            ]
          },
          {
            id: 'kanto',
            region: '関東',
            prefecture: [
              {
                id: 'tokyo',
                name: '東京',
                path: '/',
                city: [
                  { order: 1, name: '渋谷', path: '/' },
                  { order: 2, name: '恵比寿・六本木・赤坂', path: '/' },
                  { order: 3, name: '新宿', path: '/' },
                  { order: 4, name: '新大久保・高田馬場', path: '/' },
                  { order: 5, name: '中野・高円寺', path: '/' },
                  { order: 6, name: '池袋', path: '/' },
                  { order: 7, name: '五反田', path: '/' },
                  { order: 8, name: '品川', path: '/' },
                  { order: 9, name: '新橋・銀座', path: '/' },
                  { order: 10, name: '蒲田・大井町', path: '/' },
                  { order: 11, name: '大塚', path: '/' },
                  { order: 12, name: '吉原', path: '/' },
                  { order: 13, name: '上野・御徒町', path: '/' },
                  { order: 14, name: '浅草・浅草橋', path: '/' },
                  { order: 15, name: '秋葉原・神田', path: '/' },
                  { order: 16, name: '錦糸町', path: '/' },
                  { order: 17, name: '小岩・葛西', path: '/' },
                  { order: 18, name: '吉祥寺・国分寺', path: '/' },
                  { order: 19, name: '府中・調布', path: '/' },
                  { order: 20, name: '立川・八王子', path: '/' },
                  { order: 21, name: '町田', path: '/' },
                  { order: 22, name: 'その他東京都', path: '/' },
                ]
              },
              { id: 'saitama', name: '埼玉', path: '/' },
              { id: 'chiba', name: '千葉', path: '/' },
              { id: 'kanagawa', name: '神奈川', path: '/' },
              { id: 'ibaraki', name: '茨城', path: '/' },
              { id: 'tochigi', name: '栃木', path: '/' },
              { id: 'gunma', name: '群馬', path: '/' },
            ]
          },
          {
            id: 'koshinetsu',
            region: '甲信越',
            prefecture: [
              { id: 'niigata', name: '新潟', path: '/' },
              { id: 'nagano', name: '長野', path: '/' },
              { id: 'yamanashi', name: '山梨', path: '/' },
            ]
          },
          {
            id: 'hokuriku',
            region: '北陸',
            prefecture: [
              { id: 'ishikawa', name: '石川', path: '/' },
              { id: 'toyama', name: '富山', path: '/' },
              { id: 'hukui', name: '福井', path: '/' },
            ]
          },
        ],
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
    background-color: theme('colors.accent');
    @apply block h-4 top-0 right-0 left-0;
  }

  .footer-common .wrapper {
    width: theme('width.wrapper-common');
    @apply my-0 mx-auto py-20 px-0;
  }

  .footer-common .information-list {
    @apply flex items-center -ml-8 -mb-8 pt-8;
  }

  .footer-common .information-list li {
    @apply pl-8 pb-8;
  }

  .footer-common .prefecture-list {
    @apply flex flex-wrap;
  }

  .footer-common .icon {
    color: theme('colors.accent');
    @apply mr-4;
  }

  .footer-common .rounded {
    border-radius: theme('borderRadius.rounded');
    font-size: theme('fontSize.fz16');
    line-height: theme('lineHeight.lh16');
  }

  .footer-common .copyright {
    font-size: theme('fontSize.fz12');
    line-height: theme('lineHeight.lh12');
    background-color: theme('colors.accent');
    @apply flex items-center justify-center text-white py-8 px-0;
  }

  .footer-common .w-50  {
    @apply w-1/2;
  }

  .footer-common .w-full  {
    @apply w-full;
  }

  .footer-common hr {
    margin: 16px 0;
    border-top-width: 2px;
    border-color: #D8D8D8;
  }
</style>
