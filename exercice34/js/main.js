$("button").click(function () {

    var nameInput = $("input").val();

    // methode 1
    var urlGeneral = "https://restcountries.eu/rest/v2/name/"
    var inputUrl = urlGeneral + nameInput;

    $.ajax({
        
        // url: "https://restcountries.eu/rest/v2/name/"+ nameInput, // methode 2
        url: inputUrl, // methode 2
        success: function (data, statuts, response) {
            var countryName = data[0].name;
            var capitalName = data[0].capital;

            $("#country").html(countryName);
            $("#capital").html(capitalName);
        }

    })
})