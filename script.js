const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})

demo_paragraph = document.getElementsByClassName( 'form-to-fill');
demo_paragraph.style.fontSize = "50%" ;