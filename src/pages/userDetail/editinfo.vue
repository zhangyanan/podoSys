<!-- 当前页面 编辑资料 -->
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
            s_selectGender:"",
            s_name:"",
            s_birthday:"",
            s_phone:"",
            s_weChat:"",
            in_myPersonalItem:"",
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

    //var selfid = sessionStorage.getItem('selfUserName')
    //this.getPersonalAccount(selfid)
    
    this.in_myPersonalItem = this.l_ret_personal_imf_s.datas[0]
    this.s_selectGender = this.in_myPersonalItem.性别
    this.s_name = this.in_myPersonalItem.姓名
    this.s_birthday = this.in_myPersonalItem.生日
    this.s_phone = this.in_myPersonalItem.手机
    this.s_weChat = this.in_myPersonalItem.微信
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

    ...mapActions('listdata',['getPersonalAccount']),
    
    updateUserItem()    {
        //查看是否有对应的更改项
        var tempNames = ""
        var tempValues = ""
        var bUpdate = false;
        /*
            s_selectGender:"",
            s_name:"",
            s_birthday:"",
            s_selectHscontent:"",
            s_selectZone:"",
            s_phone:"",
            s_weChat:"",
         */
        //姓名修改了吗
        if(this.s_name != this.in_myPersonalItem.姓名 && this.s_name != "")
        {
            tempNames = tempNames + "姓名,"
            tempValues = tempValues + this.s_name + ","
            bUpdate = true
        }

        //性别修改了吗
        if(this.s_selectGender != this.in_myPersonalItem.性别 && this.s_selectGender != "")
        {
            tempNames = tempNames + "性别,"
            tempValues = tempValues + this.s_selectGender + ","
            bUpdate = true
        }    

        //生日修改了吗
        if(this.s_birthday != this.in_myPersonalItem.生日 && this.s_birthday != "")
        {
            tempNames = tempNames + "生日,"
            tempValues = tempValues + this.s_birthday + ","
            bUpdate = true
        } 

        //手机修改了吗
        if(this.s_phone != this.in_myPersonalItem.手机 && this.s_phone != "")
        {
            tempNames = tempNames + "手机,"
            tempValues = tempValues + this.s_phone + ","
            bUpdate = true
        } 

        //微信修改了吗
        if(this.s_weChat != this.in_myPersonalItem.微信 && this.s_weChat != "")
        {
            tempNames = tempNames + "微信,"
            tempValues = tempValues + this.s_weChat + ","
            bUpdate = true
        } 

        if(bUpdate == true)
        {
            //首先更改个人信息资料
            var itemId = this.in_myPersonalItem.键值

            var sqlDataOfPersonal = JSON.stringify({
                                "in_formdataid":itemId,
                                "in_username":this.in_myPersonalItem.个人表单,
                                "in_fieldnames":tempNames,
                                "in_fieldvalues":tempValues,
                                })
            
            console.log(sqlDataOfPersonal)
            this.updateformvalues(sqlDataOfPersonal)

            //再更改蝈蝈21项个人资料
            /*var ggId = this.in_myPersonalItem.蝈蝈关联表单

            var sqlDataOf21 = JSON.stringify({
                                "in_formdataid":ggId,
                                "in_username":"ivy",
                                "in_fieldnames":tempNames,
                                "in_fieldvalues":tempValues,
					                      })
            
            //console.log(sqlDataOf21)
            this.updateformvalues(sqlDataOf21)*/
            
        }
        
        //转回个人信息页面
        //window.location.href ='/userItem/'
    }
  }
}
</script>
<style>
.md .list{
    margin: 0px;
    }
.list .addinfo-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin-top: 30px;
}

.editinfo-page .page-content{
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
.mylabelbox{
    text-align:left;
    font-size: 3em;
    width: 110px;
    position: absolute;
    margin-left:13px;
    margin-top:8px;
    }
.myinputbox{
    text-align:right;
    border-width:0px;
    font-size: 2em;
    }
.comfirmbtn{
    background-color: aquamarine
}
/*.pagebody{
    background-color: darkgray
}*/
.listitem{
    background-color:cornsilk
}
.md .editinfo-page .navbar .content-title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.09px;
    line-height: 19px;
}

