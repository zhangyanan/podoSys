<style lang="scss" scoped>
  .md .navbar {
      height: 67px;
      color: #fff;
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
    div.navbar-inner.sliding{
    background: #FFFFFF;
    border:solid 1px red;
  }
  .md .navbar:after{
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0); 
  }

  .md a.link.leftlink,.md a.link.rightlink{
    //background: #FFFFFF;
  }
</style>
<template>
  <f7-navbar>
  <f7-nav-left>
    <f7-link href="#" class="leftlink" raised panel-open="left"><img src="@/assets/icon_all/pull_out.png"/></f7-link>
  </f7-nav-left>
  <f7-nav-title></f7-nav-title>
  <f7-nav-right>
    <!-- <f7-link addPage v-if="addPage" href="/quick/"><img src="@/assets/icon_all/add_21profile.png"/></f7-link>-->
    <f7-link class="rightlink" href="/quick/"><img src="@/assets/icon_all/add_21profile.png"/></f7-link>
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
    addPage: {
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
