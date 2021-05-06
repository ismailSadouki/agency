$(window).scroll(function(){
    if($(this).scrollTop() >= 500){
        $("#navBar").addClass("noTransparent");
    } else{
        $("#navBar").removeClass("noTransparent");
    }
});

$(document).ready(function() {
    $("a.scroll").on('click', function() {
        var hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function() {})
    });
});