
    var $=require('../lib/jquery-2.1.1.min');
    var ajaxNews = function () {
        function NewsWaterfull($ct) {
            console.log(123)
            this.$ct = $ct;
            this.item = $ct.find('.item');
            this.picCt = $ct.find('#pic-ct');
            this.init();
            this.bind();
            this.render();
            console.log(123)

        }

        NewsWaterfull.prototype.init = function () {
            this.curPage = 1;
            this.perPageCount = 9;
            var colSumHeight = this.colSumHeight = [];
            //获取元素宽度
            this.nodeWidth = this.item.outerWidth(true);
            //获取每行元素葛素
            this.colNum = parseInt(this.picCt.width() / this.nodeWidth);
            for (var i = 0; i < this.colNum; i++) {
                colSumHeight[i] = 0;
            }

        }

        //将获取的数据以瀑布流形式方式到页面上
        NewsWaterfull.prototype.render = function () {
            var _this = this;
            this.getDataViaAjax(function (newslist) {
                $.each(newslist, function (index, ele) {
//                    console.log(ele)
                    var $node = _this.createNode(ele);
                    $node.find('img').on('load', function (e) {
                        console.log("load img success")
                        $('.ct-waterfall').append($node)
                        _this.picCt.append($node);
                        _this.waterFallPlace($node);
                    })
                })
            })
        }

        //通过ajax获取数据
        NewsWaterfull.prototype.getDataViaAjax = function (callback) {
            var _this = this;
            $.ajax({
                url: 'https://platform.sina.com.cn/slide/album_tech',
                dataType: 'jsonp',
                jsonp: "jsoncallback",
                data: {
                    app_key: '1271687855',
                    num: _this.perPageCount,
                    page: _this.curPage
                }
            }).done(function (ret) {
                if (ret && ret.status && ret.status.code === "0") {
                    callback(ret.data);   //如果数据没问题，那么生成节点并摆放好位置
//                    console.log(ret.data)
                    _this.curPage++
                } else {
                    console.log('get error data');
                }
            });
        };

        //创建页面元素
        NewsWaterfull.prototype.createNode = function (item) {
            var tpl = '';
            tpl += '<li class="item">';
            tpl += ' <a href="' + item.url + '" class="link"><img src="' + item.img_url + '" alt=""></a>';
            tpl += ' <h4 class="header">' + item.short_name + '</h4>';
            tpl += '<p class="desp">' + item.short_intro + '</p>';
            tpl += '</li>';
//            console.log('create suceess')
            return $(tpl)
        };

        //以瀑布流放置页面元素
        NewsWaterfull.prototype.waterFallPlace = function ($node) {

            this.idx=0;
            var _this=this;
            this.minSumHeight = this.colSumHeight[0];

            for (var i = 0; i < this.colSumHeight.length; i++) {
                if (this.colSumHeight[i] < this.minSumHeight) {
                    this.idx = i;
                    _this.minSumHeight = _this.colSumHeight[i];
                }
            }

            $node.css({
                left: this.nodeWidth * this.idx,
                top: this.minSumHeight,
                opacity: 1
            });

            this.colSumHeight[_this.idx] = $node.outerHeight(true) + this.colSumHeight[_this.idx];
            $('#pic-ct').height(Math.max.apply(null, this.colSumHeight));

        };

        NewsWaterfull.prototype.bind=function () {
            var _this=this;
            $('.load-more').on('click',function () {
                _this.render();
            })
        }


        return {
            init: function ($ct) {
                $ct.each(function (index, element) {
                    new NewsWaterfull($(element));
                })

            }
        }
    }();

  module.exports=ajaxNews;

    // ajaxNews.init($('.ct-waterfall'))
