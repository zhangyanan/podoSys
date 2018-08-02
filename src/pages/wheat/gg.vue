<!-- 当前页面名称： 蝈蝈信息 蝈蝈活动-->
<template>
  <f7-page>
    <!--<f7-block v-if="b_load_21Item == 1 && b_load_activity == 1">-->
    <f7-block v-if="this.l_retdata.num != null && this.l_retdata.num > 0">
        <f7-row no-gap class="gg-row-header">
                <f7-col class="col-70" width="70">
                    <f7-list class="list-70">
                        <f7-list-item class="col-70-gg-item">
                            <div class = "goback">
                                <f7-link  href = "#" @click="goBack()">
                                    <img src="@/assets/icon_all/back_white.png"/>
                                </f7-link>
                            </div>
                            <div class="name"><span>{{l_retdata.datas[0].姓名.substr(0,1)}}</span></div>
                            <div class = "headidentity_2">
                                <p class = "rcorners1_2"></p>
                                <label class = "useridentity_font_2">{{l_retdata.datas[0].阶段}}</label>                
                            </div>
                            <div class="ggname">{{l_retdata.datas[0].姓名}}</div>
                            <div class="ggwechat">{{l_retdata.datas[0].微信}}</div>
                        </f7-list-item>             
                    </f7-list>
                </f7-col>
                <f7-col width="30">
                    <f7-list>
                        <f7-list-item class="col-30-leaf-item">
                            <img class="leaf-icon" src="@/assets/icon_all/yang.png"/>
                            <div class="littleleaf">
                                <img class="leaf-little-icon" src="@/assets/icon_all/listicon_SW4.png"/>
                            </div>
                            <div class="leafname">{{l_retdata.datas[0].引导人姓名}}</div>
                            <!--
                            <f7-popover class="popover-menu">
                                <f7-list>
                                    <f7-list-item v-for="(item, index) in this.l_ggstatus_data"
                                        :key="index"
                                        :title="item.value"
                                        class="staticmsgbox" popover-close link="#" @click="goto_ggstatus(item.value)">
                                        <img v-if="l_retdata.datas[0].状态 == item.value" slot="media" src="@/assets/icon_all/selection_green@2x.png" width="29"/>
                                    </f7-list-item>
                                </f7-list>
                            </f7-popover> -->
                        </f7-list-item>
                        <f7-list-item class="col-30-more-item">
                                <!-- 权限判断：蝈蝈状态权限-->
                                <!-- 是自己的蝈蝈 且 在SW QJ TK GD FF阶段 -->
                    
                                <f7-link v-if="may_edit_gg_status(l_retdata.datas[0].阶段)" 
                                                id="more-btn" raised sheet-open=".status-sheet">
                                    <span>...</span>
                                </f7-link>
                                <!-- <select v-if="(relation_of_this_one == 3) &&
                                                (get_gg_status_no(l_retdata.datas[0].阶段) < 6)" name="gg-status">
                                        <option v-for="(itemmenu) in l_ggstatus_data" :key="itemmenu.value" :value="itemmenu.value" @click="goto_ggstatus(itemmenu.value)">
                                                {{itemmenu.value}}</option>
                                </select> -->
                        </f7-list-item>
                        <f7-sheet class="status-sheet" :opened="sheetOpened" @sheet:closed="sheetOpened = false">
                            <f7-list>
                                <f7-list-item sheet-close>
                                    <f7-label style="left:15px">状态变更</f7-label>
                                    <f7-link style="right:28.4px" sheet-close><img src = "@/assets/icon_all/close_gray.png"></f7-link>
                                </f7-list-item>
                                
                                <f7-list-item v-for="(item, index) in this.l_ggstatus_data"
                                        :key="index"
                                        @click="goto_ggstatus(item.value)">
                                        <f7-label style="left:15px">{{item.value}}</f7-label>
                                        <f7-link style="right:34.4px" v-if="l_retdata.datas[0].状态 == item.value" sheet-close><img src = "@/assets/icon_all/selection_green@2x.png" width="29"></f7-link>
                                        <f7-link style="right:34.4px" v-else sheet-close><img src = "@/assets/icon_all/selection_gray@2x.png" width="29"></f7-link>
                                </f7-list-item>
                            </f7-list>
                        </f7-sheet>
                    </f7-list>
                </f7-col>
        </f7-row>
         <f7-row no-gap class="gg-tab">
            <f7-col>
                <f7-toolbar tabbar class = "gg-toolbar">
                        <f7-link  :tab-link-active="'蝈蝈活动' != jumpTo" tab-link="#tab-1" class="baselink">基本信息</f7-link>
                        
                        <f7-link  :tab-link-active="'蝈蝈活动' == jumpTo" tab-link="#tab-2" class="baselink">活动记录</f7-link>

                        <f7-link tab-link="#tab-3" class="baselink">修改历史</f7-link>
                </f7-toolbar>
                <f7-tabs><!-- 不能用animated属性 -->
                    <!--<f7-tab v-if="(jumpTo == '蝈蝈信息')" id="tab-1" class="page-content" tab-active>
                    <f7-tab v-else id="tab-1" class="page-content" tab-inactive> :title="item.value"-->
                    <f7-tab  id="tab-1" class="page-content" :tab-active="'蝈蝈活动' != jumpTo">
                        <f7-block>
                          <f7-list  media-list v-if="this.b_load_21Item == 1" class="baseinfo">
                              
                            <f7-list-item v-for="(item, index) in this.l_showggtitle_data"
                                :key="index"
                                v-if="l_retdata.datas[0][item.value] != null" :title="item.value" :text="l_retdata.datas[0][item.value]" class="staticmsgbox">
                            </f7-list-item>
                            <f7-list-item @click="add21Item()" class="bottomcomfirm">
                                <f7-button v-if="relation_of_this_one == 3 || relation_of_this_one == 2" class="addinfo-btn" big fill>添加信息</f7-button>
                                <f7-button v-else-if="relation_of_this_one == 1" class="bottombtn-2" big fill>已收藏</f7-button>
                                <f7-button v-else class="addinfo-btn" big fill>收藏</f7-button>
                            </f7-list-item>    
                            </f7-list>
                        </f7-block>
                    </f7-tab>
                    <!--<f7-tab v-if="(jumpTo == '蝈蝈活动')" id="tab-2" class="page-content" tab-active>
                    <f7-tab v-if="(jumpTo != '蝈蝈活动')" id="tab-2" class="page-content" tab-inactive>-->
                    <f7-tab  id="tab-2" class="page-content" :tab-active="'蝈蝈活动' == jumpTo">  
                        <f7-block>
                            <f7-list media-list v-if="l_retactivitydata.num != null && relation_of_this_one > 1" class="baseinfo">
                                <f7-list-item v-for="(item, index) in l_retactivitydata.datas"
                                    :key="index" :title="item.活动名称" :text="item.活动日期" @click="local_setSelectedActivity(item.键值, index)"  class="staticmsgbox">
                                </f7-list-item>
                                <f7-list-item @click="addActivity()" class="bottomcomfirm">
                                    <f7-button class="addrecord-btn" big fill>添加记录</f7-button>
                                </f7-list-item>
                            </f7-list>
                            <f7-list v-else-if="relation_of_this_one > -1">
                                <f7-list-item>
                                    <f7-label>
                                          亲爱的佳人，您好，想一起培育🍇 {{l_retdata.datas[0].姓名}} 吗？
                                    </f7-label>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label>
                                        快快联系🍃 {{l_retdata.datas[0].引导人姓名}} 吧，不要消灭圣灵的感动哦 ^_^
                                    </f7-label>
                                </f7-list-item>
                            </f7-list>
                        </f7-block>
                    </f7-tab>
                    <f7-tab id="tab-3" class="page-content">
                        <f7-block>
                            <p>栏目建设中，敬请期待...</p>
                        </f7-block>
                    </f7-tab>
                </f7-tabs>
            </f7-col>
        </f7-row>
    </f7-block>    
  </f7-page>
