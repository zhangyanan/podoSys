<!-- 当前页面名称： 活动编辑-->
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
            inputname:"",
            inputdate:"",
            selectOption:null,
            selectPC:true,
            inputresponse:"",
            in_activity_datas:"",
            in_ggId:"",
            in_ggName:"",
            l_title_name:"",
            l_loadItem:false,}
  },
  computed: {
    ...mapGetters('configdata', [
      'l_activitytype_data'
    ]),

    ...mapGetters('datainterchange', [
      'selectedActivity'
    ]),
    
    ...mapGetters('listdata',['l_retactivitydata']),
    ...mapGetters('listdata',['l_retdata']),
    ...mapGetters('listdata',['l_ret_personal_imf_s']),

  },
  created () {
    //自动生成2.
    //this.getGenderList()   
    /*create lines are created by machine @ 2018-06-12 16:44:50*/
    this.get_l_activitytype_datalist()
    //当前处于添加状态
    this.l_title_name = "添加记录"
    //this.in_ggId = sessionStorage.getItem('selectedGGId')
    //this.in_ggName = sessionStorage.getItem('selectedGGName')
    var activityData = this.selectedActivity
    if (activityData != '-1')
    {
        //console.log(sessionStorage.getItem('selectedActivityData'))
        //读出原始纪录
        this.in_activity_datas = this.l_retactivitydata.datas[activityData]
        //渲染页面数据
        this.inputname = this.in_activity_datas.活动名称
        this.inputdate = this.in_activity_datas.活动日期
        //this.inputname = this.in_activity_datas.活动内容
        this.selectOption = this.in_activity_datas.活动类型
        this.inputresponse = this.in_activity_datas.活动反馈
        //console.log(this.selectOption)
        //当前处于编辑状态
        this.l_title_name = "编辑记录"
    }  
    
    //1s以后进行刷新
    this.timeout(1000).then(() => {
                this.l_loadItem = true
      });
  },
  methods: {
    ...mapActions('listdata',[
      'insertformvalues'
    ]),
    
    ...mapActions('listdata',[
      'updateformvalues'
    ]),

    ...mapActions('listdata',[
      'updateActivityInStore'
    ]),

    ...mapActions('configdata',[
      'get_l_activitytype_datalist'
    ]),

    ...mapActions('datainterchange',[
      'getSelectedActivity'
    ]),

    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),

    comfirmActivityData()   {
        if (this.l_title_name == "编辑记录")  
            this.local_updateActivityData()
        else
            this.local_insertActivityData()

        //this.goBack()
    },

    //通过正则表达式实现将strSrc中的strOld全部替换strNew
    reg_replace(strSrc, strOld, strNew)
    {
        var reg = new RegExp(strOld, "g")
        var newstr = strSrc.replace(reg, strNew);
        return newstr
    },

    local_insertActivityData()    {
        var tempNames = ""
        var tempValues = ""
        var bInsert = false;

        //活动名称修改了吗
        if(this.inputname != "")
        {
            tempNames = tempNames + "活动名称,"
            tempValues = tempValues + this.inputname + ","
            bInsert = true
        }
            
        //时间修改了吗
        if(this.inputdate != "")
        {
            tempNames = tempNames + "活动日期,"
            tempValues = tempValues + this.inputdate + ","
            bInsert = true
        }    
        //类型修改了吗
        if(this.selectOption != "")
        {
            tempNames = tempNames + "活动类型,"
            tempValues = tempValues + this.selectOption + ","
            bInsert = true
        }    

        //反馈内容修改了吗
        if(this.inputresponse != "")
        {
            tempNames = tempNames + "活动反馈,"
            var tempStr = this.reg_replace(this.inputresponse, ',', '，')
            tempValues = tempValues + tempStr + ","
            bInsert = true
        }    

        if(bInsert == true)
        {
            //保存蝈蝈的姓名
            tempNames = tempNames + "姓名,"
            tempValues = tempValues + this.l_retdata.datas[0].姓名 + ","
            //保存蝈蝈关联表单
            tempNames = tempNames + "蝈蝈关联表单,"
            tempValues = tempValues + this.l_retdata.datas[0].键值 + ","

            var sqldata = JSON.stringify({
                    "in_tablename":"活动通知",
					"in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
					"in_fieldnames":tempNames,
					"in_fieldvalues":tempValues,
					})
            //console.log(sqldata)
            this.insertformvalues(sqldata)
        }
    },

    local_updateActivityData()    {
        var tempNames = ""
        var tempValues = ""
    
        var bUpdate = false;

        //名称修改了吗
        if(this.inputname != this.in_activity_datas.活动名称)
        {
            tempNames = tempNames + "活动名称,"
            tempValues = tempValues + this.inputname + ","
            bUpdate = true
        }
            
        //时间修改了吗
        if(this.inputdate != this.in_activity_datas.活动日期)
        {
            tempNames = tempNames + "活动日期,"
            tempValues = tempValues + this.inputdate + ","
            bUpdate = true
        }    
        //类型修改了吗
        if(this.selectOption != this.in_activity_datas.活动类型)
        {
            tempNames = tempNames + "活动类型,"
            tempValues = tempValues + this.selectOption + ","
            bUpdate = true
        }    

        //反馈内容修改了吗
        if(this.inputresponse != this.in_activity_datas.活动反馈)
        {
            tempNames = tempNames + "活动反馈,"
            var tempStr = this.reg_replace(this.inputresponse, ',', '，')
            tempValues = tempValues + tempStr + ","
            bUpdate = true
        }    

        if(bUpdate == true)
        {
            var msgid = this.in_activity_datas.键值
            var sqldata = JSON.stringify({
					"in_formdataid":msgid,
					"in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
					"in_fieldnames":tempNames,
					"in_fieldvalues":tempValues,
					})
            console.log(sqldata)
            this.updateformvalues(sqldata)

            //更新store里的值
            //console.log(this.selectedActivity)
            var storedata = new Object()
            storedata.index = this.selectedActivity
            storedata.data = JSON.parse(sqldata)
            //console.log(storedata)
            this.updateActivityInStore(JSON.stringify(storedata))
        }
        
    },

    timeout(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
                })
      },
  }
}

