const displayJoke = document.getElementById("joke");
const btnGetJoke = document.getElementById("joke-btn");

function generateJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random");


    xhr.onreadystatechange = () => {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const receivedJoke = JSON.parse(xhr.responseText);

                console.log(receivedJoke);
                displayJoke.textContent = receivedJoke.value;
            } else {
                console.log("Something Went Wrong, Try Again!");
            }
        }
        console.log("inside ready state");
    }


    console.log("xhr sent");
    xhr.send();
}

btnGetJoke.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);

