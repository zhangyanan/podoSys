<template>
  <f7-page>
    <v-header title='工作区' back></v-header>
    <div class="workspace">
        <div>title</div>
        <div>
          <ul>
            <li>
              <div>
                <div class="colitem"><span class="hstyle">丁泽川</span><span class="hstyle">引导人</span><span class="hstyle">崔盛</span></div>
                <div class="colitem"><span class="hstyle">B</span><span>b</span></div>
              </div>
            </li>
          </ul>
          <f7-button  v-on:click="setStoreTestStr()">Button Text</f7-button>
        </div>
        <div>
        <f7-list>
          <ul>
          <!-- we will get the items we need to render from VL render external callback -->
          <f7-list-item
            v-for="(item, index) in this.announcementList"
            :key="index"
          >
            <div class="workcol2">
              <span class="item-title">{{item.发送人}}</span>
              <span class="item-date">{{item.接收人}}</span>
              <span class="item-date">{{item.通知标题}}</span>
              <span class="item-date">{{item.通知内容}}</span>
            </div>
          </f7-list-item>
          
        </ul>
        </f7-list>
        </div>
        
    </div>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  computed: {
    ...mapGetters('workarea', [
      'w_tempStr'
    ]),
    ...mapGetters('workarea', [
      'announcementList'
    ])
  },
  created () {
    this.getAnnouncementList()
  },
  methods: {
    ...mapActions('workarea', [
      'setTestStr'
    ]),
    ...mapActions('workarea', [
      'getAnnouncementList'
    ])
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

.colitem{
  display: inline-block;
}

.hstyle{
  display: block;
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
