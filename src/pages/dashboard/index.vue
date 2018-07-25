<template>
  <f7-page class="index-page">
    <form class="login" v-on:submit.prevent="submit" no-hairlines-md>
      <f7-list class="welcome-list">
        <f7-list-item class="text-center b-0">
          <h1 class="white">WELCOME</h1>
        </f7-list-item>
       <f7-list-item class="text-center b-0">
          <h1 class="yellow">欢迎回家</h1>
        </f7-list-item>
        <f7-list-item class="text-center b-0">
          <h1 class="white">HOME</h1>
        </f7-list-item>
      </f7-list>
      <f7-row no-gap>
        <f7-col width="70">
          <f7-list class="smiler-list">
            <f7-list-item><div class="item-text"><img src="@/assets/icon_all/smiler.png" /></div></f7-list-item>
            <f7-list-item><div class="item-subtitle1">BEING A SMILER</div></f7-list-item>
            <f7-list-item><div class="item-subtitle2">永远微笑的活着</div></f7-list-item>
          </f7-list>
        </f7-col>
        <f7-col width="30">
          <f7-list>
            <f7-list-item>
              <f7-link href="/inputform/"><img src="@/assets/icon_all/Group.png"/></f7-link>           
            </f7-list-item>
          </f7-list>
        </f7-col>      
      </f7-row>    
    </form>
  </f7-page>
</template>
<script>

</script>
<style lang="scss">
  .md body {
    font-family: Roboto,Noto,Helvetica,Arial,sans-serif;
    color: #212121;
    line-height: 25px;
  }
  .md .index-page .list .item-inner:after {
    background-color: rgba(0, 0, 0, 0)
  }
  div.page.index-page.page-current {
    background-image: url("../../assets/icon_all/login_bg.png")
  }
  .md .login .list {
      margin: 0px;
  }
  .md div.list.smiler-list .item-content {
    min-height: 20px;
    margin: -10px 0px;
  }
  .welcome-list ul{
    margin-top: 74px;
    margin-left: 40px;
  }
  .md .login .list .item-text{
    padding-top: 35px;
    padding-left: 35px;
  }
  .md .login .list .item-subtitle1 {
    font-size: 18px;
    color: white;
    line-height: 22px;
    font-family: PFSquareSansPro-Medium;
    letter-spacing: 2px;
    padding-top: 45px;
    padding-left: 35px;
  }
  .md .login .list .item-subtitle2 {
    font-size: 18px;
    color: white;
    line-height: 22px;
    font-family: PFSquareSansPro-Medium;
    letter-spacing: 2px;
    padding-top: 45px;
    padding-left: 35px;
  }
  .login {
    padding: 0px;
    text-align: center;

    .b-0 {
      .item-content {
        border: 0px;
      }
    }

    h1 {
      font-weight: normal;
      margin: 0px 0px 0px 0px;
      font-size: 45px;
    }
    h1.white{
      font-family: PF Square Sans Pro;
      color:white;
    }
    h1.yellow{
      font-family: PingFangTC-Semibold;
      color:yellow;
    }
    .line {
      padding: 5px;

      input {
        padding: 0 10px;
        line-height: 28px;
      }
    }
    .item-content {
      border: 0px solid #eee;
      margin-bottom: 0px;
    }
    .item-content-button {
      .item-content {
        margin-top: 30px;
        border: 0px;
      }
    }
    .button, .button.button-fill, .button.button-fill.active-state {
      background-color: #3cc8b4;
    }
  }
  .md .login .list ul:before, .md .login .list ul:after, .md .login .item-input-wrap:after, .md .login .list .item-inner:after {
    background-color: transparent;
  }

  div .login .row.no-gap {
      margin-top: 285px;
  }
  .md .row.no-gap .col-30 {
   // padding-left: 35px;
  }
  .md .row.no-gap .col-70 {
    //padding-left: 56px;
  }
  div.list.smiler-list ul li{
    height: 30px;
  }
</style>