/*function showValue()
{
  document.getElementById("price-value").value=document.getElementById("my-range").value;
  console.log(document.getElementById("price-value").value);
}
var $$ = Dom7;
$$('#my-range').on('range:change', function (e, range) {
  $$('.price-value').text('$'+(range.value));
});*/
</script>
<style>

.ggfile_div{
    width: 100%;
}

.md .activity-page .navbar .content-title {
    color: #ffffff
}
.divheader{
            position: absolute;
            width: 100%;
            height: 90px;
            left:0px;
            top:0px;
            background: #54BCBF;
}

.back_img{
            position: absolute;
            width: 20px;
            height: 18px;
            left:19px;
            top:46px;
}

.title_position{
            position: absolute;
            width: 88px;
            left:144px;
            top:48px;
}

#title_font_big {
            font-size:22px;
            color: #ffffff;
}

#title_font_middle {
            font-size:20px;
            color: #ffffff;
}

#title_font_small {
            font-size:14px;
            color: #ffffff;
            position: absolute;
            top:14px;
            left:13px;
}

.divbody{
            position: absolute;
            width: 100%;
            height: 580px;
            left:0px;
            top:87px;
            background: #EFF0F4;
}



.divitems {
            position: absolute;
            width: 352px;
            height: 412px;
            left:12px;
            top:19px;
            background: #ffffff;
}

#menu_font_1 {
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 16px);
    top: 16px;
    font-size: 14px;
    padding-left: 12px;
    border-bottom: solid 1px rgba(74, 74, 74, 0.1);
}



.menu_box_2 {
            position: absolute;
            width: 328px;
            height: 37px;
            left:12px;
            top:73px;
            border: #E3E4E8 solid 1px
}

.menu_font_2{
            position: absolute;
            width: 104px;
            height: 21px;
            left:13px;
            top:8px;
            font-size: 14px;
}

