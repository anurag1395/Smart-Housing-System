var feedback=true;
$(document).ready(function(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();},2000);

    $("#yes1").click(function(){  
        $("#loader").show();
        var filterd = $("#about").find(":selected").text();
        console.log($("#about").find(":selected").text());
        if(filterd=="About a Neighbor"){
            $("#2").hide();
        }else if(filterd=="About Common Utilities"){
            $("#1").hide();
        }
        // localStorage.setItem("about",cabout);
        // localStorage.setItem("complain-des",$("#complain-des").val())
        setTimeout(function(){$("#loader").hide();
}, 2000);
    });
});
function deletePost(id){
    localStorage.setItem("cstatus","resolved");
    $("#"+ id).remove();
    // var parentElement = $("#posted-events");
    // parentElement.remove("#div"+id);
}
function getmsg(){
    $("#loader").hide();
    if(feedback==true){
        document.getElementById("msg-area").innerHTML= "The complain was resolved quickly";
        feedback=false;
    }else{
        document.getElementById("msg-area").innerHTML = "No feedback recieved";
    }
}