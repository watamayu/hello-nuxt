<template>
  <main class="main">
    <div class="wrapper">
      <AppButton>
        <span slot="name">ふつーのボタン</span>
      </AppButton>
      <AppAccentButton>
        <span slot="name">やったね！</span>
      </AppAccentButton>
      <p>
        なにがでるかな
      </p>
    </div>
  </main>
</template>

<script>
  import AppButton from '~/components/parts/AppButton.vue'
  import AppAccentButton from '~/components/parts/AppAccentButton.vue'

  export default {
    components: {
      AppButton,
      AppAccentButton,
    },
  }
</script>

<style>
.main {
  margin: 0 auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  width: 1100px;
}

.wrapper {
  width: 300px;
}
</style>
