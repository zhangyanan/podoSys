<template>
  <f7-page>
      <f7-list>
        <f7-list-item>
            <f7-row no-gap>
                <f7-col>                    
                    <img src="@/assets/icon_all/shizi.png"/>
                </f7-col>
                <f7-col>
                    <div class="userstatus"><span>ST</span></div>
                </f7-col>
            </f7-row>         
        </f7-list-item>
         <f7-list-item class="li-username">
          <span class="username">崔得胜</span>
        </f7-list-item>
         <f7-list-item class="li-userwechat">
          <span class="userwechat">Delsin_Chio</span>
        </f7-list-item>
        <f7-list-item class="search">            
             <div class="item-input-wrap">
                <input type="text" placeholder="搜索">
                <div slot="media" class="search-div">
                    <f7-link><img class="search-icon" src="@/assets/icon_all/search_blue.png"/></f7-link>
                </div>
            </div>
        </f7-list-item>
        <f7-list-item class="panel_menu" link="#" title="协力">
            <div slot="media">
               <img class="help-icon" src="@/assets/icon_all/panel_concert.png"/>
            </div>
        </f7-list-item>
        <f7-list-item class="panel_menu" link="#" title="收藏">
            <div slot="media">
               <img class="help-icon" src="@/assets/icon_all/panel_favorite.png"/>
            </div>
        </f7-list-item>
        <f7-list-item class="panel_menu" link="#" title="通知">
             <div slot="media">
               <img class="help-icon" src="@/assets/icon_all/panel_notification.png"/>
            </div>
        </f7-list-item>
        <f7-list-item class="panel_menu" link="#" title="设置">
             <div slot="media">
               <img class="help-icon" src="@/assets/icon_all/panel_setting.png"/>
            </div>
        </f7-list-item>
        <f7-list-item class="panel_menu" link="#" title="退出">
             <div slot="media">
               <img class="help-icon" src="@/assets/icon_all/panel_logout.png"/>
            </div>
        </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
  export default {
    data() {
    return {
              male_selected:true,
              female_selected:false,
              s_name:"",
              s_gender:"",
              s_weChat:"",
              s_qq:"",
              s_phone:"",
            }
  },
    computed:{
      ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),
      ...mapGetters('listdata',[
        'l_ret_search_none'
    ]),
    },
    methods: {
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

      onSearch(param) {
                        if(param != "")
                        {
                          this.getFormValuesByName(param)
                          this.timeout(2000).then(() => {
                              console.log('this.l_ret_gg_imf_s.num = ' + this.l_ret_gg_imf_s.num)
                              if(this.l_ret_search_none > 0)
                                {
                                  //添加重复 请确认

                                }
                              else
                              {
                                  //可以添加
                                  this.local_insert21Data()
                              }
                          });
                        }
              
      },

      goback()  {
          //设置跳转来源
          var str = '{"from":"快速注册","to":"蝈蝈列表"}'
          this.setPageNavigation(str)
          //this.gotoPodosysAnyPage('蝈蝈列表')
          this.$f7router.navigate('/allList/')
      },

      submitForm()  {
          this.onSearch(this.s_phone)
          
      },
      local_insert21Data()    {
        var tempNames = ""
        var tempValues = ""
        var bInsert = false;

        //姓名修改了吗
        if(this.s_name != "")
        {
            tempNames = tempNames + "姓名,"
            tempValues = tempValues + this.s_name + ","
            bInsert = true
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
        }
    },
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
<style lang="scss">
.md .list {
    margin: 55px 0px 0px 0px;

}
.page-content{
    background: #54BCBF;
}
div.userstatus{
    width: 39px;
    height: 39px;
    background: #FCC93D;
    border-radius: 20px;
    left: 60px;
    top: 75px;
    position: absolute;
    z-index: 1;
    line-height: 39px;
    text-align: center;
}
div.userstatus span{
    font-family: PFSquareSansPro-ExtraBlack;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: -1.29px;
}
span.username{
    font-family: PFSquareSansPro-Bold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 8px;
}
span.userwechat{
    font-family: PFSquareSansPro-Light;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
}
.row{
    margin-left: 40px;
}
li.li-username{
   margin-left: 47px;
   margin-top: -5px;
}
li.li-userwechat{
    margin-left: 40px;
    margin-top: -25px;
}
.md .list .item-inner:after{
    background: #54BCBF;
}
list ul li{
    border:solid 1px #54BCBF;
}
.panel_menu{

}
.md .list .item-media {
    padding-top: 13px;
    min-width: 40px;
    padding-left: 50px;
}
div.item-title{
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 21px;
}
.md .list input[type=text]{
    width:179px;
    height: 39px;
    line-height: 39px;
    background: #FFFFFF;
    border-radius:4px;
    margin-left: 30px;
    color: #54BCBF;
}
 input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #54BCBF;
    /* placeholder字体大小  */
    font-size: 16px;
    /* placeholder位置  */
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 21px;
    padding-left: 15px;
    }
div.search-div{
    width:25px;
    height: 25px;
    margin-left: 183px;
    margin-top: -31px;
}
li.panel_menu{
    padding-top: 15px;
}
.md .list ul:before{
    background-color: #54BCBF;
}
.md .list ul:after{
    background-color: #54BCBF;
}
.md .item-input-wrap:after{
    background-color: #54BCBF;
}
</style>