</template>
<script>
import { mapGetters } from "vuex";

</script>
<style lang="scss">

.md .block {
    margin: 0px; 
    padding: 0px; 
}

.md .col-70 .list {
    margin: 0;
    font-size: 16px;
}

.md .col-30 .list {
    margin: 0;
    font-size: 16px;
}

.md .toolbar-inner {
    overflow: hidden;
    background: #54BCBF;
}
.md a.link.baselink {
    background: #54BCBF;
}

.gg-row-header{
    background: #54BCBF;
}
div.list.gg-list-header{
    margin: 0px;
}

div.goback{
    position:absolute;
    top:46px;
    left: 19px;
}

div.name {
    width: 99px;
    height: 99px;
    background: #FFFFFF;
    border-radius: 50px;
    position:absolute;
    top:67px;
    left: 138px;
}
div.ggname{
    font-family: PFSquareSansPro-Bold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0.2px;
    line-height: 40px;
    position:absolute;
    top:180px;
    left: 134px;
    width: 110px;
    text-align: center;
}
div.ggwechat{
    font-family: PFSquareSansPro-Light;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    line-height: 40px;
    position:absolute;
    top:210px;
    left: 88.5px;
    width: 200px;
    text-align: center;
}
div.leafname{
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    top:106px;
    right:33px;
}

