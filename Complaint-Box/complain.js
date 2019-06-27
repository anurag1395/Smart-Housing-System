var msg;
$(document).ready(function(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();},2000);
    $("#yes1").click(function(){  
        $("#loader").show();
        var cabout = $("#about").find(":selected").text();
        console.log($("#about").find(":selected").text());
        localStorage.setItem("about",cabout);
        localStorage.setItem("complain-des",$("#complain-des").val())
        setTimeout(function(){$("#loader").hide();
        $("#posted-events").append('                        <div id ="1" class = "event-row"><button type="button" class="close" id="1" onclick="deletePost(this.id)">&times;</button>Complain ' + localStorage.getItem("about") + ':<br>' + localStorage.getItem("complain-des") +'<br><a href="#" data-toggle="modal" data-target="#myModal5" onclick="getmsg()">View the status of k your complain</a><a href="#" class = "float-right" data-toggle="modal" data-target="#myModal4">Give Feedback</a></div>');$("#myModal3").modal('show');
}, 2000);
    });
    $("#about").on('change',function(){
            if($("#about").find(":selected").text() == " About a Neighbor"){
        $("#here").append(' <div class="bottom col-sm-6 float-left"><label><div class="login_texts">Neighbors Block Number:</div><input type="text" required id="neighbor" onkeyup="Checknull()" class="details" placeholder="Block Number"></label></div>');
    }
    });

});
function deletePost(id){
    localStorage.setItem("dr","");
    $("#"+ id).remove();
    // var parentElement = $("#posted-events");
    // parentElement.remove("#div"+id);
}

function getmsg(){
    if(localStorage.getItem("cstatus")=="resolved"){
        document.getElementById("msg-area").innerHTML= "Your complain has been taken care of!";
    }else{
        document.getElementById("msg-area").innerHTML = "We are working on it. We appreciate your patience";
    }
    
}

// function complain(id){
//     console.log(id);
//     if(id=="Neighbour"){
//         $("#here").append(' <div class="bottom col-sm-6 float-left"><label><div class="login_texts">Neighbors Block Number:</div><input type="text" required id="neighbor" onkeyup="Checknull()" class="details" placeholder="Block Number"></label></div>');
//     }
// }

function checkNull(){
         if($("#complain-des").val() == ""){
            $("#yes1").attr("disabled",true);
         }
         else{
            $("#yes1").attr("disabled",false);
         }
         if($("#feedback-des").val() == ""){
            $("#sub-btn").attr("disabled",true);
         }
         else{
            $("#sub-btn").attr("disabled",false);
         }
    }