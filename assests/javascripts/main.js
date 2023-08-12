$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target=$(this).attr("href");
        $(target).addClass("show");
    });

    $(".type-effect").typed({
        strings: ["Full Stack Developer", "Java Developer", "Software Engineer", "ML Aspirant"],
        typeSpeed: 100,
        backspeed: 50,
        loop:true
    });
    
    $(".type-effect1").typed({
        strings: ["Aspiring to make a mark in the field of Computer Science where my learnings are translated into performance, ensuring mutual growth. Willing to join a growing organization and exhibit my full potential. "],
    });
}); 
  