#more-btn{
    position: absolute;
    top:45px;
    right:39px; 
    margin:0px;
    padding: 0px;
    -webkit-box-shadow: 0;
    box-shadow: 0;
}

#more-btn span {
    color:#FFFFFF;
    font-size: 30px;
   
}

div.littleleaf{
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 10px;
    position:absolute;
    right:21px;
    top:79px;
}
img.leaf-little-icon{
    width: 13px;
    height: 13px;
    margin-left: 3px;    
}
div.name span {
    font-family: PingFangSC-Semibold;
    font-size: 38px;
    color: #54BCBF;
    letter-spacing: 0;
    line-height: 21px;
    margin-left: 30px;
    top: 45px;
    /* left: 10px; */
    /* display: block; */
    position: absolute;
}
.item-inner img.leaf-icon{
    width:56px;
    height: 56px;
    border-radius: 28px;
    top:45px;
    right:25.5px;
    position: absolute;
}
.md .list .item-inner:after,.md .list .item-inner:before {
    background-color: rgba(0,0,0,0);
}
.md .list ul:before,.md .list ul:after{
    background-color: rgba(0,0,0,0);
}
.md .list .item-inner:after, .md .list .item-inner:before {
    background-color: transparent;
}
.md .toolbar:not(.toolbar-bottom-md):not(.messagebar)~* .page-content, .md .toolbar:not(.toolbar-bottom-md):not(.messagebar)~.page-content {
    padding-top: 0px;
}
div.list.baseinfo{
    margin: 0px;
   
}
div.list.baseinfo ul{
    margin-top: 0px; 
}

div.list.baseinfo .staticmsgbox{
    margin: 0px;
    padding-left: 0px;
}
div.list.baseinfo .staticmsgbox .item-content{
    margin: 0px;
    padding-left: 30px;
    height: 61.5px;
}

.staticmsgbox {
    min-height: 61.5px;
    padding-left: 14px;
    -webkit-box-shadow: 0 0 0 1px rgba(74, 74, 74, 0.1);
    box-shadow: 0 0 0 1px rgba(74, 74, 74, 0.1);
    background: #fff;
}

div.list.baseinfo .bottomcomfirm .item-content{
    margin: 0px;
    padding: 0px;
}
div.list.baseinfo .bottomcomfirm .item-content .item-inner{
    margin: 0px;
    padding: 0px;
}

.bottombtn {
    //padding-left: 120px;
    height: 60px;
    width: 100%;
    background: #54BCBF;
    color: #fff;
    text-align: center;
    line-height: 60px;
}

.bottombtn-2 {
    //padding-left: 120px;
    height: 60px;
    width: 100%;
    background: #fff;
    color: #FF6D7F;
    text-align: center;
    line-height: 60px;
}

