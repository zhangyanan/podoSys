<template>
  <f7-page>
    <f7-block class="row">
      <f7-col>
      <f7-button raised panel-open="left">打开左侧面板</f7-button>
      </f7-col>
      <f7-col>
      <f7-button raised panel-open="right">打开右侧面板</f7-button>
      </f7-col>
    </f7-block>
  </f7-page>
</template>
<script>
import { f7Navbar, f7Page, f7Block, f7Col, f7Button } from 'framework7-vue'
export default {
  components: {
    f7Navbar,
    f7Page,
    f7Block,
    f7Col,
    f7Button
  }
}
</script>
