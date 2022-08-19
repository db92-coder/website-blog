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


