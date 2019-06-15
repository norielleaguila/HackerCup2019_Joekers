$(document).ready(function() {
    // all custom jQuery will go here
    $("#comment").hide();
    $("#searchBar").keydown (function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == 13){
            alert ($(this).val());
        }

    });
    $(".qa").click(function(){
        headline = $(this).find(".headline").text()
        // alert(headline);
        $(".qa").hide();
        $(".feed").find("h2").html(headline);
        $("#comment").show();
        // $(".feed").append("<input id = \"comment\" class=\"form-control form-control-lg comment\" type=\"text\" placeholder=\"Enter your comment here... \">");
        // $(".feed").append("<button id = \"sb\" type=\"button\" class=\"btn btn-primary\">Submit</button>");
    });
    $(document).delegate(("#comment", "click", function(){
        alert ($(".feed").find("#comment").val());
        $(".feed").append("<h3>" + $(".feed").find("#comment").val());
    }));
    $("#comment").keydown (function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == 13){
            // alert ($(this).val());
            $(".feed").append("<h3>" + $(this).val());
        }

    });
});
