/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Make a variable for the Navigation bar
const navigation = document.getElementById("navbar__list")

// Get all section by the query selector by the tag name
const sections = document.querySelectorAll("section")

const Loaded = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// building the navigation bar and using forEach loop
sections.forEach((Element) => {
    // creating the nested elements of the navigation bar
    listNav = document.createElement("li");
    listNav.innerHTML = `<li>
    <a href= "#${Element.id}" data-nav="${Element.dataset.nav}" class="menu__link">${Element.dataset.nav}</a>
    </li>`
    // adding the event listner when i click on the section scroll to the section 
    listNav.addEventListener ("click", (event)=>{
        event.preventDefault();
        Element.scrollIntoView({behavior: "smooth"});
    })
    Loaded.appendChild(listNav)
})
navigation.appendChild(Loaded)

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll" , ()=> {
    for (section of sections) {
        rect = section.getBoundingClientRect();
        // using if for adding active to the classes of a tag and section tag
        if (rect.top > -100 && rect.top <300
            ) {
             section.classList.add("your-active-class");
            //  make a variable to get the a tag
                const Links = document.querySelectorAll("a")
                let  activeSection = section.getAttribute("data-nav")
                for (a of Links){
                    if (a.dataset.nav == activeSection){
                        a.classList.add("active")
                    }else{
                        a.classList.remove("active")
                    }
                }
            } else {
             section.classList.remove("your-active-class");
            } 
        }
    })

/**
 * End Main Functions
 * Begin Events
 * 
*/




// back to the top function
// make backUp variable to call the function quick
let backUp = document.querySelector(".back-top");
// monitor scroll function
window.onscroll = function(){
    // if function to make the btn appear and disappear by adding the class to the element and removing it when we are in the top
    if (this.scrollY >= 750){
        backUp.classList.add("sh-hd-btn")
    }else {
        backUp.classList.remove("sh-hd-btn")
    }
};
// the function of the click event
backUp.onclick = function(){
    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
}
