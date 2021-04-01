$("button").click(function () {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/france",

        success: function(data, statuts, response) {
            var countryName = data[0].name;
            var capitalName = data[0].capital;
            
            $("#country").html(countryName);
            $("#capital").html(capitalName);
        }

    })
})