$(function(){    
    $("img").click(function() {
        $("img").fadeOut("slow");
            $("img").delay(1000);
        setTimeout(function() {window.location = '/Javascript/pokedex/index2.html'}, 1000);       
    });    
});
$(function(){    
    $("h1").fadeIn(function() {
        $("h1").hide("fast");
            $("h1").delay(2000);
        $("h1").fadeIn(3000);
    });    
});
$(function(){    
    $("h1").click(function() {
        $("h1").hide("slow");
            $("h1").delay(2000);
        $("h1").fadeIn(3000);    
    });    
});
$(function(){    
    $("img").fadeIn(function() {
        $("img").hide("slow");
            $("img").delay(2000);
        $("img").fadeIn(3000);
    });    
});
$(function(){    
    $("pk").fadeIn(function() {
        $("pk").hide("slow");
            $("pk").delay(2000);
        $("pk").fadeIn(3000);
    });    
});
