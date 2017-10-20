
import '../../css/index.css';
import '../../css/carousel.css';
import '../../css/news.css';

var $ = require('../lib/jquery-2.1.1.min');

var goTop = require('../com/goTop');
goTop.init($("body"));


var carousel = require('../com/carousel');
carousel.init($('.carousel'));


var ajaxNews = require('../com/newsWaterfull');
ajaxNews.init($('.ct-waterfall'));
