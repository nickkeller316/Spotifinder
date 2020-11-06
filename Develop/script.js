var redirectUri = "https://nickkeller316.github.io/Spotifinder/Develop/index2.html"
  //this is the link to our homepage
var authorizationToken; //this returns in the url after login

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

