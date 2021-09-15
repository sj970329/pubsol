$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();   
    },
    function(){
        $(this).children(".sub").stop().slideUp(); 
    }
);