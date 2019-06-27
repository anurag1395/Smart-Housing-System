$(document).ready(function(){
    $("#loader").show();
    setTimeout(function(){
        $("#loader").hide();},2000);
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
    $(".sub-btn").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#myModal0").modal('show');
        $("#not1").show();
    },2000);
    });
    $(".sub-btn2").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#myModal09").modal('show');
    },2000);
    });
    $("#login_buttn").click(function(){
        setTimeout(function(){
        $("#login_buttn").remove();
    },2000);
    });
    $(".download_btn").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#myModal9").modal('show');
    }, 2000);
    });
    $("input[type='radio']").change(function() {
        if($('#rad2').is(':checked')){
            console.log($("#rad1").val() + 'rad1');
            $("#block-no").append('<label><div class="login_texts">House No:</div><input type="text" required id="Password" onkeyup="Checknull()"></label>');
        }
        if($('#rad1').is(':checked')){
            console.log($("#rad1").val() + 'rad1');
            $("#block-no").empty();
        }
        console.log($(this).is(':checked'));
        final_volunteers = $(this).is(':checked');
    })
});
function checkNull(){
    if($("#pur1").val() == "" || $("#amt1").val() == ""){
       $("#exp1").attr("disabled",true);
    }
    else{
        $("#exp1").attr("disabled",false);
    }
    if($("#pur2").val() == "" || $("#amt2").val() == ""){
       $("#login_buttn3").attr("disabled",true);
    }
    else{
       $("#login_buttn3").attr("disabled",false);
    }
}