.more .more-link {
    color: #ffffff
}

.md .list .col-30-leaf-item .item-content{
    padding: 0px;
    margin: 0px;
    height: calc(165px - 32px);
}

.md .list .col-30-leaf-item .item-inner{
    padding: 0px;
    height: 100%;
}

.md .list .col-30-more-item .item-content{
    padding: 0px;
    margin: 0px;
    height: 112.5px;
}

.md .list .col-30-more-item .item-inner{
    padding: 0px;
    height: 100%;
}

.status-sheet {
    height: calc(100% - 247px);
}

.md .list .col-70-gg-item .item-content{
    padding: 0px;
    margin: 0px;
}

.md .list .col-70-gg-item .item-inner{
    padding: 0px;
}

.col-70 {
    padding: 0px;
    margin: 0px;
}

.md .list .list-70 .item-content{
    padding: 0px;
    margin: 0px;
}

.md .list .list-70 .item-inner{
    padding: 0px;
    margin: 0px;
}

.headidentity_2{
            position: absolute;
            width: 39px;
            height: 39px; 
            left:204.5px;
            top:129px;
}

.rcorners1_2 {
    border-radius: 50%;
    background: #fff;
    position: absolute;
    color: #54BCBF;
    width: 39px;
    height: 39px;    
    left:0px;
    top:-17px;
    border: solid 0.5px;
}

.useridentity_font_2{
    position: absolute;
    width: 27px;
    height: 26px;    
    left:6px;
    top:5px;
    color: #54BCBF;
    font-size: 20px;
}
  a.addinfo-btn.button-fill.button-big.button{
    background-color: #54BCBF;
    height: 60px;
    font-size: 22px;
    padding-top: 6px;
    margin: 0px;
  }
  a.addrecord-btn.button-fill.button-big.button{
    background-color: #54BCBF;
    height: 60px;
    font-size: 22px;
    padding-top: 6px;
    margin-top: 70%;
  }

</style>

