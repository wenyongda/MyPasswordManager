
//根据分辨率临界点展示不同高度 bylmh
//思路：以最小窗口为基准添加滚动条，再通过不同分辨率设置不同高度
//主要适用于没有grid的较大form在不同分辨率下的展示
var windowheight = window.screen.height;
if (screen.height > 960) {
    debugger
    var h = windowheight * 0.73;
    $(changeheightformid).css('height', h); //此分辨率下你需要的操作
} else if (screen.height > 800) {
    //默认操作
    debugger
    var h = windowheight * 0.70;
    $(changeheightformid).css('height', h); //此分辨率下你需要的操作
} else {
    var h = windowheight * 0.65;
    $(changeheightformid).css('height', h); //此分辨率下你需要的操作
};