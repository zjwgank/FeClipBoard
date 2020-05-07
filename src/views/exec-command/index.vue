<template>
  <div class="exec-command">
    <el-card
      header="文本复制"
      class="exec-command-card"
    >
      <div
        class="exec-command-card-content"
        id="str"
      >
        {{str}}
      </div>
      <el-button
        class="exec-command-card-btn"
        size="small"
        type="primary"
        @click="handleCopyText"
      >复制</el-button>
    </el-card>
    <el-card
      header="图片复制"
      class="exec-command-card"
    >
      <img :src="img" />
      <el-button
        class="exec-command-card-btn"
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

@Component
export default class ExecCommand extends Vue {
  str: string = str
  img: string = img

  handleCopyText () {
    const strNode = document.getElementById('str') || document.createElement('div')
    const selection: Selection = window.getSelection() || new Selection()
    const range = document.createRange()
    range.selectNodeContents(strNode)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    console.log('------复制完成')
  }

  handleCopyImg () {
    console.log('-------')
  }
}
</script>
<style lang="scss" scoped>
.exec-command {
  padding: 20px;
  &-card {
    margin: 20px;
    &-btn {
      margin: 10px;
    }
  }
}
</style>