.menu_box_3 {
            position: absolute;
            width: 328px;
            height: 37px;
            left:12px;
            top:119px;
            border: #E3E4E8 solid 1px
}

.menu_font_3{
            position: absolute;
            width: 104px;
            height: 21px;
            left:13px;
            top:8px;
            font-size: 14px;
}

.menu_box_4 {
            position: absolute;
            width: 328px;
            height: 37px;
            left:12px;
            top:164px;
            border: #E3E4E8 solid 1px
}

.menu_font_4{
            position: absolute;
            width: 104px;
            height: 21px;
            left:13px;
            top:8px;
            font-size: 14px;
}

.divresponse    {
            position: absolute;
            width: calc(100% - 25px);
            height: 140px;
            top:0px;
            margin-left: 12px;
            margin-right: 12px;
            border-style:solid; 
            border-width:1px;
            border-color:rgb(194, 191, 191);
            color: #000000;
}

.md .list .divresponse .inputdiv {
    color: #000000;
    height:100%;
}
.md .list .divresponse .inputnum {
    position: absolute;
    right:12px;
    top:106px;
    width:20%;
    size: 15px;
    text-align: right;
}

.divtitle   {
            position: absolute;
            width: 328px;
            height: 37px;
            background: #54BCBF
}

.menu_box_5 {
            background: #54BCBF;
            height: 37px;
            width:100%;
}

.divmsgbody     {
            position: absolute;
            width: 294px;
            height: 150px;
            left:17px;
            top:50px;
}

.divfoot    {
            position: absolute;
            width: 353px;
            height: 60px;
            left:11px;
            top:464px;
            background:#54BCBF;
}

.menu_foot   {
            position: absolute;
            width: 100%;
            height: 60px;
            top:30px;
            background: #54BCBF;
            color: #ffffff;
            text-align: center;
            line-height: 60px;
            font-size: 20px;
}

.md .menu_foot a {
            color:#FFFFFF
}
.inputname  {
            position: absolute;
            width: 140px;
            height: 18px;
            right:11px;
            top:11px;
}

.inputtype  {
            position: absolute;
            width: 64px;
            height: 21px;
            right:11px;
            top:11px;
}




.iteminline{
            display: inline-block;
}

.mylist{
            margin-bottom: 12px;
}

.editbtn{
            width: 40px;
            height: 28px;
            position: absolute;
            left:168px;
            top:16px;
            font-size: 20px;
}
.pagebody{
            background-color: darkgray
}


.activity-row-header{
            background: #54BCBF;
            height: 90px;
}

.activity-row-body{
            background:#EFF0F4;
            margin-top: 19px;
}
.back-ground {
            background:#EFF0F4;
}
.md .list .liststyle-item .item-content{
            padding-left: 19px;
}       

.md .list .liststyle{
            margin: 0px;
}

.md .liststyle-item a.link{
            padding-left: 0px;
            background: #54BCBF;
}

.md .list .activity-col-header-title .item-content {
    padding: 0px;
    margin: 0px;
}

.title-pos{
    padding-left: 35%;
    width: 100px;
}

.activity-row-body .list{
    width: 100%;
    margin: 0;
}

.activitylist {
    background: #ffffff;
    width: 100%;
    margin-right: 3.2%;
    margin-left: 3.2%;
    list-style-type: none;
}

.md .list .activitylist .item-content {
    padding-left: 0px;
}

.md .activity-row-body .list-2 {
    margin:0px;
}
.md .list .list-2-item-1 .item-content {
    padding-left: 0px;
}
.md .list .list-2-item-1 .item-inner{
    padding: 0px;
}
.md .list .list-3-item-1 .item-content {
    padding-left: 0px;
}

.md .list .list3item1 .item-content{
    padding-left: 0px;
}

.md .list .list3item1 .item-inner{
    padding: 0px;
    margin: 0px;
}

.md .list .list3item2 .item-content{
    padding-left: 0px;
    min-height: 165px;
}

.md .list .list3item2 .item-inner{
    padding: 0px;
    margin: 0px;
}

