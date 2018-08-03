<template>
  <f7-page class="quick-page">
    <form class="quick-form" v-on:submit.prevent="submit" no-hairlines-md>
      <f7-list calss="quick-list">
        <f7-list-item class="text-center b-0">
          <div class=""><a href="#" @click="goback()"><img src="@/assets/icon_all/back_green.png"/></a></div>
        </f7-list-item>
        <f7-list-item class="text-center b-0">
          <div class="quickIcon"><img src="@/assets/icon_all/PLAIN.png"/></div>
        </f7-list-item>
         <f7-list-item class="text-center b-0">
          <h1>快速添加</h1>
        </f7-list-item>
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
                <f7-input type="text" dir='rtl' align="right" placeholder="请输入" :value="s_name" @input="s_name = $event.target.value"></f7-input>
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
                    男<label class="radio" @click="hit(1)">
                    <img v-if="male_selected" src="@/assets/icon_all/selection_green.png" />
                    <img v-if="!male_selected" src="@/assets/icon_all/selection_gray.png" />
                    </label>
                    <span class="female">
                        女<label class="radio" @click="hit(2)">
                        <img v-if="female_selected" src="@/assets/icon_all/selection_green.png" />
                        <img v-if="!female_selected" src="@/assets/icon_all/selection_gray.png" /></label>
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
                <div class="wrong-message-icon"><f7-button  @click="showToastBottom"><img src="@/assets/icon_all/wrong_green.png" /></f7-button></div>
                <div class="item-input-wrap">
                    <f7-input type="text" dir='rtl' align="right" placeholder="请输入" :value="s_weChat" @input="s_weChat = $event.target.value"></f7-input>
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
                <f7-input type="text"  dir='rtl'  align="right" placeholder="请输入" :value="s_phone" @input="s_phone = $event.target.value"></f7-input>
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
                <f7-input type="text" dir='rtl' align="right" placeholder="选填" :value="s_qq" @input="s_qq = $event.target.value"></f7-input>
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="list links-list">
        <ul>
            <li>
              <f7-button v-if="s_weChat.length > 0" class="finished-btn" big fill @click="showToastBottom">完成</f7-button>
              <f7-button v-else @click="showToastBottom" class="finished-btn" big fill>完成</f7-button>
            </li>
        </ul>
     </div>
  </f7-page>
