<!--
 * @Author: Y.G
 * @Date: 2024-10-16 15:25:58
 * @LastEditTime: 2024-10-16 16:32:54
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \vue3\src\components\yg\npm-package\fullscreen.vue
 * this is a custom string
-->
<template>
  <div>
    <button class="fullscreenbtn" @click="fullview">全屏</button>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { fullscreen } from "yg-fullscreen"

export default defineComponent({
  setup() {
    const fullview = () => {
      console.log("fullscreen");
      fullscreen('app');
    }
    return {
      fullview
    }
  },
})
</script>

<style scoped>
.fullscreenbtn {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 88;
}
</style>