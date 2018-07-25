<!-- 当前页面名称： 登陆页面-->
<template>
<f7-page class="inputform_page">
    <f7-row no-gap class="inputform-row">
      <f7-col width="40">
        <f7-list class="left_list">
          <f7-list-item class="shape-li">
            <img class="shape" src="@/assets/icon_all/SHAPE-2.png"/>
          </f7-list-item>
        </f7-list>
      </f7-col>
      <f7-col width="60">
        <f7-list class="inpurtform_text-list">
          <f7-list-item><div class="item-subtitle1-green">LOG IN</div></f7-list-item>
          <div class="item-subtitle2-green">系统登录</div>
          <div class="item-text-green-img"><img src="@/assets/icon_all/Rectangle.png" /></div>
        </f7-list>
      </f7-col>
    </f7-row>    
  <form class="inputform" v-on:submit.prevent="submit" no-hairlines-md>
      <div class="input list inline-labels">
        <ul>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
              <div class="item-title item-label"><span class="icon-image"><img class="name-img" src="@/assets/icon_all/account_name.png" /></span>账号</div>
              <div class="inputform item-input-wrap">
                <input type="text" placeholder="默认为手机号" v-model="s_username">
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
              <div class="inputform item-input-wrap">
                <input type="password" placeholder="请输入" v-model="s_userpsw">
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
              <div class="inputform item-input-wrap">
                <span class="span-forgot">
                  <a class="forgot-pass" href="#">忘记密码<img src="@/assets/icon_all/password_forgot.png" /></a>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <f7-button class="login_button" href="#" big text="登录" fill @click="loginIn()"></f7-button>
  </form>  
</f7-page>
</template>
<script>

