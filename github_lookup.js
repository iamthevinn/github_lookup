document.getElementById("button").addEventListener('click',function() {
    let enteredName = document.getElementsByClassName("username")[0].value;
    let url = "https://api.github.com/users/" + enteredName
    console.log(url)
    
    $.get(url , displayName);

    function displayName(data) {
        console.log("data: " + data)
        console.log("image: " + data.avatar_url)
        document.getElementsByClassName("name")[0].innerHTML = data.name
        console.log(document.getElementsByClassName("pic")[0])

        var img = document.createElement("img");
        img.src = data.avatar_url;
        
        var src = document.getElementsByClassName("pic")[0];
        src.appendChild(img);

    }

})


