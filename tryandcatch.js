try{
    addalert("Hello");
}
catch(err) {
document.getElementById("error").innerHTML = err.message;
}