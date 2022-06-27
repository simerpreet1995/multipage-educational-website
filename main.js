// ===== Change navbar on scroll ====

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 30)
})

//  css 
// .window-scroll{
//     background: var(--color-primary);
//     box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.3);
// }


// === XX change Navbar on scroll ends here XX ====

// show/hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

        // change plus icon into minus
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-regular fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.className = 'fa-regular fa-plus'
        }
    })
})

// css
// .faq p{
//     margin-top: 0.8rem;
//     display: none;
// }

// .faq.open p {
//     display: block;
// }


// ==== XX show/hide faq answer XX ======


// toggle button nav menu
const menu = document.querySelector('.nav_menu');

const menuBtn = document.querySelector('#open-menu-btn');

const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})


// close nav menu
const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = "none";
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)