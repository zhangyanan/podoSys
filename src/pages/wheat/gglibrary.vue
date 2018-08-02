<!-- 当前页面名称： 蝈蝈列表 收藏列表 协力列表 搜索列表 -->
<template>
<f7-page class="gglist-page">
  <v-addinfo v-if="currentPage != '蝈蝈列表'" :title='currentPage'></v-addinfo>
  <v-asideheader v-else addPage :title='currentPage'></v-asideheader>
  <f7-list v-if="this.l_ret_gg_imf_s.num != null && this.l_ret_gg_imf_s.num != 0" media-list class="gglibrary">
    <f7-list-item v-for="(item, index) in this.l_ret_gg_imf_s.datas" :key="index" 
              @click="local_setSelectedGG(item.键值, index)" class="gglibrary-list-item">
       <div slot="subtitle" class="gglib-ggname">{{item.姓名}}</div>         
       <div slot="media">
         <div :class="'name-bg-' +item.阶段" ><span class="surname">{{item.姓名!=''?item.姓名.substr(0,1):''}}</span></div>
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
                  <div class="col-20"><span :class="'phone-icon-' + item.阶段">
                    <!-- 我也不想这么写， 但是不这样应该怎么实现呢，太尴尬了，那就这样吧，一切为了效果 -->
                    <img v-if="item.阶段 == 'SW' || item.阶段 == 'TK' || item.阶段 == 'QJ' || item.阶段 == 'XJ'" v-bind:src="'/static/icon_all/listicon_red1.png'"/>
                    <img v-else-if="item.阶段 == 'GD' || item.阶段 == 'FF'"  v-bind:src="'/static/icon_all/listicon_orange1.png'"/> 
                    <img v-else-if="item.阶段 == 'CJ' || item.阶段 == 'ZJ' || item.阶段 == 'GJ'"  v-bind:src="'/static/icon_all/listicon_blue1.png'"/> 
                    <img v-else-if="item.阶段 == 'BLACK'"  v-bind:src="'/static/icon_all/listicon_black1.png'"/> 
                    <img v-else-if="item.阶段 == 'RJ'"     v-bind:src="'/static/icon_all/listicon_green1.png'"/> 
                    <img v-else                           v-bind:src="'/static/icon_all/listicon_gray1.png'"/> 
                   
                   </span></div>
                  <div class="col-80"><span class="phone">{{item.手机}}</span></div>
                </div>
              </div>
              <div class="col-20">
                <div class="row">
                  <div class="col-50"><span :class="'gender-icon-' + item.阶段">
                    <img v-if="item.阶段 == 'SW' || item.阶段 == 'TK' || item.阶段 == 'QJ' || item.阶段 == 'XJ'" v-bind:src="'/static/icon_all/listicon_red2.png'"/>
                    <img v-else-if="item.阶段 == 'GD' || item.阶段 == 'FF'"  v-bind:src="'/static/icon_all/listicon_orange2.png'"/> 
                    <img v-else-if="item.阶段 == 'CJ' || item.阶段 == 'ZJ' || item.阶段 == 'GJ'"  v-bind:src="'/static/icon_all/listicon_blue2.png'"/> 
                    <img v-else-if="item.阶段 == 'BLACK'"  v-bind:src="'/static/icon_all/listicon_black2.png'"/> 
                    <img v-else-if="item.阶段 == 'RJ'"     v-bind:src="'/static/icon_all/listicon_green2.png'"/> 
                    <img v-else                           v-bind:src="'/static/icon_all/listicon_gray2.png'"/> 
                   
                    </span></div>
                  <div class="col-50"><span class="gender">{{item.性别}}</span></div>
                </div>
              </div>
              <div class="col-40">
                <div class="row">
                  <div class="col-20"><span :class="'date-icon-' + item.阶段">
                    <img v-if="item.阶段 == 'SW' || item.阶段 == 'TK' || item.阶段 == 'QJ' || item.阶段 == 'XJ'" v-bind:src="'/static/icon_all/listicon_red3.png'"/>
                    <img v-else-if="item.阶段 == 'GD' || item.阶段 == 'FF'"  v-bind:src="'/static/icon_all/listicon_orange3.png'"/> 
                    <img v-else-if="item.阶段 == 'CJ' || item.阶段 == 'ZJ' || item.阶段 == 'GJ'"  v-bind:src="'/static/icon_all/listicon_blue3.png'"/> 
                    <img v-else-if="item.阶段 == 'BLACK'"  v-bind:src="'/static/icon_all/listicon_black3.png'"/> 
                    <img v-else-if="item.阶段 == 'RJ'"     v-bind:src="'/static/icon_all/listicon_green3.png'"/> 
                    <img v-else                           v-bind:src="'/static/icon_all/listicon_gray3.png'"/> 
                   
                    </span></div>
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
  <!-- 没有返回数据 -->
  <f7-list v-else-if="this.l_ret_gg_imf_s.num == null">
    <f7-list-item>
      <f7-label>⌛️ 数据玩命加载中...^_^</f7-label>
    </f7-list-item>
  </f7-list>  
  <!-- 数据为空 -->
  <f7-list v-else>
    <f7-list-item>
      <f7-label>您好，您的 {{currentPage}} 数据为空，还需要再努力哦^_^</f7-label>
    </f7-list-item>
  </f7-list>  