div .editinfo-page .navbar-inner.sliding{
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
.md .button-div .button.button-big, .md .button-div .button.button-big-md {
    line-height: 60px;
    border-radius: 3px;
    position: fixed;
    top: 550px;
    width: calc(100% - 24px);
    height: 60px;
    background: #54BCBF;
    border-radius: 4px;
    margin-left: 12px;
    margin-right:12px;
    margin-top: 0px;
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
    border-width: 1px;
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

.md .list .myinputbox input[type=text] {
    width: 179px;
    height: 37px;
    line-height: 37px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-right: 11px;
    color: #000000;
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

.list .mybox .select-box .item-title {
    left: 12px;
}

</style>
<template>
  <f7-page class="editinfo-page">
    <v-addinfo title='编辑资料'></v-addinfo>
    <f7-list accordion class="addinfo-list">
        <f7-list-item accordion-item title="个人资料">
            <f7-accordion-content>
              <f7-block>
                <div class="mybox">
                  <div class="mylabelbox">
                    <f7-label><font class="mylabelfont">姓名</font></f7-label>
                  </div>
                  <div class="myinputbox">
                    <f7-input type="text" dir="rtl" maxlength="5" :value="s_name" @input="s_name = $event.target.value" clear-button></f7-input>
                  </div>
                </div>
              </f7-block>
              <f7-block>
                <div class="mybox">
                  <!--<div class="mylabelbox">
                    <f7-label><font class="mylabelfont">性别</font></f7-label>
                  </div>-->
                  <div class="myinputbox">
                    <f7-list-item smart-select title="性别" :smart-select-params="{openIn: 'popover'}">
                        <!-- Select with values inside -->
                        <select v-model="s_selectGender" name="genderType" >
                            <option disabled>{{s_selectGender}}</option>
                            <option v-for="itemmenu in this.l_gender_data" 
                                    v-if="s_selectGender != itemmenu.value"
                                    :key="itemmenu.value" :value="itemmenu.value">
                                    {{itemmenu.value}}</option>
                        </select>
                    </f7-list-item>
                </div>
              </div>
             </f7-block>
             <f7-block>
                  <div class="mybox">
                      <div class="mylabelbox">
                          <f7-label><font class="mylabelfont">生日</font></f7-label>
                      </div>
                      <div class="myinputbox">
                          <f7-input type="date" dir="rtl" align="right" :value="s_birthday" @change="s_birthday = $event.target.value"></f7-input>
                      </div>
                  </div>
              </f7-block>
            <f7-block>
              <div class="mybox">
               <div class="mylabelbox">
                 <f7-label><font class="mylabelfont">手机号</font></f7-label>
               </div>
               <div class="myinputbox">
                 <f7-input type="text" dir="rtl" maxlength="12" :value="s_phone" @input="s_phone = $event.target.value" clear-button></f7-input>
                
               </div>
              </div>
            </f7-block>
            <f7-block>
              <div class="mybox">
                <div class="mylabelbox">
                  <f7-label><font class="mylabelfont">会属</font></f7-label>
                </div>
                <div class="myinputbox">
                    <f7-input type="text" dir="rtl" :value="in_myPersonalItem.会属" disabled></f7-input>
                </div>
              </div>
            </f7-block>
            <f7-block>
              <div class="mybox">
                <div class="mylabelbox">
                  <f7-label><font class="mylabelfont">区域</font></f7-label>
                </div>
                <div class="myinputbox">
                    <f7-input type="text" dir="rtl" :value="in_myPersonalItem.区域" disabled></f7-input>
                </div>
              </div>
            </f7-block>
            <f7-block>
              <div class="mybox">
                <div class="mylabelbox">
                  <f7-label><font class="mylabelfont">微信ID</font></f7-label>
                </div>
                <div class="myinputbox">
                  <f7-input type="text" dir="rtl" maxlength="30" :value="s_weChat" @input="s_weChat = $event.target.value" clear-button></f7-input>
                </div>
                </div>
            </f7-block>            
            </f7-accordion-content>
        </f7-list-item>
    </f7-list>
    <f7-list form>
        <div class = "button-div">
            <f7-button  big text="完成" fill v-on:click="updateUserItem()" class="comfirmbtn"></f7-button>
        </div>
    </f7-list>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>