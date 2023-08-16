document.getElementById("signupButton").addEventListener("click", function() 
{
    const user_name = document.getElementById("username").value;
    const user_email = document.getElementById("email").value;
    const user_password = document.getElementById("password").value;
    console.log(user_name);
    console.log(user_email);
    console.log(user_password);

    //datbasecolumanname : text box value
    const user = 
    {
      username: user_name,
      email: user_email,
      password: user_password
    }
    console.log(user)

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/users");
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

    xhr.onreadystatechange = () => 
    {
      if(xhr.readyState == 4 && xhr.status == 200) 
      {
        console.log(xhr.responseText)
      }
    }

    xhr.send( JSON.stringify(user) );
  })