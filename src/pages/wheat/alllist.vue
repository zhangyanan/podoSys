<template>
  <f7-page>
    <v-asideheader title='' back></v-asideheader>
    <div class="list media-list">
      <ul>
        <div v-for="(item, index) in this.l_ret_gg_imf_s.datas" :key="index">
          <li>
             <a href = "javascript:;" class="item-link item-content" @click="local_setSelectedGG(item.键值, index)">
              <div class="item-media">
                <div :class=" 'name-bg-' + item.阶段 "><span class="surname">{{item.姓名.substr(0,1)}}</span></div></div>
              <div class="item-inner">
                <div class="item-title-row-name">
                  <div class="item-title">{{item.姓名}}</div>
                </div>
                <div class="item-subtitle">
                  <div class="row">
                      <div class="col-50">{{item.微信}}</div>
                      <div class="col-50">
                        <div class="item-title-row">
                          <div :class=" 'chip color-' + item.阶段 ">
                            <div class="chip-label">{{item.阶段}}</div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="item-text">
                  <div class="row">
                    <div class="col-40">
                      <div class="row">
                        <div class="col-20"><span class="phone-icon-red"><img src="@/assets/icon_all/listicon_SW2@2x.png"/></span></div>
                        <div class="col-80"><span class="phone">{{item.手机}}</span></div>
                      </div>
                    </div>
                    <div class="col-20">
                      <div class="row">
                        <div class="col-50"><span class="gender-icon-red"><img v-bind:src="'@/assets/icon_all/listicon_' + item.状态 + '2@2x.png'"/></span></div>
                        <div class="col-50"><span class="gender">{{item.性别}}</span></div>
                      </div>
                    </div>
                    <div class="col-40">
                      <div class="row">
                        <div class="col-20"><span class="date-icon-red"><img v-bind:src="'@/assets/icon_all/listicon_' + item.状态 + '3@2x.png'"/></span></div>
                        <div class="col-80"><span class="date">{{item.涉外时间}}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
      <!-- Left Panel with Reveal effect -->
      <f7-panel left reveal>
        <img src="@/assets/img1.jpg"/>
      </f7-panel>
      <!-- Right Panel with Cover effect and dark layout -->
      <f7-panel right cover layout="dark">
        <img src="@/assets/img2.jpg"/>
      </f7-panel>
  </f7-page>
