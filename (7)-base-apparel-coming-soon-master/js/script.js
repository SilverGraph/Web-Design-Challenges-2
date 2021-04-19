const i = document.querySelector("input");
const button = document.querySelector("button");
const errorMessage = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");
const email = document.getElementById("email");
const form = document.querySelector("form");

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value === '') {
        errorMessage.style.visibility = 'visible';
        errorIcon.style.visibility = 'visible';
    }
    if(!isEmail(email.value)) {
        errorMessage.style.visibility = 'visible';
        errorIcon.style.visibility = 'visible';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity(" ");
                errorMessage.style.visibility = 'visible';
                errorIcon.style.visibility = 'visible';
            }
        };
        // elements[i].oninput = function(e) {
        //     e.target.setCustomValidity("");
        // };
    }
});