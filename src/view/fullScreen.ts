/*
 * @Author: Y.G

 * @Date: 2024-10-17 10:08:11
 * @LastEditTime: 2024-10-17 10:55:18
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \vue-fullscreen-demo\src\view\fullscreen.ts
 * this is a custom string
 */
import { fullscreen } from 'yg-fullscreen'
export function setFullScreen(element:HTMLButtonElement){
  const setFullS = () => {
    fullscreen(element.id)
  }
	element.addEventListener('click', () => setFullS())
}