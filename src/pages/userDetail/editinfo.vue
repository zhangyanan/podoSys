
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
            l_ggName:"",
            
            selectGender:"",
            l_weChat:"",
            l_phone:"",
            selectStudyState:"",
            l_yzName:"",
            l_yzHs:"",
            l_yzQy:"",
            l_partner:"",
            l_swDate:"",
            selectHscontent:"",
            selectHavesttype:"",
            selectChurch:"",
            l_ggBirthday:"",
            selectMarriage:"",
            selectHealthy:"",
            selectEducation:"",
            selectOccuption:"",
            selectEmployment:"",
            selectDebt:"",
            selectStudySchedules:"",
            selectYearsOfFaith:"",

            selectReadingHabit:"",
            l_reading:"",
            selectPrayers:"",
            l_praying:"",
            selectSelfService:"",
            l_service:"",
            selectVigilant:"",
            l_vigilant:"",

            in_gg21Item:"",
            }
  },
  computed: {
    ...mapGetters('listdata',[
      'l_retdata'
    ]),

    
    //自动生成1.
    /*mapGetters lines are created by machine @ 2018-06-26 11:07:56*/
    ...mapGetters('configdata',['l_gender_data']),
    ...mapGetters('configdata',['l_ggstudystatus_data']),
    ...mapGetters('configdata',['l_hscontent_data']),
    ...mapGetters('configdata',['l_qycontent_data']),
    ...mapGetters('configdata',['l_marriage_data']),
    ...mapGetters('configdata',['l_swtype_data']),
    ...mapGetters('configdata',['l_churchs_data']),
    ...mapGetters('configdata',['l_health_data']),
    ...mapGetters('configdata',['l_education_data']),
    ...mapGetters('configdata',['l_occuption_data']),
    ...mapGetters('configdata',['l_employment_data']),
    ...mapGetters('configdata',['l_debt_data']),
    ...mapGetters('configdata',['l_studyschedules_data']),
    ...mapGetters('configdata',['l_yearsoffaith_data']),
    ...mapGetters('configdata',['l_yesorno_data']),
    ...mapGetters('configdata',['l_readinghabit_data']),
    ...mapGetters('configdata',['l_prayers_data']),
    ...mapGetters('configdata',['l_selfservice_data']),
    ...mapGetters('configdata',['l_vigilant_data']),

    ...mapGetters('listdata',['l_ret_personal_imf_s']),
  },
  created () {
    //自动生成2.
    /*create lines are created by machine @ 2018-06-26 11:07:56*/
    this.get_l_marriage_datalist()
    this.get_l_gender_datalist()
    this.get_l_ggstudystatus_datalist()
    this.get_l_hscontent_datalist()
    //this.get_l_qycontent_datalist()
    this.get_l_education_datalist()
    this.get_l_swtype_datalist()
    this.get_l_churchs_datalist()
    this.get_l_health_datalist()
    this.get_l_employment_datalist()
    this.get_l_debt_datalist()
    this.get_l_studyschedules_datalist()
    //this.get_l_yearsoffaith_datalist()
    this.get_l_yesorno_datalist()
    //this.get_l_readinghabit_datalist()
    //this.get_l_prayers_datalist()
    //this.get_l_selfservice_datalist()
    //this.get_l_vigilant_datalist()
    this.get_l_occuption_datalist()

    //得到gg的21项数据
    //console.log(sessionStorage.getItem('selectedGG21Item'))
    this.in_gg21Item = this.l_retdata.datas[0]   //JSON.parse(sessionStorage.getItem('selectedGG21Item'))
    //页面渲染
    this.l_yzName = this.in_gg21Item.引导人姓名
    this.l_yzHs = this.in_gg21Item.引导人会属
    this.l_yzQy = this.in_gg21Item.引导人区域

    this.l_ggName = this.in_gg21Item.姓名
    this.l_weChat = this.in_gg21Item.微信
    this.l_phone = this.in_gg21Item.手机
    this.selectGender = this.in_gg21Item.性别
    this.selectStudyState = this.in_gg21Item.阶段
    this.l_vigilant = this.in_gg21Item.戒备情况
    this.l_service = this.in_gg21Item.服侍情况
    this.l_praying = this.in_gg21Item.祷告情况
    this.l_reading = this.in_gg21Item.读经情况
    this.selectYearsOfFaith = this.in_gg21Item.信仰年数
    this.selectStudySchedules = this.in_gg21Item.学习计划
    this.selectHealthy = this.in_gg21Item.健康
    this.selectDebt = this.in_gg21Item.负债
    this.selectEmployment = this.in_gg21Item.就业
    this.selectOccuption = this.in_gg21Item.职业
    this.selectEducation = this.in_gg21Item.学历
    this.selectMarriage = this.in_gg21Item.婚恋
    this.selectHscontent = this.in_gg21Item.会属
    this.l_ggBirthday = this.in_gg21Item.生日
    this.selectChurch = this.in_gg21Item.涉外田地
    this.selectHavesttype = this.in_gg21Item.涉外类型
    this.l_swDate = this.in_gg21Item.涉外时间
    this.l_partner = this.in_gg21Item.管理者
  },
  methods: {
    //自动生成3.
    /*mapActions lines are created by machine @ 2018-06-12 16:47:09*/
    ...mapActions('configdata',['get_l_gender_datalist']),
    ...mapActions('configdata',['get_l_ggstudystatus_datalist']),
    ...mapActions('configdata',['get_l_hscontent_datalist']),
    ...mapActions('configdata',['get_l_qycontent_datalist']),
    ...mapActions('configdata',['get_l_marriage_datalist']),
    ...mapActions('configdata',['get_l_swtype_datalist']),
    ...mapActions('configdata',['get_l_churchs_datalist']),
    ...mapActions('configdata',['get_l_health_datalist']),
    ...mapActions('configdata',['get_l_education_datalist']),
    ...mapActions('configdata',['get_l_occuption_datalist']),
    ...mapActions('configdata',['get_l_employment_datalist']),
    ...mapActions('configdata',['get_l_debt_datalist']),
    ...mapActions('configdata',['get_l_studyschedules_datalist']),
    ...mapActions('configdata',['get_l_yesorno_datalist']),
    ...mapActions('configdata',['get_l_readinghabit_datalist']),
    ...mapActions('configdata',['get_l_prayers_datalist']),
    ...mapActions('configdata',['get_l_selfservice_datalist']),
    ...mapActions('configdata',['get_l_vigilant_datalist']),

    ...mapActions('listdata',[
      'updateformvalues'
    ]),

local_update21Data()    {
        var tempNames = ""
        var tempValues = ""
    
        var bUpdate = false;
        /*
        l_ggName:"",
            
            selectGender:"",
            l_weChat:"",
            l_phone:"",
            selectStudyState:"",
            l_yzName:"",
            l_yzHs:"",
            l_yzQy:"",
            l_partner:"",
            l_swDate:"",
            selectHscontent:"",
            selectHavesttype:"",
            selectChurch:"",
            l_ggBirthday:"",
            selectMarriage:"",
            selectHealthy:"",
            selectEducation:"",
            selectOccuption:"",
            selectEmployment:"",
            selectDebt:"",
            selectStudySchedules:"",
            selectYearsOfFaith:"",

            selectReadingHabit:"",
            l_reading:"",
            selectPrayers:"",
            l_praying:"",
            selectSelfService:"",
            l_service:"",
            selectVigilant:"",
            l_vigilant:"",

            in_gg21Item:"",
            姓名,微信,手机,引导人,状态,引导人姓名,性别,阶段,引导人会属,
            引导人区域,管理者,涉外时间,涉外类型,涉外田地,生日,会属,婚恋,
            学历,职业,就业,负债,健康,学习计划,信仰年数,读经情况,祷告情况,服侍情况,戒备情况,

            this.l_vigilant != this.in_gg21Item.戒备情况
            this.l_service != this.in_gg21Item.服侍情况
            this.l_praying != this.in_gg21Item.祷告情况
            this.l_reading != this.in_gg21Item.读经情况
            this.selectYearsOfFaith != this.in_gg21Item.信仰年数
            this.selectStudySchedules != this.in_gg21Item.学习计划
            this.selectHealthy != this.in_gg21Item.健康
            this.selectDebt != this.in_gg21Item.负债
            this.selectEmployment != this.in_gg21Item.就业
            this.selectOccuption != this.in_gg21Item.职业
            this.selectEducation != this.in_gg21Item.学历
            this.selectMarriage != this.in_gg21Item.婚恋
            this.selectHscontent != this.in_gg21Item.会属
            this.l_ggBirthday != this.in_gg21Item.生日
            this.selectChurch != this.in_gg21Item.涉外田地
            this.selectHavesttype != this.in_gg21Item.涉外类型
            this.l_swDate != this.in_gg21Item.涉外时间
            this.l_partner != this.in_gg21Item.管理者
            this.selectStudyState != this.in_gg21Item.阶段
         */
        //戒备情况修改了吗
        if(this.l_vigilant != this.in_gg21Item.戒备情况)
        {
            tempNames = tempNames + "戒备情况,"
            tempValues = tempValues + this.l_vigilant + ","
            bUpdate = true
        }

        //服侍情况修改了吗
        if(this.l_service != this.in_gg21Item.服侍情况)
        {
            tempNames = tempNames + "服侍情况,"
            tempValues = tempValues + this.l_service + ","
            bUpdate = true
        }

        //祷告情况修改了吗
        if(this.l_praying != this.in_gg21Item.祷告情况)
        {
            tempNames = tempNames + "祷告情况,"
            tempValues = tempValues + this.l_praying + ","
            bUpdate = true
        }

        //读经情况修改了吗
        if(this.l_reading != this.in_gg21Item.读经情况)
        {
            tempNames = tempNames + "读经情况,"
            tempValues = tempValues + this.l_reading + ","
            bUpdate = true
        }

        //信仰年数修改了吗
        if(this.selectYearsOfFaith != this.in_gg21Item.信仰年数)
        {
            tempNames = tempNames + "信仰年数,"
            tempValues = tempValues + this.selectYearsOfFaith + ","
            bUpdate = true
        }

        //学习计划修改了吗
        if(this.selectStudySchedules != this.in_gg21Item.学习计划)
        {
            tempNames = tempNames + "学习计划,"
            tempValues = tempValues + this.selectStudySchedules + ","
            bUpdate = true
        }

        //健康修改了吗
        if(this.selectHealthy != this.in_gg21Item.健康)
        {
            tempNames = tempNames + "健康,"
            tempValues = tempValues + this.selectHealthy + ","
            bUpdate = true
        }

        //负债修改了吗
        if(this.selectDebt != this.in_gg21Item.负债)
        {
            tempNames = tempNames + "负债,"
            tempValues = tempValues + this.selectDebt + ","
            bUpdate = true
        }

        //就业修改了吗
        if(this.selectEmployment != this.in_gg21Item.就业)
        {
            tempNames = tempNames + "就业,"
            tempValues = tempValues + this.selectEmployment + ","
            bUpdate = true
        }

        //职业修改了吗
        if(this.selectOccuption != this.in_gg21Item.职业)
        {
            tempNames = tempNames + "职业,"
            tempValues = tempValues + this.selectOccuption + ","
            bUpdate = true
        }

        //学历修改了吗
        if(this.selectEducation != this.in_gg21Item.学历)
        {
            tempNames = tempNames + "学历,"
            tempValues = tempValues + this.selectEducation + ","
            bUpdate = true
        }

        //婚恋修改了吗
        if(this.selectMarriage != this.in_gg21Item.婚恋)
        {
            tempNames = tempNames + "婚恋,"
            tempValues = tempValues + this.selectMarriage + ","
            bUpdate = true
        }

        //会属修改了吗
        if(this.selectHscontent != this.in_gg21Item.会属)
        {
            tempNames = tempNames + "会属,"
            tempValues = tempValues + this.selectHscontent + ","
            bUpdate = true
        }

        //生日修改了吗
        if(this.l_ggBirthday != this.in_gg21Item.生日)
        {
            tempNames = tempNames + "生日,"
            tempValues = tempValues + this.l_ggBirthday + ","
            bUpdate = true
        }

        //涉外田地修改了吗
        if(this.selectChurch != this.in_gg21Item.涉外田地)
        {
            tempNames = tempNames + "涉外田地,"
            tempValues = tempValues + this.selectChurch + ","
            bUpdate = true
        }

        //涉外类型修改了吗
        if(this.selectHavesttype != this.in_gg21Item.涉外类型)
        {
            tempNames = tempNames + "涉外类型,"
            tempValues = tempValues + this.selectHavesttype + ","
            bUpdate = true
        }

        //涉外时间修改了吗
        if(this.l_swDate != this.in_gg21Item.涉外时间)
        {
            tempNames = tempNames + "涉外时间,"
            tempValues = tempValues + this.l_swDate + ","
            bUpdate = true
        }

        //管理者修改了吗
        if(this.l_partner != this.in_gg21Item.管理者)
        {
            tempNames = tempNames + "管理者,"
            tempValues = tempValues + this.l_partner + ","
            bUpdate = true
        }

        //阶段修改了吗
        if(this.selectStudyState != this.in_gg21Item.阶段)
        {
            tempNames = tempNames + "阶段,"
            tempValues = tempValues + this.selectStudyState + ","
            bUpdate = true
        }

        //引导人在快速添加里已经写入 不能更改
        //性别修改了吗
        if(this.selectGender != this.in_gg21Item.性别)
        {
            tempNames = tempNames + "性别,"
            tempValues = tempValues + this.selectGender + ","
            bUpdate = true
        }

        //状态修改了吗
        /*if(this.selectStudyState != this.in_gg21Item.状态)
        {
            tempNames = tempNames + "状态,"
            tempValues = tempValues + this.selectStudyState + ","
            bUpdate = true
        }*/

        //手机修改了吗
        if(this.l_phone != this.in_gg21Item.手机)
        {
            tempNames = tempNames + "手机,"
            tempValues = tempValues + this.l_phone + ","
            bUpdate = true
        }

        //微信修改了吗
        if(this.l_weChat != this.in_gg21Item.微信)
        {
            tempNames = tempNames + "微信,"
            tempValues = tempValues + this.l_weChat + ","
            bUpdate = true
        }

        //姓名修改了吗
        if(this.l_ggName != this.in_gg21Item.姓名)
        {
            tempNames = tempNames + "姓名,"
            tempValues = tempValues + this.l_ggName + ","
            bUpdate = true
        }

        if(bUpdate == true)
        {
            var msgid = this.in_gg21Item.键值
            var sqldata = JSON.stringify({
					"in_formdataid":msgid,
					"in_username":this.l_ret_personal_imf_s.datas[0].个人表单,
					"in_fieldnames":tempNames,
					"in_fieldvalues":tempValues,
					})
            console.log(sqldata)
            this.updateformvalues(sqldata)
        }
        
    },

    submitForm()    {
        this.local_update21Data()
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
.md .list{
    margin: 0px;
    }
.list.addinfo-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin-top: -20px;
}
div.list.addinfo-list {
    margin-top: 20px;
}
div.page.editinfo-page.page-current{
    background: #EFF0F4;
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
    }
.comfirmbtn{
    background-color: aquamarine
}
.pagebody{
    background-color: darkgray
}
.listitem{
    background-color:cornsilk
}
.md .navbar .content-title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.09px;
    line-height: 19px;
}
.md .navbar .content-title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.09px;
    line-height: 19px;
    padding-left: 90px;
}

