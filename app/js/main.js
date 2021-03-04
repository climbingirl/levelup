$(function(){
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
    });
    $('.btn__scroll').click(function(event){
        event.preventDefault()
        var el=$('.block__scroll');
        $('body,html').animate({scrollTop:$(el).offset().top},1000);
    });
});