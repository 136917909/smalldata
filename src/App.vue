<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
    window.addEventListener('unload', e => this.unloadHandler(e))
    //页面回顶部
    window.addEventListener('beforeunload', this.Totop)
  }
}
</script>

<style>
#app {
}
</style>
