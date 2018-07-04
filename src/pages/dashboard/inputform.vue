<template>
<f7-page>
  <form class="login" v-on:submit.prevent="submit" no-hairlines-md>
    <div class="list media-list">
        <ul class="down">
          <li>
            <a href="#" class="item-link item-content">
            <div class="item-media"><a href="/input"><img src="@/assets/icon_all/SHAPE-2.png"/></a></div>
            <div class="item-inner">
              <div class="item-subtitle1-green">LOG IN</div>
              <div class="item-subtitle2-green">系统登录</div>
              <div class="item-text-green-img"><img src="@/assets/icon_all/Rectangle.png" /></div>
            </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="list inline-labels">
        <ul>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img class="name-img" src="@/assets/icon_all/account_name.png" /></span>账号</div>
              <div class="item-input-wrap">
                <input type="text" placeholder="默认为手机号">
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img src="@/assets/icon_all/password.png" /></span>密码</div>
              <div class="item-input-wrap">
                <input type="password" placeholder="请输入">
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner forgot-pass">
              <div class="item-title item-label"></div>
              <div class="item-input-wrap">
                <span class="span-forgot">
                  <a class="forgot-pass" href="#">忘记密码<img src="@/assets/icon_all/password_forgot.png" /></a>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </form>
  <div class="list links-list">
    <ul>
        <li>
            <a href="/allList/">登录</a>
        </li>
    </ul>
  </div>
</f7-page>
</template>
<script>

</script>
<style lang="scss">
  .item-subtitle1-green {
      font-size: 19px;
      color: #54BCBF;
      font-family: PFSquareSansPro-Light;
      font-size: 26px;
      letter-spacing: 0.8px;
      line-height: 19px;
      padding-right: 5px;
  }
  .item-subtitle2-green {
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: #54BCBF;
    padding-top: 10px;
    letter-spacing: 4.9px;
    line-height: 19px;
  }
  .item-text-green-img{
    padding-top: 15px;
    margin-top: 10px;
    padding-right: 5px;
  }
  .md .list {
      margin: 0px;
  }
  .list .item-inner{
    padding: 0px;
  }
  .md .inline-labels .item-label{
    padding-top: 20px
  }
  .md .list ul.down .item-inner{
    margin-top: 70px;
    text-align:right;
    margin-right: 20px;
  }
  .login {
    padding: 0px;
    text-align: center;
    margin-left: -80px;
    margin-top: 30px;

    .b-0 {
      .item-content {
        border: 0px;
      }
    }
    .md .list .item-content {
      min-height: 48px;
      padding-left: -20px;
    }
    .item-content item-input {
      border: 1px solid red;
      margin-bottom: 0px;
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
    width:200px;
    height: 200px;
  }
  div.inline-labels{
    padding-top: 30px;
  }
  div.inline-labels ul li{
    border-top: 1px solid #ECECEC;
    height: 70px;
  }
  span.icon-image{
    margin-right: 10px;
  }
  img{
   margin-bottom: -3px;
  }
  .md .item-input-focused .item-label{
    color:#5F5F5F;
  }
  li.item-content.item-input.item-input-focused{
    border-top:solid 1px #F9F9F9;
  }
  .md .list input[type=text], .md .list input[type=password] {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
    text-align: right;
    padding-right: 15px;
  }
  .md a {
    color: #54BCBF;
  }
  span.span-forgot{
    font-size: 18px;
    margin-left: 155px;
  }
  .md a.forgot-pass{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: PingFangSC-Light;
    font-size: 16px;
    color: #54BCBF;
    letter-spacing: 1.5px;
  }
  .md a.forgot-pass img{
    width:18px;
    height: 18px;
    padding-left: 2px;
  }
  div.item-inner.forgot-pass{
    margin-top: 25px;
  }
  div.list.links-list {
    margin-top: 112px;
    margin-bottom: 0px;
  }
  .md .links-list a {
    height: 60px;
    background: #53BBBE;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 160px;
  }
</style>

