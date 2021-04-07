const F = document.getElementsByClassName("faq");
const Q = document.getElementsByClassName("question");
const P = document.getElementsByClassName("fas");

for(var i=0; i<Q.length; ++i) {
    Q[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
    // this.className = "question question-clicked";
    var q = this.parentNode.className;
    for(var i=0; i<F.length; ++i) {
        F[i].className = "faq";
        Q[i].className = "question";
        P[i].className = "fas fa-chevron-down";
    }
    if(q == 'faq') {
        this.parentNode.className = "faq faq-clicked";
        this.className = "question question-clicked";
        this.firstElementChild.className = "fas fa-chevron-down fas-clicked";
    }
}