</template>
<style lang="scss" scoped>
  .md .media-list .item-media, .md li.media-item .item-media {
      padding-top: 24px;
      padding-left: 31px;
      padding-bottom: 24px;
  }
  .md .list {
    margin: 0;
    font-size: 16px;
  }
  .md .list .item-content{
    padding: 0px;
  }
  .md .media-list .item-link .item-inner, .md li.media-item .item-link .item-inner {
    padding-right: 16px;
    padding-top: 22px;
  }
  .list li{
    height: 105px;
    margin-bottom: 4px;
    border-bottom: solid 1px #E9E9E9;
  }
  .name-bg-SW{
    background-color: #FF6D7F;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-QJ{
    background-color: #FF6D7F;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-GD{
    background-color: #FF6D7F;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }

  .name-bg-ST{
    background-color: #54BCBF;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-FF{
    background-color: #EF9F62;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-CJ{
    background-color: #5C9FC9;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-ZJ{
    background-color: #5C9FC9;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-GJ{
    background-color: #5C9FC9;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-BLACK{
    background-color: #9F9F9F;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
 .surname{
    color:white;
    font-size: 24px;
    font-family: PingFangSC-Semibold;
    padding-left: 18px;
  }
  .item-title-row-name .item-title{
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #4A4A4A;
    line-height: 21px;
    font-weight: 800;
  }
  .item-inner .item-subtitle{
    font-family: PFSquareSansPro-Light;
    font-size: 15px;
    color: #4A4A4A;
    height: 20px;
    letter-spacing: 0;
    line-height: 18px;
  }
  span.phone-icon-red,span.phone-icon-green,span.phone-icon-orange,span.phone-icon-blue,span.phone-icon-gray{
    padding-right: 2px;
  }
  span.phone-icon-red img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.phone-icon-green img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.phone-icon-orange img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.phone-icon-blue img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.phone-icon-gray img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
 .row .col-80 .phone{
    font-family: PFSquareSansPro-Regular;
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: -0.48px;
    line-height: 18px;
    margin-left: -2px;
  }
  span.gender-icon-red,span.gender-icon-green,span.gender-icon-orange,span.gender-icon-blue,span.gender-icon-gray{
    padding-right: 2px;
  }
  span.gender-icon-red img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.gender-icon-green img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.gender-icon-orange img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.gender-icon-blue img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  span.gender-icon-gray img{
    width:14px;
    height: 14px;
    padding-top: 2px;
  }
  .row .col-50 .gender{
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #4A4A4A;
    letter-spacing: -0.48px;
    line-height: 18px;
    margin-left: -8px;
  }
  span.date-icon-red, span.date-icon-green,span.gender-icon-orange,span.gender-icon-blue,span.gender-icon-gray{
    padding-right: 2px;
  }
  span.date-icon-red img{
    width: 15px;
    height: 15px;
    padding-top: 2px;
  }
  span.date-icon-green img{
    width: 15px;
    height: 15px;
    padding-top: 2px;
  }
  span.date-icon-orange img{
    width: 15px;
    height: 15px;
    padding-top: 2px;
  }
  span.date-icon-blue img{
    width: 15px;
    height: 15px;
    padding-top: 2px;
  }
  span.date-icon-gray img{
    width: 15px;
    height: 15px;
    padding-top: 2px;
  }
  .row .col-80 .date{
    font-family: PFSquareSansPro-Regular;
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: -0.48px;
    line-height: 18px;
    margin-left: -3px;
  }
  .md .chip {
    font-size: 13px;
    height: 15.5px;
    line-height: 32px;
    width: 38.5px;
    border-radius: 16px;
    padding: 0 8px;
    margin-left: 60px;
}
.md .chip.color-SW {
    background: #FF6D7F;
    border-radius: 32.4px;
}
.md .chip.color-QJ {
    background: #FF6D7F;
    border-radius: 32.4px;
}
.md .chip.color-GD {
    background: #FF6D7F;
    border-radius: 32.4px;
}
.md .chip.color-ST {
    background: #54BCBF;
    border-radius: 32.4px;
}
.md .chip.color-CJ {
    background: #5C9FC9;
    border-radius: 32.4px;
}
.md .chip.color-ZJ {
    background: #5C9FC9;
    border-radius: 32.4px;
}
.md .chip.color-GJ {
    background: #5C9FC9;
    border-radius: 32.4px;
}
.md .chip.color-FF {
    background: #EF9F62;
    border-radius: 32.4px;
}
.md .chip.color-BLACK {
    background: #9D9D9D;
    border-radius: 32.4px;
}
.item-title-row .chip-label{
    font-family: PFSquareSansPro-Bold;
    font-size: 11px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 600;
    line-height: 17px;
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
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),color-stop(40%,rgba(0,0,0,0)),color-stop(50%,rgba(0,0,0,0)),color-stop(80%,rgba(0,0,0,0)),to(rgba(0,0,0,0)));
    background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 80%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 80%,rgba(0,0,0,0) 100%);
}
</style>
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {
            userItemUrl:"/userItem/",
            selectOption:"",
            selectRange:"88",
            selectGender:"",
            selectStudyState:"",
            
            inputname:""}
  },
  computed: {
    
    ...mapGetters('listdata',[
        'l_retdata'
    ]),
    ...mapGetters('listdata',[
      'l_ret_gg_imf_s'
    ]),
    ...mapGetters('listdata',[
        'l_ret_personal_imf_s'
    ]),

    ...mapGetters('listdata',[
        'l_ret_personal_favorite_s'
    ]),

    ...mapGetters('listdata',[
      'l_ret_our_gg_imf_s'
    ]),
    
  },
  created () {
    //得到当前登陆用户的gg列表
    //如果是查看自己的gg 则以自己为引导人查看
    //this.get_my_gglist('约翰')
    //cui 是个唯一值
    this.get_my_gglist('cui')
    this.getPersonalAccount('cui')
    this.getPersonalFavorite('cui')
    //如果是查看自己作为管理者的gg 则以自己为管理人查
    this.get_our_gglist('cui')
  },
  methods: {
    ...mapActions('datainterchange',[
      'setSelectedUser'
    ]),

    ...mapActions('listdata',[
      'get_my_gglist'
    ]),

    ...mapActions('listdata',[
      'get_our_gglist'
    ]),

    ...mapActions('listdata',[
      'getformvaluesaccurate'
    ]),

    ...mapActions('listdata',[
      'getPersonalAccount'
    ]),

    ...mapActions('listdata',[
      'getPersonalFavorite'
    ]),

    local_setSelectedGG(keyid, index){
      //全局设置 ggID
      this.setSelectedUser(index)
      
      //sessionStorage.setItem('selectedGGId', keyid)
      //设置全局gg 21item简讯信息
      //sessionStorage.setItem('selectedGG21ItemShort', JSON.stringify(this.l_ret_gg_imf_s.datas[index]))

      //保存个人信息数据
      //sessionStorage.setItem('myPersonalItem', JSON.stringify(this.l_ret_personal_imf_s.datas[0]))
      //保存藏单
      //if(this.l_ret_personal_favorite_s.datas[0] != null)
        //sessionStorage.setItem('myPersonalFavorite', JSON.stringify(this.l_ret_personal_favorite_s.datas[0]))
      
      //this.setSelectedUser(keyid)
      //this.getformvaluesaccurate(keyid)
      //this.USER_SIGNIN(this.form)
      //this.$f7router.back('/userItem/')
      //window.location.href ='/gglist/'
   
      this.$f7router.navigate('/gglist/')
    },
  }
}
</script>
