<template>
  <div class="layout">
    <div class="layout-header">
      <el-menu
        mode="horizontal"
        :default-active="defaultActive"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item
          v-for="({name,route},index) in menulist"
          :key="index"
          :route="route"
          :index="`${index}`"
        >{{name}}</el-menu-item>
      </el-menu>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  defaultActive = '0'
  menulist: Array<{ name: string; route: string }> = [{
    name: 'navigator-clipboard',
    route: '/navigator-clipboard'
  }, {
    name: 'exec-command',
    route: '/exec-command'
  }, {
    name: 'js-clipboard',
    route: '/js-clipboard'
  }]
}
</script>
<style lang="scss" scoped>
</style>
