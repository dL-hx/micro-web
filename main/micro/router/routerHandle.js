import { isTurnChild } from "../utils";
import { lifecycle } from "../lifeCycle";
// 每次路由切换打印事件
export const turnApp = async ()=>{
    if (isTurnChild()) {
        // 微前端的生命周期执行
        await lifecycle()
    }
}