.md .list .list4item1 .item-content{
    padding-left: 0px;
    min-height: 155px;
}

.md .list .list4item1 .item-inner{
    padding: 0px;
    margin: 0px;
    background: #EFF0F4;
}

.md .list .list-3-3-item-3 .item-content{
    padding-left: 0px;
}

.md .list .list-3-3-item-3 .item-inner{
    padding-right: 0px;
}

.mybox2{
    border-style:solid; 
    border-width:1px;
    border-color:rgb(194, 191, 191);
    margin-top: 6px;
    margin-left:12px;
    margin-right:12px;
    padding-left: 12px;
    height:37px;
    background: #54BCBF;
    width: calc(100% - 25px - 12px)
    }
.mybox2labelfont{
    color:#ffffff;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 21px;
}

.mylabelfont{
    color:black;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
    }

/******************************************/
/*.md .list{
    margin: 0px;
    }*/
.activity-page .page-content{
    background: #EFF0F4;
    }
.activity_mybox:hover{
    border-style:solid; 
    border-width:2px;
    border-color: rgb(146, 247, 247);
    }
.mylist{
    margin-bottom: 12px;
    }
.activity_mybox{
    border-style:solid; 
    border-width:1px;
    border-color:rgb(194, 191, 191);
    margin-top: 6px;
    margin-left: 12px;
    margin-right: 12px;
    height:37px;
    }

.mylabelfont{
    color:black;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
    }
.activity_mybox .mylabelbox{
    text-align:left;
    font-size: 3em;
    width: 110px;
    position: absolute;
    margin-left:0px;
    margin-top:8px;
    padding-left: 13px;
    height: 37px;
    line-height: 37px;
    }
.myinputbox{
    text-align:right;
    border-width:0px;
    font-size: 2em;
    }
.comfirmbtn{
    background-color: aquamarine
}

 .md .button-big.button span {
    padding-left: 0px;
}

.pagebody{
    background-color: darkgray
}

