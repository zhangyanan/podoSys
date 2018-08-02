<style lang="scss" scoped>
  .md .navbar {
      height: 86px;
      color: #fff;
      font-size: 20px;
  }

  .md .navbar .header-content-title {
      color:#000;
  }

  div.navbar-inner.sliding{
  height: 65px;
  background: #ffffff;
}

.navbar-inner {
    padding-left: 0px;
}

  .pull-out-icon{
    width: 28px;
    height: 28px;
  }
  .pull-out-icon img{
    width: 30px;
    height: 30px;
  }
  .add_21profile-icon{
    width: 28px;
    height: 28px;
  }
 .add_21profile-icon img{
    width: 28px;
    height: 28px;
    
  }
  .md .button.button-raised {
     -webkit-box-shadow: 0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0);
     box-shadow: 0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0); 
}
</style>
<template>
  <f7-navbar>
    <f7-nav-left>
        <f7-link href="/myItem/" no-link-class>
          <span class="pull-out-icon">
            <f7-button raised panel-open="left"><img src="@/assets/icon_all/pull_out@2x.png"/></f7-button>
          </span>
        </f7-link>
    </f7-nav-left>
    <f7-nav-title>
      <label class="header-content-title"></label>
    </f7-nav-title>
    <f7-nav-right>
      <f7-link addPage v-if="addPage" href="/quick/">
        <span class="add_21profile-icon">
          <img src="@/assets/icon_all/add_21profile@2x.png"/>
        </span>
      </f7-link>
      <f7-link icon-material="menu" panel-open="right" v-else-if="!noMenu" popup-open data-popup=".popup-menu"></f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>
<script>
export default {
  data() {
    return {
           }
  },
  computed: {
  },
  created () {
    
  },
  methods: {
    goleft(keyid, index){
      this.$f7router.navigate('/myItem/')
    },
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    addPage: {
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
