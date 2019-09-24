//导出默认成员 一个js中只能有一个default 可以默认导出任意类型成员
// export default function (){
//     console.log("bar 模块 ES6 default function")
// }
export default {
    name: 'mxg'
}

export const x = 1
export const y = 2
export function add(a,b) {
    return a+b
}