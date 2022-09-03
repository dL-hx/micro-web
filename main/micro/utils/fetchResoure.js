// fetch 资源
export const fetchResource = (url)=> {
    return fetch(url).then(async res=> {
        // 获取response 内容
        return await res.text()
    })
}