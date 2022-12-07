const container = document.querySelector(".container");
const emoji = document.querySelector(".emoji");
const textarea = document.querySelector('textarea');

emoji.addEventListener('click',(e) =>{

    if(e.target.className.include('emoji')) return;

    textarea.classList.add("textarea--active");
})

container.addEventListener('mouseleave',()=>{
    textarea.classList.remove('textarea--active')
})