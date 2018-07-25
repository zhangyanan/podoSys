
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
        s_ggStatus:"",
        s_response:"",
        ggId:"",
        s_ggName:"",
        ggStatusId:"",
        ggStatusForm:[],
        in_gg21Item:"",
            }
  },
  computed: {
    ...mapGetters('listdata',['l_retdata']),
    ...mapGetters('listdata',['l_ret_personal_imf_s']),
    ...mapGetters('datainterchange',['selectedGGStatus']),
  },
  created () {
    //this.ggId = sessionStorage.getItem('selectedGGId')
    //this.s_ggName = sessionStorage.getItem('selectedGGName')
    //this.s_ggStatus = sessionStorage.getItem('selectedGGStatus')
    //this.response = sessionStorage.getItem('selectedGGReason')
    //this.ggStatusId = sessionStorage.getItem('selectedGGStatusId')

    this.getGGStatus()
  },
  methods: {
    ...mapActions('listdata',[
      'getGGStatusFormValues'
    ]),
    ...mapActions('listdata',[
      'updateformvalues'
    ]),

    //返回上一个页面 无需参数
    ...mapActions('datainterchange',[
    'gotoPrevPage'
    ]),

    //通过正则表达式实现将strSrc中的strOld全部替换strNew
    reg_replace(strSrc, strOld, strNew)
    {
        var reg = new RegExp(strOld, "g")
        var newstr = strSrc.replace(reg, strNew);
        return newstr
    },

    goBack()    {
        //this.gotoPodosysAnyPage('')
        this.gotoPrevPage('')
        this.$f7router.navigate('/gglist/')
    },

    getGGStatus()  {
        /*var formname = "状态标签"
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

        console.log(sqldata)
        this.getGGStatusFormValues(sqldata)*/
        //console.log(sessionStorage.getItem('selectedGG21Item'))
        this.in_gg21Item = this.l_retdata.datas[0] 
        //this.in_gg21Item = JSON.parse(sessionStorage.getItem('selectedGG21Item'))
        this.s_ggName = this.in_gg21Item.姓名
        this.ggId = this.in_gg21Item.键值
        this.s_ggStatus = this.selectedGGStatus
        this.s_response = this.in_gg21Item.状态变更原因 ?  this.in_gg21Item.状态变更原因 : "请录入状态变更原因"
    },
    
    updateStatusData()    {
        var tempNames = ""
        var tempValues = ""
        
        var bUpdate = false;

        //状态修改了吗
        if(this.s_ggStatus != this.in_gg21Item.状态)
        {
            tempNames = tempNames + "状态,"
            tempValues = tempValues + this.s_ggStatus + ","
            bUpdate = true
        }

        //反馈内容修改了吗
        if(this.s_response != this.in_gg21Item.状态变更原因 
            && this.s_response != "" && this.s_response != "请录入状态变更原因")
        {
            tempNames = tempNames + "状态变更原因,"
            var tempstr = this.reg_replace(this.s_response, ',', '，')
            tempValues = tempValues + tempstr + ","
            bUpdate = true
        }    

        if(bUpdate == true)
        {
            var statusid = this.ggId
            //this.ggStatusId
          
            var sqldata = JSON.stringify({
					"in_formdataid":statusid,
					"in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
					"in_fieldnames":tempNames,
					"in_fieldvalues":tempValues,
					})
            console.log(sqldata)
            this.updateformvalues(sqldata)
        }
        
        //window.location.href ='/gglist/'
    }
  }
}

</script>
<style>

.ggstatus_div{
    width: 100%;
}

.back_img{
            position: absolute;
            width: 20px;
            height: 18px;
            left:19px;
            top:46px;
}

.clock_img{
            position: absolute;
            width: 199px;
            height: 199px;
            left:-52px;
            top:62px;
}
.title_zn_position {
            position: absolute;
            width: 152px;
            height: 52px;
            left:178px;
            top:142px;
}

.title_en_position {
            position: absolute;
            width: 152px;
            height: 52px;
            left:210px;
            top:121px;
}
.title_font_big {
            color: #54BCBF;
            font-size: 38px;
}
.title_font_en {
            color: #54BCBF;
            font-size: 26px;
}
.downline   {
            position: absolute;
            width: 91px;
            height: 6px;
            left:239px;
            top:194px;
            background: #54BCBF;
}

.line_1 {
            position: absolute;
            width: 100%;
            height: 2px;
            left:-0.5px;
            top:290.5px;
            background: #4A4A4A;
            border:none;
            opacity:0.1;
}

.line_2 {
            position: absolute;
            width: 100%;
            height: 2px;
            left:-0.5px;
            top:352.5px;
            background: #4A4A4A;
            border:none;
            opacity:0.1;
}

.line_3 {
            position: absolute;
            width: 100%;
            height: 2px;
            left:-0.5px;
            top:417.5px;
            background: #4A4A4A;
            border:none;
            opacity:0.1;
}

