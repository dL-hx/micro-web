import { getMainLifecycle } from '../const/mainLifeCycle';
import { findAppByRoute} from '../utils';
export const lifecycle = async () =>{
    // 获取上一个子应用
    const prevApp = findAppByRoute(window.__ORIGIN_APP__)
    // 获取要跳转的子应用
    const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)

    console.log(prevApp, nextApp);

    if(!nextApp){
        return
    }

    // 1.销毁上个App,执行 主应用生命周期
    if (prevApp && prevApp.destoryed ) {
        await destoryed(prevApp)
    }

    // 2. 渲染当前子组件
    const app = await beforeLoad(nextApp)
    
    await mounted(app)// 将mounted设置为同步函数, 并执行
}

export const beforeLoad = async (app)=>{
    await runMainLifeCycle('beforeLoad')

    app && app.beforeLoad&&app.beforeLoad()

    const appContext = null // 将app内容进行渲染

    return appContext
}

export const mounted = async (app)=>{
    app && app.mounted&&app.mounted()

    // 执行主应用生命周期-mounted
    await runMainLifeCycle('mounted')
}

export const destoryed =async (app)=>{
    app && app.destoryed&&app.destoryed()
    // 对应执行以下主应用的生命周期-执行(await)销毁生命周期
    await runMainLifeCycle('destoryed')
}


export const runMainLifeCycle = async (type) =>{
  const mainlife = getMainLifecycle() // 获取所有的生命周期

  // 通过type执行生命周期
  await Promise.all(mainlife[type].map(async item => await item()))

}

