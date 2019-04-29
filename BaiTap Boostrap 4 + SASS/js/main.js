$(document).ready(function(){
    // Turn on - Turn off overlay when click to dropdown
    $("#btnDropDown,#overlay").click(function(){
        if ($("#overlay").attr("style") == "display:none"){
            on();
        } else {
            off();
        }
    })
    
    function on(){
        $("#overlay").attr("style","display:block");
    }

    function off(){
        $("#overlay").attr("style","display:none");
    }
})
