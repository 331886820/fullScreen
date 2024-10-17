[博客](https://juejin.cn/user/501800125607752) |
[NPM地址](https://www.npmjs.com/~yg331886820)  |
[git源码](https://github.com/331886820/fullScreen) |
[gitee源码](https://gitee.com/yg331886820/fullScreen)

# 项目介绍
本项目用于点击按钮或元素切换全屏或退出全屏，采用JS原生兼容写发适用大屏看板场景。具体可查看使用示例和使用帮助，有任何问题欢迎留言。

src/view/fullScreen.ts 文件为typescript 使用示例。
src/view/fullScreen.vue 文件为vue使用示例(本项目未使用)。

# 安装
npm install yg-fullscreen

# 导入使用
import { fullscreen } from "yg-fullscreen";


# 使用示例
```demo.vue
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
      // 最外层的DOM的id是app
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
```

# 使用帮助




**一、引入yg-fullscreen.js**
```
1.Node.js方式引入 
（1）安装
npm install yg-fullscreen  或者  yarn add yg-fullscreen

（2）引入
import { fullscreen } from 'yg-fullscreen';

```