</template>
<style lang="scss">
    .md .list{
      margin: 0px;
    }
    .md .list.quick-list {
        margin: 0px;
        font-size: 16px;
        margin-top: 65px;
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
div.quick.list.inline-labels{
  margin-left: -40px
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
  .md .quick-page .inline-labels .item-label {
      padding-top: 15px;
      width: 80px;
      flex-shrink: 0;
  }
  span.icon-image{
    margin-right: 10px;
  }
  span.icon-image img{
    margin-bottom: -3px;
    width: 17px;
    height: 17px;
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
    margin-left: calc(100% - 170px);
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
    line-height: 33px;
    border-radius: 68px;
    background-color: #54BCBF;
    padding-right: 24px;
}

  .md .dialog-button{
      color:white;
      font-family: PingFangSC-Semibold;
      font-size: 18px;
  }
  div.dialog-text{
      margin-left: 20px;
  }
   .md .input-focused:after,.md .item-input-focused .item-input-wrap:after{
    background:#FFFFFF;
  }

  .md .quick-page .list .item-input-wrap input[type=text] {
    margin-right: 0px;
    width: calc(100% - 30px);
}
  a.finished-btn.button-fill.button-big.button{
    background-color: #54BCBF;
    height: 60px;
    font-size: 22px;
    padding-top: 6px;
    margin: 0px;
  }

</style>
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
import { f7Navbar, f7Page, f7Block, f7Button } from 'framework7-vue';
  export default {
     components: {
      f7Navbar, f7Page, f7Block, f7Button,
    },
    data() {
    return {
              male_selected:true,
              female_selected:false,
              s_name:"",
              s_gender:"",
              s_weChat:"",
              s_qq:"",
              s_phone:"",
              b_insert:false,
            }
  },
    computed:{
      ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),
      ...mapGetters('listdata',[
        'l_ret_search_none'
    ]),

    ...mapGetters('listdata',[
        'l_ret_search_data'
    ]),

    },
    methods: {
      showToastBottom() {
        const self = this;
        // Create toast
        if (!self.toastBottom) {
          self.toastBottom = self.$f7.toast.create({
            text: '增加成功',
            closeTimeout: 2000,
          });
        }
        // Open it
        self.toastBottom.open();
      },
      ...mapActions('listdata',[
      'insertformvalues'
      ]),
      ...mapActions('datainterchange',[
      'setPageNavigation'
      ]),

      ...mapActions('datainterchange',[
      'gotoPodosysAnyPage'
      ]),

      ...mapActions('listdata',[
      'getFormValuesByName'
      ]),

      timeout(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
                })
      },

      onSearch(param, errormsg, othermsg) {
                        if(param != "")
                        {
                          this.getFormValuesByName(param)
                          this.timeout(2000).then(() => {
                              console.log('this.l_ret_search_none.num = ' + this.l_ret_search_none.num)
                              if(this.l_ret_search_none > 0)
                                {
                                  //添加重复 请确认
                                  //重置其为不插入 便于马上再次录入
                                  this.b_insert = false
                                  this.openVerticalButtons('提示', othermsg)
                                }
                              else if(this.l_ret_search_none == 0)
                              {
                                  //可以添加
                                  if(this.b_insert)
                                  {
                                    //检查姓名是否为空
                                    var ret = this.local_insert21Data()
                                  
                                    //重置其为不插入 便于马上再次录入
                                    this.b_insert = false
                                    if(ret)
                                      //添加成功
                                      this.openVerticalButtons('提示', '添加成功!')
                                  }
                                  else{
                                    //添加成功
                                    this.openVerticalButtons('提示', '没有查询到对应的蝈蝈信息')
                                  }
                              }
                              else{
                                  //重置其为不插入 便于马上再次录入
                                  this.b_insert = false
                                  this.openVerticalButtons('提示', '返回失败，请确认网络状况并重试!')
                              }
                          });
                        }
                        else
                        {
                          //为空
                          this.openVerticalButtons('提示',errormsg)
                        }
              
      },

      goback()  {
          //设置跳转来源
          //var str = '{"from":"快速注册","to":"蝈蝈列表"}'
          //this.setPageNavigation(str)
          //this.gotoPodosysAnyPage('蝈蝈列表')
          this.$f7router.navigate('/allList/')
      },

      submitForm()  {
          //this.onSearch(this.s_weChat, '请输入微信号', '此微信号已重复')
          //this.onSearch(this.s_phone, '请输入手机号', '此手机号已重复')
          //this.onSearch(this.s_name, '请输入姓名', '此姓名已重复')
          this.b_insert = true
      },

      //姓名 性别 和 微信 是必填的
      local_insert21Data()    {
        var tempNames = ""
        var tempValues = ""
        var bInsert = false;

        //姓名修改了吗
        if(this.s_name != "")
        {
            tempNames = tempNames + "姓名,"
            tempValues = tempValues + this.s_name + ","
        }
        else
        {
            this.openVerticalButtons('提示','请输入姓名')
            return false
        }    
        //性别修改了吗
        if(this.male_selected == true)
        {
            tempNames = tempNames + "性别,"
            tempValues = tempValues + "男,"
        }    
        else{
            tempNames = tempNames + "性别,"
            tempValues = tempValues + "女,"
        }
        //微信修改了吗
        if(this.s_weChat != "")
        {
            tempNames = tempNames + "微信,"
            tempValues = tempValues + this.s_weChat + ","
            bInsert = true
        }    

        //手机修改了吗
        if(this.s_phone != "")
        {
            tempNames = tempNames + "手机,"
            tempValues = tempValues + this.s_phone + ","
        }    

        //是否有了重复
        if(bInsert == true)
        {
            //默认填入的信息部分
            //保存蝈蝈的引导人
            tempNames = tempNames + "引导人,"
            tempValues = tempValues + this.l_ret_personal_imf_s.datas[0].个人表单 + ","
            tempNames = tempNames + "引导人姓名,"
            tempValues = tempValues + this.l_ret_personal_imf_s.datas[0].姓名 + ","
            tempNames = tempNames + "引导人会属,"
            tempValues = tempValues + this.l_ret_personal_imf_s.datas[0].会属 + ","
            tempNames = tempNames + "引导人区域,"
            tempValues = tempValues + this.l_ret_personal_imf_s.datas[0].区域 + ","
            //保存蝈蝈的状态和阶段
            tempNames = tempNames + "状态,"
            tempValues = tempValues + "正常,"

            tempNames = tempNames + "阶段,"
            tempValues = tempValues + "SW,"

            var sqldata = JSON.stringify({
                    "in_tablename":"21项表单",
                    "in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
                    "in_fieldnames":tempNames,
                    "in_fieldvalues":tempValues,
					})
            console.log(sqldata)
            this.insertformvalues(sqldata)

            return true
        }

        return false
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

      hit(param)  {
        console.log(param)
        if (param == 1)
        {
          this.male_selected = true
          this.female_selected = false
        }
        else
        {
          this.male_selected = false
          this.female_selected = true
        }
      }
    },
  };
</script>