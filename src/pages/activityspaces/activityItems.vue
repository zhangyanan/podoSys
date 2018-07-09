<!-- 当前页面名称： 活动编辑-->
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
            inputname:"",
            inputdate:"",
            selectOption:"",
            inputresponse:"",
            in_activity_datas:"",
            in_ggId:"",
            in_ggName:"",
            l_title_name:""}
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

    goBack()    {
        //设置激活的tab
        //sessionStorage.setItem('hotPageAtGGFile',1)
        //window.location.href ='/gglist/'
        this.gotoPodosysAnyPage('蝈蝈信息')
        this.$f7router.navigate('/gglist/')
    },

    comfirmActivityData()   {
        if (this.l_title_name == "编辑记录")  
            this.local_updateActivityData()
        else
            this.local_insertActivityData()

        //this.goBack()
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
            tempValues = tempValues + this.inputresponse + ","
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
            tempValues = tempValues + this.inputresponse + ","
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
        
    }
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

#menu_font_1{
            position: absolute;
            width: 199px;
            height: 21px;
            left:12px;
            top:16px;
            font-size: 14px;
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
            width:100%;
            height: 140px;
            left:0px;
            top:50px;
}

.divresponse2   {
            position: absolute;
            width:70%;
            height: 70%;
            left:17px;
            top:17px;
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
            width: 40px;
            height: 28px;
            left:157px;
            top:30px;
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
.mybox:hover{
            border-style:solid; 
            border-width:2px;
            border-color: rgb(146, 247, 247);
}
.mylist{
            margin-bottom: 12px;
}
.mybox{
            border-style:solid; 
            border-width:1px;
            border-color:rgb(194, 191, 191);
            margin-top: 6px;
}

.mylabelfont{
            color:black;
}
.mylabelbox{
            text-align:left;
            font-size: 3em;
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
.listitem{
            background-color:cornsilk
}

.test{
            position: absolute;
            width: 100%;
            height: 140px;
            left:0px;
            top:1804px;
            background: #FF6D7F;
}

.bottombtn{
            position: absolute;
            width: 100%;
            height: 60px;
            left:0px;
            top:2004px;
            background: #FF6D7F;
}

.md .list {
    margin: 0 0;
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

.md a.link {
    padding-left: 0px;
    height: 0px;
}

</style>
<template>
  <f7-page>
    <div class = "ggfile_div">
        <div class = "divheader">
            <a href = "#" @click="goBack()">
                <img  class = "back_img" src="@/assets/icon_all/back_white.png" />
            </a>
            <div class = "title_position">
                <f7-label id = "title_font_big">{{l_title_name}}</f7-label>
            </div>
        </div>
        <div class = "divbody">
            <div class = "divitems">
                <f7-list>
                    <f7-list-item>
                        <f7-label id = "menu_font_1">活动记录</f7-label>
                    </f7-list-item>
                    <f7-list-item>
                            <div class="list inline-labels no-hairlines-md">
                                <f7-list>
                                    <f7-list-item  class="item-content item-input">  
                                        <div class="item-inner">
                                            <div class="item-title item-label">
                                                活动名称
                                            </div>
                                            <div class="item-input-wrap">
                                                <f7-input type="text" dir="rtl" :value="inputname" @input="inputname = $event.target.value" clear-button></f7-input>
                                            </div>
                                        </div>
                                    </f7-list-item>
                                    <f7-list-item  class="item-content item-input">  
                                        <div class="item-inner">
                                            <div class="item-title item-label">
                                                活动类型
                                            </div>
                                            <div class="item-input-wrap">
                                                <!--<f7-input type="select" :value="selectOption" @change="selectOption = $event.target.value">
                                                    <option  v-for="(itemmenu, index) in this.l_activitytype_data" :key="index">
                                                    {{itemmenu.value}}</option>
                                                </f7-input>-->
                                                <select v-model="selectOption">
                                                    <option v-for="(itemmenu) in this.l_activitytype_data" :key="itemmenu.value">
                                                    {{itemmenu.value}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </f7-list-item>
                                    
                                    <f7-list-item  class="item-content item-input">
                                        <div class="item-inner">
                                            <div class="item-title item-label">
                                                活动日期
                                            </div>
                                            <div class="item-input-wrap">
                                                <f7-input type="date" :value="inputdate" @change="inputdate = $event.target.value">
                                                </f7-input>
                                            </div>
                                        </div>
                                    </f7-list-item>
                                </f7-list>
                            </div>
                    </f7-list-item>
                    <f7-list-item>
                        <div class = "menu_box_5">
                            <f7-label id = "title_font_small">活动反馈</f7-label>
                        </div>   
                        <div class = "divresponse"> 
                            <!--<div class = "divresponse2">-->
                                <textarea type="text" :value="inputresponse" @input="inputresponse = $event.target.value"></textarea>             
                            <!--</div>-->
                        </div>
                    </f7-list-item>
                                    
                                
                            
                            <!--
                            <div class = "divitems">
                                <f7-label id = "menu_font_1">活动记录</f7-label>
                                <div class = "menu_box_2">
                                    <f7-label class = "menu_font_2">活动名称</f7-label>
                                    <f7-input type="text" dir="rtl" :value="inputname" @input="inputname = $event.target.value"></f7-input>
                                </div>
                                <div class = "menu_box_3">
                                    <f7-label class = "menu_font_3">活动类型</f7-label>
                                    <f7-input class = "inputtype" type="select" :value="selectOption" @change="selectOption = $event.target.value">
                                        <option  v-for="(itemmenu, index) in this.l_activitytype_data" :key="index">
                                            {{itemmenu.value}}</option>
                                    </f7-input>
                                </div>
                                <div class = "menu_box_4">
                                    <f7-label class = "menu_font_4">活动日期</f7-label>
                                    
                                    <div class="item-content item-input">
                                        <div class="item-inner">
                                        <div class="item-input-wrap">
                                            <input type="text" readonly="readonly" id="demo-calendar-default"/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class = "divresponse">
                                    <div class = "divtitle">
                                        <f7-label id = "title_font_small" class = "menu_font_5">活动反馈</f7-label>
                                    </div>
                                    <div class = "divmsgbody">
                                        <f7-input type="text" dir="rtl" :value="inputresponse" @input="inputresponse = $event.target.value"></f7-input>
                                    </div>
                                </div>    
                            </div>
                            -->
                </f7-list>
            </div>
            <div class = "divfoot">
                <f7-link href="#" class="menu_foot" id = "title_font_middle" @click="comfirmActivityData()">完成</f7-link>
            </div>
        </div>
    </div>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