.md .navbar .content-title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.09px;
    line-height: 19px;
}
div.navbar-inner.sliding{
    background: #54BCBF;
    color:#FFFFFF;
}
.md .navbar .content-title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.09px;
    line-height: 19px;
    padding-left: 90px;
}
div.navbar-inner.sliding{
    background: #54BCBF;
    color:#FFFFFF;
    height: 65px;
}
.list.addinfo-list{
    margin: 19px 11px;
    background: #FFFFFF;
}
.navbar-inner {
    padding-left: 19px;
}
.md .navbar:after {
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    top: 100%;
    bottom: auto;
    height: 10px;
    pointer-events: none;
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),color-stop(40%,rgba(0,0,0,0)),color-stop(0,rgba(0,0,0,0)),color-stop(0,rgba(0,0,0,0)),to(rgba(0,0,0,0))); 
    background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0);
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0); 
}
.list .item-title {
    min-width: 0;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 21px;
}
div.gap{
    height: 13px;
    background: #EFF0F4;
}
.accordion-item-content{
   padding-bottom: 0px;
}
.accordion-item.accordion-item-opened{
    padding-bottom: 26px;
    
}
  .md .button {
    color: #54BCBF;
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
  .md .button.button-big, .md .button.button-big-md {
    height: 60px;
    line-height: 60px;
    border-radius: 4px;
    margin: 0px 11px;
  }
  .md .button.button-active, .md .button.button-fill, .md .button.button-fill-md, .md .button.tab-link-active {
    background-color: #54BCBF;
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 3px;
    margin-top: 210px;
  }

  .md .list .activity_mybox .select-box .item-content {
    padding-left: 0px;
}

.md .list .myinputbox input[type=date] {
    width: 130px;
    height: 37px;
    line-height: 37px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-right: 11px;
    color: #000000;
}
.md .list .myinputbox input[type=text] {
    width: 179px;
    height: 37px;
    line-height: 37px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-right: 11px;
    color: #000000;
}
/******************************************/
</style>
<template>
  <f7-page class="activity-page">
      <v-addinfo :title='l_title_name'></v-addinfo>
      <f7-block class="back-ground">
        <!--<f7-row no-gap class="activity-row-header">
                <f7-col class="activity-col-header" width="20">
                    <f7-list class = "liststyle">
                    <f7-list-item class = "liststyle-item">
                        <f7-link class = "link-item" href = "#" @click="goBack()">
                        <img src="@/assets/icon_all/back_white.png"/>
                        </f7-link>
                    </f7-list-item>            
                </f7-list>
                </f7-col>
                <f7-col width="80">
                    <f7-list>
                        <f7-list-item class="activity-col-header-title">
                            <div class="title-pos">{{l_title_name}}</div>
                        </f7-list-item>
                </f7-list>
                </f7-col>
        </f7-row>-->
        <f7-row no-gap class="activity-row-body">
            <div class = "activitylist">
            <f7-list class="list-2">
                    <f7-list-item class="list-2-item-1">
                        <f7-label id = "menu_font_1">活动记录</f7-label>
                    </f7-list-item>
            </f7-list>
            <f7-list class="list-3">
                <f7-block>
                                    <f7-list-item class="list3item1">  
                                        
                                        <div class="activity_mybox">
                                            <div class="mylabelbox">
                                                <f7-label><font class="mylabelfont">活动名称</font></f7-label>
                                            </div>
                                            <div class="myinputbox">

                                                <f7-input type="text" dir="rtl" align="right" maxlength="10" :value="inputname" @input="inputname = $event.target.value" clear-button></f7-input>
                                            </div>
                                        </div>
                                       
                                    </f7-list-item>
                                 </f7-block>
                                    <f7-block> 
                                        <div class="activity_mybox">
                                            <f7-list-item smart-select :smart-select-params="{openIn: 'popover'}" title="活动类型" class="activity-type-list">
                                                <!-- Select with values inside -->
                                            
                                                    <select v-model="selectOption" name="activityType">
                                                            <option disabled>{{selectOption}}</option>
                                                            <option v-for="itemmenu in this.l_activitytype_data"                                                        v-if="selectOption != itemmenu.value"
                                                            :key="itemmenu.value" :value="itemmenu.value">
                                                            {{itemmenu.value}}</option>
                                                    </select>
                                                
                                            </f7-list-item>
                                        </div>
                                    </f7-block>
                                    <f7-block> 
                        <f7-list-item class="list3item1">
                            <div class="activity_mybox">
                                <div class="mylabelbox">
                                    <f7-label><font class="mylabelfont">活动日期</font></f7-label>
                                </div>
                                <div class="myinputbox">
                                        <f7-input type="date" dir="rtl" align="right" :value="inputdate" @input="inputdate = $event.target.value" clear-button></f7-input>
                                </div>
                            </div>  
                        </f7-list-item>    
                                    </f7-block>
                                    <f7-block> 
                    <f7-list-item class="list3item1">
                        <div class="mybox2">
                                <div class="mylabelbox">
                                    <f7-label><font class="mybox2labelfont">活动反馈</font></f7-label>
                                </div>
                        </div>  
                    </f7-list-item>
                                    </f7-block>
                                    <f7-block> 
                    <f7-list-item class="list3item2"> 
                        <div class="mybox3">
                            <div class = "divresponse"> 
                                <!--<div textareaclass = "divresponse2">-->
                                    <f7-input class="inputdiv" type="textarea" maxlength="100" :value="inputresponse" @input="inputresponse = $event.target.value"></f7-input>         
                                <!--</div>-->
                                    <f7-label class="inputnum">{{inputresponse.length + '/100'}}</f7-label>
                            </div>
                        </div>
                    </f7-list-item>
                 
                                    </f7-block>

            </f7-list>
            <f7-list class="list-4">
                <f7-list-item class="list4item1">   
                        <div class="menu_foot">      
                            <f7-link @click="comfirmActivityData()">完成</f7-link>    
                        </div>         
                </f7-list-item>   
            </f7-list>
            </div>
        </f7-row>
      </f7-block>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

