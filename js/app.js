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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

let ulList = document.getElementById("navbar__list");

let sectionList = document.querySelectorAll("section");

let docmentFragment = document.createDocumentFragment();
 for (let i = 0; i < sectionList.length; i++) {

    const listItem = document.createElement("li");

    listItem.setAttribute("data-link", sectionList[i].attributes.getNamedItem("data-nav").value);
	listItem.setAttribute("sectionId" ,`${sectionList[i].id}`);

    const listItemLink = document.createElement("a");

    listItemLink.textContent = sectionList[i].attributes.getNamedItem("data-nav").value;

    listItemLink.href = `#${sectionList[i].id}`;

    listItemLink.classList.add("menu__link");

    listItem.appendChild(listItemLink);

    docmentFragment.appendChild(listItem)
}
ulList.appendChild(docmentFragment);


docmentFragment = document.getElementById("navbar__list").querySelectorAll("li");

window.addEventListener("scroll", setActiveState);
ulList.addEventListener("click", scrollToSpecificSection);

function setActiveState() {
       
	   let windowTop = document.documentElement.scrollTop;
	   let sectionStatus=false;
	     for (section of sectionList) {
	      if (windowTop >= section.offsetTop - section.offsetHeight * 0.5 &&
            windowTop < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.5 ) {
				sectionStatus=true;
				let sectionId = section.getAttribute('id');
				  docmentFragment.forEach(element => { 
			        element.classList.remove("item-active-class");
					if(element.getAttribute('sectionId') == sectionId )
					{
						element.classList.add('item-active-class');
					}
				})
              	section.classList.add("section-active-class");	  
			}else{
				section.classList.remove("section-active-class");
			}				
			
		 }
		 if(!sectionStatus)
		 {	   
        sectionList.forEach(element => {

            element.classList.remove("section-active-class");

        });

        docmentFragment.forEach(element => {

            element.classList.remove("item-active-class");

        });
		 }
		
}

function scrollToSpecificSection(event) {

    event.preventDefault();
	   let sectionId = event.target.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView();    
    }
    





