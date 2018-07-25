<style lang="scss" scoped>

div .add-info .navbar-inner.sliding{
  height: 65px;
  background: #54BCBF;
}

.md .add-info .navbar .content-title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #000;
    letter-spacing: -0.09px;
    line-height: 19px;
    padding-left: calc(50% - 20px);
}

.md .add-info .navbar .title {
    margin: 0;
    line-height: 1.2;
    text-align: left;
    width: calc(100% - 100px);
}
</style>
<template>
  <f7-navbar class="add-info">
    <f7-nav-left>
      <img v-if="title == '收藏列表' || title == '协力列表' || title == '搜索列表'" @click="goBack()" src="@/assets/icon_all/back_black.png">
      <img v-else @click="goBack()" src="@/assets/icon_all/back_white.png">
    </f7-nav-left>
    <f7-nav-title class="addinfo-title">
      <label class="content-title">{{title}}</label>
    </f7-nav-title> 
  </f7-navbar>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  computed: {
    ...mapGetters('listdata',[
      'l_ret_personal_imf_s'
    ]),
  },
  methods: {
    ...mapActions('datainterchange',[
    'gotoPodosysAnyPage'
    ]),
    ...mapActions('listdata',[
    'transportdata2render'
    ]),
    //返回上一个页面 无需参数
    ...mapActions('datainterchange',[
    'gotoPrevPage'
    ]),

    //前进到下一个页面 需要该页面的名称
    ...mapActions('datainterchange',[
    'gotoNextPage'
    ]),

    ...mapActions('listdata',[
    'getPersonalAccount'
    ]),

    goBack(){
      console.log("come from " + this.title)
      if(this.title == "编辑资料")
      {
        //重新得到个人信息
        this.getPersonalAccount(this.l_ret_personal_imf_s.datas[0].个人表单)
        this.$f7router.navigate('/userItem/')
      }
      else if(this.title == "21项表单")
      {
        this.gotoPrevPage('')
        this.$f7router.navigate('/gglist/')
      }
      else if(this.title == "编辑记录" || '添加记录' == this.title)
      {
        this.gotoPrevPage('')
        this.gotoNextPage('蝈蝈活动')
        this.$f7router.navigate('/gglist/')
      }
      else if(this.title == "收藏列表" || this.title == "协力列表" || this.title == "搜索列表")
      {
        //回到蝈蝈列表
        this.gotoPrevPage('')
        this.transportdata2render(1)

      }
    },
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    },
    noMenu: {
      type: Boolean,
      default: false
    }
  }
}
</script>
