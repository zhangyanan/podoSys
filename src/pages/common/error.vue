<template>
  <f7-page>
    <!-- Panels Overlay -->
  <div>
    <span>非常抱歉，您当前的网络缓慢，数据无法正常返回</span>
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