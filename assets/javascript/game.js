
var images =["cat", "dog", "horse"];

function displayPic(){

    var image = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + image;

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);

        var imageUrl = response.data.image_original_url;   

        var display = $("<img>");

        display.attr("src", imageUrl);

        $("#images").prepend(display);

    });

}

function createButtons(){

    $("#buttons-view").empty();

    for (var i = 0; i < images.length; i++) {

        var button = $("<button>");
        
        button.addClass("image-btn");
        button.attr("data-name", images[i]);
        button.text(images[i]);
        $("#buttons-view").append(button);
      }

}

$("#add-animal").on("click", function(event) {
    event.preventDefault();
    
    var image = $("#animal-input").val().trim();
   
    images.push(image);

    createButtons();
  });

  $(document).on("click", ".image-btn", displayPic);

  createButtons();