//Declare variables in global memory
var equal = location.href.indexOf("=")
var amp = location.href.indexOf("&")
var token = "Bearer " + location.href.substring(equal +1, amp)
var div2nd = $("<div class='  small-12 medium-12 columns about-people'>")

 
// main function for processing of fetch request
function startNow() {

$(".mainblocks").empty()
  var artKey = localStorage.getItem("user-In");

//start of first API call
fetch("https://api.spotify.com/v1/search?q=" + artKey + "&type=artist", {headers:{"Authorization": token, "Accept": "application/json"} })   
  .then(function(response){
   return response.json();
  })
   .then(function(data){
   // For loop returning artist information
  for (var i = 0; i < data.artists.items.length; i++) {
        //declares local variables for div content 
    var divFirst = $("<div class=' row add-people-section'>");
    mainBlocks.append(divFirst)
    div2nd = $("<div class='  small-12 medium-12 columns about-people'>")
    divFirst.append(div2nd)
    var div3rd = $("<div class='firstbox avatar-image2 small-2 medium-2'>")
    div2nd.append(div3rd)
    var imgDiv = "";
    // If statement to find second image presented in array
     if (data.artists.items[i].images[1].url) {
      imgDiv = data.artists.items[i].images[1].url;
    }
    div3rd.append('<img class="imgBox" src=' + imgDiv + '><br/>');

    var artistName2 = ("<h3 class=' secondbox avatar-image2 small-4 medium-4'> Name: <br/>" +data.artists.items[i].name+ "</h3>");
     div2nd.append(artistName2);

    var genI = (`<p id=${data.artists.items[i].id} class="genres2 small-4 medium-4">  ${data.artists.items[i].genres} </p>`);
     div2nd.append(genI);
     
    var btN = $("<button class='button primary small-2 medium-2' onclick=showSongs('" +data.artists.items[i].id+ "')>Show Songs</button>")
     div2nd.append(btN)  
  } 
  })
  }
var count = 0;
// begin second api call, displaying top songs
function showSongs(artistId) {
 console.log(artistId)
  var boxToUpdate = document.getElementById(artistId);
 // fetch function displaying top tracks
fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=us`, {headers:{"Authorization": token, "Accept": "application/json"} }) 
  
  .then(function(response){
    return response.json();
  })
   .then(function(data){
     count += 1;
    
      var max = data.tracks.length
      var songs = (data.tracks[count].name);
      if(count <= max){
      $(`#${artistId}`).empty()
      boxToUpdate.append(songs);
  }
 })
}
    // main search button
    $("#main-search").on('click', function(){
      
    var userInput = $("#searchId").val().toLowerCase();
    //checking if statement for empty string
    if (userInput !== "") {
    localStorage.setItem("user-In", userInput); 
    startNow()
  }
  })

// Start now function to show previous search
startNow()
