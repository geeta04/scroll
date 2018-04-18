// var id=0;
var sections = $('section')
    , nav = $('.right-nav')
$(window).on('scroll', function () {
    var curPos = $(this).scrollTop();
    var windowBottom = curPos + $(this).outerHeight();
    var bool1 = true;
    sections.each(function () {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();
        if (top > curPos && bottom < windowBottom && bool1) {
            bool1 = false;
            nav.find('a').removeClass('active');
            sections.removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });

});
$(".left-list li").click(function(){
    // $("#subGuides").show();
    if($("#subGuides").css('display','none'))
    $("#subGuides").css('display','block')
    

        if ($("#subGuides").hasClass("slideup"))
            $("#subGuides").removeClass("slideup").addClass("slidedown");
        else
            $("#subGuides").removeClass("slidedown").addClass("slideup");
    
    });
