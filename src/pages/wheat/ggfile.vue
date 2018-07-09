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
<style>

.ggfile_div{
    background-color: #FF6D7F;
    width: 100%;
    height: 667px;
}

#divheader{
            position: absolute;
            width: 100%;
            height: calc(256px + 21px + 8.5*2px);
            left:0px;
            top:0px;
            background: #FF6D7F;
}

.md .navbar {
            background: #FF6D7F;
}
.md .button.tab-link-active {
            background-color: #FF6D7F
}

.md .button {
            width: 33%;
            padding-left: 25px;
}

.button, .button.button-fill, .button.button-fill.active-state {
            background-color: #FF6D7F;
            margin-top: 0px;
}

.md .subnavbar {
            height: 38px;
}
#mybar  {
            position: absolute;
            width: 100%;
            height: 38px;
            left:0px;
            top:256px;
            border-top: #ffffff solid 0.5px
}

.back_img{
            position: absolute;
            width: 20px;
            height: 18px;
            left:19px;
            top:46px;
}

.yz_img{
            position: absolute;
            width: 55px;
            height: 53.5px;
            left:294.5px;
            top:45px;
            border-radius: 50%;
}

.yz_icon {
            border-radius: 50%;
            background:#fcc93d;
            position: absolute;
            width: 26px;
            height: 25px;    
            left:328px;
            top:79px;
}

.yz_name    {
    position: absolute;
    width: 43px;
    height: 18px;    
    left:310px;
    top:106px;
}

.more_icon  {
            position: absolute;
            width: 25px;
            height: 19.4px;
            left:311px;
            top:196px;
}

.yz_name  {
            position: absolute;
            width: 43px;
            height: 18px;
            left:301px;
            top:106px;
}

gg_name_label{
            border-radius: 50%;
            background: #ffffff;
            position: absolute;
            width: 99px;
            height: 99px;    
            left:0px;
            top:0px;
}

gg_status_label{
            border-radius: 50%;
            background: #ffffff;
            position: absolute;
            width: 40px;
            height: 40px;    
            left:204.5px;
            top:128.5px;
}

.gg_headidentity{
            position: absolute;
            width: 99px;
            height: 99px;    
            left:138px;
            top:67px;
            background: #ffffff;
            border-radius: 50%;
}

.gg_identity_font{
    position: absolute;
    width: 37px;
    height: 31px;    
    left:25px;
    top:28px;
    color: #FF6D7F;
    font-size: 38px;
}

.gg_statusidentity{
            position: absolute;
            width: 40px;
            height: 40px;    
            left:204.5px;
            top:128.5px;
            background: #ffffff;
            border-radius: 50%;
            border: #FF6D7F solid 0.5px
}

.gg_status_font{
    position: absolute;
    width: 32px;
    height: 26px;    
    left:10px;
    top:5px;
    color: #FF6D7F;
    font-size: 20px;
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

.username_1{
            position: absolute;
            width: 174px;
            height: 30px;
            left:151px;
            top:171px;
}
.username_2{
            position: absolute;
            width: 119px;
            height: 16px;
            left:128.5px;
            top:210px;
}



.namescolor_1{
            color: #ffffff;
            font-size: 22px;
}

.namescolor_2{
            color: #ffffff;
            font-size: 16px;
}

.footbox    {
            position: absolute;
            width: 100%;
            height: 60px;
            background: #FF6D7F;
}

.footfont  {
            position: absolute;
            width: 80px;
            height: 28px;
            left:148px;
            top:16px;
}

.footnamecolor{
            color: #ffffff;
            font-size: 20px;
}

#msgbody  {
            position: absolute;
            width: 100%;
            left:0px;
            top:295px;
}

.md .block {
            margin-top:  0px; 
            margin-bottom: 0px;
}

.md .list {
            margin:  0px;  
}

.md .list .item-content {
    padding-left: 0px;
}

.md .list ul ul {
    padding-left: 12px;
}

.md .inline-labels .item-label {
    font-size: 14px;
    width: 104px;
}

.list .item-input-wrap {
    width: 130px;
}
.md .inline-labels .item-label+.item-input-wrap {
    margin-left: 68px;
}

.md .list .item-inner {
    min-height: 48px;
    padding-right: 0px;
    padding-top: 0px;
}

