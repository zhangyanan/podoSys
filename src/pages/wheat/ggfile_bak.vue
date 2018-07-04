
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {myTxt:"button",
            selectOption:"",
            selectRange:"88",
            selectGender:"",
            selectStudyState:"",
            fruit:"apple",
            checkfruits:[],
            jobIsDone: false,
            inputname:""}
  },
  computed: {
    ...mapGetters('workarea', [
      'w_tempStr'
    ]),
    ...mapGetters('listdata', [
      'l_tempStr'
    ]),
    ...mapGetters('listdata',[
      'l_userName'
    ]),
    ...mapGetters('listdata',[
      'l_userId'
    ]),
    ...mapGetters('listdata',[
      'l_telephone'
    ]),
    ...mapGetters('listdata',[
      'l_retdata'
    ]),
    ...mapGetters('workarea',[
      'workMenuList'
    ]),
    ...mapGetters('datainterchange', [
        'selectedUser'
    ]),
    //自动生成1.
    /*...mapGetters('listdata',[
      'l_gender_config_data'
    ])*/
    
    /*mapGetters lines are created by machine @ 2018-06-12 16:44:50*/
    ...mapGetters('listdata',['l_gender_data']),
    ...mapGetters('listdata',['l_ggstudystatus_data']),
    ...mapGetters('listdata',['l_retkeyname']),
  },
  created () {
    //自动生成2.
    //this.getGenderList()   
    /*create lines are created by machine @ 2018-06-12 16:44:50*/
    //this.get_l_gender_datalist()
    //this.get_l_ggstudystatus_datalist()
    var keyid = sessionStorage.getItem('selectedGGId')
    this.getformvaluesaccurate(keyid)
  },
  methods: {
    ...mapActions('listdata',[
      'getformvalues'
    ]),
    ...mapActions('listdata',[
      'test4set'
    ]),
    ...mapActions('listdata',[
      'getformvaluesaccurate'
    ]),
    //自动生成3.
    /*...mapActions('listdata',[
      'getGenderList'
    ]),*/
    /*mapActions lines are created by machine @ 2018-06-12 16:47:09*/
    ...mapActions('listdata',['get_l_gender_datalist']),
    ...mapActions('listdata',['set_l_gender_datalist']),

    ...mapActions('listdata',['get_l_ggstudystatus_datalist']),
    ...mapActions('listdata',['set_l_ggstudystatus_datalist']),

    TestConn () {
      //this.getTestConn()
      this.getformvalues()
      //this.test4set('1000')
    },
     TestShowTxt () {
      this.myTxt = '姓名：'+this.l_retdata.in_keyvalues+this.selectGender+this.selectStudyState+this.l_userId;
      //this.myTxt = this.l_retdata + this.fruit + this.selectOption;
    },
    getRange (payload) { 
      this.selectRange  = payload
      //console.log(payload)
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
    background-color: #FF6D7F;
    width: 100%;
    height: 667px;
}

.divheader{
            position: absolute;
            width: 100%;
            height: 128px;
            left:0px;
            top:0px;
            background: #FF6D7F;
}

.name_cn{
            position: absolute;
            width: 66px;
            height: 19px;
            left:154px;
            top:48px;
}

.name_font{
            color: #ffffff;
            font-size: 22px;
}

.menu_1{
            position: absolute;
            width: 77px;
            height: 21px;
            left:34px;
            top:97px;
}

.menu_font_1{
            color: #ffffff;
            font-size: 12px;
}

.menu_2{
            position: absolute;
            width: 60px;
            height: 21px;
            left:156px;
            top:97px;
}

.menu_3{
            position: absolute;
            width: 90px;
            height: 21px;
            left:257px;
            top:97px;
}

.information{
            position: absolute;
            width: 100%;
            height: 2334px;
            left:0px;
            top:128px;
            background: #ffffff;
}

.md .list {
            margin:0;
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

.md a{
            color:#ffffff;
}
</style>
<template>
  <f7-page>
    <div class = "ggfile_div">
        <div class = "divheader">
            <div class = "name_cn">
                <f7-label class = "name_font">{{l_retdata.datas[0].姓名}}</f7-label>
            </div>
            <div class = "menu_1">
                <f7-label class = "menu_font_1">基本信息</f7-label>
            </div>
            <div class = "menu_2">
                <f7-link class = "menu_font_1" href="/activityItems/">活动记录</f7-link>
            </div>
            <div class = "menu_3">
                <f7-label class = "menu_font_1">修改历史</f7-label>
            </div>
        </div>
        <div class = "information">
            <f7-list>
                <f7-list-item
                    v-for="(item, index) in l_retkeyname"
                    :key="index">
                    <div >
                        <f7-label><font class = "mylabelfont">{{item}}</font></f7-label>
                        <f7-label>{{l_retdata.datas[0][item]}}</f7-label>
                    </div>
                </f7-list-item>
                
            </f7-list>
        </div>
        <div>
            <f7-link href="/wheat/" class="editbtn">编辑</f7-link>
        </div>
    </div>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

