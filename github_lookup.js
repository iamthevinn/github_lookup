/*document.getElementById("button").addEventListener('click', function () {
    let enteredName = document.getElementsByClassName("username")[0].value;
    let url = "https://api.github.com/users/" + enteredName
    console.log(url)

    $.get(url, displayName);

    function displayName(data) {
        document.getElementsByClassName("name")[0].innerHTML = data.name

        var img = document.createElement("img");
        img.src = data.avatar_url;

        var src = document.getElementsByClassName("pic")[0];
        src.appendChild(img);

    }



})
*/

document.getElementById('button').addEventListener('click', (e) => {
    // console.log("button")
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
      //  console.log(data.data)
      //  console.log(typeof data)
    })

    promise.catch(err => {
      //  console.log(err.response.status);
      // console.log(data);
    })

});