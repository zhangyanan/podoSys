
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

    goBack()    {
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
        this.s_ggStatus = sessionStorage.getItem('selectedGGStatus')
        this.s_response = this.in_gg21Item.状态变更原因 ?  this.in_gg21Item.状态变更原因 : ""
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
        if(this.s_response != this.in_gg21Item.状态变更原因 && this.s_response != "")
        {
            tempNames = tempNames + "状态变更原因,"
            tempValues = tempValues + this.s_response + ","
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

.title_position {
            position: absolute;
            width: 152px;
            height: 52px;
            left:178px;
            top:112px;
}

.title_font_big {
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
            top:312px;
}

.field_name {
            position: absolute;
            width: 100px;
            height: 21px;
            left:63px;
            top:312px;
}

.value_name {
            position: absolute;
            width: 100px;
            height: 21px;
            right:50px;
            top:312px;
}

.img_2  {
            position: absolute;
            width: 16px;
            height: 18.9px;
            left:32px;
            top:375px;
}

.field_status {
            position: absolute;
            width: 91px;
            height: 21px;
            left:63px;
            top:379px;
}

.value_status {
            position: absolute;
            width: 91px;
            height: 21px;
            right:50px;
            top:379px;
}

.name_font  {
            font-size: 16px;
            color: #4A4A4A;
}

.div_reason_box {
            position: absolute;
            width: 309px;
            height: 87px;
            right:32px;
            top:452px;
            background: #F2F2F2;
}

.inputresponsebox   {
            position: absolute;
            width: 276px;
            height: 34px;
            left:17px;
            top:26px;
}

.footfont  {
            position: absolute;
            width: 100%;
            height: 60px;
            top:607px;
            background: #54BCBF;
}

.footnamepos    {
            position: absolute;
            width: 40px;
            height: 28px;
            top:16px;
            left:168px;
}
.footnamecolor  {
            color: #ffffff;
            font-size: 20px;
}
</style>
<template>
  <f7-page>
    <div class = "ggstatus_div">
            <a href="#" @click="goBack()">
                <img  class = "back_img" src="@/assets/icon_all/back_green.png" />
            </a>
            <div class = "title_position">
                <span><font class = "title_font_big">变更原因</font></span>
            </div>
            <hr class = "downline">
            <hr class = "line_1">
            <hr class = "line_2">
            <hr class = "line_3">
            <div class = "line_box">
                <img  class = "img_1" src="@/assets/icon_all/account_name.png" />
                <label class = "field_name"><font class = "name_font">姓名</font></label>
                <label class = "value_name"><font class = "name_font">{{s_ggName}}</font></label>
            </div>
            <div class = "line_box">
                <img  class = "img_2" src="@/assets/icon_all/status_change.png" />
                <label class = "field_status"><font class = "name_font">状态变为</font></label>
                <label class = "value_status"><font class = "name_font">{{s_ggStatus}}</font></label>
            </div>
            <div class = "div_reason_box">
                <input class = "inputresponsebox" type="text" v-model="s_response">
            </div>
            <div class = "footfont">
                <span class = "footnamepos" @click="updateStatusData()"><font class = "footnamecolor">确认</font></span>
            </div>
    </div>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

