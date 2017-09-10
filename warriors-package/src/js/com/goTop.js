define(['jquery'],function ($) {
    var goTop = function () {

        function GoTop($ct) {
            this.$ct = $ct;
            this.target = $("<div class='go-top'>GoTop</div>");
            this.createNode();
            this.bindEvent();

        }

        GoTop.prototype = {
            constructor: GoTop,
            createNode: function () {
                this.target.css({
                    position: 'fixed',
                    right: '30px',
                    bottom: '30px',
                    height: '50px',
                    width: '80px',
                    border: '1px solid #ccc',
                    borderRadius:'8px',
                    display: 'none',
                    backgroundColor: '#ffcd11',
                    lineHeight:'50px',
                    textAlign:'center'
                }),
                    this.$ct.append(this.target);

            },
            bindEvent: function () {
                var self = this;
                self.target.on('click', function () {
                    $("body").animate({scrollTop: 0}, 300);
                });
                $(window).scroll(function () {
                    var nowTop = self.$ct.scrollTop();
                    var flag = true;
                    clearTimeout(clock);
                    var clock = setTimeout(function () {
                        if (nowTop > 200 && flag) {
                            self.target.fadeIn();
                            flag = false;
                        } else {
                            self.target.fadeOut();
                            flag = true
                        }
                    }, 300)
                })
            },

        }

        return {
            init: function ($ct) {
                new GoTop($ct)
            }
        }
    }()

    return goTop;
})

// goTop.init($("body"))

