$(".card button").click(function(){
    if ($("#slider").is(":visible")){
        $("#slider").css("display", "none")
        $("header").append(
            "<div class='row'>" +
                "<div class='col-sm-12 text-center'>" +
                    "<h1>Cat World</h1>" +
                "</div>" +
            "</div>" 
        );
    } 
        
    if($(this).hasClass("selected--button")){
        $(this).removeClass("selected--button");
    }
    else {
        $(this).addClass("selected--button");
    }
})