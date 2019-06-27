$(document).ready(function(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();},2000);
    $("#tab1").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
             window.location = '../Login-page/login-page.html';}, 2000);
    });
    $("#tab2").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Baby-Stting/baby-sitting.html';}, 2000);
    });
    $("#tab3").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Medical/medical.html';}, 2000);
    });
});