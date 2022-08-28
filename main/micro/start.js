import { setList } from './const/subApps'
// start 文件
const registerMicroApps = (appList)=>{
    // 注册到window上
    // window.appList = appList
    setList(appList)
}


export default {
    registerMicroApps
}