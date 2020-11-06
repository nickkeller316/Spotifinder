var redirectUri = "https://nickkeller316.github.io/Project1/Develop/index2.html"
  //this is the link to our homepage
var authorizationToken; //this returns in the url after login
//var queryURL; // "https://api.spotify.com/v1/search?q=" + searchTerm + "&type=artist";
//var searchTerm; //this is the user input
var scope = "user-library-modify"; //this will be added to our auth link
//when you click this link, redirected to spotify login
var spotifyAuthLink =
  "https://accounts.spotify.com/authorize?client_id=18c3b3d3e3934b3eb4c154771e749dbf&response_type=token&scope=" +
  encodeURIComponent(scope) +
  "&redirect_uri=" +
  redirectUri;
//token is spotify giving you authorization to use that account
var token;
//on click of authentication button set the url (window.location.href = spotifyAuthLink) to the spotify auth link

$("#auth").on('click', function(){
  (window.location.href = spotifyAuthLink);
  token = location.hash.substr(1);
  var bear = parseInt("Bearer "+token);
  console.log(bear);
 

});

//click listener on button in index.html
//get authorization token from url and add 'Bearer' to the beginning of the string (location.hash.substr(1)) <- how you get url
//after user logs in, store that token as a variable, parse from url, then do "Bearer "+token


// $("main-search").on('click', function(){
  

// })







//on click of search button run a search function that includes the fetch call
//add token variable in as header, google how to add header to a fetch
//make the fetch call with the authorizationToken as a header
