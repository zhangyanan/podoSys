<template>
  <f7-page>
    <f7-block>
        <f7-row no-gap class="gg-row-header">
                <f7-col width="70">
                    <f7-list>
                    <f7-list-item>
                        <f7-link href = "#" @click="goBack()">
                        <img src="@/assets/icon_all/back_white.png"/>
                        </f7-link>
                    </f7-list-item>
                    <f7-list-item>
                        <div class="name"><span>{{b_load_21Item == 0?'稍等':l_retdata.datas[0].姓名.substr(0,1)}}</span></div>
                    </f7-list-item>
                    <f7-list-item>
                        <div class="ggname">{{b_load_21Item == 0?'稍等':l_retdata.datas[0].姓名}}</div>
                    </f7-list-item>
                    <f7-list-item>
                        <div class="ggwechat">{{b_load_21Item == 0?'稍等':l_retdata.datas[0].微信}}</div>
                    </f7-list-item>                    
                </f7-list>
                </f7-col>
                <f7-col width="30">
                    <f7-list>
                        <f7-list-item>
                            <img class="leaf-icon" src="@/assets/icon_all/yang.png"/>
                            <div class="littleleaf"><img class="leaf-little-icon" src="@/assets/icon_all/listicon_SW4.png"/></div>
                        </f7-list-item>
                        <f7-list-item>
                            <div class="leafname">{{this.in_21Item_Short.引导人姓名}}</div>                            
                        </f7-list-item>
                        <f7-list-item>
                            <div class="more" >...</div>
                        </f7-list-item>
                </f7-list>
                </f7-col>
        </f7-row>
         <f7-row no-gap class="gg-tab">
            <f7-col>
                <f7-toolbar tabbar>
                        <f7-link  :class="tab-link-active" tab-link="#tab-1" class="baselink">基本信息</f7-link>
                        <f7-link  :class="tab_link_inactive" tab-link="#tab-2" class="baselink">活动记录</f7-link>
                        <f7-link tab-link="#tab-3" class="baselink">修改历史</f7-link>
                </f7-toolbar>
                <f7-tabs animated>
                    <f7-tab :class="[(jumpFrom != '活动编辑')?tab-link-active:tab_link_inactive]" id="tab-1" class="page-content" tab-active>
                        <f7-block>
                          <f7-list  media-list v-if="b_load_21Item == 1" class="baseinfo">
                              
                            <f7-list-item v-for="(item, index) in this.l_showggtitle_data"
                                :key="index"
                                v-if="l_retdata.datas[0][item.value] != null" :title="item.value" :text="l_retdata.datas[0][item.value]" class="staticmsgbox">
                            </f7-list-item>
                            <f7-list-item @click="add21Item()" class="bottomcomfirm">
                                <div v-if="relation_of_this_one == 3 || relation_of_this_one == 2" class="bottombtn">添加信息</div>
                                <div v-else-if="relation_of_this_one == 1" class="bottombtn">取消收藏</div>
                                <div v-else class="bottombtn">收藏</div>
                            </f7-list-item>    
                            </f7-list>
                        </f7-block>
                    </f7-tab>
                    <f7-tab :class="[(jumpFrom == '活动编辑')?tab-link-active:tab_link_inactive]" id="tab-2" class="page-content">
                        <f7-block>
                            <f7-list media-list v-if="b_load_activity == 1 && relation_of_this_one > 1" class="baseinfo">
                            <f7-list-item v-for="(item, index) in l_retactivitydata.datas"
                                :key="index" :title="item.活动名称" :text="item.活动日期" @click="local_setSelectedActivity(item.键值, index)"  class="staticmsgbox">
                            </f7-list-item>
                            <f7-list-item @click="addActivity()" class="bottomcomfirm">
                                <div class="bottombtn">添加记录</div>
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
</script>
<style lang="scss">
.md .block {
    margin: 0px; 
    padding: 0px; 
}
.md .toolbar-inner {
    overflow: hidden;
    background: #FF6D7F;
}
.md a.link.baselink {
    background: #FF6D7F;
}

.gg-row-header{
    background: #FF6D7F;
}
div.list.gg-list-header{
    margin: 0px;
}
div.name {
    width: 99px;
    height: 99px;
    background: #FFFFFF;
    border-radius: 50px;
    margin-left: 100px;
    margin-top: 0px;
}
div.ggname{
    font-family: PFSquareSansPro-Bold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0.2px;
    line-height: 8px;
    margin-left: 105px;
    margin-top: 0px;
}
div.ggwechat{
    font-family: PFSquareSansPro-Light;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    margin-left: 105px;
    margin-top: 0px;
}
div.leafname{
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 5px;
    margin-top: -30px;
}
div.more{
    color:#FFFFFF;
    font-size: 30px;
    margin-left: 5px;
    margin-top: -30px;
}
div.littleleaf{
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 10px
}
img.leaf-little-icon{
    width: 13px;
    height: 13px;
    margin-left: 3px;    
}
div.name span {
    font-family: PingFangSC-Semibold;
    font-size: 38px;
    color: #FF6D7F;
    letter-spacing: 0;
    line-height: 21px;
    margin-left: 30px;
    top: 45px;
    /* left: 10px; */
    position: abs;
    /* display: block; */
    position: absolute;
}
.item-inner img.leaf-icon{
    width:56px;
    height: 56px;
    border-radius: 28px;
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
}

