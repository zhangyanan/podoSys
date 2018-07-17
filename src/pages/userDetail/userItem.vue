<template>
  <f7-page>
      <f7-block class="back-ground">
        <div class = "userItem_div">
            <img  class = "back_img" src="@/assets/icon_all/back_white.png" @click="goBack()" /> 
            <img  class = "yz_img" src="@/assets/icon_all/sheep.png" />
            <img  class = "yz_icon" src="@/assets/icon_all/sheep.png" />
            <div class = "yz_name">
                <label class = "namescolor_2">{{YZName}}</label>
            </div>
            <div class = "gg_headidentity">
                <label class = "gg_identity_font">{{l_ret_personal_imf_s.datas[0].姓名.substr(0,1)}}</label>
            </div>
            <div class = "gg_statusidentity">
                <label class = "gg_status_font">{{l_selfStatus}}</label>
            </div>
            <div class = "username_1">
                <label class = "namescolor_1">{{l_ret_personal_imf_s.datas[0].姓名}}</label>
            </div>
            <div class = "username_2">
                <label class = "namescolor_2">{{l_ret_personal_imf_s.datas[0].微信}}</label>
            </div>
            <hr class="line_style_1">
            

            <div class = "menuitem">
                <label class = "menuitemcolor">基本信息</label>
            </div>

            <div class = "information">
                <span class="menu_1">姓名</span>
                <span class="value_1">{{l_ret_personal_imf_s.datas[0].姓名}}</span>
                           
                <hr class="line_style_2"> 
                            
                <span class="menu_2">性别</span>
                <span class="value_2">{{l_ret_personal_imf_s.datas[0].性别}}</span> 
                
                <hr class="line_style_3"> 

                <span class="menu_3">微信id</span>
                <span class="value_3">{{l_ret_personal_imf_s.datas[0].微信}}</span> 
                
                <hr class="line_style_4"> 

                <span class="menu_4">手机号</span>
                <span class="value_4">{{l_ret_personal_imf_s.datas[0].手机}}</span> 

                <hr class="line_style_5"> 

                <span class="menu_5">所属</span>
                <span class="value_5">{{l_ret_personal_imf_s.datas[0].会属 + ' ' + l_ret_personal_imf_s.datas[0].区域}}</span> 
            </div>
            <div class = "userItem_bottom">
                <a href='javascript:;' class="myconcert_link" @click="goNext()">
                    <label class = "footnamecolor">编辑资料</label>
                </a>
            </div>
        </div>
    </f7-block>
  </f7-page>  
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
        concerturl:"/list/",
        favoriteurl:"/myItem/",
        notificationurl:"/notice/",
        settingurl:"login",

        //基本信息
        user_name_cn:"崔得胜",
        user_wechat:"Delsin_Choi",
        YZName:"",
        l_selfStatus:"",
        l_userid:"",
        id: '',
        b_load: true,
    }
  },
  computed: {
    ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_gg_s'
    ]),
  },

  created () {
    //自动生成2.
    //this.getGenderList()   
    /*create lines are created by machine @ 2018-06-12 16:44:50*/
    //this.setSelectedUser("22")
    //console.log(this.getSelectedUser())
    //var selfid = sessionStorage.getItem('selfUserName')
    //this.getPersonalAccount(selfid) 

    //var yzid = sessionStorage.getItem('selfYZName')
    this.YZName = this.l_ret_personal_gg_s.datas[0].引导人姓名

    this.l_selfStatus = this.l_ret_personal_gg_s.datas[0].阶段
  },
  methods: {
    getParams () {  
      }  ,
    goNext(){
        //this.$f7router.back('/myItem/', { force: true })
        //console.log(this.getSelectedUser())
        //this.getformvaluesaccurate(this.getSelectedUser())
        //this.$f7router.back(concerturl)
        //window.location.replace(this.concerturl) 
        
        //保存个人信息数据
        //sessionStorage.setItem('myPersonalItem', JSON.stringify(this.l_ret_personal_imf_s.datas[0]))
        //window.location.href ='/userList/'
        this.$f7router.navigate('/userList/')
    },
    goBack(){
        //this.$f7router.back('/myItem/', { force: true })
        //console.log(this.getSelectedUser())
        //this.getformvaluesaccurate(this.getSelectedUser())
        //this.$f7router.back(concerturl)
        //window.location.replace(this.concerturl) 
        //window.location.href ='/myItem/'
        this.$f7router.navigate('/allList/')
    },
    ...mapActions('listdata',[
      'getPersonalAccount'
    ]),
    ...mapActions('listdata',[
      'getformvaluesaccurate'
    ]),
    
  }
}

