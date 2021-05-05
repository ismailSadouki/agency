$(window).scroll(function(){
    if($(this).scrollTop() >= 500){
        $("#navBar").addClass("noTransparent");
    } else{
        $("#navBar").removeClass("noTransparent");
    }
})