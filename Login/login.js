function Checknull(){
    if($("#userName").val()==""){
        Nameempty=true;
    }else{
        Nameempty=false;
    }
    console.log(Nameempty);
    if( $("#Password").val()==""){
        Passwordempty=true;
    }
    else{
        Passwordempty=false;
    }
    if(Nameempty==true || Passwordempty==true){
            $("#login_buttn2").attr("disabled",true);
        }
        else{
            $("#login_buttn2").attr("disabled",false);
        }
}
function clearValues(){

}
$(document).ready(function(){
    $("#loader").hide();
    $("#login_buttn").click(function(){
        $("#error-msg").hide();
        $("#userName").val("");
        $("#Password").val("");
        $("#userName").removeClass("error-input");
        $("#Password").removeClass("error-input");
    });
    $("#login_buttn2").click(function(){
        $("#error-msg").hide();
        $("#userName").removeClass("error-input");
        $("#Password").removeClass("error-input");
        user = $("#userName").val();
        password=$("#Password").val();
        if(user!=null && password!=null){
            $("#login_buttn2").attr("disabled","disabled");
        }
        $("#loader").show();
        if((user=="Bhakti" || user=="Sanjana" || user=="Anurag") && password=="password"){
            setTimeout(function(){$("#loader").hide();}, 2000);
            setTimeout(function(){window.location = ("../Home/home.html")}, 2000);
        }
        else{
            setTimeout(function(){$("#loader").hide(); $("#error-msg").show();$("#userName").addClass("error-input");
            $("#Password").addClass("error-input");}, 2000);
        }
    });
    $("#reg-btn").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();}, 2000);
        setTimeout(function(){window.location = ("../Register/register.html")}, 2000);
    });
});



// function Login(){
//     $("#loader").show();
//     setTimeout(function(){$("#loader").hide();}, 2000);
//     setTimeout(function(){window.location = ("../Login-page/login-page.html")}, 2000);
// }
