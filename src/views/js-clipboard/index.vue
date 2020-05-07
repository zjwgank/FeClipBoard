<template>
  <div class="js-clipboard">
    <el-card
      header="文本复制"
      class="js-clipboard-card"
    >
      <div
        class="js-clipboard-card-content"
        id="str"
      >{{str}}</div>
      <el-button
        class="js-clipboard-card-btn"
        id="textBtn"
        size="small"
        type="primary"
        @click="handleCopyText"
      >复制</el-button>
    </el-card>
    <el-card
      header="图片复制"
      class="js-clipboard-card"
    >
      <div id="img"> <img :src="img" /></div>
      <el-button
        class="js-clipboard-card-btn"
        id="imgBtn"
        size="small"
        type="primary"
        @click="handleCopyImg"
      >复制</el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { str, img } from '@/utils'
import ClipboardJS from 'clipboard'

@Component
export default class JSClipboard extends Vue {
  str: string = str
  img: string = img

  handleCopyText () {
    const clipbaord = new ClipboardJS('#textBtn', {
      target: () => document.querySelector('#str') || document.createElement('div')
    })
    clipbaord.on('success', (e) => {
      const { action, text, trigger } = e
      console.log('Action-----------', action)
      console.log('text-------------', text)
      console.log('trigger----------', trigger)
      this.$message.success('复制成功')
      e.clearSelection()
      clipbaord.destroy()
    })
    clipbaord.on('error', (e) => {
      const { action, trigger } = e
      console.log('Action----------', action)
      console.log('trigger---------', trigger)
      clipbaord.destroy()
    })
  }

  handleCopyImg () {
    const clipbaord = new ClipboardJS('#imgBtn', {
      target: () => document.querySelector('#img') || document.createElement('div')
    })
    clipbaord.on('success', (e) => {
      const { action, text, trigger } = e
      console.log('Action-----------', action)
      console.log('text-------------', text)
      console.log('trigger----------', trigger)
      this.$message.success('复制成功')
      e.clearSelection()
      clipbaord.destroy()
    })
    clipbaord.on('error', (e) => {
      const { action, trigger } = e
      console.log('Action----------', action)
      console.log('trigger---------', trigger)
      clipbaord.destroy()
    })
  }
}
</script>
<style lang="scss" scoped>
.js-clipboard {
  padding: 20px;
  &-card {
    margin: 20px;
    &-btn {
      margin: 10px;
    }
  }
}
</style>
