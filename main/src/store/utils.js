import { MicroStart } from '../../micro'

const { registerMicroApps, start }= MicroStart
// 注册子应用
export const registerApp=(list)=>{
    // 注册到微前端框架
    registerMicroApps(list)

    // 启动微前端框架
    start()
}