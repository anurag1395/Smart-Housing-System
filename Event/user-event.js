var description;
var counter=1;
window.onload = function() {
    description = JSON.parse(localStorage.getItem("des"));
    vol = JSON.parse(localStorage.getItem("vol"));
    console.log(description);
}
$(document).ready(function(){
    $("#loader").show();
    $("#not1").hide();
    $("#myPopup").hide();
    setTimeout(function(){
        $("#loader").hide();
    for(var i=0; i<description.length;i++){
            if(description[i]!=""){
                $("#posted-events").append("<div id ='" + counter + "' class = 'event-row'><div class='padd-20'>" + description[i] + "</div><div class='col-sm-6 float-left'>Will you attend the event?<input type = 'radio' value='yes' name='a' checked id = 'attend" + counter + "'>Yes <input type = 'radio' value='no' name='a'  id = 'attend" + counter + "'>No</div>");
                if(vol[i]==true){

                        $("#"+ counter).append("<div class='col-sm-6 float-left'>Would you like to volunteer?" + "<input type = 'radio' value='yes' checked  name ='vol' id = 'volunteer" + counter + "'>Yes <input type = 'radio' value='no' name ='vol'  id = 'volunteer" + counter + "'>No</div>"
            );
                }
                $("#"+ counter).append('<br><div class="col-sm-12"><button id="login_buttn" class="button sub-btn"onClick= "submit_clicked()" data-toggle="modal" data-target="#myModal2">Submit my response</button></div>');

            }
            counter++;
    }},2000);
    // $("#login_buttn").click(function(){ alert();$("#loader").show();setTimeout(function(){$("#loader").hide();},2000)})
    // $("input[type='radio']").change(function() {
    //     numbr = localStorage.getItem("num");
    //    if($("input[type='radio']").val()=='yes'){
    //     localStorage.setItem("num",numbr+1);
    //    }else{
    //     if(value=='yes'){
    //         localStorage.setItem("num",numbr-1);
    //        }
    //    }
    // })
});
function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    if($("#myPopup").is(":visible")){
        $("#myPopup").hide();
        $("#myPopup").empty();
    }else{
        // if(localStorage.getItem("name2")!=""){

            $("#myPopup").append("Hello! " + "There is a meeting for the volunteers on 12-05-2017 At the Clubhouse at 5:00PM");
        // }else{
        //     $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" If you want further details  <br> You have <a href='#' onClick = 'Confirmed()'>Confirmed</a> your trip!</span>")
        // }
        $("#myPopup").show();
    }
        
    
}
function submit_clicked(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();
        $("#myModal3").modal('show');
    },2000);
}

function checkNull(){
    if($("#attend" + counter).val()==""){
        Nameempty=true;
    }else{
        Nameempty=false;
    }
    if( $("#volunteer" + counter).val()){
        Passwordempty=true;
    }
    else{
        Passwordempty=false;
    }
    if(Nameempty==true || Passwordempty==true){
            $("#sub_buttn").attr("disabled",true);
        }
        else{
            $("#sub_buttn").attr("disabled",false);
        }
}