.staticmsgbox {
    min-height: 61.5px;
    padding-left: 14px;
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
    background: #FF6D7F;
    color: #fff;
    text-align: center;
    line-height: 60px;
}
</style>
<!-- 当前页面名称： 蝈蝈信息-->
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
            in_self_favorite:"",
            jumpFrom:"",
            //判断当前帐户与该gg的关系  0:没有关系  1:收藏关系  2.协力关系  3.母子关系
            relation_of_this_one:0,

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
  },
  
  created () {
    //得到所选用户
    var index = this.selectedUser
    
    //得到gg键值
    this.jumpFrom = this.getSourcePos()
    if(this.jumpFrom == "收藏列表")
    {
      this.in_21Item_Short = this.l_ret_personal_favorite_list_s.datas[index]
    }
    else if(this.jumpFrom == "协力列表")
    {
      this.in_21Item_Short = this.l_ret_our_gg_imf_s.datas[index]
    }
    else if(this.jumpFrom == "搜索列表")
      this.in_21Item_Short = this.l_ret_search_data.datas[index]
    else
      this.in_21Item_Short = this.l_ret_my_gg_imf_s.datas[index]
    
    var keyid = this.in_21Item_Short.键值

    console.log('this.isMyGG(keyid)' + JSON.stringify(this.isMyGG(keyid))) 
    //得到唯一表单
    this.getformvaluesaccurate(keyid).then((res) => {
                console.log('in vue.getformvaluesaccurate')
                //this.b_load_21Item = 1
            })
    //得到活动记录列表
    this.getAllActivity(keyid)
    
    //1s以后进行刷新
    this.timeout(1000).then(() => {
                console.log('in vue.timeout')
                //设置显示内容
                this.getGGTitle(this.relation_of_this_one)
                this.b_load_21Item = 1
                this.b_load_activity = 1
      });
    
    //得到当前帐户信息
    this.in_self_msg = this.l_ret_personal_imf_s.datas[0]
    
    //得到个人藏单 
    if(JSON.stringify(this.l_ret_personal_favorite_s.datas[0]) != '{}')
    {
      this.in_self_favorite = this.l_ret_personal_favorite_s.datas[0]
      console.log(this.in_self_favorite)
    }
    else
      this.in_self_favorite = null

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
    
    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavorite'
    ]),
    
    getSourcePos() {
      var jump = ""
      jump = JSON.parse(this.pageNavigation)
      
      console.log("It is from " + jump.from)
      return jump.from
    },

    getDesPos() {
      var jump = ""
      jump = JSON.parse(this.pageNavigation)
      
      console.log("I'm at " + jump.to)
      return jump.to
    },

    /******************************当前帐户与当前蝈蝈的权限判断********************************* */
    //判断其是否是当前帐号的蝈蝈 传入gg的键值
    isMyGG(ggid){
      
      for (var i=0; i<this.l_ret_my_gg_imf_s.datas.length; i++)
      {
          //console.log("key:" + key + ", value:" ,data.data.datas[0][key]);
          if(this.l_ret_my_gg_imf_s.datas[i].键值 == ggid)
          {
            return true
          }
      }

      return false
    },
    //判断其是否是当前帐号下需管理的蝈蝈
    isOurGG(ggid){
      
      for (var i=0; i<this.l_ret_our_gg_imf_s.datas.length; i++)
      {
          //console.log("key:" + key + ", value:" ,data.data.datas[0][key]);
          if(this.l_ret_our_gg_imf_s.datas[i].键值 == ggid)
          {
            return true
          }
      }

      return false
    },
    //判断其是否是被收藏的蝈蝈
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

    timeout(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
                })
      },

    //-x-x-x-
    //这个蝈蝈在我的收藏夹吗
    is_my_favorite(anyid, favoritelist)  {
      var findid = "-" + anyid + "-"
      if (favoritelist.indexOf(findid) == -1)
          return false
      
      return true
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
        //var str = '{"from":"' + this.getDesPos() + '","to":"' + this.getSourcePos() + '"}'
        //console.log(str)
        //this.setPageNavigation(str)
        this.gotoPodosysAnyPage('')
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
      //sessionStorage.setItem('selectedActivityId', actid)
      //再次更新 ggid了
      //sessionStorage.setItem('selectedGGId', this.l_retdata.datas[0].键值)
      //全局设置 设置gg姓名
      //sessionStorage.setItem('selectedGGName', this.l_retdata.datas[0].姓名)
      //设置该条纪录对象
      //sessionStorage.setItem('selectedActivityData', JSON.stringify(this.l_retactivitydata.datas[actindex]))

      //window.location.href ='/activityItems/'
      this.gotoPodosysAnyPage('活动编辑')
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
      this.setSelectedGGStatus(newStatus)
      this.$f7router.navigate('/ggStatus/')
    },

    //添加活动页面
    addActivity() {
      //再次更新 ggid了
      //sessionStorage.setItem('selectedGGId', this.l_retdata.datas[0].键值)
      //全局设置 设置gg姓名
      //sessionStorage.setItem('selectedGGName', this.l_retdata.datas[0].姓名)
      //删除可能存在的活动纪录 便于活动页面打开时做判断
      //sessionStorage.removeItem('selectedActivityData')

      //window.location.href ='/activityItems/'
      //console.log("addActivity")
      this.gotoPodosysAnyPage('活动编辑')
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
          //sessionStorage.setItem('selectedGG21Item', JSON.stringify(this.in_21Item_Short.键值))
          //window.location.href ='/21ItemList/'
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
          this.getPersonalFavorite(this.l_ret_personal_imf_s.datas[0].个人表单)
      }
      else if (this.relation_of_this_one == 0)
      {
          if(this.in_self_favorite == null)
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
              if(this.in_self_favorite.收藏内容 == null)
                  favorite = this.add_my_favorite(this.in_21Item_Short.键值, '')
              else
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
          
          //重新获得一次收藏表单
          this.getPersonalFavorite(this.l_ret_personal_imf_s.datas[0].个人表单)
      }
    }
  }
}
</script>