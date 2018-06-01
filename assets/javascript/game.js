
$(document).ready(function() {

    var buttons =["Cats", "Dogs", "Pigs"];
    var counter = 0;

function diplayPic(){

    var image = $(this).attr("data-name"); 
    
   // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
   // image + "&api_key=dc6zaTOxFJmzC&limit=10";

   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + image;

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){

        var imageUrl = response.data.image_original_url;

        var display = $("<img>");
        
        display.attr("id", "newGif");
        display.attr("src", imageUrl);

        $("#image").prepend(display);
        
        console.log(response);

    });

}

    function newButton(){
       
        $("#box").empty();
        
        for(i=0;i<buttons.length;i++){

            var newButton = $("<button>");
            newButton.addClass("aButton");
            newButton.attr("data-name", buttons[i]);
            newButton.text(buttons[i]);
            $("#box").append(newButton);
        }
        
    }

    $("#addButton").on("click", function(event){
    
        event.preventDefault();

        var value = $("#buttonInput").val().trim(); 
        buttons.push(value);
        newButton();
        $("#buttonInput").val("");
        
    });
    
    $(document).on("click", ".aButton", diplayPic);

    newButton();

    $("#removeGif").on("click", function(event){
        
    });
    
});