</f7-page>
</template>

<script>
export default {

}
</script>

<style>
div .gglist-page .navbar-inner.sliding{
    background: #fff;
    color:#FFFFFF;
    margin: 0;
    padding:0;
    -webkit-box-shadow: 0 0 0 1px rgba(74, 74, 74, 0.1);
    box-shadow: 0 0 0 1px rgba(74, 74, 74, 0.1);
    height: 100%;
}

.md .gglist-page .navbar .button:not(.button-fill):not(.button-fill-md), .md .subnavbar .button:not(.button-fill):not(.button-fill-md), .md .toolbar .button:not(.button-fill):not(.button-fill-md) {
    color: #fff;
    padding: 0px;
    margin: 0;
}

.md .gglist-page .navbar .header-content-title[data-v-15dce536] {
    color: #000;
    padding-left: calc(50% - 40px);
}

/*使得标题居中的样式*/
.md .gglist-page .navbar .content-title[data-v-01bba122] {
    padding-left: calc(50% - 20px);
    color: #000000;
}
.md .gglist-page .navbar .title {
    margin: 0;
    line-height: 1.2;
    text-align: left;
    width: calc(100% - 100px);
}

/*addinfo*/
.md .gglist-page .navbar .left, .navbar .right {
    padding-left: 19px;
}
/**/

.md .gglist-page .navbar .right {
    margin: 0;
    padding: 0;
}

.md .gglist-page .list {
    padding: 0px;
    margin:0px;
}

.md .gglist-page   .gglibrary-list-item .item-content{
    padding: 0px;
    margin:0px;
    height:104.5px;
}

.md .gglist-page   .gglibrary-list-item .item-content .item-media {
    padding-top: 24px;
    padding-left: 31px;
}

.md .gglist-page  .gglibrary-list-item .item-inner{
    padding: 26px,0px,0px,0px;
    margin:0px;
    height:100%;
}

.md .gglist-page .navbar:after{
  background:transparent;
}

.md .media-list .gglibrary-list-item .item-inner, .md li.media-item .gglibrary-list-item .item-inner {
    padding-top: 24px;
    padding-left:19px;
    padding-bottom: 14px;
}

