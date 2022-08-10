//elements

const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Invalid selection ${selector}`); //not completed yet
};

//navigations scrolling styles
const scrollHeader = () => {
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15){
        navbarElement.classList.add('activate');
        }else{
            navbarElement.classList.remove('activate');
    }
}
window.addEventListener('scroll', scrollHeader);


//form validation
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});