</script>
<style>
div.block.back-ground{
    margin: 0px; 
    padding: 0px;
}
.userItem_div{
    background-color: #FF6D7F;
    width: 100%;
    height: 667px;
}

/** 划线 **/
.line_style_1{
            border:1px solid #ffffff;
            position: absolute;
            width: 100%;
            left:0px;
            top:245.5px;
            opacity:0.1;
}

.line_style_2{
            border:1px solid #4A4A4A;
            position: absolute;
            width: 100%;
            left:0px;
            top:61.5px;
            opacity:0.1;
}

.line_style_2{
            border:1px solid #4A4A4A;
            position: absolute;
            width: 100%;
            left:0px;
            top:61.5px;
            opacity:0.1;
}

.line_style_3{
            border:1px solid #4A4A4A;
            position: absolute;
            width: 100%;
            left:0px;
            top:123.5px;
            opacity:0.1;
}

.line_style_4{
            border:1px solid #4A4A4A;
            position: absolute;
            width: 100%;
            left:0px;
            top:185.5px;
            opacity:0.1;
}

.line_style_5{
            border:1px solid #4A4A4A;
            position: absolute;
            width: 100%;
            left:0px;
            top:250.5px;
            opacity:0.1;
}
/**  **/
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
            top:55px;
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
            border: #FF6D7F solid 0.5px;
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

.menuitem{
            position: absolute;
            width: 77px;
            height: 21px;
            left:160px;
            top:256px;
}

.menuitemcolor{
            color: #ffffff;
            font-size: 12px;
}

.information{
            position: absolute;
            width: 100%;
            height: 320px;
            left:0px;
            top:287px;
            background: #ffffff;
}


.menu_1{
            position: absolute;
            width: 199px;
            height: 21px;
            left:30px;
            top:13px;
            font-size: 14px;
}

.value_1{
            position: absolute;
            width: 142px;
            height: 18px;
            left:30px;
            top:32px;
            font-size: 14px;
}

.menu_2{
            position: absolute;
            width: 199px;
            height: 21px;
            left:30px;
            top:74px;
            font-size: 14px;
}

.value_2{
            position: absolute;
            width: 199px;
            height: 18px;
            left:30px;
            top:93px;
            font-size: 14px;
}

.menu_3{
            position: absolute;
            width: 199px;
            height: 21px;
            left:30px;
            top:137px;
            font-size: 14px;
}

.value_3{
            position: absolute;
            width: 199px;
            height: 18px;
            left:30px;
            top:154px;
            font-size: 14px;
}

.menu_4{
            position: absolute;
            width: 199px;
            height: 21px;
            left:30px;
            top:201px;
            font-size: 14px;
}

.value_4{
            position: absolute;
            width: 199px;
            height: 18px;
            left:30px;
            top:218px;
            font-size: 15px;
}

.menu_5{
            position: absolute;
            width: 199px;
            height: 21px;
            left:30px;
            top:263px;
            font-size: 14px;
}

.value_5{
            position: absolute;
            width: 199px;
            height: 18px;
            left:30px;
            top:282px;
            font-size: 15px;
}

.userItem_bottom{
            position: absolute;
            width: 100%;
            height: 60px;
            left:0px;
            top:607px;
}

.md .button {
            color: #ffffff
}

.myfavorite_link{
            position: absolute;
            width: 40px;
            height: 28px;
            left:168px;
            top:16px;
            font-size: 20px;
}

.myconcert_link{
            position: absolute;
            width: 80px;
            height: 28px;
            left:148px;
            top:16px;
            font-size: 20px;
}

.footnamecolor{
            color: #ffffff;
            font-size: 20px;
}

</style>


<style lang="scss" scoped>

</style>

