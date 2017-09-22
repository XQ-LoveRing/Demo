// （{
// 	baseUrl:'../',  //以自身的路径为准，找到main.js中对应的baseUrl
// 	paths:{    //baseUrl一致了，那么paths也不需要修改
// 		'jquery':'lib/jquery-2.1.1.min' 
// 	},
// 	name:'main',   //入口文件
// 	out:'../../../dist/merge.js'
// }）

({
    baseUrl: "..",
    paths: {
        'jquery': 'lib/jquery-2.1.1.min'
    },
    name: "main",
    out: "../../dist/merge.js"
})