$(document).ready(function(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();},2000);
    $("#tab1").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
             window.location = '../Notice-Board/notice.html';}, 2000);
    });
    $("#tab2").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Event/user-event.html';}, 2000);
    });
    $("#tab3").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Facilities/facilities.html';}, 2000);
    });
    $("#tab4").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Payment/payment.html';}, 2000);
    });
    $("#tab5").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Complaint-Box/complain.html';}, 2000);
    });
    $("#tab6").click(function(){
        $("#loader").show();
        setTimeout(function(){
            $("#loader").hide();
            window.location = '../Laws/laws.html';}, 2000);
            
    });
});