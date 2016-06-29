/**
 * Created by conor on 6/23/16.
 */



$(document).ready(function () {

    //Run when the Go! button is clicked
    $("#searchButton").click(function () {
        var searchString = $("#searchBox").val();
        $(".list-group").show();

        var urlAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=?";
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request
            url: urlAPI,
            async: false,

            // Whether this is a POST or GET request
            type: "GET",

            // The type of data we expect back
            dataType : "json",

            success: function (data) {
                console.log("The user entered in the box: " + searchString);
                console.log(urlAPI);
                $("#id1").html(data[1][0]);
                $("#id2").html(data[2][0]);
                $("#id3").html(data[3][0]);
            },

            error: function (errorMessage) {
                alert("Error");
            }
        });

    });

    //Click to get random article
    $("#randomButton").click(function () {
        var randomArticleURL = "https://en.wikipedia.org/wiki/Special:Random";
        $("#iframeBox").show();
        $("#iframe").attr("src", randomArticleURL);
    });
});
