/*
*LightBox 1.0
*Copyright (c) 2015 小坏 http://tnnyang.cnblogs.com
*dependence jquery-1.7.1.js
*/
; (function (a) {
    a.fn.LightBox = function (options) {
        var defaults = {
            controls: true          //上一张、下一张是否显示，默认是显示true
        }
        var opts = a.extend(defaults, options);

        var lb_wrap = '<div class="lb_wrap"><div class="lightbox_bg"></div><div class="lightbox"><img src="/Content/helps/images/loading.gif" class="lg_img"></div></div>';
        a("body").append(lb_wrap);

        //controls
        if (opts.controls) {
            a(".lightbox").append('<i class="prev"></i><i class="next"></i>');
        }
        var margintop;
        var himgBig;
        var clickflg = 0;
        var winwidth;
        var winheight;
     
        function imgobj(obj1, obj2) {
            //imgObj.height是通过img对象获取的图片的实际高度
            var imgObj = new Image();
            imgObj.src = obj1.attr("src");
            himgBig = imgObj.height;
            var wimgBig = imgObj.width;
             winwidth=$(window).width();
             winheight = $(window).height();
             if (winwidth < wimgBig || winheight < himgBig) {
                 wimgBig = winwidth * 0.9;
                 himgBig = winheight * 0.9;
             }
             else if (winwidth<1.1*wimgBig) {
                wimgBig = winwidth * 0.9;              
            }

             obj1.attr({ width: wimgBig, height: himgBig })
             //obj1.css({ "width": wimgBig, "height": himgBig })
           
            var hightMove = $(window).scrollTop();
            if (true) {
                if (winwidth < wimgBig || winheight < himgBig) {
                   margintop = 0.1 * winheight / 2 + hightMove;
                }
                else { 
                    margintop = (winheight - himgBig) / 2 + hightMove;
                }               
                obj2.css("margin-top", margintop);
            }
            var bodyhight = $("body").height();
            a(".lightbox_bg").css("height", bodyhight)
        }
        this.each(function (i,n) {
            var obj = a(this);
            var numpic = obj.find("img").length;
              var num = 0;
            
            //点击赋值并显示
              obj.find("img").each(function (i, item) {
                  $(item).click(function () {
                      debugger
                      var src = a(this).attr("src");
                      a(".lg_img").attr("src", src);
                      imgobj(a(".lg_img"), a(".lightbox"));
                      a(".lb_wrap").fadeIn();
                      a(".lg_img").fadeIn();
                      a(".prev").fadeIn().siblings(".next").fadeIn();
                      num = i;   //获取当前图片的父元素的索引并赋给num为后边点击上一张、下一张服务		
                  });
              });
            
            //上一张
            a(".prev").click(function () {
                //debugger
                clickflg = 1;
                if (num == 0) {
                    num = numpic;
                }
                var src = obj.find("img").eq(num - 1).attr("src");
                
                a(".lg_img").attr("src", src);
                imgobj(a(".lg_img"), a(".lightbox"));
                clickflg = 0;
                num--;
            });

            //下一张
            a(".next").click(function () {
                clickflg = 1;
                if (num == numpic - 1) {
                    num = -1;
                }
                var src = obj.find("img").eq(num + 1).attr("src");
                a(".lg_img").attr("src", src);;
                imgobj(a(".lg_img"), a(".lightbox"));
                clickflg = 0;
                num++;
            });

            //点击除了上一张、下一张之外的其他地方隐藏
            a(".lb_wrap").click(function (e) {
                var e = e || window.event;
                var elem = e.target || e.srcElement;
                while (elem) {
                    if (elem.className && elem.className.indexOf('prev') > -1) {
                        return;
                    }
                    if (elem.className && elem.className.indexOf('next') > -1) {
                        return;
                    }
                    elem = elem.parentNode;
                }
                a(this).find("img").attr("src", "loading.gif").hide(1500);      //隐藏后，再将默认的图片赋给lightbox中图片的src
                a(this).find(".prev").hide().siblings(".next").hide();
                a(this).fadeOut();
            });
        })
    }
})(jQuery);