.img_1  {
            position: absolute;
            width: 17px;
            height: 21px;
            left:31px;
            top:19.5px;
}

.field_name {
            position: absolute;
            width: 100px;
            height: 21px;
            left:63px;
            top:15.5px;
}

.value_name {
            position: absolute;
            width: 100px;
            height: 21px;
            right:0px;
            top:17.5px;
}

.img_2  {
            position: absolute;
            width: 16px;
            height: 18.9px;
            left:31px;
            top:20.5px;
}

.field_status {
            position: absolute;
            width: 91px;
            height: 21px;
            left:63px;
            top:18.5px;
}

.value_status {
            position: absolute;
            width: 91px;
            height: 21px;
            right:10px;
            top:15.5px;
}

.name_font  {
            font-size: 16px;
            color: #4A4A4A;
}
.md .list .div_reason_box {
            height:87px;
            margin-left:32px;
            margin-right:32px;
            background: #f2f2f2
}
.md .list .div_reason_box .inputnum {
    position: absolute;
    right:32px;
    top:115px;
    width:20%;
    size: 15px;
    text-align: right;
}

.inputresponsebox   {
            margin-left:17px;
            margin-right:17px;
            margin-top:26px;
            margin-bottom:26px;
}

.footfont  {
            width: 100%;
            height: 60px;
            background: #54BCBF;
            line-height: 60px;  
            text-align: center;

}

.footnamecolor  {
            color: #ffffff;
            font-size: 20px;
}

.md .list .ggstatus-list-item-1 .item-content {
            margin: 0;
            padding: 0;
            height: 270.5px;
}

.md .list .ggstatus-list-item-1 .item-inner {
            margin: 0;
            padding: 0;
}

.md .list .ggstatus-list-item-2 .item-content {
            margin: 0;
            padding: 0;
            height: 60px;
}

.md .list .ggstatus-list-item-2 .item-inner {
            margin: 0;
            padding: 0;
}

.md .list .ggstatus-list-item-3 .item-content {
            margin: 0;
            padding: 0;
            height: 187.5px;
}

.md .list .ggstatus-list-item-3 .item-inner {
            margin: 0;
            padding: 0;
}

.md .list .ggstatus-list-item-4 .item-content {
            margin: 0;
            padding: 0;
            height: 60px;
}

.md .list .ggstatus-list-item-4 .item-inner {
            margin: 0;
            padding: 0;
}

.ggstatus-box {
            margin: 0;
            padding: 0;
}

.ggstatus-page .page-content {
    background: #ffffff;
}

.md .value_name .item-input-wrap:after {
    background-color: #ffffff;
}

.md .value_status .item-input-wrap:after {
    background-color: #ffffff;
}
</style>
<template>
  <f7-page class="ggstatus-page">
    <f7-list class="ggstatus-list">
        <f7-list-item class = "ggstatus-list-item-1">
            <div class = "ggstatus-box">
                <a href="#" @click="goBack()">
                    <img  class = "back_img" src="@/assets/icon_all/back_green.png" />
                </a>
                <img class = "clock_img" src="@/assets/icon_all/clock@2x.png" />
                <div class = "title_zn_position">
                    <span><font class = "title_font_big">变更原因</font></span>
                </div>
                <div class = "title_en_position">
                    <span><font class = "title_font_en">REASONS</font></span>
                </div>
                <hr class = "downline">
            </div>
        </f7-list-item>
        <f7-list-item  class = "ggstatus-list-item-2">
            <div class = "ggstatus-box">
                <img  class = "img_1" src="@/assets/icon_all/account_name.png" />
                <f7-label class = "field_name"><font class = "name_font">姓名</font></f7-label>
                <div class = "value_name">
                    <f7-input  disabled><font class = "name_font">{{s_ggName}}</font></f7-input>
                </div>
            </div>
        </f7-list-item>
        <f7-list-item class = "ggstatus-list-item-2">
            <div class = "ggstatus-box">
                <img  class = "img_2" src="@/assets/icon_all/status_change.png" />
                <label class = "field_status"><font class = "name_font">状态变为</font></label>
                <div class = "value_status">
                    <f7-input disabled><font class = "name_font">{{s_ggStatus}}</font></f7-input>
                </div>
            </div>
        </f7-list-item>
        <f7-list-item class = "ggstatus-list-item-3">
            <div class = "div_reason_box">
                <f7-input class = "inputresponsebox" type="textarea" maxlength="50" :value="s_response" @input="s_response = $event.target.value"></f7-input>
                <f7-label class="inputnum">{{s_response.length + '/50'}}</f7-label>
            </div>
        </f7-list-item>
        <f7-list-item  class = "ggstatus-list-item-4">
            <div class = "footfont">
                <span @click="updateStatusData()"><font class = "footnamecolor">确认</font></span>
            </div>
        </f7-list-item>
    </f7-list>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

