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
 * Define Global Variables
 * 
*/
const docFragment = document.createDocumentFragment();

// Variable to call all sections 
const allSections = document.querySelectorAll('section');

// Brign all elements which has Id - > "navbar__list"
const myNavList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// F1 =>
// + Create a function to generate the navigation bar [ make loop to know how many sections in the document ].
// + Add items to the naviagation bar.
const createNav=() => 
{
 
    let n = 0;
    // do the same action with all sections 
     while (n < allSections.length)
         {
            const sectionName = allSections[n].getAttribute('data-nav');
            const sectionTag = allSections[n].getAttribute('id');
            //create a list of items
            const ThisList = document.createElement('li');
            ThisList.className = 'navbar__item'; 
            // all links to the list 
            myList = document.createElement('a');
            myList.className= "menu__link";
            //  take section name and give it to the item list 
            myList.textContent = sectionName;
            myList.setAttribute('href', `#${sectionTag}`);
                    
            docFragment.appendChild(myList);
            n = n + 1 ;
          
               
            
         }
           
        const myNavList = document.getElementById('navbar__list');
        myNavList.appendChild(docFragment);
}

// F2 =>
// ++ when the user click the item [ smoothly go the specific section ]

const scrollToSection = evt => {
	   	if (evt.target.nodeName === 'A') {
		// stop the default action to be done.
		evt.preventDefault();
		// make a link to the secion id 
    const sectionTag = evt.target.getAttribute('href');



    // Use the function to smoothly scroll to the section.
    window.scrollTo({
    	top: document.querySelector(sectionTag).offsetTop,
    	behavior: 'smooth' , block :'center' 
        
    });
  }
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// => When the user make scroll on the screen active item on the navigation menu will refer to the current section [Active ]
// => Active class will be applied only the current section.

window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    // if the section is on the screen now " active "
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
        // add [your-active-class] to this section 
        active.classList.add("your-active-class");
    

    let ref = myNavList.getElementsByClassName("menu__link");
    // Bring the menu list on the ref .

   switch(active){
       // check which section is on the screen 
   case section1:
    // The section which now on the screen is section 1 , so make it active.
    ref[0].classList.add("active__");
    ref[1].classList.remove("active__");
    ref[2].classList.remove("active__");
    ref[3].classList.remove("active__");
    break;

    case section2:
    // The section which now on the screen is section 2, so make it active.
    ref[0].classList.remove("active__");
    ref[1].classList.add("active__");
    ref[2].classList.remove("active__");
    ref[3].classList.remove("active__");
    break;


    case section3:
    // The section which now on the screen is section 3 , so make it active.
    ref[0].classList.remove("active__");
    ref[1].classList.remove("active__");
    ref[2].classList.add("active__");
    ref[3].classList.remove("active__");
    break;

    case section4:
    // The section which now on the screen is section 4 , so make it active.
    ref[0].classList.remove("active__");
    ref[1].classList.remove("active__");
    ref[2].classList.remove("active__");
    ref[3].classList.add("active__");
    break;

    default :
    // all sections are not active.
    ref[0].classList.remove("active__");
    ref[1].classList.remove("active__");
    ref[2].classList.remove("active__");
    ref[3].classList.remove("active__");

  }
  }
else{
         active.classList.remove("your-active-class");
         
    }
    
	});
}

// Build menu 
createNav();
// Scroll to section on link click
myNavList.addEventListener('click', scrollToSection);
// Set sections as active