</style>
<template>
  <f7-page>
          <div>
                <div class="navbar-inner" id = "divheader">
                  <div>
                        <a href = "#" @click="goBack()">
                          <img  class = "back_img" src="@/assets/icon_all/back_white.png"/>
                        </a>
                        <img  class = "yz_img" src="@/assets/icon_all/sheep.png" />
                        <img  class = "yz_icon" src="@/assets/icon_all/sheep.png" />
                        <div class = "yz_name">
                            <label class = "namescolor_2">{{this.in_21Item_Short.引导人姓名}}</label>
                        </div>
                        
                        <a class="panel-open raised " data-panel="right" href="#"> <!--@click="goto_ggstatus()-->
                          <img  class = "more_icon" src = "@/assets/icon_all/more.png">
                        </a>
                        <div class = "gg_headidentity">
                            <label class = "gg_identity_font">{{b_load_21Item == 0?'稍等':l_retdata.datas[0].姓名.substr(0,1)}}</label>
                        </div>
                        <div class = "gg_statusidentity">
                            <label class = "gg_status_font">{{b_load_21Item == 0?'稍等':l_retdata.datas[0].阶段}}</label>
                        </div>
                        <div class = "username_1">
                            <label class = "namescolor_1">{{b_load_21Item == 0?'稍等':l_retdata.datas[0].姓名}}</label>
                        </div>
                        <div class = "username_2">
                            <label class = "namescolor_2">{{b_load_21Item == 0?'稍等':l_retdata.datas[0].微信}}</label>
                        </div>
                  </div>
                  <div id = "mybar">
                  <f7-navbar class = "subnavbar">
                    <f7-nav-left v-if="relation_of_this_one > 1" :class="class_link_active" href="#tab1">基本信息</f7-nav-left>
                    <f7-nav-center v-else :class="class_link_active" href="#tab1">基本信息</f7-nav-center>
                    <f7-nav-center v-if="relation_of_this_one > 1" :class="class_link_inactive" href="#tab2">活动记录</f7-nav-center>
                    <f7-nav-right v-if="relation_of_this_one > 1" :class="class_link_inactive" href="#tab3">修改历史</f7-nav-right>
                  </f7-navbar>
                  </div>
                  <!--<div class="subnavbar" id = "mybar">
                        <a :class="class_link_1" href="#tab1">基本信息</a>
                        <a :class="class_link_2" href="#tab2">活动记录</a>
                        <a :class="class_link_3" href="#tab3">修改历史</a>
                  </div>-->
                </div>
             
          
              <div id = "msgbody">
                <div class="tabs">
                  <div :class="[(jumpFrom != '活动编辑')?class_tab_active:class_tab_inactive]" id="tab1" >
                    <div class="block">
                      <f7-list v-if="b_load_21Item == 1">
                          <f7-list-item 
                              v-for="(item, index) in this.l_showggtitle_data"
                                :key="index"
                                v-if="l_retdata.datas[0][item.value] != null">
                              <div>
                                  <f7-label><font class = "mylabelfont">{{item.value}}</font></f7-label>
                                  <f7-label>{{l_retdata.datas[0][item.value]}}</f7-label>
                              </div>
                          </f7-list-item>
                      </f7-list>
                    </div>
                    <div class = "footbox">
                      <div class = "footfont">
                        <a href = "#" @click="add21Item()">
                            <label v-if="relation_of_this_one == 3" class = "footnamecolor">添加信息</label>
                            <label v-else-if="relation_of_this_one == 2" class = "footnamecolor">添加信息</label>
                            <label v-else-if="relation_of_this_one == 1" class = "footnamecolor">取消收藏</label>
                            <label v-else class = "footnamecolor">收藏</label>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div :class="[(jumpFrom == '活动编辑')?class_tab_active:class_tab_inactive]" id="tab2">
                    <div class="block">
                      <f7-list v-if="b_load_activity == 1 && relation_of_this_one > 1">
                            <f7-list-item
                                v-for="(item, index) in l_retactivitydata.datas"
                                :key="index">
                                <a href = "#" class="item-link item-content" @click="local_setSelectedActivity(item.键值, index)">    
                                  <div >
                                          <f7-label><font class = "mylabelfont">{{item.活动名称}}</font></f7-label>
                                          <f7-label>{{item.活动日期}}</f7-label>
                                  </div>
                                </a>
                            </f7-list-item>
                      </f7-list>
                    </div>
                    <div class = "footbox">
                      <div class = "footfont">
                        <a href = "#" @click="addActivity()">
                            <label class = "footnamecolor">添加记录</label>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div v-if="relation_of_this_one > 1" :class="class_tab_inactive" id="tab3">
                    <div class="block">
                      <p>版面制作中,敬请期待...</p>
                    </div>
                  </div>
                </div>
          </div>  
          </div>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

