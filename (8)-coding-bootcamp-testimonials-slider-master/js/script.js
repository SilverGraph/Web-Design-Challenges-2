const prev = document.getElementById("prev");
const next = document.getElementById("next");
const tanya = document.getElementById("tanya");
const john = document.getElementById("john");
const tanyaDes = document.querySelectorAll("p")[0];
const johnDes = document.querySelectorAll("p")[1];

next.addEventListener("click", function(){
    tanya.style.visibility = 'hidden';
    tanyaDes.style.visibility = 'hidden';
    john.style.visibility = 'visible';
    johnDes.style.visibility = 'visible';
});

prev.addEventListener("click", function(){
    john.style.visibility = 'hidden';
    tanya.style.visibility = 'visible';
    tanyaDes.style.visibility = 'visible';
    johnDes.style.visibility = 'hidden';
});