.list.addinfo-list{
    margin: 19px 11px;
    background: #FFFFFF;
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
.md .button.button-big, .md .button.button-big-md {
    line-height: 60px;
    border-radius: 3px;
    position: fixed;
    top: 550px;
    width: 353px;
    height: 60px;
    background: #54BCBF;
    border-radius: 4px;
    margin-left: 12px;
}
.md .button.button-big[data-v-ff613a2c], .md .button.button-big-md[data-v-ff613a2c]{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 60px;
}
.mybox:hover {
    border-style: solid;
    border-width: 2px;
    border-color:#E3E2E2;
}
div.item-content.item-input{
    border-bottom: solid 1px #E3E4E8;
}

.accordion-item.accordion-item-opened {
    padding-bottom: 30px;
}
.accordion-item .block{
    padding-bottom: 6px;
}
div.block.first-block{
    padding-top: 12px;
}
div.list.addinfo-list {
    margin-top: 50px;
}

/*addinfo 头文件的css*/
div.navbar-inner.sliding{
  background-color: #54BCBF;
  color:#FFFFFF;
}
div.navbar-inner.sliding{
    background: #54BCBF;
    color:#FFFFFF;
    height: 65px;
}
div.navbar-inner {
    padding-left: 19px;
}


</style>
<template>
  <f7-page class="editinfo-page">
    <v-addinfo title='编辑资料'></v-addinfo>
    <f7-list accordion class="addinfo-list">
        <f7-list-item accordion-item title="个人资料">
            <f7-accordion-content>
              <f7-block class="first-block">
                <div class="mybox">
                  <div class="mylabelbox">
                    <f7-label><font class="mylabelfont">姓名</font></f7-label>
                  </div>
                  <div class="myinputbox">
                    <input type="text" dir="rtl" align="right" v-model="l_ggName" clear-button/>
                  </div>
                </div>
              </f7-block>
              <f7-block>
                <div class="mybox">
                  <div class="mylabelbox">
                    <f7-label><font class="mylabelfont">性别</font></f7-label>
                  </div>
                  <div class="myinputbox">
                    <select v-model="selectGender">
                        <option v-for="(itemmenu) in this.l_gender_data" :key="itemmenu.value">
                        {{itemmenu.value}}</option>
                    </select>
                </div>
              </div>
             </f7-block>
             <f7-block>
                  <div class="mybox">
                      <div class="mylabelbox">
                          <f7-label><font class="mylabelfont">生日</font></f7-label>
                      </div>
                      <div class="myinputbox">
                          <f7-input type="select" placeholder="Male" :value="selectGender" @change="selectGender = $event.target.value">
                              <option  v-for="(itemmenu, index) in this.l_gender_data" :key="index">
                              {{itemmenu.gender}}</option>
                          </f7-input>
                      </div>
                  </div>
              </f7-block>
            <f7-block>
              <div class="mybox">
               <div class="mylabelbox">
                 <f7-label><font class="mylabelfont">手机号</font></f7-label>
               </div>
               <div class="myinputbox">
                 <input type="tel" dir="rtl" v-model="l_phone" clear-button>
               </div>
              </div>
            </f7-block>
            <f7-block>
              <div class="mybox">
                <div class="mylabelbox">
                  <f7-label><font class="mylabelfont">会属</font></f7-label>
                </div>
                <div class="myinputbox">
                    <select v-model="selectStudyState">
                        <option v-for="(itemmenu) in this.l_ggstudystatus_data" :key="itemmenu.value">
                        {{itemmenu.value}}</option>
                    </select>
                </div>
              </div>
            </f7-block>
            <f7-block>
              <div class="mybox">
                <div class="mylabelbox">
                  <f7-label><font class="mylabelfont">区域</font></f7-label>
                </div>
                <div class="myinputbox">
                    <select v-model="selectStudyState">
                        <option v-for="(itemmenu) in this.l_ggstudystatus_data" :key="itemmenu.value">
                        {{itemmenu.value}}</option>
                    </select>
                </div>
              </div>
            </f7-block>
            <f7-block>
              <div class="mybox">
                <div class="mylabelbox">
                  <f7-label><font class="mylabelfont">微信ID</font></f7-label>
                </div>
                <div class="myinputbox">
                  <input type="tel" dir="rtl" v-model="l_weChat" clear-button>
                </div>
                </div>
            </f7-block>            
            </f7-accordion-content>
        </f7-list-item>
    </f7-list>
    <f7-list form>
      <f7-button  big text="完成" fill v-on:click="submitForm()" class="comfirmbtn"></f7-button>
    </f7-list>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>