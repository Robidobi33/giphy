
$(document).ready(function() {

    var buttons =["Cats", "Dogs", "Pigs", "Frogs", "Birds"];
   // var arrGifStill = [];
    //var arrGif = [];

function diplayPic(){

    var image = $(this).attr("data-name"); 
    
    //var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //image + "&api_key=dc6zaTOxFJmzC&limit=10";

   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + image;

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        //$("#image").empty();
        gifData = response.data;

        var imageUrl = gifData.images.original.url;
        //var stillUrl = response.data.images.original_still.url;
        var title = gifData.title;

        var display = $("<img>");
        
        display.attr("id", "newGif");
        display.attr("src", imageUrl);

        $("#image").prepend(display);

        $("#newGif").hover(function(event){
            $("#footer").text(title);
        });

        $("#newGif").on("click", function(){
            $(this).toggle(imageUrl);
            $("#footer").text("Create and Dispay Giphs");
        });

        console.log(response);

        //I couldn't quite get it to work with pausing all ten gifs.  It'd only work with the last gif.  I tried using the activities but I guess I didn't understand how to add that to a for loop?  I'll take some time in class to get some help on that part.  There also wasnt a rating listed in the data for the URL I used so I used "Title" instead.

        //Anyways, I came up with something a little different than what the instructions asked for but I ended up liking it better.  It allows you to add gif buttons that generate one gif.  You can then remove individule gifs or all of them without removing the buttons. It was my improvise, I hope it still counts for something.   

       /* for(i=0;i<gifData.length;i++){

            var still = gifData[i].images.original_still.url;
            var animated = gifData[i].images.original.url;
            
            var display = $("<img>");
           
            display.attr("id", "newGif");
            display.attr("data-name", gifData[i]);

           /* display.attr("data-still", still);
            display.attr("data-animate", animated);

            display.attr("data-state", "still");*/

           // display.attr("src", still);
            
           // $("#image").prepend(display);

       // }  

        /*$("#newGif").on("click", function(event){

            var state = $(this).attr("data-state");
            
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
        });*/


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
            event.preventDefault();
            $("#image").empty();
            $("#headerBox").text("Create and Dispay Giphs");
    });

    
});