<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
            jobIsDone: false,
            class_link_active:"button tab-link tab-link-active",
            class_link_inactive:"button tab-link",

            class_tab_active:"tab tab-active",
            class_tab_inactive:"tab",

            in_self_msg:"",
            //保存蝈蝈信息 这部分信息在这个页面上是不会更改的
            in_21Item_Short:"",
            //in_self_favorite:"",
            
            //当前页面
            jumpTo:"",
            //判断当前帐户与该gg的关系  -1: 未知关系 0:没有关系  1:收藏关系  2.协力关系  3.母子关系
            relation_of_this_one:-1,

            //加载21项成功
            b_load_21Item:0,
            //加载活动列表成功
            b_load_activity:0,
            //得到该蝈蝈的21项字段
            l_the_gg_title:[],
            }
  },
  computed: {
    ...mapGetters('listdata',['l_retdata']),
    //...mapGetters('listdata',['l_retkeyname']),
    ...mapGetters('datainterchange', ['selectedUser']),
    
    ...mapGetters('listdata',['l_tempStr']),
    ...mapGetters('listdata',['l_retactivitydata']),
    ...mapGetters('listdata',['l_retkeyactivityname']),
    ...mapGetters('listdata',['l_ret_gg_status_data']),

    ...mapGetters('listdata',[
      'l_ret_gg_imf_s'
    ]),
    
    ...mapGetters('listdata',[
      'l_ret_my_gg_imf_s'
    ]),
    
    ...mapGetters('listdata',[
      'l_ret_our_gg_imf_s'
    ]),

    ...mapGetters('listdata',[
      'l_ret_search_data'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_favorite_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_favorite_list_s'
    ]),

    ...mapGetters('datainterchange',[
    'pageNavigation'
    ]),

    ...mapGetters('configdata',[
    'l_showggtitle_data'
    ]),

    ...mapGetters('configdata',[
    'l_ggstatus_data'
    ]),

    ...mapGetters('configdata',['l_ggstudystatus_data']),
    
    //得到当前页面
    ...mapGetters('datainterchange',['currentPage']),

    //得到当前页面的上一个页面
    ...mapGetters('datainterchange',['prevPage']),
  },
    
  created () {
    //控件中蝈蝈的所有状态信息
    this.get_l_ggstatus_datalist()
    //控件中蝈蝈的所有学习信息
    this.get_l_ggstudystatus_datalist()
    //得到所选用户
    var index = this.selectedUser

    //this.jumpTo = this.currentPage
    console.log('1. jumpTo = ' + this.currentPage + " and jumpFrom = " + this.prevPage)
    //从下层返回的页面
    if(this.currentPage == '蝈蝈活动')
    {   
        this.jumpTo = this.currentPage
        this.gotoPrevPage('')
    }    
    
    console.log('2. jumpTo = ' + this.currentPage + " and jumpFrom = " + this.prevPage)

    if(this.prevPage == "收藏列表")
    {
      this.in_21Item_Short = this.l_ret_personal_favorite_list_s.datas[index]
    }
    else if(this.prevPage == "协力列表")
    {
      this.in_21Item_Short = this.l_ret_our_gg_imf_s.datas[index]
    }
    else if(this.prevPage == "搜索列表")
      this.in_21Item_Short = this.l_ret_search_data.datas[index]
    else 
      this.in_21Item_Short = this.l_ret_my_gg_imf_s.datas[index]
    
    //得到蝈蝈的键值
    var keyid = this.in_21Item_Short.键值

    //console.log('this.isMyGG(keyid)' + JSON.stringify(this.isMyGG(keyid))) console.log("loadData = ", );
    //得到唯一表单
    this.getformvaluesaccurate(keyid).then((res) => {
                console.log('in vue.getformvaluesaccurate num = ' +  this.l_retdata.num)
                //this.b_load_21Item = 1
            })
    //得到活动记录列表
    this.getAllActivity(keyid)
    
    //1s以后进行刷新
    this.loadData(1000, keyid, false)
    this.loadData(2000, keyid, false)
    this.loadData(3000, keyid, true)
    /*this.timeout(2000).then(() => {
                console.log('in gg create.timeout')

                //设置权限
                if(this.isMyGG(keyid))
                        this.relation_of_this_one = 3
                else if (this.isOurGG(keyid))
                        this.relation_of_this_one = 2
                else if (this.in_self_favorite != null && this.in_self_favorite.收藏内容 != null && 
                        this.is_my_favorite(keyid, this.in_self_favorite.收藏内容))
                        this.relation_of_this_one = 1
                else
                        this.relation_of_this_one = 0

                //得到需要显示的21项 选项字段列表
                this.get_l_showggtitle_datalist(this.relation_of_this_one)
                //this.relation_of_this_one = 0
                console.log('relation_of_this_one = ' + this.relation_of_this_one)

                this.b_load_21Item = 1
                this.b_load_activity = 1
      });*/
    
    //得到当前帐户信息
    this.in_self_msg = this.l_ret_personal_imf_s.datas[0]
    
    //得到个人藏单 
    /*if(JSON.stringify(this.l_ret_personal_favorite_s.datas[0]) != '{}')
    {
      this.in_self_favorite = this.l_ret_personal_favorite_s.datas[0]
      console.log(this.in_self_favorite)
    }
    else
      this.in_self_favorite = null*/

 },
  methods: {
    ...mapActions('listdata',[
      'getactivityformvalues'
    ]),
    ...mapActions('listdata',[
      'getformvaluesaccurate'
    ]),
    ...mapActions('listdata',[
      'getGGStatusFormValues'
    ]),

    ...mapActions('listdata',[
      'insertformvalues'
    ]),
    
    ...mapActions('listdata',[
      'updateformvalues'
    ]),

    ...mapActions('datainterchange',[
      'setSelectedActivity'
    ]),

    ...mapActions('datainterchange',[
      'setSelectedGGStatus'
    ]),

    ...mapActions('datainterchange',[
    'setPageNavigation'
    ]),

    ...mapActions('configdata',[
    'get_l_showggtitle_datalist'
    ]),
    
    ...mapActions('configdata',[
    'get_l_ggstatus_datalist'
    ]),

    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavorite'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavoriteList'
    ]),
    
    ...mapActions('configdata',['get_l_ggstudystatus_datalist']),

    //返回上一个页面 无需参数
    ...mapActions('datainterchange',[
    'gotoPrevPage'
    ]),

    //前进到下一个页面 需要该页面的名称
    ...mapActions('datainterchange',[
    'gotoNextPage'
    ]),

    /******************************当前帐户与当前蝈蝈的权限判断********************************* */
    //判断其是否是当前帐号的蝈蝈 传入gg的键值
    isMyGG(ggid){
        if(this.l_retdata.datas[0].引导人 == this.l_ret_personal_imf_s.datas[0].个人表单)
            return true;

        return false
    },
    //判断其是否是当前帐号下需管理的蝈蝈
    isOurGG(ggid){
      if(this.l_ret_our_gg_imf_s.num != null)
      {
            for (var i=0; i<this.l_ret_our_gg_imf_s.datas.length; i++)
            {
                //console.log("key:" + key + ", value:" ,data.data.datas[0][key]);
                if(this.l_ret_our_gg_imf_s.datas[i].键值 == ggid)
                {
                    return true
                }
            }
      }
      

      return false
    },
    //判断其是否是被收藏的蝈蝈
    //-x-x-x-
    //这个蝈蝈在我的收藏夹吗
    is_my_favorite(anyid, favoritelist)  {
      var findid = "-" + anyid + "-"
      if (favoritelist.indexOf(findid) == -1)
          return false
      
      return true
    },
    /************************************************************************************* */

    /****************************得到描述这个蝈蝈的具体的21项********************************** */
    //权限描述：所有人都不能看到键值、引导人、蝈蝈关联表单；
    getGGTitle(ggAuthority)  {
                                /*if (ggAuthority == 3 || ggAuthority == 2){
                                  //自己作为管理员或者引导人时 可以看见全部
                                  var msg = this.l_retdata.datas[0];
                                  var i = 0;
                                  for (var key in msg)
                                  {
                                      //console.log("key:" + key + ", value:" ,data.data.datas[0][key]);
                                      if(key != '键值' && key != '蝈蝈关联表单' && key != '引导人')
                                      {
                                        this.l_the_gg_title[i] = key;
                                        i = i + 1;
                                      }
                                  }
                                }
                                else{
                                  //其他用户只能看到指定的内容
                                  this.l_the_gg_title = this.l_showggtitle_data
                                }*/
    },
    /****************************得到描述这个蝈蝈的具体的21项********************************** */

    /****************************得到蝈蝈状态值 ***********************************************/
    may_edit_gg_status(gg_status)
    {
        if((this.relation_of_this_one == 3) &&
            this.get_gg_status_no(gg_status) < 6)
            return true

        return false
    },

    get_gg_status_no(gg_status)
    {
        var item
        
        for (item in this.l_ggstudystatus_data)
        {
            if(gg_status == this.l_ggstudystatus_data[item].value)
            {
                return this.l_ggstudystatus_data[item].NO;
            }
            //console.log("item.value = " + this.l_ggstudystatus_data[item].value);    
        }

        return 0;
    },

    timeout(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
                })
      },

    //得到私藏数据
    loadPrivateData(ms, b_finish) {
        this.timeout(ms).then(() => {
            if(this.l_tempStr == '200')
            {
                //重新获得一次收藏表单
                this.getPersonalFavorite(this.l_ret_personal_imf_s.datas[0].个人表单)
                return true
            }
        })

        return false
    },

    loadData(ms, s_keyid, b_finish) {
        this.timeout(ms).then(() => {
                console.log('in gg create.timeout = ' + ms)
                if(this.b_load_21Item == 1)
                  //不再判断了
                  return;

                if(this.l_retdata.num != 0)
                {
                    //设置权限
                    if(this.isMyGG(s_keyid))
                        this.relation_of_this_one = 3
                    else if (this.isOurGG(s_keyid))
                        this.relation_of_this_one = 2
                    else if (this.l_ret_personal_favorite_s.num != null && this.l_ret_personal_favorite_s.datas[0].收藏内容 != null && 
                        this.is_my_favorite(s_keyid, this.l_ret_personal_favorite_s.datas[0].收藏内容))
                        this.relation_of_this_one = 1
                    else
                        this.relation_of_this_one = 0

                    //得到需要显示的21项 选项字段列表
                    this.get_l_showggtitle_datalist(this.relation_of_this_one)
                    //this.relation_of_this_one = 0
                    console.log('relation_of_this_one = ' + this.relation_of_this_one)

                    this.b_load_21Item = 1
                    this.b_load_activity = 1
                }
      });
    },
    //从我的收藏夹里删除
    delete_my_favorite(anyid, favoritelist) {
      var findid = "-" + anyid + "-"
      return favoritelist.replace(findid,'-')
      /*var pos = favoritelist.indexOf(findid)
      var header = favoritelist.substring(0,pos)
      pos = pos+findid.length
      var len = favoritelist.length-pos-findid.length
      var tail = favoritelist.subString(pos,len)
      console.log(tail)
      
      return header + tail*/
    },

    //添加我的收藏夹
    add_my_favorite(anyid, favoritelist) {
        var str
        if(favoritelist.length == 0)
        {
            return "-" + anyid + "-"
        }
        else 
        {
            return favoritelist + anyid + "-"
        } 

    },

    goBack()    {
        //取消激活的tab
        //设置跳转来源
        
        //this.gotoPodosysAnyPage('')
        this.gotoPrevPage("")
        this.$f7router.navigate('/allList/')
    },

    getGGStatus(ggid)  {
      var formname = "状态标签"
      var keynames = "蝈蝈关联表单" + ','
      var keyvalues = ggid + ','
      var fieldname = "当前状态,原因描述" + ','

      var sqldata = JSON.stringify({
					"in_foldername":"GGAccount",
					"in_formname":formname,
					"in_username":"admin",
					"in_keynames":keynames,
					"in_keyvalues":keyvalues,
					"in_fieldnames":fieldname})
     
      this.getGGStatusFormValues(sqldata)
    },

    getAllActivity(ggid)  {
      var formname = "活动通知"
      var keynames = "蝈蝈关联表单" + ','
      var keyvalues = ggid + ','
      var fieldname = "活动名称,活动日期,活动反馈,活动类型" + ','

      var sqldata = JSON.stringify({
					"in_foldername":"GGAccount",
					"in_formname":formname,
					"in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
					"in_keynames":keynames,
					"in_keyvalues":keyvalues,
					"in_fieldnames":fieldname})
      //console.log(sqldata)
      this.getactivityformvalues(sqldata)
    },

    local_setSelectedActivity(actid, actindex)  {
      //跳转到对应的活动页面 
      //设置活动数据id
      this.gotoNextPage("活动编辑")
      this.setSelectedActivity(actindex)
      this.$f7router.navigate('/activityItems/')
    },

    //跳转到状态变更页面
    goto_ggstatus(newStatus) {
      //判断是否有权限更改 如果gg在center则不可更改
  
      //再次更新 ggid了
      /*sessionStorage.setItem('selectedGGId', this.l_retdata.datas[0].键值)
      //全局设置 设置gg姓名
      sessionStorage.setItem('selectedGGName', this.l_retdata.datas[0].姓名)
      //全局设置 设置gg的状态
      sessionStorage.setItem('selectedGGStatus', this.l_ret_gg_status_data.datas[0].当前状态)
      //全局设置 设置gg的状态表单id
      sessionStorage.setItem('selectedGGStatusId', this.l_ret_gg_status_data.datas[0].键值)*/
      //console.log(newStatus)
      //保存 gg的21项数据
      //sessionStorage.setItem('selectedGG21Item', JSON.stringify(this.l_retdata.datas[0]))
      //保存 将要更改的状态
      this.gotoNextPage("状态变更")
      this.setSelectedGGStatus(newStatus)
      this.$f7router.navigate('/ggStatus/')
    },

    //添加活动页面
    addActivity() {
      //再次更新 ggid了
      this.gotoNextPage("活动编辑")
      this.setSelectedActivity('－1')
      this.$f7router.navigate('/activityItems/')
    },

    //添加21项页面
    add21Item() {
      var tempNames = "收藏内容,"
      var tempValues = ""
      var favorite = ""

      //根据gg关系设置响应事件
      if (this.relation_of_this_one == 2 || this.relation_of_this_one == 3)
      {
          //更新 gg的21项数据
          this.gotoNextPage("21项表单")
          this.$f7router.navigate('/21ItemList/')
      }
      else if (this.relation_of_this_one == 1)
      {
          //取消收藏
          tempValues = this.delete_my_favorite(this.in_21Item_Short.键值, 
                                            this.l_ret_personal_favorite_s.datas[0].收藏内容)

          var msgid = this.l_ret_personal_favorite_s.datas[0].键值
            var sqldata = JSON.stringify({
					"in_formdataid":msgid,
					"in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
					"in_fieldnames":tempNames,
					"in_fieldvalues":tempValues,
					})

          console.log(sqldata)
          this.updateformvalues(sqldata)
          this.relation_of_this_one = 0

          //重新获得一次收藏表单
          //this.getPersonalFavorite(this.l_ret_personal_imf_s.datas[0].个人表单)
          //this.getPersonalFavoriteList(this.l_ret_personal_imf_s.datas[0].个人表单)
          var b_finish = false;
          b_finish = this.loadPrivateData(1000, b_finish)
          if(b_finish == false)
                this.loadPrivateData(1000, true)
      }
      else if (this.relation_of_this_one == 0)
      {
          if(this.l_ret_personal_favorite_s.datas[0] == null)
          {
              //连收藏表单都不存在
              favorite = this.add_my_favorite(this.in_21Item_Short.键值, '')

              tempNames = "藏家关联表单," + tempNames
              tempValues = this.l_ret_personal_imf_s.datas[0].个人表单 + ","
              tempValues = tempValues + favorite
              tempValues = tempValues + ","

              var sqldata = JSON.stringify({
                      "in_tablename":"收藏表单",
                      "in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
                      "in_fieldnames":tempNames,
                      "in_fieldvalues":tempValues,
                      })
              console.log(sqldata)
              this.insertformvalues(sqldata)

              this.relation_of_this_one = 1
          }
          else{
              if(this.l_ret_personal_favorite_s.datas[0].收藏内容 == null)
                    favorite = this.add_my_favorite(this.in_21Item_Short.键值, '')
              else
              {
                    //蝈蝈已经在收藏夹了吗
                    if(this.is_my_favorite(this.in_21Item_Short.键值, this.l_ret_personal_favorite_s.datas[0].收藏内容))
                        return 
                    
                    //添加收藏
                    favorite = this.add_my_favorite(this.in_21Item_Short.键值, 
                                                this.l_ret_personal_favorite_s.datas[0].收藏内容)

                    var msgid = this.l_ret_personal_favorite_s.datas[0].键值
                    var sqldata = JSON.stringify({
                    "in_formdataid":msgid,
                    "in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
                    "in_fieldnames":tempNames,
                    "in_fieldvalues":favorite,
                    })

                    console.log(sqldata)
                    this.updateformvalues(sqldata)

                    this.relation_of_this_one = 1
              }
          }
          
          //重新获得一次收藏表单
          //this.getPersonalFavorite(this.l_ret_personal_imf_s.datas[0].个人表单)
          //this.getPersonalFavoriteList(this.l_ret_personal_imf_s.datas[0].个人表单)
          var b_finish = false;
          b_finish = this.loadPrivateData(1000, b_finish)
          if(b_finish == false)
            this.loadPrivateData(1000, true)
      }
    }
  }
}
</script>