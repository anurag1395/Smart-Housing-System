var counter = 2;
var name,dropoff,pickup,contact,date,time,seats,fare;
var not1;
var confirmed=false;
window.onload = function() {

}

$(document).ready(function(){
    $("#loader").hide()
    $("#not1").hide();
     $("#myPopup").hide();
    if(localStorage.getItem("not1")==true){
        $("#not1").show();
        console.log(localStorage.getItem("not1"));
    }
    $("#login_buttn2").click(function(){  
        $("#loader").show();
        localStorage.setItem("name",$("#name").val());
        localStorage.setItem("contact",$("#contact").val());
        localStorage.setItem("pickup",$("#pickup").val());
        localStorage.setItem("dropoff",$("#dropoff").val());
        localStorage.setItem("date",$("#date").val());
        localStorage.setItem("time",$("#time").val());
        localStorage.setItem("seats",$("#seats").val());
        localStorage.setItem("fare",$("#fare").val());
        setTimeout(function(){$("#loader").hide();
        $("#posted-events").append("<div id ='" + counter + "' class = 'event-row'><button type='button' class='close' id ='" + counter + "'onclick='deletePost(this.id)'>&times;</button>Hello I am " + localStorage.getItem("name") + ". I am gonna be traveling to " + localStorage.getItem("dropoff") + " from " + localStorage.getItem("pickup") +
        "on " + localStorage.getItem("date") + " at " + localStorage.getItem("time")  + "<br>I have " + localStorage.getItem("seats") + " seats available and the fare is "+ localStorage.getItem("fare") + " dollars per person.<br>" +
        "If you wish to, Please <a  data-toggle='modal' data-target='#myModal2' href='#'>Click Here</a> to join me <img src='../Images/car.png' class='car'>"
        // + "<input type='button' value='Delete' id = 'delete-post" + counter + "' onclick = 'deletePost(this.id)' class ='button del-btn float-right'><input type='button' value='Call a meeting of volunteers' data-toggle='modal' data-target='#myModal'>" +
        // ""<p>The number of volunteers you have is :" + localStorage.getItem("num") + "</p>
        + "</div>");
        
        
    // description.push($("#event-des").val()); 
    // vol.push(final_volunteers);
    // console.log(final_volunteers);
    // localStorage.setItem("vol",JSON.stringify(vol));
    // localStorage.setItem("des",JSON.stringify(description));
     counter++;
}, 2000);
setTimeout(function(){$("#not1").show();},4000);
    });
    $("#yes1").on('click',function(){
        console.log("hi");
        $("#not1").show();
        localStorage.setItem("not1",true);
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
            $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" for further details  <br><a href='#' onClick = 'Confirmed()'>Confirm</a> your trip!</span>")
        }else{
            $("#myPopup").append("Hey! you have confirmed "+ localStorage.getItem("name2") + " as your fellow passenger.<br>Contact : " +  localStorage.getItem("contact2") +" for further details<br>Have a safe trip!</span>")
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