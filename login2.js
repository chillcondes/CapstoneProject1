function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="admin"&& password=="user")
    {
        alert("Login Succesfully");
        window.open("adminhomepage.html");
        return;
    }
    else
    {
        alert("Login Failed");
    }
}