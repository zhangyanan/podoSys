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
    <f7-row class="inputform-row">
      <f7-list class="inputform-list">
        <f7-list-item class = "inputform-list-item">
            <div class = "inputform-box">
                <img  class = "img_1" src="@/assets/icon_all/account_name.png" />
                <f7-label class = "field_name"><font class = "name_font">帐号</font></f7-label>
                <div class = "value_name">
                    <f7-input type="text"  dir="rtl" maxlength="20" placeholder="默认为手机号" :value="s_username" @input="s_username = $event.target.value"></f7-input>
                </div>
            </div>
        </f7-list-item>
        <f7-list-item class = "inputform-list-item">
            <div class = "inputform-box">
                <img  class = "img_1" src="@/assets/icon_all/password.png" />
                <f7-label class = "field_name"><font class = "name_font">密码</font></f7-label>
                <div class = "value_name">
                    <f7-input type="password" dir="rtl" maxlength="20" placeholder="请输入" :value="s_userpsw" @input="s_userpsw = $event.target.value"></f7-input>
                </div>
            </div>
        </f7-list-item>
      </f7-list>
    </f7-row>
    <f7-link href="#" class="forgot-pass">忘记密码<img src="@/assets/icon_all/password_forgot.png" /></f7-link>
    <f7-button class="loginbtn" big fill @click="loginIn()">登录</f7-button>
          <p id="demo-determinate-container"></p>
</f7-page>
</template>
<script>

</script>
<style lang="scss">
  .inputform_page{
    background: #fff;
  }
  .inputform-row{
    margin-top: 0px;
    width: 100%;
  }
.md .inputform-row .inputform-list {
            width:100%
}
.md .inputform-row .inputform-list-item {
            width: 100%;
}
.md .list .inputform-list-item .item-content {
            margin: 0;
            padding: 0;
            height: 60px;
            
}
.md .list .inputform-list-item .item-inner {
            margin: 0;
            padding: 0;
            width: 100%;
}
.inputform-box {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
}
.inputform-box .img_1 {
            position:absolute;
            left:31px;
            top:19.5px;
            width:17px;
            padding-top: 3px;
}
.inputform-box .field_name {
            position:absolute;
            left:63px;
            top:25.5px;
            width:40px;
}
.inputform-box .value_name {
            position:absolute;
            left:103px;
            top:10.5px;
            width: calc(100% - 103px - 47px);
            margin-right:47px;
}
.footfont  {
            width: 100%;
            height: 60px;
            background: #54BCBF;
            line-height: 60px;  
            text-align: center;
            margin-top: 75%;

}
.footnamecolor  {
            color: #ffffff;
            font-size: 20px;
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
  .md a.forgot-pass{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: PingFangSC-Light;
    font-size: 16px;
    color: #54BCBF;
    letter-spacing: 1.5px;
    margin-left: 60%;
  }
  .md a.forgot-pass img{
    width:18px;
    height: 18px;
    padding-left: 2px;
  }
  a.loginbtn.button-fill.button-big.button{
    background-color: #54BCBF;
    margin-top: 145px;
    height: 60px;
    font-size: 22px;
    font-size: 20px;
    padding-top: 6px;
  }
  .name_font{
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
  }
  .md .inputform_page .item-input-wrap:after{
    background-color:#FFFFFF;
}
</style>


<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'

export default {
  name: 'App',
  
  data() {
    return {
      s_username:"cui",
      s_userpsw:"cuixtd",
      b_validAccount:false,
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
    
      this.timeout(ms).then(() => {
            //能登陆则退出
            if(this.b_validAccount)
              return
            console.log('loadAccountData = ' +  ms)
            if(this.l_ret_personal_login_imf_s.num != null)
            {
              this.b_validAccount = true
              if(this.l_ret_personal_login_imf_s.num == 0)
              {
                  //登陆失败
                  this.openVerticalButtons('提示','登陆失败，请确认您的帐户信息')
                  return
              }
              else{
                  console.log('*** getPersonalAccount ***')
                  //得到个人信息
                  this.getPersonalAccount(this.l_ret_personal_login_imf_s.username)
                  //得到个人藏单
                  this.getPersonalFavorite(this.l_ret_personal_login_imf_s.username)

                  var i = 0;
                  for(i=0;i<5;i++)
                    this.loadData(1000+1000*i, false) 
                  this.loadData(5000, true)
                  
                  return
              }
            }
            //没有返回帐号检测信息且最终检测时间还没有到
            else if(!this.b_validAccount && b_finish)
            {
              this.$f7router.navigate('/error/')
            }
      })
    },

    loadData(ms, b_finish) {
        this.timeout(ms).then(() => {
            
            //已经登陆到蝈蝈列表了
            if(this.loginSuccess == 1)
              return
            console.log('loadData = ' + ms)
            
            if(this.l_ret_personal_imf_s.num != null
               && this.l_ret_personal_gg_s.num != null)
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
                        //请求帐号验证
                        this.getuserpswbyname(sqldata)
                        var i = 0;
                        for(i=0;i<5;i++)
                          this.loadAccountData(1000+1000*i, false)
                      
                        this.loadAccountData(5000, true)
                        
                    }
    },

    loginIn() {
      this.b_validAccount = false
      this.p_loginIn()
      this.showDeterminate(true)
      /**************直接登陆 */
      //得到个人信息
      /*this.getPersonalAccount('cui')
      //得到个人藏单
      this.getPersonalFavorite('cui')

      this.loadData(1000,false)
      this.loadData(2000,false)
      this.loadData(3000,true)*/
    },

    showDeterminate(inline) {
        const self = this;
        const app = self.$f7;
        if (self.determinateLoading) return;
        self.determinateLoading = true;
        let progressBarEl;
        if (inline) {
          progressBarEl = app.progressbar.show('#demo-determinate-container', 'green');
        } else {
          progressBarEl = app.progressbar.show(0, app.theme === 'md' ? 'yellow' : 'green');
        }
        let progress = 0;
        function simulateLoading() {
          setTimeout(() => {
            const progressBefore = progress;
            progress += Math.random() * 20;
            app.progressbar.set(progressBarEl, progress);
            if (progressBefore < 100) {
              simulateLoading(); // keep "loading"
            } else {
              self.determinateLoading = false;
              app.progressbar.hide(progressBarEl); // hide
            }
          }, Math.random() * 200 + 200);
        }
        simulateLoading();
      },
  }
}

</script>