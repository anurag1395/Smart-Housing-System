var counter = 0;
var counter2 = 0;
var vol=[];
var description = [];
var final_volunteers;
localStorage.setItem("num",20);
//window.onload = function() {
//     old_posts = JSON.parse(localStorage.getItem("des"));
//     old_vol = JSON.parse(localStorage.getItem("vol"));
//     console.log(old_posts);
//     for(var i=0; i<old_posts.length;i++){
//         if(old_posts[i]!=""){
//             $("#posted-events").append("<div class = 'event-row' id = '"+ counter2 +"'>" + old_posts[i] +
//             "<input type='button' value='Delete' id = 'delete-post" + counter2 + "' onclick = 'deletePost(this.id)'>");
//             if(old_vol[i]==true){
//                     $("#"+ counter2).append("");
//             }
//             counter2++;
//         }
// }
// }
$(document).ready(function(){
    $("#loader").hide();
    $("#not1").hide();
    $("#myPopup").hide();
    $("#post-event").click(function(){  
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
    if(final_volunteers == true){
         $("#posted-events").append("<div id ='" + counter + "' class = 'event-row'>" + "<button type='button' class='close' id='delete-post" + counter + "' onclick='deletePost(this.id)'>&times;</button>" + $("#event-des").val()
        //+"<input type='button' value='Delete' id = 'delete-post" + counter + "' onclick = 'deletePost(this.id)' class ='button del-btn float-right'>
        +"<br><a value='Call a meeting of volunteers' href='#' data-toggle='modal' data-target='#myModal'>Call a meeting of volunteers</a>" +
        // ""<p>The number of volunteers you have is :" + localStorage.getItem("num") + "</p>
        "</div>");
    }else{
        $("#posted-events").append("<div id ='" + counter + "' class = 'event-row'>" + "<button type='button' class='close' id='delete-post" + counter + "' onclick='deletePost(this.id)'>&times;</button>" + $("#event-des").val());
    }
    description.push($("#event-des").val()); 
    vol.push(final_volunteers);
    console.log(final_volunteers);
    localStorage.setItem("vol",JSON.stringify(vol));
    localStorage.setItem("des",JSON.stringify(description));
    counter++;
}, 2000);
    });
    $("input[type='checkbox']").change(function() {
        console.log($(this).is(':checked'));
        final_volunteers = $(this).is(':checked');
    })
});
function deletePost(id){
    description[$("#"+id).parent().attr("id")]="";
    $("#"+id).parent().remove();
    console.log(description);
    localStorage.setItem("des",JSON.stringify(description));
}
function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    if($("#myPopup").is(":visible")){
        $("#myPopup").hide();
        $("#myPopup").empty();
    }else{
        // if(localStorage.getItem("name2")!=""){

            $("#myPopup").append("Hello! The number of people attending the Christmas Party is 24.<br>The number of volunteers is 12"); 
        // }else{
        //     $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" If you want further details  <br> You have <a href='#' onClick = 'Confirmed()'>Confirmed</a> your trip!</span>")
        // }
        $("#myPopup").show();
    }
        
    
}
