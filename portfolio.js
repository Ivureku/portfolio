let splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },5000);
})

const hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
})

hidden.forEach((el) => observer.observe(el));

const hiddenCards = document.querySelectorAll('.hiddenCards');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showCards');
        }else{
            entry.target.classList.remove('showCards');
        }
    });
})
hiddenCards.forEach((el) => observer2.observe(el));
