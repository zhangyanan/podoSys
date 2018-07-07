<template>
  <f7-page>
    <v-header title='error' back></v-header>
    <div default @click="kick()">
      页面建设中...
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