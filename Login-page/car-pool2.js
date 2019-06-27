var counter;
var name,dropoff,pickup,contact,date,time,seats,fare;

window.onload = function() {

        
    }
$(document).ready(function(){
    $("#loader").hide();
    $("#not1").hide();
    $("#myPopup").hide();
    if(localStorage.getItem("name") !=""){
    //$("#posted-events").append("<button type='button' class='close' data-dismiss='modal' onclick='clearValues()>&times;</button>");
    $("#posted-events").append("<div id ='" + counter + "' class = 'event-row'>Hello I am " + localStorage.getItem("name") + ". I am gonna be traveling to " + localStorage.getItem("dropoff") + " from " + localStorage.getItem("pickup") +
    "on " + localStorage.getItem("date") + " at " + localStorage.getItem("time")  + "<br>I have " + localStorage.getItem("seats") + " seats available and the fare is "+ localStorage.getItem("fare") + " dollars per person.<br>" +
    "If you wish to, Please <a  data-toggle='modal' data-target='#myModal2' href='#'>Click Here</a> to join me <img src='../Images/car.png' class='car'>"
    // + "<input type='button' value='Delete' id = 'delete-post" + counter + "' onclick = 'deletePost(this.id)' class ='button del-btn float-right'><input type='button' value='Call a meeting of volunteers' data-toggle='modal' data-target='#myModal'>" +
    // ""<p>The number of volunteers you have is :" + localStorage.getItem("num") + "</p>
    + "</div>");}
    console.log(localStorage.getItem("name"));
    $("#yes1").on('click',function(){
        setTimeout(function(){$("#not1").show();},4000);
        localStorage.setItem("name2",$("#name2").val());
        localStorage.setItem("contact2",$("#contact2").val());
    });
});

function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    if($("#myPopup").is(":visible")){
        $("#myPopup").hide();
        $("#myPopup").empty();
    }else{
        // if(localStorage.getItem("name2")!=""){

            $("#myPopup").append("Hey! "+ localStorage.getItem("name") + " has confirmed you as a fellow passenger <br>Contact : " +  localStorage.getItem("contact") +" for further details  <br>Have a safe trip!</span>")
        // }else{
        //     $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" If you want further details  <br> You have <a href='#' onClick = 'Confirmed()'>Confirmed</a> your trip!</span>")
        // }
        $("#myPopup").show();
    }
        
    
}
function checkNull(){
    
        if($("#name").val() === "" || $("#contact").val() === "" || $("#pickup").val() === "" || $("#dropoff").val() === ""
        || $("#date").val() === "" || $("#seats").val() === ""|| $("#fare").val() === "") 
         $("#login_buttn2").attr("disabled",true);
         else{
            $("#login_buttn2").attr("disabled",false);
         }
         if($("#name2").val() === "" || $("#contact2").val() === ""){
            $("#yes1").attr("disabled",true);
         }
         else{
            $("#yes1").attr("disabled",false);
         }
    }