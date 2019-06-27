$(document).ready(function(){
    document.getElementById('form-heading').innerHTML = "Select the community you would like to join!";
$("li").click(function(){    
    console.log($(this));
    $(".form-section-2 ul li").each(function(){
            if($(this).hasClass("selected-li")){
                $(this).removeClass("selected-li");
            }
        });
    $(this).addClass("selected-li");
});
});