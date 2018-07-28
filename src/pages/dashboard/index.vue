<template>
  <f7-page class="index-page">
      <f7-list class="welcome-list">
          <f7-list-item class="welcome-title" title="WELCOME"></f7-list-item>
          <f7-list-item class="wt-title" title="欢迎回家"></f7-list-item>
          <f7-list-item class="home-title" title="HOME"></f7-list-item>
      </f7-list>
      <f7-row class="smileform" no-gap>
        <f7-col width="70">
          <f7-list class="smiler-list">
            <f7-list-item><div class="item-text-smiler"><img src="@/assets/icon_all/smiler.png" /></div></f7-list-item>
            <f7-list-item><div class="item-subtitle1">BEING A SMILER</div></f7-list-item>
            <f7-list-item><div class="item-subtitle2">永远微笑的活着</div></f7-list-item>
          </f7-list>
        </f7-col>
        <f7-col width="30">
          <f7-list class="group-list">
            <f7-list-item>
              <f7-link href="/inputform/"><img src="@/assets/icon_all/Group.png"/></f7-link>           
            </f7-list-item>
          </f7-list>
        </f7-col>      
      </f7-row>
  </f7-page>
</template>
<script>

</script>
<style lang="scss">
  .page.index-page {
    background-image: url("../../assets/icon_all/login_bg.png")
  }
  .md .list.welcome-list {
      margin: 0px;
  }
  .md .list .item-text-smiler{
    padding-top: 35px;
    padding-left: 35px;
  }
  .md .list .item-subtitle1 {
    font-size: 18px;
    color: white;
    line-height: 22px;
    font-family: PFSquareSansPro-Medium;
    letter-spacing: 2px;
    padding-top: 45px;
    padding-left: 35px;
  }
  .md .list .item-subtitle2 {
    font-size: 18px;
    color: white;
    line-height: 22px;
    font-family: PFSquareSansPro-Medium;
    letter-spacing: 2px;
    padding-top: 45px;
    padding-left: 35px;
  }
  .welcome-title{
    font-family: PFSquareSansPro-Regular;
    font-size: 34px;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-top: 70px;
    margin-left: 40px;
  }
  .wt-title{
    font-family: PingFangTC-Semibold;
    font-size: 40px;
    color: #F4E84C;
    letter-spacing: 0;
    margin-top: -30px;
    margin-left: 40px;
  }
  .home-title{
    font-family: PFSquareSansPro-Regular;
    font-size: 34px;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-top: -30px;
    margin-left: 40px;
  }
   div.list.welcome-list ul:before, div.list.welcome-list ul:after,div.list.group-list ul:before,div.list.group-list ul:after {
    background-color: transparent;
  }
  div.list.smiler-list ul:before,div.list.smiler-list ul:after,div.list.group-list ul:after{
   background-color: transparent;
 }
 div.welcome.text-center.b-0.item-inner{
   background-color: transparent;
 }
 .md .list.welcome-list .item-inner:after,.md .list.smiler-list .item-inner:after{
   background-color: transparent;
 }
  div.row.smileform.no-gap {
      margin-top: 60%;
  }
  div.list.smiler-list ul li{
    height: 30px;
  }
</style>
