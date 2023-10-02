// hide form

function showForm(){
    let form = document.getElementById("form")
    if(form.style.display === 'none'){
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }
}

// smooth slide
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// elements slide
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.section__container, .footer`, {
    origin: 'top',
    interval: 150
})

sr.reveal(`.banner`, {
    origin: 'left'
})

sr.reveal(`.banner__container`, {
    origin: 'right'
})