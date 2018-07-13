<!-- 当前页面名称： 蝈蝈列表 收藏列表 协力列表 搜索列表 -->
<template>
<f7-page>
  <v-asideheader title=''></v-asideheader>
  <f7-list v-if="this.l_ret_gg_imf_s != null" media-list class="gglibrary">
    <f7-list-item v-for="(item, index) in this.l_ret_gg_imf_s.datas" :key="index" 
              @click="local_setSelectedGG(item.键值, index)" :class="item.阶段 + '-bg'">
       <div slot="subtitle" class="gglib-ggname">{{item.姓名}}</div>         
       <div slot="media">
         <div :class="'name-bg-' +item.阶段" ><span class="surname">{{item.姓名.substr(0,1)}}</span></div>
       </div>
      <div slot="subtitle">
        <div class="row">
            <div class="col-50">{{item.微信}}</div>
            <div class="col-50">
              <div class="item-title-row">
                <div :class="'chip color-' + item.阶段">
                    <div class="chip-label">{{item.阶段}}</div>
                </div>
              </div>
            </div>
        </div>
      </div>
       <div slot="text">
          <div class="row nogap">
              <div class="col-40">
                <div class="row">
                  <div class="col-20"><span :class="'phone-icon-' + item.阶段"><img v-bind:src="'@/assets/icon_all/listicon_' + item.阶段 + '1.png'"/></span></div>
                  <div class="col-80"><span class="phone">{{item.手机}}</span></div>
                </div>
              </div>
              <div class="col-20">
                <div class="row">
                  <div class="col-50"><span :class="'gender-icon-' + item.阶段"><img v-bind:src="'@/assets/icon_all/listicon_' + item.阶段 + '2.png'"/></span></div>
                  <div class="col-50"><span class="gender">{{item.性别}}</span></div>
                </div>
              </div>
              <div class="col-40">
                <div class="row">
                  <div class="col-20"><span :class="'date-icon-' + item.阶段"><img v-bind:src="'@/assets/icon_all/listicon_' + item.阶段 + '3.png'"/></span></div>
                  <div class="col-80"><span class="date">{{item.涉外时间}}</span></div>
                </div>
              </div>
          </div>
       </div>
       <div slot="root-end">
          <div class="div-border"></div>
       </div>
    </f7-list-item>
  </f7-list>
</f7-page>
</template>

<script>
export default {
}
</script>

