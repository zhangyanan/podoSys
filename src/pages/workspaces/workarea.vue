<template>
  <f7-page>
    <v-header title='工作区' back></v-header>
    <div class="workspace">
      <div>  
        <nav class="workmenu"
            v-for="(itemmenu, index) in this.workMenuList"
            :key="index">
            <a v-bind:href="itemmenu.link">
            {{itemmenu.工作区菜单名称}}</a>
        </nav>
      </div>
      <div>
        <f7-list>
          <ul>
          <!-- we will get the items we need to render from VL render external callback -->
          <f7-list-item
            v-for="(item, index) in this.workList"
            :key="index"
          >
            <div class="workicon">{{w_tempStr}}</div>
            <div class="workcol2">
              <span class="item-title">{{item.活动名称}}</span>
              <span class="item-date">{{item.活动时间}}</span>
            </div>
            <div class="workcol3"><span class="item-detail">{{item.活动备注}}</span></div>
          </f7-list-item>
          
        </ul>
        </f7-list>
        <f7-button  v-on:click="setStoreTestStr()">Button Text</f7-button>
      </div>
    </div>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  computed: {
    ...mapGetters('workarea', [
      'workList'
    ]),
    ...mapGetters('workarea', [
      'workMenuList'
    ]),
    ...mapGetters('workarea', [
      'w_tempStr'
    ])
  },
  created () {
    this.getWorkList(),
    this.getWorkMenuList()
    this.getTestStr()
  },
  methods: {
    ...mapActions('workarea', [
      'getWorkList'
    ]),
    ...mapActions('workarea', [
      'getWorkMenuList'
    ]),
    ...mapActions('workarea', [
      'getTestStr'
    ]),
    ...mapActions('workarea', [
      'setTestStr'
    ]),
    setStoreTestStr(){
      this.setTestStr("DT")
    },
    getSubtitle (str) {
      return str.substring(str.indexOf(':') + 1, str.length)
    },
    pullRefresh () {
      this.getWorkList(),
      this.getWorkMenuList()
      this.getTestStr()
    },
    pullEnd () {
      this.$root.$f7.pullToRefreshDone()
    }
  }
}
</script>

<style lang="scss">
html, body { 
  margin: 0px;
  padding: 0px;
  font-family: arial, tahoma, "Microsoft YaHei";
  font-size: 10pt;
}

.workspace{
  width: 100%;
  
}
nav.workmenu {
  margin: 10px 2px 1px 20px;
  display: inline-block;
  border-radius: 20px;
  border: 1px solid  #aaa;
  width:50px;
  /*水平居中*/
  text-align: center;
  /*垂直居中*/
  height: 35px;
  line-height: 35px;
  
  background-color: #e0e0e0;
}
nav.workmenu a {
  color:#000;
}

/*.workcol1{
  width: 40px;  
  display: inline-block;
  border: 1px solid #000;
  height: 5em;
  line-height: 5em;
}*/
.workicon {
    border: 1px solid #aaa;
    border-radius: 50% 50%;
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-right: 10px;
    display: inline-block;
}

.workcol2{
  width: 60%;
  height: 5em;
  display: inline-block;
}

.workcol2 .item-title{
  font-size: 1em;
  display: block;
  top:18px;
}

.workcol2 .item-date{
  font-size: .8em;
  color: #cdcdcd;
  display: block;
  padding-top: 12px;
}

.workcol3{
  width:calc(40% - 30px);
  height: 5em;
  display: block;
  padding-left:50px;
  line-height: 5em;
}

.workcol3 .item-detail{
  font-size: .8em;
  display: block;
  padding-top: 4px;
  padding-left: 20px;
}

.md .list {
    margin: 0px;
    font-size: 16px;
}

.list .item-inner {
    padding-top: 10px;
}


.md .list ul:before {
    background-color: rgba(0,0,0,0)
}

.md .list .item-inner:after {
    background-color:  rgba(0,0,0,0)
}

.md .list ul:after {
    background-color: rgba(0,0,0,0)
}
</style>
