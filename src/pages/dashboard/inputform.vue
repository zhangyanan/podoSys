<!-- 当前页面名称： 登陆页面-->
<template>
<f7-page>
    <!--<f7-row no-gap class="input-row">-->
      <f7-row no-gap>
      <f7-col width="40">
        <f7-list class="login-list">
          <f7-list-item class="shape-li">
            <img class="shape" src="@/assets/icon_all/SHAPE-2.png"/>
          </f7-list-item>
        </f7-list>
      </f7-col>
      <f7-col width="60">
        <f7-list class="text-list">
          <f7-list-item><div class="item-subtitle1-green">LOG IN</div></f7-list-item>
          <div class="item-subtitle2-green">系统登录</div>
          <div class="item-text-green-img"><img src="@/assets/icon_all/Rectangle.png" /></div>
        </f7-list>
      </f7-col>
    </f7-row>    
  <form class="login" v-on:submit.prevent="submit" no-hairlines-md>
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
      <f7-button href="#" big text="登录" fill @click="loginIn()"></f7-button>
  </form>  
</f7-page>
</template>
<script>

</script>
<style lang="scss">
  //div.row.no-gap 
  .input-row{
    margin-top: 0px;
  }
  div.list.text-list{
    margin-top: 80px;
    margin-left: 30px;
  }
  div.item-subtitle1-green {
      color: #54BCBF;
      font-family: PFSquareSansPro-Light;
      font-size: 26px;
      letter-spacing: 0.8px;
      line-height: 19px;
      margin-left: 40px;
      margin-bottom: -10px;
  }
  div.item-subtitle2-green {
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: #54BCBF;
    padding-top: 2px;
    padding-left: 20px;
    letter-spacing: 4.9px;
    line-height: 19px;
  }
  div.item-text-green-img{
    margin-left: 60px;
    padding-top: 10px;
  }
  .md  .login-list .list{
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

    .item-content item-input {
      border: 1px solid red;
      margin-bottom: 0px;
    }
  }
  .md .list ul:before, .md .list ul:after, .md .item-input-wrap:after, .md .list .item-inner:after {
    background-color: transparent;
  }
  .button, .button.button-fill, .button.button-fill.active-state {
    background-color: #54BCBF;
    margin-top: 100px;
  }
  .md .button.button-big, .md .button.button-big-md {
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
  }
  .md .button.button-active, .md .button.button-fill, .md .button.button-fill-md, .md .button.tab-link-active {
  background-color: #54BCBF;
  color: #fff;
  }
  .md .button-big.button span{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 70px;
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
  li.shape-li{
    width: 150px;
  }
  li.text-li{
    width: 150px;
  }
  img.shape{
    margin-bottom: -3px;
    width: 200px;
    height: 200px;
    margin-left: -70px;
    margin-top: 40px;
  }
  .md .item-input-focused .item-label{
    color:#5F5F5F;
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
  .md a.link {
    height: 60px;
    background: #53BBBE;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 160px;
  }
  .md .input-focused:after,.md .item-input-focused .item-input-wrap:after{
    background:#FFFFFF;
  }
</style>


<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'

export default {
  name: 'App',
  
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_gg_s'
    ]),
  },
  created () {
  },
  methods: {
    ...mapActions('listdata',[
      'getPersonalAccount'
    ]),
    
    ...mapActions('datainterchange',[
      'setloginSuccess'
    ]),

    ...mapActions('datainterchange',[
      'setPageNavigation'
    ]),

    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavorite'
    ]),
 
    timeout(ms) {
                  return new Promise((resolve) => {
                    setTimeout(resolve, ms);
                  });
    },

    loginIn() {
      //得到个人信息
      this.getPersonalAccount('ivy')
      //得到个人藏单
      this.getPersonalFavorite('ivy')

      this.timeout(1000).then(() => {
            console.log("in timeout of inputform.vue")
            //设置登陆成功标示

            this.setloginSuccess('1')
            this.$f7router.navigate('/alllist/')
        });
    }
  }
}

</script>