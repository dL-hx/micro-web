import { patchRouter } from '../utils'
import { turnApp } from './routerHandle'

// 重写路由跳转： 实现路由拦截
export const rewriteRouter = () => {

    window.history.pushState =  patchRouter(window.history.pushState, 'micro_push')
    window.history.replaceState = patchRouter(window.history.replaceState, 'micro_replace')

    // add:event bind
    window.addEventListener('micro_push', turnApp)
    window.addEventListener('micro_replace', turnApp)

    // 监听返回事件
    window.onpopstate = function () {
        turnApp()
    }
}