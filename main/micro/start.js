// start 文件
import { setList } from './const/subApps'
// 实现路由拦截
import { rewriteRouter } from './router/rewriteRouter'
 
rewriteRouter()

const registerMicroApps = (appList)=>{
    // 注册到window上
    // window.appList = appList
    setList(appList)
}


export default {
    registerMicroApps
}