<template>
  <router-view class="app__content"/>
</template>
<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: $main-font;
  background-color: #333333;
}
</style>
