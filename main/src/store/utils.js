import { MicroStart } from '../../micro'

const { registerMicroApps }= MicroStart
// 注册子应用
export const registerApp=(list)=>{
    // 注册到微前端框架
    registerMicroApps(list)
}