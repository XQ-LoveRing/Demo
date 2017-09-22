
    var $ = require('../lib/jquery-2.1.1.min');
 
    var carousel = function () {
        function _Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
            this.autoMove();
        }

        _Carousel.prototype.init = function () {
            this.pageIndex = 0;
            this.isAnimate = false;

            //css需要可去掉
            this.carousel = this.$ct.parent();

            // console.log(this.carousel)
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct');
            var $imgs = this.$imgs = this.$ct.find('.img-ct >li');
            this.$preBtn = this.$ct.find('.pre');
            this.$nextBtn = this.$ct.find('.next');
            this.$bullets = this.$ct.find('.bullet li');
            this.imgCount = $imgCt.find('img').length;
            // console.log(this.imgCount);


            //设置图片宽度为容器宽度
            var windowWidth = $(window).width();
            var imgWidth = this.imgWidth = windowWidth;

            $imgCt.find('img').each(function (index, ele) {
                $(ele).width(imgWidth)
            });

            //设置高度
            var windowHeight = $(window).height();
            this.$imgCt.height(windowHeight);
            $imgCt.find('img').each(function (index, ele) {
                $(ele).height(windowHeight)
            });

            this.carousel.height(windowHeight);
            this.$ct.height(windowHeight);


            //复制首尾元素
            $imgCt.append($imgs.first().clone());
            $imgCt.prepend($imgs.last().clone());

            //设置
            $imgCt.width((this.imgCount + 2) * this.imgWidth);

            //初始化imgCt的值，显示第一张图片
            $imgCt.css({left: -this.imgWidth});
        }

        _Carousel.prototype.bind = function () {
            var _this = this;

            this.$ct.on('mouseenter', function () {
                clearInterval(_this.interval);
            });

            this.$ct.on('mouseleave', function () {
                _this.interval = setInterval(function () {
                    _this.playNext(1)
                }, 1500);
            });

            this.$nextBtn.click(function () {
                _this.playNext(1)
            });
            this.$preBtn.click(function () {
                _this.playPre(1)
            });

            this.$bullets.click(function () {
                var index = $(this).index();
                console.log(index);
                if (index > _this.pageIndex) {
                    _this.playNext(index - _this.pageIndex)
                } else if (index < _this.pageIndex) {
                    _this.playPre(_this.pageIndex - index)
                }
            });
        }


        _Carousel.prototype.playNext = function (len) {
            var _this = this;
            // console.log('playNext', len);
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '-=' + len * _this.imgWidth
            }, function () {
                _this.pageIndex += len;
                if (_this.pageIndex === _this.imgCount) {
                    _this.pageIndex = 0;
                    _this.$imgCt.css({left: -_this.imgWidth})
                }
                // console.log(_this.pageIndex);
                _this.setBullet();
                _this.isAnimate = false
            });
        };

        _Carousel.prototype.playPre = function (len) {
            var _this = this;
            if (this.isAnimate) return;
            this.Animate = true;
            this.$imgCt.animate({
                left: '+=' + len * _this.imgWidth
            }, function () {
                _this.pageIndex -= len;
                if (_this.pageIndex < 0) {
                    _this.pageIndex = _this.imgCount - 1;
                    _this.$imgCt.css({left: -_this.imgCount * _this.imgWidth})
                }
                _this.setBullet();
                _this.isAnimate = false
            });
        }

        _Carousel.prototype.setBullet = function () {
            var _this = this;
            this.$bullets.removeClass('active')
                .eq(_this.pageIndex)
                .addClass('active')
        }

        _Carousel.prototype.autoMove = function () {
            var _this = this;
            _this.interval = setInterval(function () {
                _this.playNext(1)
            }, 1500);
        }

        return {
            init: function ($ct) {
                $ct.each(function (index, node) {
                    new _Carousel($(node));
                })
            }
        }

    }()

    module.exports=carousel;

