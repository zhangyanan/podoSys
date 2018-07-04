<template>
  <f7-popup class="popup-menu">
    <v-header title='菜单' no-menu></v-header>
    <f7-block>
      <f7-list>
        <f7-list-item class="text-center font-light" popup-close link="/dashboard/">首 页</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/work/">工作区</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/dashboard/">{{dashboardtxt}}</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/myItem/">我 的</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/notice/">公 告</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/login/">登 录</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/userItem/">账户信息</f7-list-item>
        <f7-list-item class="text-center font-light" popup-close link="/allList/">gg列表</f7-list-item>
      </f7-list>
      <f7-block class="text-center popup-close">
        <f7-link popup-close icon-f7="close" icon-size="50"></f7-link>
      </f7-block>
    </f7-block>
  </f7-popup>
</template>

<script>
export default {
  data () {
    return {
      dashboardtxt: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.popup-menu {
  .list {
    .item-content {
      color: #757575;
      padding: 0;
      .item-inner {
        display: inline-block;
        text-align: center;
        padding: 20px;
        background-image: none;
        font-size: 1.5rem;
      }
    }
  }
  .popup-close {
    color: #757575;
  }
}
</style>
