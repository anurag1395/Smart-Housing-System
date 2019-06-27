var counter = 2;
var name,kids,pickup,contact,date,time,seats,fare;
var not1;
var confirmed=false;
window.onload = function() {

}

$(document).ready(function(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();}
        ,2000);
    $("#not1").hide();
     $("#myPopup").hide();
    if(localStorage.getItem("not1")==true){
        $("#not1").show();
        console.log(localStorage.getItem("not1"));
    }
    $(".d_img").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#myModal5").modal('show');
        $("#not1").show();
    },2000);
    });
    $("#login_buttn").click(function(){
        setTimeout(function(){
        $("#login_buttn").remove();
    },2000);
    });
    $(".remind_btn").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#myModal6").modal('show');
    }, 2000);
    });
});
function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    if($("#myPopup").is(":visible")){
        $("#myPopup").hide();
        $("#myPopup").empty();
    }else{
        $("#myPopup").show();
    }
}

function Confirmed(){
    confirmed=true;
    // $("#myPopup").empty();
    // $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" If you want further details  <br> You have <a href='#' onClick = 'Confirmed()'>Confirmed</a> your trip!</span>")
}