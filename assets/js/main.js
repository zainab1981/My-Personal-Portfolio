/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })     
} 

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSKills(){
    let itemClass = this.parentNode.className 

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass ===  'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}


skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSKills)
})

/*==================== SERVICES ====================*/
const modalViews = document.querySelectorAll('.services__modal')
      modalBtns = document.querySelectorAll('.services__button')
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== CONTACT ME ====================*/

const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');

const feedbackMessage = document.createElement('p');
feedbackMessage.classList.add('feedback-message');
form.appendChild(feedbackMessage);


function validateForm() {
    let isValid = true;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        alert('Please enter a valid email address.');
    }
    return isValid;
}

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        feedbackMessage.textContent = 'Your message was successfully sent. Thank you for getting in touch!';
        feedbackMessage.style.color = 'green';
        form.reset();
    } 
});




