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


.activity-row-header{
            background: #FF6D7F;
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
            background: #FF6D7F;
}

.md .list .activity-col-header-title .item-content {
    padding-left: 0px;
}

.title-pos{
    padding-left: 35%;
    width: 100px;
}

.activity-row-body .list{
    width: 100%
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

.md .list .list-2-item-1 .item-content {
    padding-left: 0px;
}

.md .list .list-3-item-1 .item-content {
    padding-left: 0px;
}

.md .list .list3item1 .item-content{
    padding-left: 0px;
}

.md .list .list3item1 .item-inner{
    padding-right: 0px;
}

.md .list .list-3-3-item-3 .item-content{
    padding-left: 0px;
}

.md .list .list-3-3-item-3 .item-inner{
    padding-right: 0px;
}



.mybox{
    border-style:solid; 
    border-width:1px;
    border-color:rgb(194, 191, 191);
    margin-top: 6px;
    margin-left:12px;
    margin-right:12px;
    padding-left: 13px;
    width: 100%;
    height:37px;
    }

.mybox2{
    border-style:solid; 
    border-width:1px;
    border-color:rgb(194, 191, 191);
    margin-top: 6px;
    margin-left:12px;
    margin-right:12px;
    padding-left: 13px;
    width: 100%;
    height:37px;
    background: #54BCBF;
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
.mylabelbox{
    display: inline-block;
    text-align:left;
    font-size: 3em;
    width: 110px;
    }
.myinputbox{
    display: inline-block;
    border-width:0px;
    font-size: 2em;
    text-align: right;
    margin-right: 9px;
    }
</style>
<template>
  <f7-page>
      <f7-block class="back-ground">
        <f7-row no-gap class="activity-row-header">
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
        </f7-row>
        <f7-row no-gap class="activity-row-body">
            <div class = "activitylist">
            <f7-list class="list-2">
                    <f7-list-item class="list-2-item-1">
                        <f7-label id = "menu_font_1">活动记录</f7-label>
                    </f7-list-item>
            </f7-list>
            <f7-list class="list-3">
                    
                                 
                                    <f7-list-item class="list3item1">  
                                        <div class="mybox">
                                            <div class="mylabelbox">
                                                <f7-label><font class="mylabelfont">活动名称</font></f7-label>
                                            </div>
                                            <div class="myinputbox">
                                                <input type="tel" dir="rtl" v-model="inputname" clear-button>
                                            </div>
                                        </div>
                                        
                                    </f7-list-item>
                                
                                 
                                    <f7-list-item smart-select title="活动类型" class="activity-type-list">
                                        <!-- Select with values inside -->
                                        <select v-model="selectOption" name="activityType">
                                                <option disabled>{{selectOption}}</option>
                                                <option v-for="itemmenu in this.l_activitytype_data" 
                                                :key="itemmenu.value" :value="itemmenu.value">
                                                {{itemmenu.value}}</option>
                                        </select>
                                    </f7-list-item>
                                                 
                        <f7-list-item class="list3item1">
                            <div class="mybox">
                                <div class="mylabelbox">
                                    <f7-label><font class="mylabelfont">活动日期</font></f7-label>
                                </div>
                                <div class="myinputbox">
                                    <input type="date" :value="inputdate" @change="inputdate = $event.target.value">
                                </div>
                            </div>  
                        </f7-list-item>    
                                    
                           
                                
            

                    <f7-list-item class="list3item1">
                        <div class="mybox2">
                                <div class="mylabelbox">
                                    <f7-label><font class="mybox2labelfont">活动反馈</font></f7-label>
                                </div>
                        </div>  
                    </f7-list-item>

                    <f7-list-item class="list3item1"> 
                        <div class = "divresponse"> 
                            <!--<div class = "divresponse2">-->
                                <textarea type="text" :value="inputresponse" @input="inputresponse = $event.target.value"></textarea>             
                            <!--</div>-->
                        </div>
                    </f7-list-item>
                 
                    <f7-list-item>                
                        <f7-link href="#" class="menu_foot" id = "title_font_middle" @click="comfirmActivityData()">完成</f7-link>             
                    </f7-list-item>     

            </f7-list>
            </div>
        </f7-row>
      </f7-block>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

