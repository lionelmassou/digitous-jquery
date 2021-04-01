$(function () {
    $("button").click(function () {

        // $("input").val("mange")

        var numberLetter = $("input").val().length

        if (numberLetter > 5) {
            $("input").addClass("is-valid")
        } else {
            $("input").addClass("is-invalid")
        }
    })
})
