$(function () {

    let navAllLis = $("#navbarlk li");


    $(navAllLis[2]).on("click",function () {
        $("html,body").animate({
            scrollTop:$("#lk_hot").offset().top
        },1000);
    });
    $(navAllLis[3]).on("click",function () {
        $("html,body").animate({
            scrollTop:$("#lk_product").offset().top
        },1000);
    });
    $(navAllLis[4]).on("click",function () {
        $("html,body").animate({
            scrollTop:$("#lk_about").offset().top
        },1000);
    });
    $(navAllLis[5]).on("click",function () {
        $("html,body").animate({
            scrollTop:$("#lk_link").offset().top
        },1000);
    });

    //輪播圖
    $(window).on("resize", function () {
        // 1.1 寬度
        let clientW = $(window).width();
        // console.log(clientW);

        // 1.2 設定臨界值
        let isShowBigImage = clientW >= 800;

        // 1.3 獲取所有的item
        let $allItems = $("#lk_carousel .carousel-item");
        // console.log($allItems);

        // 1.4 迴圈
        $allItems.each(function (index, item) {
            // 1.4.1 取出圖片路徑
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            // let imgUrl = 'url("' + src +'")';
            let imgUrl = 'url("' + src +'")';

            // 1.4.2 設定背景
            $(item).css({
                backgroundImage: imgUrl,
            });
            
            if (!isShowBigImage){
                let imgEle='<img src="'+src+'">';
                $(item).empty().append(imgEle);
            }else{
                $(item).empty();
            }



        });



    });
        $(window).trigger('resize');

    //    輪播圖滑動

    let startX=0,endX=0;
    let $lkCarousel = $("#lk_carousel .carousel-inner")[0];
    let carousel= $("#lk_carousel");
    // console.log($lkCarousel);

    $lkCarousel.addEventListener("touchstart",function (e) {
        startX=e.targetTouches[0].clientX;
        // console.log(startX);

    });
    $lkCarousel.addEventListener("touchend",function (e1) {
        endX=e1.targetTouches[0].clientX;
        if (endX-startX>0){
        //    prev
            carousel.carousel('prev');
        }else if (endX-startX<0) {
            carousel.carousel('next');
        }
    });

    //滾動條

    $(window).on("resize",function () {
        let $myTab = $("#myTab");
        let $allLis=$(".nav-item",$myTab);
        let totalW=0;

        $allLis.each(function (index,item) {
            totalW+=$(item).width();
        });
        // console.log(totalW);
        let parentW=$myTab.parent().width();
        // console.log(parent);

        if (totalW>parentW){
            $myTab.css({
                width:totalW+'px'
            })
        }else{
            $myTab.removeAttr("style");
        }

    }).trigger('resize');

    //    工具提示
    $('[data-toggle="tooltip"]').tooltip();




});