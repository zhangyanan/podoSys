<style lang="scss" scoped>
  .md .navbar {
      height: 67px;
      color: #fff;
      font-size: 20px;
  }
  .pull-out-icon{
    width: 28px;
    height: 28px;
  }
  .pull-out-icon img{
    width: 30px;
    height: 30px;
  }
  .add_21profile-icon{
    width: 28px;
    height: 28px;
  }
 .add_21profile-icon img{
    width: 28px;
    height: 28px;
  }
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
      <label class="site-title">
        <f7-link href="/myItem/" no-link-class>
          <span class="pull-out-icon">
            <a class="panel-open raised " data-panel="left" href="#"><img src="@/assets/icon_all/pull_out@2x.png"/></a>
          </span>
        </f7-link></label>
      <label class="site-title">|</label>
      <label class="content-title">{{title}}</label>
    </f7-nav-title>
    <f7-nav-right>
      <f7-link icon-f7="undo" back v-if="back">
        <span class="add_21profile-icon">
          <a href="/quick/"><img src="@/assets/icon_all/add_21profile@2x.png"/></a>
        </span>
      </f7-link>
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
