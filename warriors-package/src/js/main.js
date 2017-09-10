requirejs.config({
        baseUrl:"./src/js",   //js函数库位置   以index.html文件位置为准
        paths:{
            'jquery':'lib/jquery-2.1.1.min'    //方便入口模块中加载依赖模块   js文件不加后缀.js
        }
    });

    //加载入口模块  (模块使用)
    requirejs(['app/index'])   //模块入口src/js/app/index.js    这里不要加.js