<template>
  <f7-page>
    <form class="quick-form" v-on:submit.prevent="submit" no-hairlines-md>
      <f7-list>
        <f7-list-item class="text-center b-0">
          <div class=""><a href="/wheat/"><img src="@/assets/icon_all/back_green.png"/></a></div>
        </f7-list-item>
        <f7-list-item class="text-center b-0">
          <div class="quickIcon"><img src="@/assets/icon_all/PLAIN.png"/></div>
        </f7-list-item>
         <f7-list-item class="text-center b-0">
          <h1>快速添加</h1>
        </f7-list-item>
        <div id="example-1">
              <button v-on:click="counter += 1">Add 1</button>
              <p>The button above has been clicked {{ counter }} times.</p>
        </div>
      </f7-list>
    </form>
    <div class="quick list inline-labels">
        <ul class="quick-ul">
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img src="@/assets/icon_all/account_name.png" /></span><label>姓名</label></div>
              <div class="item-input-wrap">
                <input type="text" placeholder="请输入">
                <span class="input-clear-button"></span>
              </div>           
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img src="@/assets/icon_all/gender.png" /></span><label>性别</label></div>
              <div class="item-input-wrap">
                <p class="gender-p">
                    男<label class="radio"><input type="radio"><img src="@/assets/icon_all/selection_green.png" /></label>
                    <span class="female">
                        女<label class="radio"><input type="radio"><img src="@/assets/icon_all/selection_gray.png" /></label>
                    </span>
                </p>
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img src="@/assets/icon_all/wechat.png" /></span><label>微信ID</label></div>
                <div class="wrong-message-icon"><f7-button @click="openVerticalButtons"><img src="@/assets/icon_all/wrong_green.png" /></f7-button></div>
                <div class="item-input-wrap">
                    <input type="text" placeholder="请输入">
                    <span class="input-clear-button"></span>
                </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img src="@/assets/icon_all/phone.png" /></span><label>手机号</label></div>
              <div class="item-input-wrap">
                <input type="text" placeholder="请输入">
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>          
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img src="@/assets/icon_all/qq_id.png" /></span><label class="qq-label">QQ号</label></div>
              <div class="item-input-wrap">
                <input type="text" placeholder="选填">
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="list links-list">
        <ul>
            <li>
                <a href="/wheat/">完成</a>
            </li>
        </ul>
     </div>
  </f7-page>
</template>
<script>
  export default {
    methods: {
      openVerticalButtons() {
        const app = this.$f7;
        app.dialog.create({
          title: '查重提示',
          text: '此微信号已重复',
          buttons: [
            {
              text: '搜索'
            }
          ],
          verticalButtons: true
        }).open();
      },
    },
  };
</script>
<style lang="scss">
    .md .list {
        margin: 0px;
        font-size: 16px;
    }
    .quickIcon{
        width: 96px;
        height: 96px;
        background: #54BCBF;
        border-radius: 48px;
        margin: auto;
    }
    .quickIcon img{
        padding-top: 25px;
        width:43px;
        height: 43px;
    }
  .md .quick-form .list {
      margin: 0px;
  }
    .md .list .item-media+.item-inner {
        margin-left: -20px;
    }
  .quick-form {
    text-align: center;

    .b-0 {
      .item-content {
        border: 0px;
      }
    }
    div.inline-labels {
       padding-top: 0px;
    }
    h1 {
      font-family: PingFangSC-Semibold;
      font-size: 22px;
      color: #53BBBE;
      letter-spacing: 2px;
      line-height: 19px;
      margin: auto;
    }

    .list .item-inner {
        position: relative;
        width: 100%;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .line {
      padding: 5px;

      input {
        padding: 0 10px;
        line-height: 28px;
      }
    }
    .item-content {
        border: 1px solid #eee;
        margin-bottom: 10px;
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
    div.inline-labels {
        padding-top: 20px;
    }
  div.inline-labels ul li{
    border-top: 1px solid #ECECEC;
    height: 70px;
  }
  span.icon-image{
    margin-right: 10px;
  }
  .md .inline-labels .item-label {
      padding-top: 15px;
      width: 85px;
  }
  span.icon-image{
    margin-right: 10px;
  }
  span.icon-image img{
    margin-bottom: -3px;
    width: 17px;
    height: 21px;
  }
  div.item-title.item-label label{
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px
  }
  label.qq-label{
      letter-spacing: 0.6px;
  }
  .md .list input[type=text], .md .list select {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
    text-align: right;
    padding-right: 15px;
  }
  p.gender-p{
    margin-left: 50px;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 4px;
    line-height: 21px;
  }
  p.gender-p label{
      padding: 0px;
  }
  span.female{
      padding-left: 50px;
  }
  div.list.links-list{
      margin-top: 15px;
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
  div.wrong-message-icon{
      padding-left: 0px;
  }
  .md .button {
    color: #2196f3;
    border-radius: 0px;
    line-height: 36px;
    height: 36px;
    text-transform: uppercase;
    min-width: 30px;
    padding-top: 5px;
    padding-left: 0px;
    border: none;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
  .md .dialog {
    width: 340px;
    height: 130px;
    margin-left: -170px;
    border-radius: 10px;
    color: #757575;
    background: #fff;
    font-size: 16px;
    -webkit-box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0);
    box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 0x rgba(0,0,0,0);
}
  .md .dialog-inner {
    padding: 0px;
    background: #54BCBF;
    height: 42px;
  }
  .md .dialog-title {
    color: white;
    line-height: 42px;
    height: 42px;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    padding-top: 2px;
    padding-left: 24px;
}
.md .dialog-buttons-vertical .dialog-buttons {
    padding: 25px 0px 0px 230px;
}
  .md .dialog-buttons-vertical .dialog-buttons .dialog-button {
    text-align: right;
    height: 34px;
    width: 84px;
    line-height: 48px;
    border-radius: 68px;
    background-color: #54BCBF;
    padding-right: 20px;
}

  .md .dialog-button{
      color:white;
      font-family: PingFangSC-Semibold;
      font-size: 18px;
  }
  div.dialog-text{
      margin-left: 20px;
  }
</style>