</script>
<style lang="scss">
  //div.row.no-gap 
  .inputform_page{
    background: #fff;
  }
  .inputform-row{
    margin-top: 0px;
  }
  .md .inputform .inline-labels .item-label {
    top: 26px;
  }

  div.list.inpurtform_text-list{
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
  .md .left_list {
      margin: 0px;
  }
  .list .left_list .item-inner{
    padding: 0px;
  }
  .md .input .inline-labels .item-label{
    padding-top: 20px
  }
  .md .list .left_list ul.down .item-inner{
    margin-top: 70px;
    text-align:right;
    margin-right: 20px;
  }
  .inputform {
    padding: 0px;
    text-align: center;
    margin-left: -80px;
    margin-top: 30px;

    .b-0 {
      .item-content {
        border: 0px;
      }
    }
  }
 .md .list.inpurtform_text-list ul:before, .md .list.left_list ul:before{
    background: #FFFFFF;
  }
  div.list.left_list ul:after,div.list.inpurtform_text-list ul:after{
    background-color: #FFFFFF;
  }
  div.input.list.inline-labels:after{
    background-color: #FFFFFF;
  }
 div.input.list.inline-labels ul:before,div.input.list.inline-labels ul:after,{
   background-color: #FFFFFF;
 }
 .md .inputform.item-input-wrap:after{
   background: #FFFFFF;
 }
  a.login_button.button-fill.button-big.button {
    background-color: #54BCBF;
    margin-top: 81px;
  }
  a.login_button.button-fill.button-big.button {
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
  }
  a.login_button.button-fill.button-big.button span{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 70px;
  }
  div.input.list.inline-labels{
    padding-top: 30px;
  }
  div.input.list.inline-labels ul li{
    border-top: 1px solid #ECECEC;
    height: 70px;
  }
  span.icon-image{
    margin-right: 10px;
  }
  li.shape-li{
    width: 150px;
  }
  li.text-litext-li{
    width: 150px;
  }
  img.shape{
    margin-bottom: -3px;
    width: 200px;
    height: 200px;
    margin-left: -65px;
    margin-top: 40px;
  }
  .md .item-input-focused .item-label{
    color:#5F5F5F;
  }
  .md .inputform .list.inline-labels input[type=text] {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
    text-align: right;
    padding:0px;
    width: calc(100% - 120px);
    margin:0px;
  }
 
 .md .inputform .list.inline-labels input[type=password] {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
    text-align: right;
    width: calc(100% - 120px);
    padding:0px;
    margin:0px;
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
  .md .input-focused:after,.md .item-input-focused .item-input-wrap:after{
    background:#FFFFFF;
  }
   input::-webkit-input-placeholder {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #E5E5E5;
    letter-spacing: 0;
    line-height: 21px;
    text-align: right;
    }
</style>


<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'

export default {
  name: 'App',
  
  data() {
    return {
      s_username:"ivy",
      s_userpsw:"ivyxtd",
    }
  },
  computed: {
    ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_gg_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_login_imf_s'
    ]),

    ...mapGetters('datainterchange',[
        'loginSuccess'
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

    ...mapActions('listdata',[
      'getuserpswbyname'
    ]),

    //前进到下一个页面 需要该页面的名称
    ...mapActions('datainterchange',[
    'gotoNextPage'
    ]),

    timeout(ms) {
                  return new Promise((resolve) => {
                    setTimeout(resolve, ms);
                  });
    },

    openVerticalButtons(s_title, s_msg) {
        const app = this.$f7;
        app.dialog.create({
          title: s_title,
          text: s_msg,
          buttons: [
            {
              text: '确定'
            }
          ],
          verticalButtons: true
        }).open();
      },

    //帐号校验
    loadAccountData(ms, b_finish) {
      //能登陆则退出
      if(this.loginSuccess == 1)
        return

      this.timeout(ms).then(() => {
            
            console.log('loadAccountData = ' +  ms)
            if(this.l_ret_personal_login_imf_s != null)
            {
              if(this.l_ret_personal_login_imf_s.num == 0)
              {
                //登陆失败
                if(b_finish)
                {
                  this.openVerticalButtons('提示','登陆失败，请确认您的帐户信息')
                  return
                }
              }
              else{
                  //得到个人信息
                  this.getPersonalAccount(this.l_ret_personal_login_imf_s.username)
                  //得到个人藏单
                  this.getPersonalFavorite(this.l_ret_personal_login_imf_s.username)

                  this.loadData(1000,false)
                  this.loadData(2000,false)
                  this.loadData(3000,true)
                  return
              }
            }
      })
    },

    loadData(ms, b_finish) {
        this.timeout(ms).then(() => {
            
            //能登陆则退出
            if(this.loginSuccess == 1)
              return

            console.log('inputform = ' +  ms)

            if(this.l_ret_personal_imf_s != null
               && this.l_ret_personal_gg_s != null)
            {

                this.setloginSuccess('1')
                //如果是首登 跳转补充信息
                if(this.l_ret_personal_login_imf_s.datas[0].created_date == this.l_ret_personal_login_imf_s.datas[0].logintime)
                {
                  this.gotoNextPage("编辑资料")
                  this.$f7router.navigate('/userList/')
                }
                else
                {
                  this.gotoNextPage("蝈蝈列表")
                  this.$f7router.navigate('/alllist/')
                }
                
                //更新本次登陆时间
                
            }
            else if(b_finish)
            {
                this.$f7router.navigate('/error/')
            }
        })
    },

    //尝试进行帐号验证 登陆操作
    p_loginIn() {
                if(this.s_username == '' || this.s_userpsw == '')
                    this.openVerticalButtons('提示', '请填写登陆信息')
                else
                    {
                        var sqldata = JSON.stringify({
                            "in_username":this.s_username,
                            "in_userpsw":this.s_userpsw})
                      
                        this.getuserpswbyname(sqldata)

                        this.loadAccountData(1000, false)
                        this.loadAccountData(2000, true)
                    }
    },

    loginIn() {
      this.p_loginIn()
      /**************直接登陆 */
      //得到个人信息
      /*this.getPersonalAccount('cui')
      //得到个人藏单
      this.getPersonalFavorite('cui')

      this.loadData(1000,false)
      this.loadData(2000,false)
      this.loadData(3000,true)*/
    }
  }
}
</script>