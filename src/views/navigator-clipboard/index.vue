<template>
  <div class="navigator-clipboard">
    <el-card
      header="文本复制"
      class="navigator-clipboard-card"
    >
      <div class="navigator-clipboard-card-content">
        {{str}}
      </div>
      <el-button
        class="navigator-clipboard-card-btn"
        size="small"
        type="primary"
        @click="handleCopyText"
      >
        复制
      </el-button>
    </el-card>
    <el-card
      header="图片复制"
      class="navigator-clipboard-card"
    >
      <img :src="img" />
      <el-button
        class="navigator-clipboard-card-btn"
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
export default class NavigatorClipboard extends Vue {
  str: string = str
  img: string = img

  handleCopyText () {
    const { str } = this
    navigator.clipboard.writeText(str).then(() => {
      this.$message.success('复制成功')
    }).catch((err) => {
      this.$message.error(err)
    })
  }

  async handleCopyImg () {
    const { handleBlob } = this
    const data = await handleBlob()
    const { ClipboardItem } = (window as any)
    const Item = new ClipboardItem({ 'image/png': data })
    navigator.clipboard.write([Item]).then(() => {
      this.$message.success('复制成功')
    }).catch((err: any) => {
      // this.$message.error(err)
      console.log(err)
    })
  }

  handleBlob () {
    return new Promise((resolve, reject) => {
      const { img } = this
      const canvas = document.createElement('canvas')
      canvas.width = 300
      canvas.height = 300
      const ctx: any = canvas.getContext('2d')
      const Img = new Image()
      Img.setAttribute('crossOrigin', 'anymous')
      Img.src = img
      Img.onload = () => {
        ctx.drawImage(Img, 0, 0, 300, 300)
        canvas.toBlob((blob) => {
          console.log(blob)
          resolve(blob)
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.navigator-clipboard {
  padding: 20px;
  &-card {
    margin: 20px;
    &-btn {
      margin: 10px;
    }
  }
}
</style>
