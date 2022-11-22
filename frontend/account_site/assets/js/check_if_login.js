
// check if the user is logged in and if not redirect to the login page
var username_check = localStorage.getItem('login_user');
var password_check = localStorage.getItem('login_password');
if (username_check != null && password_check != null) {
   document.getElementById("logged_in_username").innerHTML = "You are logged in as: " + username_check;     //display that the user is logged in
   document.getElementById("login_title").innerHTML = "Welcome to your account";     //change title to welcome
   document.getElementById("logout").style.backgroundColor = "red";                          //change the color of the logout button
   document.getElementById("input_user").style.display = "none";                    //hide the input field for the username
   document.getElementById("input_password").style.display = "none";         //hide the input field for the password
   document.getElementById("login_button").style.backgroundColor = "grey";       //change the color of the login button
   document.getElementById("login_button").innerHTML = "Posts" ;                 //change the text of the login button
   document.getElementById("login_button").onclick = function() { window.location.href = "../account_content_site/account_content.html";}; //change link of the login button to the account page
}
