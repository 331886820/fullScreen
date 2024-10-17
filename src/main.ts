/*
 * @Author: Y.G
 * @Date: 2024-10-17 09:46:53
 * @LastEditTime: 2024-10-17 10:47:59
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \vue-fullscreen-demo\src\main.ts
 * this is a custom string
 */
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setFullScreen } from './view/fullscreen.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="fullscreen-id" type="button">全屏</button>
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setFullScreen(document.querySelector<HTMLButtonElement>('#app')!)
