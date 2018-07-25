
<script>
import { mapState, mapGetters, mapActions, mapMutations, Store } from 'vuex'
export default {
  data() {
    return {myTxt:"button",
            selectOption:"",
            selectRange:"88",
            fruit:"apple",
            checkfruits:[],
            jobIsDone: false,
            inputname:"",
            }
  },
  computed: {
    ...mapGetters('listdata',[
      'l_ret_gg_imf_s'
    ]),

    //得到当前页面
    ...mapGetters('datainterchange',[
      'currentPage'
    ]),
    
  },
  created () {
    this.setSelectedUser('please do it!')
    this.get_my_gglist('ivy')
  },
  methods: {
    ...mapActions('datainterchange',[
      'setSelectedUser'
    ]),

    //返回上一个页面 无需参数
    ...mapActions('datainterchange',[
      'gotoPrevPage'
    ]),

    //前进到下一个页面 需要该页面的名称
    ...mapActions('datainterchange',[
      'gotoNextPage'
    ]),

    ...mapActions('datainterchange',[
      'getCurrentPage'
    ]),

    ...mapActions('listdata',[
      'get_my_gglist'
    ]),

    

    
    push()  {
      //window.location.href ='/error/'
      this.$f7router.navigate('/error/')
    },

    goTab1() {
      console.log('goTab1')
      this.gotoNextPage("tab1")
      this.getCurrentPage()
    },

    goTab3() {
      this.gotoNextPage("tab3")
      this.getCurrentPage()
    },

    goBack() {
      this.gotoPrevPage("")
      this.getCurrentPage()
    },

    showDeterminate(inline) {
        const self = this;
        const app = self.$f7;
        if (self.determinateLoading) return;
        self.determinateLoading = true;
        let progressBarEl;
        if (inline) {
          progressBarEl = app.progressbar.show('#demo-determinate-container', 0);
        } else {
          progressBarEl = app.progressbar.show(0, app.theme === 'md' ? 'yellow' : 'blue');
        }
        let progress = 0;
        function simulateLoading() {
          setTimeout(() => {
            const progressBefore = progress;
            progress += Math.random() * 10000;
            app.progressbar.set(progressBarEl, progress);
            if (progressBefore < 100) {
              simulateLoading(); // keep "loading"
            } else {
              self.determinateLoading = false;
              app.progressbar.hide(progressBarEl); // hide
            }
          }, Math.random() * 1000 + 200);
        }
        simulateLoading();
      },
  }
}

function showValue()
{
  document.getElementById("price-value").value=document.getElementById("my-range").value;
  console.log(document.getElementById("price-value").value);
}
/*var $$ = Dom7;
$$('#my-range').on('range:change', function (e, range) {
  $$('.price-value').text('$'+(range.value));
});*/
</script>
<template>
  <f7-page :page-content="false">
  <f7-navbar :title="currentPage" back-link="Back"></f7-navbar>
  <f7-toolbar tabbar>
    <f7-link tab-link="#tab-1" :tab-link-active='2==1'>Tab 1</f7-link>
    <f7-link tab-link="#tab-2" :tab-link-active='1==1'>Tab 2</f7-link>
    <f7-link tab-link="#tab-3" :tab-link-active='3==1'>Tab 3</f7-link>
  </f7-toolbar>
  <f7-tabs>
    <f7-tab id="tab-1" class="page-content">
      <f7-block>
        <p @click="goTab1()">Tab 1 content</p>
        ...
      </f7-block>
    </f7-tab>
    <f7-tab id="tab-2" class="page-content" :tab-active='true' >
      
        <p @click="goBack()">Tab 2 content</p>
        ...
        <div>
        <p>Inline determinate load & hide:</p>
        <hr id="hr-test">
        <p id="demo-determinate-container"></p>
        <p>
          <f7-button raised @click="showDeterminate(true)">Start Loading</f7-button>
        </p>
      </div>
    </f7-tab>
    <f7-tab  id="tab-3" class="page-content"> 
      <f7-block>
        <p @click="goTab3()">Tab 3 content</p>
        ..
      </f7-block>
    </f7-tab>
  </f7-tabs>
</f7-page>
</template>
<style>
#hr-test
{
	width:100px;
	height:2px;
	left:0px;
	background:blue;
	transition:width 0.3s;
	-webkit-transition:width 0.3s; /* Safari */
}

#hr-test:hover
{
	width:300px;
}
</style>

