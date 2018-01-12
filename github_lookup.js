document.getElementById("button").addEventListener('click',function() {
    let enteredName = document.getElementsByClassName("username")[0].value;
    let url = "https://api.github.com/users/" + enteredName
    console.log(url)
    const promise = axios.get(url);
    console.log("promise: " + promise)
})


