
// check if the user is logged in and if not redirect to the login page
var username_check = localStorage.getItem('login_user');
var password_check = localStorage.getItem('login_password');
if (username_check != null && password_check != null) {
   document.getElementById("logged_in_username").innerHTML = "You are logged in as: " + username_check;
}
