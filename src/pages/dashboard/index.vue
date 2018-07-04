<template>
  <f7-page>
    <form class="login" v-on:submit.prevent="submit" no-hairlines-md>
      <f7-list class="list">
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
     <div class="list media-list">
      <ul class="down">
        <li>
          <div href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-text"><img src="@/assets/icon_all/smiler.png" /></div>
              <div class="item-subtitle1">BEING A SMILER</div>
              <div class="item-subtitle2">永远微笑的活着</div>
            </div>
            <div class="item-media"><a href="/inputform/"><img src="@/assets/icon_all/Group@2x.png"/></a></div>
          </div>
        </li>
      </ul>
    </div>
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
  .md .list .item-inner:after {
    background-color: rgba(0, 0, 0, 0)
  }
  .page-content {
    background-image: url("../../assets/icon_all/login_bg.png")
  }
  .md .login .list {
      margin: 0px;
  }
  ul.down .item-content {
    min-height: 48px;
    padding-left: 0px;
  }
  .list ul{
    margin-top: 70px;
    margin-left: 35px;
  }
  .list ul li{
    border: 0;
  }
  div.list ul.down{
    margin-left: -100px;
    margin-top: 280px;
  }
  ul.down .item-inner{
    margin-top: 35px;
    margin-left: 20px
  }

  .md .list .item-subtitle1 {
      font-size: 18px;
      color: white;
      line-height: 22px;
      font-family: PFSquareSansPro-Medium;
      letter-spacing: 2px;
      padding-left: 75px;
  }
  .md .list .item-subtitle2 {
      font-size: 18px;
      color: white;
      line-height: 22px;
      font-family: PFSquareSansPro-Medium;
      letter-spacing: 2px;
      padding-left: 40px;
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
    .submit-button {
      width: 100%;
      font-size: 1.2rem;
    }
  }
  .md .list ul:before, .md .list ul:after, .md .item-input-wrap:after, .md .list .item-inner:after {
    background-color: transparent;
  }
  .item-media img{
    width:130px;
    height: 130px;
    margin-right: -30px;
    margin-bottom: 28px;
  }
</style>
