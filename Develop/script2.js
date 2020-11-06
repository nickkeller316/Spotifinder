//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token

var equal = location.href.indexOf("=")
var amp = location.href.indexOf("&")
var token = "Bearer " + location.href.substring(equal +1, amp)





function startNow() {

  var artKey = localStorage.getItem("user-In");
  console.log(artKey)
  console.log(token)

  fetch("https://api.spotify.com/v1/search?q=" + artKey + "&type=artist", {headers:{"Authorization": token, "Accept": "application/json"} })   
  
  .then(function(response){
    return response.json();
  })
   .then(function(data){
  
    for (var i = 0; i < data.artists.items.length; i++) {
        console.log(data)
    console.log(data.artists.items[i].images[2].url)
    var mainBlocks = $(".mainblocks");
    var divFirst = $("<div class='row add-people-section'>");
    mainBlocks.append(divFirst)
    var div2nd = $("<div class='small-12 medium-12 columns about-people'>")
    divFirst.append(div2nd)
    var div3rd = $("<div class='avatar-image2 small-3 medium-3'>")
    div2nd.append(div3rd)


    var imgDiv = data.artists.items[i].images[2].url;
    div3rd.append('<img src=' + imgDiv + '><br/>');


    var artistName2 = ("<h3 class='avatar-image2 small-5 medium-5'> Name: <br/>" +data.artists.items[i].name+ "</h2>");
     div2nd.append(artistName2);

      var genI = data.artists.items[i].genres
     var genresDIv2 = ("<p class='genres2 small-4 medium-4'>"  +genI+ "</p>");
     div2nd.append(genresDIv2);
     
    }



} )

}

    $("#main-search").on('click', function(){
      
      var userInput = $("#searchId").val().toLowerCase();
      

      
       if (userInput !== "") {
        localStorage.setItem("user-In", userInput); 
      
        startNow()


       }
      
})


  //
  //   localStorage.setItem("user-In", userInput); 
    
  //   // alemenat duplicat val
  //   if (historyList.indexOf(userInput) === -1) {
  //     list = $("<li>").text(userInput);
  //     $("#city-list").append(list);
  //     historyList.push(userInput);
  //     localStorage.setItem("City-list", JSON.stringify(historyList));
  //   }
  // };
  



   
    //  var cardOne = $(".avatar-image2");
    //  var artistName2 = ("<h2>" +data.artists.items[0].name+ "</h2>");
    

    //  var artNameDiv = $(".artistName2") 
    //  var imgDiv = data.artists.items[0].images[2].url;
    //  var genresDIv2 = $(".genres2")
    //  var genresData1 = ("<p> <br/><br/><br/>" +data.artists.items[0].genres+ "</p>");
    //  genresDIv2.append(genresData1)


    //  cardOne.append('<img src=' + imgDiv + '>');
    //  artNameDiv.append(artistName2)

/* <div class="blog-post">
          <h3 id="result-one"><small>3/6/2015</small></h3>
          <img class="thumbnail" src="https://placehold.it/850x350" />
          <p>
            Praesent id metus massa, ut blandit odio. Proin quis tortor orci.
            Etiam at risus et justo dignissim congue. Donec congue lacinia dui,
            a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
            Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
            pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.
          </p>
          <div class="callout">
            <ul class="menu simple">
              <li><a href="#">Author: Mike Mikers</a></li>
              <li><a href="#">Comments: 3</a></li>
            </ul>
          </div>
        </div> */


// var baseUrl = "https://api.spotify.com/"
// var artistPer = "v1/artists/0OdUWJ0sBjDrqHygGUXeCF"
// var artist = baseUrl + artistPer
// fetch(artist)   
//   .then(function(response){
//     return response.json();
//   })
//    .then(function(data){
//      console.log(data)
//    })
