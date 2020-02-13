$('.inputPhoneNumber').keyup(function()
{
    //console.log("keyUp");
    var id = $(this).attr('id');
    id = parseInt(id.slice(-1))+1
    var idElemet = "#phone"+id;
    console.log(idElemet);
    $(idElemet).focus();
  
});
$('.inputPackage').click(function()
{
    var cost = $(this).val()
    $("#inr").val(cost);
})