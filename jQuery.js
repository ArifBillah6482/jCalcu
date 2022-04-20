function insertNumber(number){
    let existingNumber = $(".input").val();
    $(".input").val(existingNumber + number)
}
function insertSymbol(symbol){
    let existingNumber = $(".input").val();
    $(".input").val(existingNumber + symbol)
}
$(".clearBtn").click( function(){
    $(".input").val('')
});
function resultSymbol(symbol){
    let result = eval($(".input").val());
    $(".input").val(result)
}


    $(".dltBtn").click( function(){
        let dltValue = $(".input").val();
        $(".input").val(dltValue.slice(0, -1));
    })