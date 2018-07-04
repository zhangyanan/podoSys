
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
      'l_ret_gg_imf_s'
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

    ...mapActions('listdata',[
      'get_my_gglist'
    ]),

    push()  {
      //window.location.href ='/error/'
      this.$f7router.navigate('/error/')
    }
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
  <f7-page>
    <v-header title='hello' back></v-header>
    <f7-list media-list>
      <f7-list-item
        link="/dashboard/"
        media="path/to/image.jpg"
        title="Item Title"
        subtitle="Item Subtitle"
        text="Some text"
        after="Read more"
      ></f7-list-item>
    </f7-list>
    <f7-link @click="$f7router.navigate('/error/')">About</f7-link>
    <a href = "#" @click="push()">ddddd</a>
     
    
   
    <f7-list>
      <f7-list-group>
        <f7-list-item title="Group 1" group-title></f7-list-item>
        <f7-list-item title="Item 1"></f7-list-item>
        <f7-list-item title="Item 2"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="Group 2" group-title></f7-list-item>
        <f7-list-item title="Item 1"></f7-list-item>
        <f7-list-item title="Item 2"></f7-list-item>
      </f7-list-group>
  </f7-list>
  </f7-page>  
</template>
<style lang="scss" scoped>

</style>

