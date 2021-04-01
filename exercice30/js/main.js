$(function () {
    $("input").keyup(function () {

        // $("input").val("mange")
        var numberLetter = $("input").val().length

        if (numberLetter > 5) {
            $("input").addClass("is-valid");
            $("input").removeClass("is-invalid");
        } else {
            $("input").addClass("is-invalid");
            $('input ').removeClass("is-valid");
        }
    })
})
