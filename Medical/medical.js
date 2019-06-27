var counter = 2;
var name,kids,pickup,contact,date,time,seats,fare;
var not1;
var confirmed=false;
window.onload = function() {
    $("#myModal2").modal('show');
}

$(document).ready(function(){
    $("#loader").hide();
    $("#not1").hide();
     $("#myPopup").hide();
    $("#yes1").click(function(){  
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#posted-events").append("<div id ='1' class = 'event-row'>Name of the Doctor: Dr. Drake Ramoray <br> Speciality: Pediatrician <br> Address: 2147 Newhall Street Santa Clara CA 95050 <br> Timing: 9:00AM - 4:00PM <br> Contact: 950507789"
        + "</div>");
        $("#posted-events").append("<div id ='2' class = 'event-row'>Name of the Doctor: Dr. Annie Gates <br> Speciality: Pediatrician <br> Address: 2149 California Street Santa Clara CA 95050 <br> Timing: 8:00AM - 8:00PM <br> Contact: 6692044921"
        + "</div>");
        $("#posted-events").append("<div id ='3' class = 'event-row'>Name of the Doctor: Dr. Joseph Geller <br> Speciality: Pediatrician <br> Address: 2146 Washington Street Santa Clara CA 95050 <br> Timing: 9:00AM - 12:00PM <br> Contact: 512522140"
        + "</div>");
        $("#posted-events").append("<div id ='4' class = 'event-row'>Name of the Doctor: Dr. Richard Brman <br> Speciality: Pediatrician <br> Address: 2138 Sacramento Street Santa Clara CA 95050 <br> Timing: 11:00AM - 2:00PM <br> Contact: 989507789"
        + "</div>");
        if(localStorage.getItem("dr")!=""){
            $("#posted-events").append("<div id ='5' class = 'event-row'> Name of the Doctor: " + localStorage.getItem("dr")  +"<br> Speciality: Pediatrician <br> Address:" + localStorage.getItem("addr") + " <br> Timing: " + localStorage.getItem("afrom")  +" - " + localStorage.getItem("ato") + " <br> Contact: "  + localStorage.getItem("drcontact")         + "</div>");
        }
}, 2000);

    });

});
function deletePost(id){
    localStorage.setItem("name","");
    $("#div"+ 1).remove();
    // var parentElement = $("#posted-events");
    // parentElement.remove("#div"+id);
}
function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    if($("#myPopup").is(":visible")){
        $("#myPopup").hide();
        $("#myPopup").empty();
    }else{
        if(localStorage.getItem("name2")!=""){
            if(confirmed==false){
            $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " is intersested in babysitting for you!<br>Contact : " +  localStorage.getItem("contact2") +" for further details  <br><a href='#' onClick = 'Confirmed()'>Confirm</a> your babysitter!</span>")
        }else{
            $("#myPopup").append("Hey! you have confirmed "+ localStorage.getItem("name2") + " as your babysitter.<br>Contact : " +  localStorage.getItem("contact2") +" for further communication<br></span>")
        }
    }
        $("#myPopup").show();
    }
}

function Confirmed(){
    confirmed=true;
    // $("#myPopup").empty();
    // $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" If you want further details  <br> You have <a href='#' onClick = 'Confirmed()'>Confirmed</a> your trip!</span>")
}
function back_orange(id){
    console.log("called");
    document.getElementById(id).css("background-color","rgb(234, 114,0)");

}