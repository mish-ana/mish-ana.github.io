$(document).ready(function() {
    $("button").click(function() {
        var user = $("#username").val();
        var admin = "admin"
        var pass = "12345";
        var pas = $("#password").val();
        if (user == admin && pas == pass) {
            window.location.href = "home.html"
            return false;
        } else {
            alert("username/password incorrect");
        }
    });
});

function preventBack() {
    window.history.forward();

}
setTimeout("preventBack()", 0);
window.onunload = function() 
{
    null;
}