<style>
.md .list .gglibrary .gglibrary-item .item-content{
    padding-left: 0px;
}
div.list.media-list.gglibrary{
  margin: 0px;
  padding-left: 31px;
}
div.navbar-inner.sliding{
  height: 65px;
  background: #FFFFFF;
}
div.list.gglibrary.media-list ul li{
  border: 0px solid #E9E9E9;
  height: 95px;
  padding-left: 0px;
}
label.firstcharacter{
  margin-top: -20px;
  margin-left: -20px;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 21px;
}
div.gglib-ggname
{
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #4A4A4A;
  letter-spacing: 0;
  line-height: 21px;
}
div.item-subtitle{
  font-family: PFSquareSansPro-Light;
  font-size: 15px;
  color: #4A4A4A;
  letter-spacing: 0;
  line-height: 18px;
}
.md .list li.SW_bg .item-after{
  background: #FF6D7F;
  border-radius: 32.4px;
  width: 22px;
  height: 15px;
}
li.SW_bg div.item-after span{
  font-family: PFSquareSansPro-Bold;
  font-size: 8px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 15px;
}
.md .list li.ST_bg .item-after{
  background: #54BCBF;;
  border-radius: 32.4px;
  width: 22px;
  height: 15px;
}
li.ST_bg div.item-after span{
  font-family: PFSquareSansPro-Bold;
  font-size: 8px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 15px;
}
.md .list li.FF_bg .item-after{
  background: #EF9F62;;
  border-radius: 32.4px;
  width: 22px;
  height: 15px;
}
li.FF_bg div.item-after span{
  font-family: PFSquareSansPro-Bold;
  font-size: 8px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 15px;
}
.md .list li.CJ_bg .item-after{
  background: #5C9FC9;;
  border-radius: 32.4px;
  width: 22px;
  height: 15px;
}
li.CJ_bg div.item-after span{
  font-family: PFSquareSansPro-Bold;
  font-size: 8px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 15px;
}
.md .list li.BLACK_bg .item-after{
  background: #9F9F9F;;
  border-radius: 32.4px;
  width: 22px;
  height: 15px;
}
li.BLACK_bg div.item-after span{
  font-family: PFSquareSansPro-Bold;
  font-size: 8px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 15px;
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
    margin-left: -6px;
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
.md .chip.color-GD {
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
    padding-left: 2px;
}
  .name-bg-SW{
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
  .name-bg-GD{
    background-color: #EF9F62;
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
  div.div-border{
    padding-top: 1px;
    background: #E9E9E9;
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
            
            b_render:0,
            inputname:"",
            jump_to:""
            }
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
        'l_ret_personal_favorite_list_s'
    ]),
    ...mapGetters('listdata',[
      'l_ret_our_gg_imf_s'
    ]),
    
    ...mapGetters('listdata',[
        'l_ret_search_data'
    ]),
    ...mapGetters('datainterchange',[
      'pageNavigation'
    ]),
  },
  created () {
    //需要一个重加载标志表明是否需要刷新
    this.b_render = 0
    var jump = ""
    if(this.pageNavigation != null)
        jump = JSON.parse(this.pageNavigation)
    this.jump_to = jump.to
    console.log("I'm jump from " + jump.from + " to " + jump.to)
    //得到当前登陆用户的gg列表
    //如果是查看自己的gg 则以自己为引导人查看
    //this.get_my_gglist('约翰')
    //cui 是个唯一值
    //根据来源页面的期望加载不同的数据集
   if(jump.to == "蝈蝈列表"){
                              this.get_my_gglist(this.l_ret_personal_imf_s.datas[0].个人表单)
        }else if(jump.to == "协力列表"){
                              this.get_our_gglist(this.l_ret_personal_imf_s.datas[0].个人表单)
        }
        else if(jump.to == "收藏列表"){
                              this.getPersonalFavoriteList(this.l_ret_personal_imf_s.datas[0].个人表单)
        }
    //this.getPersonalAccount('cui')
    //如果是查看自己作为管理者的gg 则以自己为管理人查
    //this.get_our_gglist('cui')
    
    //1s以后进行刷新
      this.timeout(1000).then(() => {
                console.log('in vue.timeout')
                if(jump.to == "收藏列表")
                {
                  console.log('in 1')
                  if(this.l_ret_personal_favorite_list_s != null)
                  {
                    this.b_render = 2
                  }
                  else
                    this.b_render = 1
                }
                  
                else if (jump.to == "协力列表")
                {
                  console.log('in 2')
                  if(this.l_ret_our_gg_imf_s != null)
                  {
                    this.b_render = 2
                  }
                  else
                    this.b_render = 1
                }
                else if (jump.to == "搜索列表")
                {
                    if(this.l_ret_search_data != null)
                    {
                      this.b_render = 2
                    }
                    else
                      this.b_render = 1
                }
                else 
                {
                  if(this.l_ret_gg_imf_s != null)
                  {
                    
                    this.b_render = 2
                  }
                  else
                    this.b_render = 1
                }
      });
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
      'getPersonalFavoriteList'
    ]),
    ...mapActions('datainterchange',[
      'setPageNavigation'
    ]),
    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),
    reflash() {
        console.log("I'm back!")
    },
    timeout(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
                })
      },
    local_setSelectedGG(keyid, index){
      //全局设置 ggID
      this.setSelectedUser(index)
      //设置跳转来源
      /*var str = '{"from":"' + this.jump_to + '","to":"蝈蝈信息"}'
      this.setPageNavigation(str)*/
      this.gotoPodosysAnyPage('蝈蝈信息')
      this.$f7router.navigate('/gglist/')
    }
  }
}
</script>