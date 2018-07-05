<template>
  <div id="app">
    <f7-panel left reveal>
      <f7-block-title>我是左侧面板</f7-block-title>
      <f7-block>
        <f7-link panel-close>close me</f7-link>
        <p>左侧面板</p>
      </f7-block>
    </f7-panel>
    <f7-view :pushState="true" main/>
    <v-menu></v-menu>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
