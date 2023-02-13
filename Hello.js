function myfunc() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  if (user != "" && pass != "") {
    alert(
      "Your username is: " +
        user.charAt(0).toUpperCase() +
        user.slice(1) +
        "\nYour password is: " +
        pass.charAt(0).toUpperCase() +
        pass.slice(1)
    );
  } else {
    alert("Please enter your crdentials");
  }
}
