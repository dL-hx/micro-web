// const subNavList = [
//     {
//         name:'react15', //子应用名称
//         activeRule:'/react15', // 激活规则
//         container:'#micro-container' ,// 显示的容器，唯一标识
//         entry:'//localhost:9082/' // 启动的入口
//     },
//     ...
// ]
import { fetchResource } from '../utils/fetchResoure';

// 加载html方法
export const loadHtml = async (app) =>{
    // 1.子应用需要显示在哪里
    let container = app.container // #id 内容
    // 2.子应用的入口
    let entry = app.entry

    const html = await parseHtml(entry)

    // 传入容器
    const ct = document.querySelector(container, html)

    if (!ct) {
        throw new Error('容器不存在,请查看');
    }

    ct.innerHTML = html

    return app
}

export const parseHtml = async (entry)=>{
    // axios ajax fetch
    const html = await fetchResource(entry)// 获取html
    // console.log(html);

    const div = document.createElement('div')
    div.innerHTML = html

    // 标签 link script(src, js)

    const [dom, scriptUrl, script] = await parseJs()



    return html
}

// 解析Js代码
export const parseJs = async () =>{
    return ['', '', '']
}