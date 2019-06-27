$(document).ready(function(){
    $("#loader").hide();
    $("#yes1").click(function(){  
        $("#loader").show();
        localStorage.setItem("dr",$("#name2").val());
        localStorage.setItem("addr",$("#add2").val())
        localStorage.setItem("afrom",$("#afrom").val())
        localStorage.setItem("ato",$("#ato").val())
        localStorage.setItem("drcontact",$("#contact2").val())
        setTimeout(function(){$("#loader").hide();
        $("#posted-events").append("<div id ='5' class = 'event-row'><button type='button' class='close' id='5' onclick='deletePost(this.id)'>&times;</button> Name of the Doctor: " + localStorage.getItem("dr")  +"<br> Speciality: Pediatrician <br> Address:" + localStorage.getItem("addr") + " <br> Timing: " + localStorage.getItem("afrom")  +" - " + localStorage.getItem("ato") + " <br> Contact: "  + localStorage.getItem("drcontact")         + "</div>");
}, 2000);
    });
});
function deletePost(id){
    localStorage.setItem("dr","");
    $("#"+ id).remove();
    // var parentElement = $("#posted-events");
    // parentElement.remove("#div"+id);
}