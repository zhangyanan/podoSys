<style lang="scss" scoped>
  .header {
    position: relative;
    line-height: 38px;
    color: #fff;
    text-align: center;
    background: #222;
    .item {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      a {
        color: #fff;
      }
    }
    .left {
      left: 10px;
    }
    .right {
      right: 10px;
    }
  }
</style>
<template>
  <f7-navbar>
    <f7-nav-left>
    </f7-nav-left>
    <f7-nav-title>
      <label class="site-title"><f7-link href="/" no-link-class>SJC life</f7-link></label>
      <label class="site-title">|</label>
      <label class="content-title">{{title}}</label>
    </f7-nav-title>
    <f7-nav-right>
      <f7-link icon-f7="undo" back v-if="back"></f7-link>
      <f7-link icon-material="menu" panel-open="right" v-else-if="!noMenu" popup-open data-popup=".popup-menu"></f7-link>
    </f7-nav-right>
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
