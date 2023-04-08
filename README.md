# Random Joke Generator

<a href = "https://lemn09.github.io/Random-Joke-Generator/" target = "__blank" rel = "noopener">Webiste</a>

Basic Webiste that generates random chuck norris jokes using chuck norris jokes api, <a href = "https://api.chucknorris.io" target = "__blank" rel = "noopener"> source </a>, this website is build to demonstrate

 The website generates random Chuck Norris jokes using the Chuck Norris API and is built using HTML, CSS, and vanilla JavaScript. HTTP requests are made using the XMLHttpRequest (XHR) object in JavaScript, also known as AJAX. The website has been built using HTML, CSS, and vanilla JavaScript. The user interface is simple and easy to use, allowing users to generate new jokes with just a single click. The website makes use of the asynchronous nature of JavaScript to efficiently fetch data from the API without blocking the user interface. Overall, this website provides a fun and engaging way for users to enjoy Chuck Norris jokes.

## JS Implementation

First we select the `div`(class : joke) and `button`(class : joke-btn) elements, then we added an event listener to joke-btn, so that whenever it is clicked a new random joke is generated

joke button event listener uses callback function `generateJoke()`, in `generateJoke()` we declare xhr object, we declare xhr object inside `generateJoke()` not outside because we want to new joke to be generated every time
    - in joke generator either use a event handler(`xhr.readystatechanget`) or `setTimeout()` or any other WEB API, because it is required as it will enable async ability of js, and will wait until the call stack is empty, because we first want call `xhr.send()`, before printing out the joke, it will ensure that first `xhr.send()` is called then we update the joke content
