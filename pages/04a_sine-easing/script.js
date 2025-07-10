import gsap from 'gsap'

const button = document.querySelector('.scroll-to-top');

let isFlaoting = false;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        button.classList.add('show');

        if(!isFlaoting){
            gsap.to(button, {
                y:-10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.out',

            })
            isFlaoting = true;
        }
    }else{
        button.classList.remove('show');
    }
})

button.addEventListener('mouseenter', ()=>{
    gsap.to(button, {
        scale:1.3, 
        duration: 0.2,
    })
})
button.addEventListener('mouseleave', ()=>{
    gsap.to(button, {
        scale:1, 
        duration: 0.2,
    })
})

button.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})