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
              this.search_msg = 'none'
        });
      }
              
    },

    /*goNext(param1, param2, param3)  {
      this.$f7router.navigate('/userItem/')
    },*/

    gotoFavoriteGGList()  {
      console.log('in gotoFavoriteGGList ')
      //this.getPersonalFavoriteList(this.l_ret_personal_imf_s.datas[0].个人表单)
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
      <f7-block-title>我是左侧面板</f7-block-title>
          <f7-page>
            <div class = "myItem_div">
              <div v-if="this.loginSuccess == 1">
                  <f7-link panel-close href="/userItem/">
                    <img  class = "di_icon" src="@/assets/icon_all/yang.png" />
                  </f7-link>
                  <div class = "headidentity">
                      <p class = "rcorners1"></p>
                      <label class = "useridentity_font">{{l_ret_personal_gg_s.datas[0].阶段}}</label>                
                  </div>
                  <div class = "username_1">
                      <label class = "namescolor_1">{{l_ret_personal_imf_s.datas[0].姓名}}</label>
                  </div>
                  <div class = "username_2">
                      <label class = "namescolor_2">{{l_ret_personal_imf_s.datas[0].微信}}</label>
                  </div>
                  <div class = "mysearchbox">
                      <div class = "searchbody" >
                          <input type="text" placeholder="手机/微信/姓名" v-model="search_msg">
                      </div>
                      <div class = "searchicon">
                          <a href="#" @click="onSearch(search_msg)"><img  src="@/assets/icon_all/search_green.png"/></a>
                      </div>
                  </div>
                  <img class = "menuicon_1" src="@/assets/icon_all/panel_concert.png" />
                
                  <f7-link  class = "menutitle_1"  @click="gotoOurGGList()">协力
                  </f7-link>

                  <img class = "menuicon_2" src="@/assets/icon_all/panel_favorite.png" />
                  <f7-link  class = "menutitle_2" @click="gotoFavoriteGGList()">收藏
                  </f7-link>
                  <img class = "menuicon_3" src="@/assets/icon_all/panel_notification.png" />
                  <a class = "menutitle_3" v-bind:href="notification_url">通知</a>


                  <img class = "menuicon_4" src="@/assets/icon_all/panel_setting.png" />
                  <a class = "menutitle_4" v-bind:href="setting_url">设置</a>

                  <img class = "menuicon_5" src="@/assets/icon_all/panel_logout.png" />
                  <a class = "menutitle_5" href="/list/">退出</a>
              </div>
          </div>
      </f7-page>  
    </f7-panel>
    
      <f7-panel right cover>
        <f7-block-title>我是右侧面板</f7-block-title>
            <f7-page>
              <div class="bottom_part">
              <img src="@/assets/icon_all/selection_green.png" />
              </div>
            </f7-page>  
      </f7-panel>
   
    
    <f7-view :pushState="true" main/>
    <!--<v-menu></v-menu>-->
  </div>
</template>

<style>
.myItem_div{
    background-color: #54bcbf;
    width: 100%;
    height: 100%;
}
.mysearchbox{
            background-color:#ffffff;
            position: absolute;
            width: 179px;
            height: 39px;
            left:31px;
            top:288px;
}
.searchbody{
            position:absolute;
            width: 116px;
            height: 18px;
            margin-left:11px;
            margin-top:9px;
            
}
.searchbtn{
            position:absolute;
            width: 22px;
            height: 22px;
            margin-left: 144px;
            margin-top:8px;
            background-color:#ffffff;
}
.searchicon{
            position:absolute;
            width: 22px;
            height: 22px;
            margin-left: 144px;
            margin-top:8px;
}

.di_icon{
            position: absolute;
            width: 99px;
            height: 99px;
            left:48px;
            top:65px;
            border-radius: 50%;
}

.headidentity{
            position: absolute;
            width: 39px;
            height: 39px; 
            left:114px;
            top:129px;
}

.rcorners1 {
    border-radius: 50%;
    background: #fcc93d;
    position: absolute;
    width: 39px;
    height: 39px;    
    left:0px;
    top:0px;
}

.useridentity_font{
    position: absolute;
    width: 27px;
    height: 26px;    
    left:8px;
    top:18px;
    color: #ffffff;
    font-size: 20px;
}

.username_1{
            position: absolute;
            width: 74px;
            height: 45px;
            left:55px;
            top:176px;
}
.username_2{
            position: absolute;
            width: 74px;
            height: 16px;
            left:56px;
            top:215px;
}



.namescolor_1{
            color: #ffffff;
            font-size: 22px;
}

.namescolor_2{
            color: #ffffff;
            font-size: 16px;
}

.md a{
    color: #ffffff;
}
.menuicon_1{
            position: absolute;
            width: 17px;
            height: 21px;
            left:54px;
            top:365px;
}

.menutitle_1{
            position: absolute;
            width: 118px;
            height: 21px;
            left:87px;
            top:367px;
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            text-decoration:none;
}

.menuicon_2{
            position: absolute;
            width: 18.7px;
            height: 18px;
            left:53.6px;
            top:423.3px;
}

.menutitle_2{
            position: absolute;
            width: 118px;
            height: 21px;
            left:87px;
            top:422px;
            color: #ffffff;
            font-size: 16px;
            font-weight: 800;
            text-decoration:none;
}

.menuicon_3{
            position: absolute;
            width: 20px;
            height: 16px;
            left:53px;
            top:481px;
}

.menutitle_3{
            position: absolute;
            width: 118px;
            height: 21px;
            left:87px;
            top:478px;
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            text-decoration:none;
}

.menuicon_4{
            position: absolute;
            width: 18.4px;
            height: 20px;
            left:53.8px;
            top:533px;
}

.menutitle_4{
            position: absolute;
            width: 118px;
            height: 21px;
            left:87px;
            top:533px;
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            text-decoration:none;
}

.menuicon_5{
            position: absolute;
            width: 19.4px;
            height: 18.1px;
            left:53px;
            top:586.9px;
}

.menutitle_5{
            position: absolute;
            width: 118px;
            height: 21px;
            left:87px;
            top:585px;
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            text-decoration:none;
}

.top_part{
            position: absolute;
            top:0px;
            height: 285px;
            width: 100%;
            opacity:1;
}

.bottom_part{
            position: absolute;
            top:285px;
            width: 100%;
            opacity:1;
}

.md a {
    color: #ffffff
}
</style>

