$(document).ready(function(){
    $(".question").hide()
    $(".start").on("click", function(){
        $(this).remove();
        $(".question").show();        
    });
});