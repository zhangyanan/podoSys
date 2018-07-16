<!-- 当前页面名称： 个人主页-->
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'

export default {
  name: 'App',
  
  data() {
    return {
        concert_url:"/allList/",
        favorite_url:"/dashboard/",
        notification_url:"/notice/",
        setting_url:"login",

        //基本信息
        user_name_cn:"崔得胜",
        user_name_en:"Delsin_Choi",
        user_status:"ST",

        //搜索信息
        search_msg:"",
        search_none:0,
        b_render:0,
    }
  },
  computed: {
    ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_search_data'
    ]),
    ...mapGetters('listdata',[
        'l_ret_personal_gg_s'
    ]),
    ...mapGetters('listdata',[
        'l_ret_gg_imf_s'
    ]),
    ...mapGetters('listdata',[
        'l_ret_search_none'
    ]),
    ...mapGetters('datainterchange',[
        'loginSuccess'
    ]),
  },
  created () {
    console.log('in App.created()')
  },
  methods: {
    ...mapActions('listdata',[
      'getPersonalAccount'
    ]),
    ...mapActions('listdata',[
      'getFormValuesByName'
    ]),

    ...mapActions('datainterchange',[
      'setPageNavigation'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavoriteList'
    ]),

    ...mapActions('listdata',[
      'get_our_gglist'
    ]),

    ...mapActions('datainterchange',[
      'setPageNavigation'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavoriteList'
    ]),

    ...mapActions('listdata',[
      'get_our_gglist'
    ]),

    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),

    timeout(ms) {
                  return new Promise((resolve) => {
                    setTimeout(resolve, ms);
                  });
    },
    
    onSearch(param) {
      if(param != "")
      {
        this.getFormValuesByName(param)
        this.timeout(1000).then(() => {
            //console.log('this.l_ret_gg_imf_s.num = ' + this.l_ret_gg_imf_s.num)
            if(this.l_ret_search_none > 0)
              {
                //设置跳转来源
                var str = '{"from":"个人主页","to":"搜索列表"}'
                this.setPageNavigation(str)
                //this.gotoPodosysAnyPage('搜索列表')
              }
            else
              this.openVerticalButtons('查重提示','没有找到对应的蝈蝈')
        });
      }
      else{
          this.openVerticalButtons('查重提示','请输入/手机/微信/姓名')
      }
              
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

    gotoFavoriteGGList()  {
      console.log('in gotoFavoriteGGList ')
      this.getPersonalFavoriteList(this.l_ret_personal_imf_s.datas[0].个人表单)
              {
                //设置跳转来源
                var str = '{"from":"个人主页","to":"收藏列表"}'
                this.setPageNavigation(str)
                //this.gotoPodosysAnyPage('收藏列表')
              }
    },

    gotoOurGGList() {
      this.get_our_gglist(this.l_ret_personal_imf_s.datas[0].个人表单)
      //设置跳转来源
      var str = '{"from":"个人主页","to":"协力列表"}'
      this.setPageNavigation(str)
      //this.gotoPodosysAnyPage('协力列表')
      //this.$f7router.navigate('/allList/')
    }
  }
}

</script>

<template>
  <div id="app">
    <f7-panel left reveal>
          <f7-page class="myItem-page">
            <f7-list class="myItem-list" v-if="this.loginSuccess == 1">
              <f7-list-item class="myItem-list-item">
                  <f7-row no-gap class="app-row">
                      <f7-col>
                          <f7-link panel-close href="/userItem/">                    
                          <img src="@/assets/icon_all/shizi.png"/>
                          </f7-link>
                      </f7-col>
                      <f7-col>
                          <div class="userstatus"><span>{{l_ret_personal_gg_s.datas[0].阶段}}</span></div>
                      </f7-col>
                  </f7-row>         
              </f7-list-item>
              <f7-list-item class="li-username">
                <span class="username">{{l_ret_personal_imf_s.datas[0].姓名}}</span>
              </f7-list-item>
              <f7-list-item class="li-userwechat">
              <span class="userwechat">{{l_ret_personal_imf_s.datas[0].微信}}</span>
              </f7-list-item>
              <f7-list-item class="search">            
                  <div class="item-input-wrap">
                      <input type="text" class="searchinput" placeholder="搜索" v-model="search_msg">
                      <div slot="media" class="search-div">
                          <f7-link @click="onSearch(search_msg)"><img class="search-icon" src="@/assets/icon_all/search_blue.png"/></f7-link>
                      </div>
                  </div>
              </f7-list-item>
              <f7-list-item class="panel_menu" @click="gotoOurGGList()" title="协力">
                  <div slot="media">
                    <img class="help-icon" src="@/assets/icon_all/panel_concert.png"/>
                  </div>
              </f7-list-item>
              <f7-list-item class="panel_menu" @click="gotoFavoriteGGList()" title="收藏">
                  <div slot="media">
                    <img class="help-icon" src="@/assets/icon_all/panel_favorite.png"/>
                  </div>
              </f7-list-item>
              <f7-list-item class="panel_menu" title="通知" @click="openVerticalButtons('提示','栏目建设中...')">
                  <div slot="media">
                    <img class="help-icon" src="@/assets/icon_all/panel_notification.png"/>
                  </div>
              </f7-list-item>
              <f7-list-item class="panel_menu" title="设置" @click="openVerticalButtons('提示','栏目建设中...')"> 
                  <div slot="media">
                    <img class="help-icon" src="@/assets/icon_all/panel_setting.png"/>
                  </div>
              </f7-list-item>
              <f7-list-item class="panel_menu" title="退出" @click="openVerticalButtons('提示','栏目建设中...')">
                  <div slot="media">
                    <img class="help-icon" src="@/assets/icon_all/panel_logout.png"/>
                  </div>
              </f7-list-item>
            </f7-list>
          </f7-page>  
      </f7-panel>
    
      <!--<f7-panel right cover>
        <f7-block-title>我是右侧面板</f7-block-title>
            <f7-page>
              <div class="bottom_part">
              <img src="@/assets/icon_all/selection_green.png" />
              </div>
            </f7-page>  
      </f7-panel>-->
   
    
    <f7-view :pushState="true" main/>
    <!--<v-menu></v-menu>-->
  </div>
</template>

<style lang="scss">
.md .myItem-list .list {
    margin: 55px 0px 0px 0px;

}
.myItem-page .page-content{
    background: #54BCBF;
}

.md .list .myItem-list-item .item-content {
    padding-left: 48px;
}

.md .list .search .item-content {
    padding-left: 0px;
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
.row .app-row{
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
.md .list .myItem-list .item-media {
    padding-top: 13px;
    min-width: 40px;
    padding-left: 50px;
}
div .myItem-list .item-title{
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 21px;
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
div.list.myItem-list ul:before,div.list.myItem-list ul:after{
  background-color: #54BCBF;
}
div.list.myItem-list div.item-inner:before,div.list.myItem-list div.item-inner:after{
    background-color: #54BCBF;
}
li.search{
    width: 190px;
    height: 39px;
}
input.searchinput{
    border-radius: 4px;
    background-color: #FFFFFF;
    margin-left: 31px;
    text-align: right;
}
</style>
