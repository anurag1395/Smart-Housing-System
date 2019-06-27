var counter = 2;
var name,kids,pickup,contact,date,time,seats,fare;
var not1;
var confirmed=false;
window.onload = function() {

}

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
    // $("#login_buttn").click(function(){
    //     setTimeout(function(){
    //     $("#login_buttn").remove();
    // },2000);
    // });
    $("#confirm-purchase").click(function(){
        $("#loader").show();
        setTimeout(function(){$("#loader").hide();
        $("#1").remove();
        $("#myModal6").modal('show');
    }, 2000);
    });
});
function myFunction() {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    if($("#myPopup").is(":visible")){
        $("#myPopup").hide();
        $("#myPopup").empty();
    }else{
        $("#myPopup").show();
    }
}

function Confirmed(){
    confirmed=true;
    // $("#myPopup").empty();
    // $("#myPopup").append("Hey! "+ localStorage.getItem("name2") + " Wants to join you in your trip!<br>Contact : " +  localStorage.getItem("contact2") +" If you want further details  <br> You have <a href='#' onClick = 'Confirmed()'>Confirmed</a> your trip!</span>")
}

var owner = $('#owner'),
cardNumber = $('#cardNumber'),
cardNumberField = $('#card-number-field'),
CVV = $("#cvv"),
mastercard = $("#mastercard"),
confirmButton = $('#confirm-purchase'),
visa = $("#visa"),
amex = $("#amex");
// cardNumber.payform('formatCardNumber');
CVV.payform('formatCardCVC');
cardNumber.keyup(function() {
    amex.removeClass('transparent');
    visa.removeClass('transparent');
    mastercard.removeClass('transparent');

    if ($.payform.validateCardNumber(cardNumber.val()) == false) {
        cardNumberField.removeClass('has-success');
        cardNumberField.addClass('has-error');
    } else {
        cardNumberField.removeClass('has-error');
        cardNumberField.addClass('has-success');
    }

    if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
        mastercard.addClass('transparent');
        amex.addClass('transparent');
    } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
        mastercard.addClass('transparent');
        visa.addClass('transparent');
    } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
        amex.addClass('transparent');
        visa.addClass('transparent');
    }
});
confirmButton.click(function(e) {
    e.preventDefault();

    var isCardValid = $.payform.validateCardNumber(cardNumber.val());
    var isCvvValid = $.payform.validateCardCVC(CVV.val());

    // if(owner.val().length < 5){

    // } else if (!isCardValid) {
    // } else if (!isCvvValid) {
    // } else {
    //     // Everything is correct. Add your form submission code here.

    // }
});
function deletePost(id){
    $("#div"+ id).remove();
    // var parentElement = $("#posted-events");
    // parentElement.remove("#div"+id);
}
$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });
});

function checkNull(){
    if($("#owner").val() == "" || $("#cvv").val() == "" || $("#cardNumber").val() == ""){
       $("#confirm-purchase").attr("disabled",true);
    }
    else{
        $("#confirm-purchase").attr("disabled",false);
    }
    if($("#feedback-des").val() == ""){
       $("#sub-btn").attr("disabled",true);
    }
    else{
       $("#sub-btn").attr("disabled",false);
    }
}
      