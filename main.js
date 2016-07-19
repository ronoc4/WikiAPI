/**
 * Created by conor on 6/23/16.
 */



$(document).ready(function () {

    //Run when ENTER is pressed
    $('#searchBox').keyup(function (event) {
       if(event.keyCode == 13) {
           $('#searchButton').click();
       }
    });

    //Run when the Go! button is clicked
    $('#searchButton').click(function () {
        var searchString = $('#searchBox').val();
        $('.list-group').show();

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

                //Adding this to clear out old search
                $('#output').html('');
                for(var i = 0; i < data[1].length; i++) {
                    /*
                     $("#id1").html(data[1][i]);
                     $("#id2").html(data[2][i]);
                     $("#id3").html(data[3][i]);
                     */
                    $('#output').prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>" );
                    //Add class to A elements with target _blank to open new tab
                    $( 'a' ).addClass( "targetArticle" ).attr('target', '_blank');
                }
            },

            error: function (errorMessage) {
                alert("Error");
            }
        });

    });

    //Click to get random article
    $('#randomButton').click(function () {
        $('#output').hide();
        var randomArticleURL = "https://en.wikipedia.org/wiki/Special:Random";
        $('#iframeBox').show();
        $('#iframe').attr("src", randomArticleURL);
    });
});

