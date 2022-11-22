function logout_(){
 // this script check if user is logged in and if it log out the user
    var username_check = localStorage.getItem('login_user');
    var password_check = localStorage.getItem('login_password');
    if (username_check != null && password_check != null) {

        document.getElementById("logged_in_username").innerHTML = "Du bist ausgeloggt, " + username_check;
        document.getElementById("logout").style.backgroundColor = "grey";
        localStorage.removeItem('login_user');      //rremove the user from the local storage
        localStorage.removeItem('login_password');  //rremove the password from the local storage	
        
        location.reload();  //refresh the page
    }
    else {
        //show window that the user is not logged in
        alert("You are not logged in");
    }
}