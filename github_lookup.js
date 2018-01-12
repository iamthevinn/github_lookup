
document.getElementById('button').addEventListener('click', (e) => {
    let enteredName = document.getElementsByClassName("username")[0].value;
    const promise = axios.get('https://api.github.com/users/' + enteredName);

    promise.then(data => {
        if (data.data.name != undefined) {
            document.getElementsByClassName("name")[0].innerHTML = data.data.name
        }
        else {
            document.getElementsByClassName("name")[0].innerHTML = "Get a name bruh"
        }

        var img = document.createElement("img");
        img.src = data.data.avatar_url;

        var src = document.getElementsByClassName("pic")[0];
        console.log(src.hasChildNodes())
        if (src.hasChildNodes()) {
            console.log("herehere")
            src.removeChild(src.firstChild);
        }
        src.appendChild(img);
        console.log(src)
        console.log(typeof src)

        console.log(data)
    }, (e) => { console.log("in here")})

    promise.catch(err => {
        document.getElementsByClassName("name")[0].innerHTML = "Username not found, try another!"
        var src = document.getElementsByClassName("pic")[0];
        if (src.hasChildNodes()) {
            src.removeChild(src.firstChild);
        }
        
    })

});