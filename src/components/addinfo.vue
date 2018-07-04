<style lang="scss" scoped>


</style>
<template>
  <f7-navbar>
    <f7-nav-left>
    </f7-nav-left>
    <f7-nav-title>
      <label class="site-title">
        <f7-link href="/" no-link-class>
          <span class="pull-out-icon">
            <a class="panel-open raised " data-panel="left" href="#"><img src="@/assets/icon_all/back_white@2x.png"/></a>
          </span>
        </f7-link>
      </label>
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