div.list.media-list.navbar-inner.sliding{
  height: 65px;
  background: #FFFFFF;
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
  background: #54BCBF;
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
.md .chip.color-QJ {
    background: #FF6D7F;
    border-radius: 32.4px;
}
.md .chip.color-TK {
    background: #FF6D7F;
    border-radius: 32.4px;
}
.md .chip.color-XJ {
    background: #FF6D7F;
    border-radius: 32.4px;
}
.md .chip.color-ST {
    background: #54BCBF;
    border-radius: 32.4px;
}
.md .chip.color-RJ {
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
  .name-bg-QJ{
    background-color: #FF6D7F;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-TK{
    background-color: #FF6D7F;
    width:59px;
    height: 59px;
    line-height: 59px;
    border-radius: 30px;
    display:table-cell;
  }
  .name-bg-XJ{
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
  .name-bg-RJ{
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
            jump_to:"",
            b_finishload:false,
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

    //得到当前页面
    ...mapGetters('datainterchange',[
    'currentPage'
    ]),
  },
  created () {
    //需要一个重加载标志表明是否需要刷新
    this.b_render = 0
    /*var jump = ""
    if(this.pageNavigation != null)
        jump = JSON.parse(this.pageNavigation)*/
    this.jump_to = this.currentPage
    //console.log("I'm jump from " + jump.from + " to " + jump.to)

    //得到当前登陆用户的gg列表
    //如果是查看自己的gg 则以自己为引导人查看
    //this.get_my_gglist('约翰')
    //cui 是个唯一值
    //根据来源页面的期望加载不同的数据集
   if(this.jump_to == "蝈蝈列表"){
              this.get_my_gglist(this.l_ret_personal_imf_s.datas[0].个人表单)
        }else if(this.jump_to == "协力列表"){
              this.get_our_gglist(this.l_ret_personal_imf_s.datas[0].个人表单)
        }
        else if(this.jump_to == "收藏列表"){
              this.getPersonalFavoriteList(this.l_ret_personal_imf_s.datas[0].个人表单)
        }

    //this.getPersonalAccount('cui')
    //如果是查看自己作为管理者的gg 则以自己为管理人查
    //this.get_our_gglist('cui')
    
    //设置了5s刷新
    /*this.loadData(1000,false);
    this.loadData(2000,false);
    this.loadData(3000,false);
    this.loadData(4000,false);
    this.loadData(5000,true);*/
    /*  this.timeout(2000).then(() => {
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
      });*/
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

    //返回上一个页面 无需参数
    ...mapActions('datainterchange',[
    'gotoPrevPage'
    ]),

    //前进到下一个页面 需要该页面的名称
    ...mapActions('datainterchange',[
    'gotoNextPage'
    ]),

    reflash() {
        console.log("I'm back!")
    },

    /***************************************************刷新控制**********************************/
    timeout(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
                })
      },

    loadData(ms, b_finish) {
        this.timeout(ms).then(() => {
                if(this.b_render == 2)
                  //不再判断了
                  return;
                console.log('in vue.timeout ＝ ' + ms)

                if(this.jump_to == "收藏列表")
                {
                  console.log('in 收藏列表')
                  if(this.l_ret_personal_favorite_list_s.num != null)
                  {
                    this.b_render = 2
                  }
                  else if(b_finish)
                    this.b_render = 1
                }
                  
                else if (this.jump_to == "协力列表")
                {
                    console.log('in 协力列表')
                    if(this.l_ret_our_gg_imf_s.num != null)
                    {
                      this.b_render = 2
                    }
                    else if(b_finish)
                      this.b_render = 1
                }
                else if (this.jump_to == "搜索列表")
                {
                    console.log('in 搜索列表')
                    if(this.l_ret_search_data.num != null)
                    {
                      this.b_render = 2
                    }
                    else if(b_finish)
                      this.b_render = 1
                }
                else 
                {
                  if(this.l_ret_gg_imf_s.num != null)
                  {
                    this.b_render = 2
                  }
                  else if(b_finish)
                    this.b_render = 1
                }
      });
    },


    local_setSelectedGG(keyid, index){
      //全局设置 ggID
      this.setSelectedUser(index)
      //设置跳转来源
      /*var str = '{"from":"' + this.jump_to + '","to":"蝈蝈信息"}'
      console.log(str)
      */
      this.gotoNextPage("蝈蝈信息")
      //this.gotoPodosysAnyPage('蝈蝈信息')
      this.$f7router.navigate('/gglist/')
    }
  }
}
</script>