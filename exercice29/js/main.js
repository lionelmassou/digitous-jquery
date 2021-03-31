$("button").click(function () {
    $("input:text").val("allez vive le discours ")
    
    if ($("input:text").val() > 5) {
        $("input").addClass("is-valid")
    } else {
        $("input").addClass("is-invalid")
    }
})
