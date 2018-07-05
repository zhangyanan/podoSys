<style lang="scss" scoped>
div.navbar-inner.sliding{
  height: 65px;
  background: #54BCBF;
}
</style>
<template>
  <f7-navbar>
    <f7-nav-left>
      <img src="@/assets/icon_all/back_white.png"/>
    </f7-nav-left>
    <f7-nav-title>
      <label class="content-title">{{title}}</label>
    </f7-nav-title> 
  </f7-navbar>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    },
    noMenu: {
      type: Boolean,
      default: false
    }
  }
}
</script>
