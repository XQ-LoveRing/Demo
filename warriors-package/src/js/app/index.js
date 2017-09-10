/*
首页功能

define(id,[jquery],function($){$('')})
id:模块标识（当前模块名字，可省略）
dependencies:以一个数组形式标识当前模块所依赖的模块
可省略，默认为["require","exports","module"]
factory(工厂函数),当前模块要执行的函数或对象。

dependencies 与factory中的参数一一对应。 参数为依赖模块return的数据。
*/

define(['jquery','com/goTop','com/newsWaterfull','com/carousel'],function($,GoTop,ajaxNews,Carousel){
	GoTop.init($("body"));
	ajaxNews.init($('.ct-waterfall'));
	Carousel.init($('.carousel'));
})