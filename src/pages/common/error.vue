<template>
  <f7-page>
    <!-- Panels Overlay -->
  <div class="panel-overlay"></div>
 
  <!-- Left Panel with Reveal effect -->
  <div class="panel panel-left panel-reveal">
    <div class="content-block">
      <p>Left Panel content here</p>
      <!-- Click on link with "close-panel" class will close panel -->
      <p><a href="#" class="close-panel">Close me</a></p>
      <!-- Click on link with "open-panel" and data-panel="right" attribute will open Right panel -->
      <p><a href="#" data-panel="right" class="open-panel">Open Right Panel</a></p>
    </div>
  </div>
 
  <!-- Right Panel with Cover effect -->
  <div class="panel panel-right panel-cover">
    <div class="content-block">
      <p>Right Panel content here</p>
      <!-- Click on link with "close-panel" class will close panel -->
      <p><a href="#" class="close-panel">Close me</a></p>
      <!-- Click on link with "open-panel" and data-panel="left" attribute will open Left panel -->
      <p><a href="#" data-panel="left" class="open-panel">Open Left Panel</a></p>
    </div>
  </div>
 

  <div class="page-content">
    <div class="content-block">
      <!-- If no data-panel attribute, Left panel will be opened by default -->
      <p><a href="#" class="open-panel">Open Left Panel</a></p>
      <!-- Click on link with "open-panel" and data-panel="right" attribute will open Right panel -->
      <p><a href="#" data-panel="right" class="open-panel">Open Right Panel</a></p>
    </div>
  </div>
  </f7-page>
</template>

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
            inputname:""}
  },
  computed: {
    ...mapGetters('listdata',[
      ''
    ]),

    ...mapGetters('datainterchange',[
      'selectedUser'
    ])
  },
  created () {
    var in_data = this.selectedUser + '!!!!!'
    console.log(in_data)
  },
  methods: {
    ...mapActions('workarea', [
      'getTestStr'
    ]),
    ...mapActions('listdata',[
      'getTestConn'
    ]),
    ...mapActions('listdata',[
      'getformvalues'
    ]),
    ...mapActions('workarea',[
      'getWorkMenuList'
    ]),
    
    ...mapActions('datainterchange',[
      'getSelectedUser'
    ]),

    kick()  {

    }
  }
}
</script>