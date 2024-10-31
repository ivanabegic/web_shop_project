
/*###################### scroll-top-btn ######################*/

//get element by their ID
const scrollTopBtn = document.getElementById("scrollTopBtn");

//show the button when user scrolls down a minimum of 500px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

//when the button is clicked, scroll to top of the page
function scrollToTop() {
    const scrollDuration = 400;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}


/*###################### open and close side-menu ######################*/

//open side menu
function openNav() {
    document.getElementById("side-menu").style.width = "50%";
}

//close side menu
function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}


/*###################### side-menu #####################*/

document.addEventListener("DOMContentLoaded", function() {

    // Get the elements
    const arrowLeftMenu = document.getElementById("arrow-left-menu");
    const arrowLeftComponents = document.getElementById("arrow-left-components"); 

    const arrowComponents = document.getElementById("arrow-components");
    const arrowPeripherals = document.getElementById("arrow-peripherals");
    const arrowGaming = document.getElementById("arrow-gaming");

    const arrowProcessors = document.getElementById("arrow-processors");
    const arrowMotherboards = document.getElementById("arrow-motherboards");
    const arrowGraphicCards = document.getElementById("arrow-graphic-cards");
    const arrowRam = document.getElementById("arrow-ram");
    const arrowDataStorage = document.getElementById("arrow-data-storage");
    const arrowFansAndCoolers = document.getElementById("arrow-fans-and-coolers");
    const arrowCasesAndPowerSupply = document.getElementById("arrow-cases-and-power-supply");

    const sideMenuDefault = document.querySelector(".side-menu-default");
    const sideNavbarComponents = document.querySelector(".side-navbar-components");
    const sideNavbarPeripherals = document.querySelector(".side-navbar-peripherals");
    const sideNavbarGaming = document.querySelector(".side-navbar-gaming");

    const sideNavbarProcessorsList = document.querySelector(".side-navbar-processors-list");
    const sideNavbarMotherboardsList = document.querySelector(".side-navbar-motherboards-list");
    const sideNavbarGraphicCardsList = document.querySelector(".side-navbar-graphic-cards-list");
    const sideNavbarRamList = document.querySelector(".side-navbar-ram-list");
    const sideNavbarDataStorageList = document.querySelector(".side-navbar-data-storage-list");
    const sideNavbarFansAndCoolersList = document.querySelector(".side-navbar-fans-and-coolers-list");
    const sideNavbarCasesAndPowerSupplyList = document.querySelector(".side-navbar-cases-and-power-supply-list");

    // Function to hide an element
    function hideElement(element) {
        element.style.display = "none";
    }

    // Function to show an element
    function showElement(element) {
        element.style.display = "block";
    }

    arrowComponents.addEventListener("click", function() {
        hideElement(sideMenuDefault);
        showElement(sideNavbarComponents);
        showElement(arrowLeftMenu);
        showElement(arrowProcessors);
        showElement(arrowMotherboards);
        showElement(arrowGraphicCards);
        showElement(arrowRam);
        showElement(arrowDataStorage);
        showElement(arrowFansAndCoolers);
        showElement(arrowCasesAndPowerSupply);
    });

    arrowPeripherals.addEventListener("click", function() {
        hideElement(sideMenuDefault);
        showElement(sideNavbarPeripherals);
        showElement(arrowLeftMenu);
    });

    arrowGaming.addEventListener("click", function() {
        hideElement(sideMenuDefault);
        showElement(sideNavbarGaming);
        showElement(arrowLeftMenu);
    });

    arrowLeftMenu.addEventListener("click", function() {
        showElement(sideMenuDefault);
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        hideElement(sideNavbarPeripherals);
        hideElement(sideNavbarGaming);
        hideElement(sideNavbarProcessorsList);
        hideElement(sideNavbarMotherboardsList);
        hideElement(sideNavbarGraphicCardsList);
        hideElement(sideNavbarRamList);
        hideElement(sideNavbarDataStorageList);
        hideElement(sideNavbarFansAndCoolersList);
        hideElement(sideNavbarCasesAndPowerSupplyList);
    });

    arrowProcessors.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarProcessorsList);       
    });

    arrowMotherboards.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarMotherboardsList);
    });

    arrowGraphicCards.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarGraphicCardsList);
    });

    arrowRam.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarRamList);
    });

    arrowDataStorage.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarDataStorageList);
    });

    arrowFansAndCoolers.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarFansAndCoolersList);
    });

    arrowCasesAndPowerSupply.addEventListener("click", function() {
        hideElement(arrowLeftMenu);
        hideElement(sideNavbarComponents);
        showElement(arrowLeftComponents);
        showElement(sideNavbarCasesAndPowerSupplyList);
    });

    arrowLeftComponents.addEventListener("click", function() {
        showElement(arrowLeftMenu);
        showElement(sideNavbarComponents);
        hideElement(arrowLeftComponents);
        hideElement(sideNavbarProcessorsList);
        hideElement(sideNavbarMotherboardsList);
        hideElement(sideNavbarGraphicCardsList);
        hideElement(sideNavbarRamList);
        hideElement(sideNavbarDataStorageList);
        hideElement(sideNavbarFansAndCoolersList);
        hideElement(sideNavbarCasesAndPowerSupplyList);
    });

    //ensure correct initial state
    showElement(sideMenuDefault);
    hideElement(arrowComponents);
    hideElement(arrowPeripherals);
    hideElement(arrowGaming);
    hideElement(arrowLeftMenu);
    hideElement(sideNavbarComponents);
    hideElement(sideNavbarPeripherals);
    hideElement(sideNavbarGaming);
    hideElement(sideNavbarProcessorsList);
    hideElement(sideNavbarMotherboardsList);
    hideElement(sideNavbarGraphicCardsList);
    hideElement(sideNavbarRamList);
    hideElement(sideNavbarDataStorageList);
    hideElement(sideNavbarFansAndCoolersList);
    hideElement(sideNavbarCasesAndPowerSupplyList);
});


/*###################### open and close top-header-search ######################*/

let openSearchBar = document.querySelector('.search-icon');
let closeSearchBar = document.querySelector('.close-icon');
let searchBarInput= document.querySelector('.search-input');
let searchBar = document.querySelector('.search');

searchBarInput.onclick = function(){
    openSearchBar.classList.add('active');
    closeSearchBar.classList.add('active');
    searchBarInput.classList.add('active');
    searchBar.classList.add('active');
}

closeSearchBar.onclick = function(){
    searchBarInput.classList.remove('active');
    closeSearchBar.classList.remove('active');
    openSearchBar.classList.remove('active');
    searchBar.classList.remove('active');
    document.getElementById('search-input').value = '';
}

/*###################### open and close search-box-mobile ######################*/

let openSearch = document.querySelector('.search-icon-mobile');
let closeSearch = document.querySelector('.close-search-mobile');
let searchBox = document.querySelector('.search-box-mobile');

openSearch.onclick = function(){
    searchBox.classList.add('active');
    closeSearch.classList.add('active');
    openSearch.classList.add('active');
    shoppingBag.style.display = 'none';
    wishlist.style.display = 'none';
}

closeSearch.onclick = function(){
    searchBox.classList.remove('active');
    closeSearch.classList.remove('active');
    openSearch.classList.remove('active');
    shoppingBag.style.display = 'block';
    wishlist.style.display = 'block';
    document.getElementById('search-input-mobile').value = '';
}


/*###################### slideshow ######################*/ 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}

function toggleSlideshow() {
    var slideshow = document.querySelector('.slideshow');
    if (slideshow.style.display === 'none') {
        slideshow.style.display = 'block';
    } else {
        slideshow.style.display = 'none';
    }
}


/*###################### default display with pc-shop-logo ######################*/

function toggleElements() {
    var emptyBasket = document.querySelector('.empty-basket');
    var emptyWishlist = document.querySelector('.empty-wishlist');
    var favoriteContent = document.querySelector('.favorite-content');
    var basketContent = document.querySelector('.basket-content');
    var slideshow = document.querySelector('.slideshow');
    var filter = document.querySelector('.filter');
    var componentsItems = document.querySelector('.components-items');
    var filterPeripherals = document.querySelector('.filter-peripherals');
    var peripheralsItems = document.querySelector('.peripherals-items');
    var gamingItems = document.querySelector('.gaming-items');
    var filterGaming = document.querySelector('.filter-gaming');

    var topHeaderSearch = document.querySelector('.top-header-search');
    var wishlist = document.getElementById('wishlist');
    var shoppingBag = document.getElementById('shopping-bag');
    var topHeaderSearchMobile = document.querySelector('.top-header-search-mobile');

    var searchResultMessage = document.getElementById('searchResultMessage');

    var sideMenuDefault = document.querySelector(".side-menu-default");
    var arrowLeftMenu = document.getElementById("arrow-left-menu");
    var arrowLeftComponents = document.getElementById("arrow-left-components");
    var arrowComponents = document.getElementById('arrow-components');
   
    var sideMenuDefault = document.querySelector(".side-menu-default");
    var sideNavbarComponents = document.querySelector(".side-navbar-components");
    var sideNavbarPeripherals = document.querySelector(".side-navbar-peripherals");
    var sideNavbarGaming = document.querySelector(".side-navbar-gaming");

    var sideNavbarProcessorsList = document.querySelector(".side-navbar-processors-list");
    var sideNavbarMotherboardsList = document.querySelector(".side-navbar-motherboards-list");
    var sideNavbarGraphicCardsList = document.querySelector(".side-navbar-graphic-cards-list");
    var sideNavbarRamList = document.querySelector(".side-navbar-ram-list");
    var sideNavbarDataStorageList = document.querySelector(".side-navbar-data-storage-list");
    var sideNavbarFansAndCoolersList = document.querySelector(".side-navbar-fans-and-coolers-list");
    var sideNavbarCasesAndPowerSupplyList = document.querySelector(".side-navbar-cases-and-power-supply-list");

    
    if (slideshow.style.display === 'none' && filter.style.display === 'block' && componentsItems.style.display === 'block') {
        slideshow.style.display = 'block';
        filter.style.display = 'none';
        componentsItems.style.display = 'none';
    } else {
        slideshow.style.display = 'block';
        filter.style.display = 'none';
        componentsItems.style.display = 'none';
    }

    if (slideshow.style.display === 'none' && filterPeripherals.style.display === 'block' && peripheralsItems.style.display === 'block') {
        slideshow.style.display = 'block';
        filterPeripherals.style.display = 'none';
        peripheralsItems.style.display = 'none';
    } else {
        slideshow.style.display = 'block';
        filterPeripherals.style.display = 'none';
        peripheralsItems.style.display = 'none';
    }

    if (slideshow.style.display === 'none' && filterGaming.style.display === 'block' && gamingItems.style.display === 'block') {
        slideshow.style.display = 'block';
        filterGaming.style.display = 'none';
        gamingItems.style.display = 'none';
    } else {
        slideshow.style.display = 'block';
        filterGaming.style.display = 'none';
        gamingItems.style.display = 'none';
    }

    if (slideshow.style.display === 'block') {

        topHeaderSearch.style.display = 'none';
        wishlist.style.display = 'none';
        shoppingBag.style.display = 'none';
        topHeaderSearchMobile.style.display = 'none';

        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
        orderConfirmation.style.display = 'none';

        arrowLeftMenu.style.display = 'none';
        arrowLeftComponents.style.display = 'none';
        arrowComponents.style.display = 'none';
      
        sideNavbarComponents.style.display = 'none';
        sideNavbarPeripherals.style.display = 'none';
        sideNavbarGaming.style.display = 'none';
        sideNavbarProcessorsList.style.display = 'none';
        sideNavbarMotherboardsList.style.display = 'none';
        sideNavbarGraphicCardsList.style.display = 'none';
        sideNavbarRamList.style.display = 'none';
        sideNavbarDataStorageList.style.display = 'none';
        sideNavbarFansAndCoolersList.style.display = 'none';
        sideNavbarCasesAndPowerSupplyList.style.display = 'none';
        sideMenuDefault.style.display = 'block';
    }
}

/*###################### display filter checkbox, sort by and components-items ######################*/

//get elements by their ID and class
const componentsTopHeader = document.getElementById('components');
const filter = document.getElementById('filter');
const componentsItems = document.getElementById('components-items');
const sortbyComponents = document.getElementById('sort-by-components');
const slideshow = document.querySelector('.slideshow');
const topHeaderSearch = document.querySelector('.top-header-search');
const wishlist = document.getElementById('wishlist');
const favoriteContent = document.querySelector('.favorite-content');
const shoppingBag = document.getElementById('shopping-bag');
const emptyWishlist = document.querySelector('.empty-wishlist');
const orderConfirmation = document.querySelector('.order-confirmation');

//initially have a display of 'none'
filter.style.display = 'none'; 
componentsItems.style.display = 'none'; 
sortbyComponents.style.display = 'none';
topHeaderSearch.style.display = 'none';
wishlist.style.display = 'none';
shoppingBag.style.display = 'none';

//add click event listener to the id="components"
componentsTopHeader.addEventListener("click", function() {
    filter.style.display = 'block';
    componentsItems.style.display = 'block';
    sortbyComponents.style.display = 'block';

    topHeaderSearch.style.display = 'block';
    wishlist.style.display = 'block';
    shoppingBag.style.display = 'block';

    favoriteContent.style.display = 'none';
    emptyWishlist.style.display = 'none';

    basketContent.style.display = 'none';
    emptyBasket.style.display = 'none';
    orderConfirmation.style.display = 'none';

    componentsItems.style.marginLeft = '0%';

    componentsItems.style.marginLeft = '0%';         
    componentsItems.style.paddingTop = '0%';
        
    filterPeripherals.style.display = 'none';
    peripheralsItems.style.display = 'none';
    sortByPeripherals.style.display = 'none';

    filterGaming.style.display = 'none';
    gamingItems.style.display = 'none';
    sortByGaming.style.display = 'none';

    if (slideshow) {
        slideshow.style.display = 'none';
    }
 });

 
 /*###################### display filter-peripherals, sort-by-peripherals and peripherals-items ######################*/

 //get elements by their ID
 const peripheralsTopHeader = document.getElementById('peripherals');
 const filterPeripherals = document.getElementById('filter-peripherals');
 const peripheralsItems = document.getElementById('peripherals-items');
 const sortByPeripherals = document.getElementById('sort-by-peripherals');

 //initially have a display of 'none'
 filterPeripherals.style.display = 'none';
 peripheralsItems.style.display = 'none';
 sortByPeripherals.style.display = 'none';

 //add click event listener to the id="peripherals"
 peripheralsTopHeader.addEventListener("click", function() {
    filterPeripherals.style.display = 'block';
    peripheralsItems.style.display = 'block';
    sortByPeripherals.style.display = 'block';

    topHeaderSearch.style.display = 'block';
    wishlist.style.display = 'block';
    shoppingBag.style.display = 'block';

    favoriteContent.style.display = 'none';
    emptyWishlist.style.display = 'none';

    basketContent.style.display = 'none';
    emptyBasket.style.display = 'none';
    orderConfirmation.style.display = 'none';

    peripheralsItems.style.marginLeft = '0';

    peripheralsItems.style.marginLeft = '0%';
    peripheralsItems.style.paddingTop = '0%';

    filter.style.display = 'none';
    componentsItems.style.display = 'none';
    sortbyComponents.style.display = 'none';

    filterGaming.style.display = 'none';
    gamingItems.style.display = 'none';
    sortByGaming.style.display = 'none';

    if (slideshow) {
        slideshow.style.display = 'none';
    }
 });


/*###################### display filter-gaming, sort-by-gaming and gaming-items ######################*/

//get elements by their ID
const gamingTopHeader = document.getElementById('gaming');
const filterGaming = document.getElementById('filter-gaming');
const gamingItems = document.getElementById('gaming-items');
const sortByGaming = document.getElementById('sort-by-gaming');

//initially have a display of 'none'
filterGaming.style.display = 'none';
gamingItems.style.display = 'none';
sortByGaming.style.display = 'none';

//add click event listener to the id="gaming"
gamingTopHeader.addEventListener("click", function() {
   filterGaming.style.display = 'block';
   gamingItems.style.display = 'block';
   sortByGaming.style.display = 'block';

   topHeaderSearch.style.display = 'block';
   wishlist.style.display = 'block';
   shoppingBag.style.display = 'block';

   favoriteContent.style.display = 'none';
   emptyWishlist.style.display = 'none';

   basketContent.style.display = 'none';
   emptyBasket.style.display = 'none';
   orderConfirmation.style.display = 'none';

   gamingItems.style.marginLeft = '0';
   
   gamingItems.style.marginLeft = '0%';
   gamingItems.style.paddingTop = '0%';

   filter.style.display = 'none';
   componentsItems.style.display = 'none';
   sortbyComponents.style.display = 'none';
   
   filterPeripherals.style.display = 'none';
   peripheralsItems.style.display = 'none';
   sortByPeripherals.style.display = 'none';

   if (slideshow) {
       slideshow.style.display = 'none';
   }
});


/*###################### display of checkboxes when clicking on #components, #peripherals, #gaming ######################*/

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
     // Handle components click
    document.querySelector("#components").addEventListener("click", function () {

        // Check the 'checkbox-all'
        document.getElementById("checkbox-all").checked = true;

        // Uncheck all checkboxes within 'filter-checkbox' except 'checkbox-all'
        let checkboxes = document.querySelectorAll("#filter-checkbox input[type='checkbox']");
        checkboxes.forEach(function (checkbox) {
            if (checkbox.id !== "checkbox-all") {
                checkbox.checked = false;
            }
        });

        // Hide sub-checkbox elements
        document.getElementById("sub-checkbox-processor").style.display = "none";
        document.getElementById("sub-checkbox-motherboard").style.display = "none";
        document.getElementById("sub-checkbox-graphic-card").style.display = "none";
        document.getElementById("sub-checkbox-ram").style.display = "none";
        document.getElementById("sub-checkbox-data-storage").style.display = "none";
        document.getElementById("sub-checkbox-fans-and-coolers").style.display = "none";
        document.getElementById("sub-checkbox-cases-and-power-supply").style.display = "none";
    });

    // Handle peripherals click
    document.querySelector("#peripherals").addEventListener("click", function () {

        // Check the 'checkbox-all-peripherals'
        document.getElementById("checkbox-all-peripherals").checked = true;

        // Uncheck all checkboxes within 'filter-peripherals-checkbox' except 'checkbox-all-peripherals'
        let checkboxes = document.querySelectorAll("#filter-peripherals-checkbox input[type='checkbox']");
        checkboxes.forEach(function (checkbox) {
            if (checkbox.id !== "checkbox-all-peripherals") {
                checkbox.checked = false;
            }
        });
    });

    // Handle gaming click
    document.querySelector("#gaming").addEventListener("click", function () {
        // Check the 'checkbox-all-gaming'
        document.getElementById("checkbox-all-gaming").checked = true;

        // Uncheck all checkboxes within 'filter-gaming-checkbox' except 'checkbox-all-gaming'
        let checkboxes = document.querySelectorAll("#filter-gaming-checkbox input[type='checkbox']");
        checkboxes.forEach(function (checkbox) {
            if (checkbox.id !== "checkbox-all-gaming") {
                checkbox.checked = false;
            }
        });
    });
});


/*###################### automatically hidden/displayed elements #####################*/

const sideMenu = document.getElementById('side-menu');

 // Function to update filter visibility based on screen size
function updateFilterVisibility() {
    var slideshow = document.querySelector('.slideshow');
    var filter = document.querySelector('.filter');
    var filterPeripherals = document.querySelector('.filter-peripherals');
    var filterGaming = document.querySelector('.filter-gaming');
    var sortByComponents = document.querySelector('.sort-by-components');
    var sortByPeripherals = document.querySelector('.sort-by-peripherals');
    var sortByGaming = document.querySelector('.sort-by-gaming');
    var topHeaderSearch = document.querySelector('.top-header-search');
    var topHeaderSearchMobile = document.querySelector('.top-header-search-mobile');
    var searchResultMessage = document.querySelector('.search-result-message');
    var componentsItems = document.querySelector('.components-items');
    var peripheralsItems = document.querySelector('.peripherals-items');
    var gamingItems = document.querySelector('.gaming-items');

    var resultsCountComponents = document.querySelector('.results-count-components');
    var resultsCountPeripherals = document.querySelector('.results-count-peripherals');
    var resultsCountGaming = document.querySelector('.results-count-gaming');

    if (window.innerWidth <= 900) {
        filter.style.display = 'none';
        filterPeripherals.style.display = 'none';
        filterGaming.style.display = 'none';
        topHeaderSearch.style.display = 'none';
        componentsItems.style.marginLeft = '0';
        peripheralsItems.style.marginLeft = '0';
        gamingItems.style.marginLeft = '0';
    }
    if (window.innerWidth <= 900 && slideshow.style.display === 'none' && 
        (componentsItems.style.display === 'block' || peripheralsItems.style.display === 'block' || gamingItems.style.display === 'block')) {
            topHeaderSearchMobile.style.display = 'block';
    }

    if (window.innerWidth <= 900 && slideshow.style.display === 'none' && componentsItems.style.display === 'block') {
        resultsCountComponents.style.display = 'block';
    }

    if (window.innerWidth <= 900 && slideshow.style.display === 'none' && peripheralsItems.style.display === 'block') {
        resultsCountPeripherals.style.display = 'block';
    }

    if (window.innerWidth <= 900 && slideshow.style.display === 'none' && gamingItems.style.display === 'block') {
        resultsCountGaming.style.display = 'block';
    }
   
    if (window.innerWidth >=901 && searchResultMessage.style.display === 'block') {
        componentsItems.style.marginLeft = '7%';
        peripheralsItems.style.marginLeft = '7%';
        gamingItems.style.marginLeft = '7%';
    }
    if (window.innerWidth >=901 && slideshow.style.display === 'none' && searchResultMessage.style.display === 'none' && sortByComponents.style.display === 'block') {
        filter.style.display = 'block';
        topHeaderSearch.style.display = 'block';
        resultsCountComponents.style.display = 'none';
    }
    if (window.innerWidth >=901 && slideshow.style.display === 'none' && searchResultMessage.style.display === 'none' && sortByPeripherals.style.display === 'block') {
        filterPeripherals.style.display = 'block';
        topHeaderSearch.style.display = 'block';
        resultsCountPeripherals.style.display = 'none';
    }
    if (window.innerWidth >=901 && slideshow.style.display === 'none' && searchResultMessage.style.display === 'none' && sortByGaming.style.display === 'block') {
        filterGaming.style.display = 'block';
        topHeaderSearch.style.display = 'block';
        resultsCountGaming.style.display = 'none';
    }
}


// Initial call to set the correct visibility on page load
updateFilterVisibility();

// Add event listener to update visibility on window resize
window.addEventListener('resize', updateFilterVisibility);


 /*##################### display components-items via side-menu #####################*/

//get elements by their ID
const componentsSideMenu = document.getElementById('components-side-menu');

//initially have a display of 'none'
componentsItems.style.display = 'none'; 

//add click event listener to the id="components-side-menu"
componentsSideMenu.addEventListener("click", function() {

    var arrowComponents = document.getElementById('arrow-components');
    var filterCheckbox = document.querySelector('.filter-checkbox');
    var componentsItems = document.querySelector('.components-items');
    var slideshow = document.querySelector('.slideshow');
    var sortByComponents = document.querySelector('.sort-by-components');
    var peripheralsItems = document.querySelector('.peripherals-items');
    var gamingItems = document.querySelector('.gaming-items');
    var sortByPeripherals = document.querySelector('.sort-by-peripherals');
    var sortByGaming = document.querySelector ('.sort-by-gaming');
    var arrowPeripherals = document.getElementById('arrow-peripherals');
    var arrowGaming = document.getElementById('arrow-gaming');
    var sideNavbarPeripherals = document.querySelector('.side-navbar-peripherals');
    var sideNavbarGaming = document.querySelector('.side-navbar-gaming');

    var topHeaderSearchMobile = document.querySelector('.top-header-search-mobile');
    var wishlist = document.getElementById('wishlist');
    var shoppingBag = document.getElementById('shopping-bag');
    
    
    if (componentsItems.style.display === 'none') {
        componentsItems.style.display = 'block';
        sortByComponents.style.display = 'block';
        arrowComponents.style.display = 'block';
        topHeaderSearchMobile.style.display = 'block';
        wishlist.style.display = 'block';
        shoppingBag.style.display = 'block';
        peripheralsItems.style.display = 'none'; 
        gamingItems.style.display = 'none';
        sortByPeripherals.style.display = 'none';
        sortByGaming.style.display = 'none';
        arrowPeripherals.style.display = 'none';
        arrowGaming.style.display = 'none';
        sideNavbarPeripherals.style.display = 'none';
        sideNavbarGaming.style.display = 'none';
        slideshow.style.display = 'none';
        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
    } else {
        componentsItems.style.display = 'block';
        arrowComponents.style.display = 'block';
        sortByComponents.style.display = 'block';
        filterCheckbox.style.display = 'none';
        slideshow.style.display = 'none';
        peripheralsItems.style.display = 'none'; 
        gamingItems.style.display = 'none';
        sortByPeripherals.style.display = 'none';
        sortByGaming.style.display = 'none';
        arrowPeripherals.style.display = 'none';
        arrowGaming.style.display = 'none';
        sideNavbarPeripherals.style.display = 'none';
        sideNavbarGaming.style.display = 'none';
        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelector('.rows');
    const allComponents = Array.from(rows.children); // Get all component items

    // Function to hide all component items
    function hideAllComponents() {
        allComponents.forEach(component => {
            component.style.display = 'none';
        });
    }

    // Function to show components based on category
    function showComponents(category) {
        hideAllComponents(); // Hide all components first

        switch (category) {
            case 'processors':
                showSortBy(); //
                showElementsByClassPrefix('processor-');
                break;
            case 'motherboards':
                showSortBy();
                showElementsByClassPrefix('motherboard-');
                break;
            case 'graphic-cards':
                showSortBy();
                showElementsByClassPrefix('graphic-card-');
                break;
            case 'ram':
                showSortBy();
                showElementsByClassPrefix('ram-');
                break;
            case 'data-storage':
                showSortBy();
                showElementsByClassPrefix('data-storage-');
                break;
            case 'fans-coolers':
                showSortBy();
                showElementsByClassPrefix('fans-and-coolers-');
                break;
            case 'cases-power-supply':
                showSortBy();
                showElementsByClassPrefix('cases-and-power-supply-');
                break;
            case 'processor-amd':
                showSortBy();
                showElementsByClassPrefix('processor-amd');
                break;
            case 'processor-intel':
                showSortBy();
                showElementsByClassPrefix('processor-intel');
                break;
            case 'motherboard-asrock':
                showSortBy();
                showElementsByClassPrefix('motherboard-asrock');
                break;
            case 'motherboard-asus':
                showSortBy();
                showElementsByClassPrefix('motherboard-asus');
                break;
            case 'motherboard-gigabyte':
                showSortBy();
                showElementsByClassPrefix('motherboard-gigabyte');
                break;
            case 'graphic-card-asrock':
                showSortBy();
                showElementsByClassPrefix('graphic-card-asrock');
                break;
            case 'graphic-card-asus':
                showSortBy();
                showElementsByClassPrefix('graphic-card-asus');
                break;
            case 'graphic-card-gigabyte': 
                showSortBy();
                showElementsByClassPrefix('graphic-card-gigabyte');
                break;
            case 'ram-corsair':
                showElementsByClassPrefix('ram-corsair');
                break;
            case 'ram-crucial':
                showSortBy();
                showElementsByClassPrefix('ram-crucial');
                break;
            case 'ram-gskill': 
                showSortBy;
                showElementsByClassPrefix('ram-gskill');
                break;
            case 'ram-kingston':
                showSortBy();
                showElementsByClassPrefix('ram-kingston');
                break;
            case 'data-storage-ssd':
                showSortBy();
                showElementsByClassPrefix('data-storage-ssd');
                break;
            case 'data-storage-hdd':
                showSortBy();
                showElementsByClassPrefix('data-storage-hdd');
                break;
            case 'data-storage-external-hdd':
                showSortBy();
                showElementsByClassPrefix('data-storage-external-hdd');
                break;
            case 'fans-and-coolers-fans':
                showSortBy();
                showElementsByClassPrefix('fans-and-coolers-fans');
                break;
            case 'fans-and-coolers-coolers':
                showSortBy();
                showElementsByClassPrefix('fans-and-coolers-coolers');
                break;
            case 'fans-and-coolers-wCooling':
                showSortBy();
                showElementsByClassPrefix('fans-and-coolers-wCooling');
                 break;
            case 'cases-and-power-supply-cases':
                showSortBy();
                showElementsByClassPrefix('cases-and-power-supply-cases');
                break;
            case 'cases-and-power-supply-power-supply':
                showSortBy();
                showElementsByClassPrefix('cases-and-power-supply-power-supply');
                break;
            default:
                showSortBy();
                allComponents.forEach(component => {
                    component.style.display = 'block';
                });
        }
    }

    // Function to show sort-by-components element
    function showSortBy() {
        const sortByComponents = document.querySelector('.sort-by-components');
        if (sortByComponents) {
            sortByComponents.style.display = 'block';
        }
    }

    // Function to show elements by class prefix
    function showElementsByClassPrefix(classPrefix) {
        const elementsToShow = document.querySelectorAll(`[class^="${classPrefix}"]`);
        elementsToShow.forEach(element => {
            element.style.display = 'block';
        });
    }

    // Event listeners for component category menu items
    document.getElementById('components-side-menu').addEventListener('click', function () {
        // showComponents('all');
        allComponents.forEach(component => {
            component.style.display = 'block';
        });
    });

    document.getElementById('processors-side-menu').addEventListener('click', function () {
        showComponents('processors');
    });

    document.getElementById('motherboards-side-menu').addEventListener('click', function () {
        showComponents('motherboards');
    });

    document.getElementById('graphic-card-side-menu').addEventListener('click', function () {
        showComponents('graphic-cards');
    });

    document.getElementById('ram-side-menu').addEventListener('click', function () {
        showComponents('ram');
    });

    document.getElementById('data-storage-side-menu').addEventListener('click', function () {
        showComponents('data-storage');
    });

    document.getElementById('fans-and-coolers-side-menu').addEventListener('click', function () {
        showComponents('fans-coolers');
    });

    document.getElementById('cases-and-power-supply-side-menu').addEventListener('click', function () {
        showComponents('cases-power-supply');
    });


     // Event listeners for specific side-navbar items
     document.getElementById('side-navbar-amd').addEventListener('click', function () {
        showComponents('processor-amd');
    });

    document.getElementById('side-navbar-intel').addEventListener('click', function () {
        showComponents('processor-intel');
    });

    document.getElementById('side-navbar-asrock-m').addEventListener('click', function () {
        showComponents('motherboard-asrock');
    });

    document.getElementById('side-navbar-asus-m').addEventListener('click', function () {
        showComponents('motherboard-asus');
    });

    document.getElementById('side-navbar-gigabyte-m').addEventListener('click', function () {
        showComponents('motherboard-gigabyte');
    });

    document.getElementById('side-navbar-asrock-g').addEventListener('click', function () {
        showComponents('graphic-card-asrock');
    });

    document.getElementById('side-navbar-asus-g').addEventListener('click', function () {
        showComponents('graphic-card-asus');
    });

    document.getElementById('side-navbar-gigabyte-g').addEventListener('click', function () {
        showComponents('graphic-card-gigabyte');
    });

    document.getElementById('side-navbar-corsair').addEventListener('click', function () {
        showComponents('ram-corsair');
    });

    document.getElementById('side-navbar-crucial').addEventListener('click', function () {
        showComponents('ram-crucial');
    });

    document.getElementById('side-navbar-gskill').addEventListener('click', function () {
        showComponents('ram-gskill');
    });

    document.getElementById('side-navbar-kingston').addEventListener('click', function () {
        showComponents('ram-kingston');
    });

    document.getElementById('side-navbar-ssd').addEventListener('click', function () {
        showComponents('data-storage-ssd');
    });

    document.getElementById('side-navbar-hdd').addEventListener('click', function () {
        showComponents('data-storage-hdd');
    });

    document.getElementById('side-navbar-external-hdd').addEventListener('click', function () {
        showComponents('data-storage-external-hdd');
    });

    document.getElementById('side-navbar-fans').addEventListener('click', function () {
        showComponents('fans-and-coolers-fans');
    });

    document.getElementById('side-navbar-coolers').addEventListener('click', function () {
        showComponents('fans-and-coolers-coolers');
    });

    document.getElementById('side-navbar-wCooling').addEventListener('click', function () {
        showComponents('fans-and-coolers-wCooling');
    });

    document.getElementById('side-navbar-cases').addEventListener('click', function () {
        showComponents('cases-and-power-supply-cases');
    });

    document.getElementById('side-navbar-power-supply').addEventListener('click', function () {
        showComponents('cases-and-power-supply-power-supply');
    });

    // Initially hide all components when page loads
    hideAllComponents();
});


/*##################### display peripherals-items via side-menu #####################*/

//get elements by their ID
const peripheralsSideMenu = document.getElementById('peripherals-side-menu');

//initially have a display of 'none'
peripheralsItems.style.display = 'none'; 

//add click event listener to the id="components-side-menu"
peripheralsSideMenu.addEventListener("click", function() {

    var arrowPeripherals = document.getElementById('arrow-peripherals');
    var filterPeripheralsCheckbox = document.querySelector('.filter-peripherals-checkbox');
    var peripheralsItems = document.querySelector('.peripherals-items');
    var slideshow = document.querySelector('.slideshow');
    var sortByPeripherals = document.querySelector('.sort-by-peripherals');
    var componentsItems = document.querySelector('.components-items');
    var gamingItems = document.querySelector('.gaming-items');
    var sortByComponents = document.querySelector('.sort-by-components');
    var sortByGaming = document.querySelector ('.sort-by-gaming');
    var arrowComponents = document.getElementById('arrow-components');
    var arrowGaming = document.getElementById('arrow-gaming');
    var sideNavbarComponents = document.querySelector('.side-navbar-components');
    var sideNavbarGaming = document.querySelector('.side-navbar-gaming');

    var topHeaderSearchMobile = document.querySelector('.top-header-search-mobile');
    var wishlist = document.getElementById('wishlist');
    var shoppingBag = document.getElementById('shopping-bag');
    
    if (peripheralsItems.style.display === 'none') {
        peripheralsItems.style.display = 'block';
        sortByPeripherals.style.display = 'block';
        arrowPeripherals.style.display = 'block';
        topHeaderSearchMobile.style.display = 'block';
        wishlist.style.display = 'block';
        shoppingBag.style.display = 'block';
        componentsItems.style.display = 'none';
        gamingItems.style.display = 'none';
        sortByComponents.style.display = 'none';
        sortByGaming.style.display = 'none';
        arrowComponents.style.display = 'none';
        arrowGaming.style.display = 'none';
        sideNavbarComponents.style.display = 'none';
        sideNavbarGaming.style.display = 'none';
        slideshow.style.display = 'none';
        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
    } else {
        peripheralsItems.style.display = 'block';
        arrowPeripherals.style.display = 'block';
        sortByPeripherals.style.display = 'block';
        filterPeripheralsCheckbox.style.display = 'none';
        slideshow.style.display = 'none';
        componentsItems.style.display = 'none';
        gamingItems.style.display = 'none';
        sortByComponents.style.display = 'none';
        sortByGaming.style.display = 'none';
        arrowComponents.style.display = 'none';
        arrowGaming.style.display = 'none';
        sideNavbarComponents.style.display = 'none';
        sideNavbarGaming.style.display = 'none';
        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const rowsPeripherals = document.querySelector('.rows-peripherals');
    const allPeripherals = Array.from(rowsPeripherals.children); // Get all peripheral items

    // Function to hide all peripheral items
    function hideAllPeripherals() {
        allPeripherals.forEach(component => {
            component.style.display = 'none';
        });
    }

    // Function to show peripherals based on category
    function showPeripherals(category) {
        hideAllPeripherals(); // Hide all peripherals first

        switch (category) {
            case 'monitors':
                showSortBy();
                showElementsByClassName('monitors');
                break;
            case 'keyboards':
                showSortBy();
                showElementsByClassName('keyboards');
                break;
            case 'mice':
                showSortBy(); 
                showElementsByClassName('mice'); 
                break;
            case 'headsets':
                showSortBy(); 
                showElementsByClassName('headsets');
                break;
            case 'speakers':
                showSortBy();
                showElementsByClassName('speakers'); 
                break;
            case 'microphones':
                showSortBy(); 
                showElementsByClassName('microphones'); 
                break;
            case 'webcams':
                showSortBy(); 
                showElementsByClassName('webcams');
                break;
            default:
                showSortBy();
                allPeripherals.forEach(component => {
                    component.style.display = 'block';
                });
        }
    }

     // Function to show sort-by-peripherals element
     function showSortBy() {
        const sortByPeripherals= document.querySelector('.sort-by-peripherals');
        if (sortByPeripherals) {
            sortByPeripherals.style.display = 'block';
        }
    }

    // Function to show elements by class name
    function showElementsByClassName(className) {
        const elementsToShow = document.querySelectorAll(`[class^="${className}"]`);
        elementsToShow.forEach(element => {
            element.style.display = 'block';
        });
    }

    // Event listeners for peripheral category menu items
    document.getElementById('peripherals-side-menu').addEventListener('click', function () {
        // showPeripherals('all');
        allPeripherals.forEach(component => {
            component.style.display = 'block';
        });
    });

    document.getElementById('monitors-side-menu').addEventListener('click', function () {
        showPeripherals('monitors');
    });

    document.getElementById('keyboards-side-menu').addEventListener('click', function () {
        showPeripherals('keyboards');
    });

    document.getElementById('mice-side-menu').addEventListener('click', function () {
        showPeripherals('mice');
    });

    document.getElementById('headsets-side-menu').addEventListener('click', function () {
        showPeripherals('headsets');
    });

    document.getElementById('speakers-side-menu').addEventListener('click', function () {
        showPeripherals('speakers');
    });

    document.getElementById('microphones-side-menu').addEventListener('click', function () {
        showPeripherals('microphones');
    });

    document.getElementById('webcams-side-menu').addEventListener('click', function () {
        showPeripherals('webcams');
    });

});


// /*##################### display gaming-items via side-menu #####################*/

//get elements by their ID
const gamingSideMenu = document.getElementById('gaming-side-menu');

//initially have a display of 'none'
gamingItems.style.display = 'none'; 

//add click event listener to the id="gaming-side-menu"
gamingSideMenu.addEventListener("click", function() {

    var arrowGaming = document.getElementById('arrow-gaming');
    var filterGamingCheckbox = document.querySelector('.filter-gaming-checkbox');
    var gamingItems = document.querySelector('.gaming-items');
    var peripheralsItems = document.querySelector('.peripherals-items');
    var componentsItems = document.querySelector('.components-items');
    var slideshow = document.querySelector('.slideshow');
    var sortByGaming = document.querySelector('.sort-by-gaming');
    var sortByPeripherals = document.querySelector('.sort-by-peripherals');
    var sortByComponents = document.querySelector('.sort-by-components');
    var arrowComponents = document.getElementById('arrow-components');
    var arrowPeripherals = document.getElementById('arrow-peripherals');
    var sideNavbarComponents = document.querySelector('.side-navbar-components');
    var sideNavbarPeripherals = document.querySelector('.side-navbar-peripherals');

    var topHeaderSearchMobile = document.querySelector('.top-header-search-mobile');
    var wishlist = document.getElementById('wishlist');
    var shoppingBag = document.getElementById('shopping-bag');
    
    if (gamingItems.style.display === 'none') {
        gamingItems.style.display = 'block';
        sortByGaming.style.display = 'block';
        arrowGaming.style.display = 'block';
        topHeaderSearchMobile.style.display = 'block';
        wishlist.style.display = 'block';
        shoppingBag.style.display = 'block';
        componentsItems.style.display = 'none';
        peripheralsItems.style.display = 'none';
        sortByComponents.style.display = 'none';
        sortByPeripherals.style.display = 'none';
        arrowComponents.style.display = 'none';
        arrowPeripherals.style.display = 'none';
        sideNavbarComponents.style.display = 'none';
        sideNavbarPeripherals.style.display = 'none';
        slideshow.style.display = 'none';
        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
    } else {
        gamingItems.style.display = 'block';
        arrowGaming.style.display = 'block';
        sortByGaming.style.display = 'block';
        filterGamingCheckbox.style.display = 'none';
        slideshow.style.display = 'none';
        componentsItems.style.display = 'none';
        peripheralsItems.style.display = 'none';
        sortByComponents.style.display = 'none';
        sortByPeripherals.style.display = 'none';
        arrowComponents.style.display = 'none';
        arrowPeripherals.style.display = 'none';
        sideNavbarComponents.style.display = 'none';
        sideNavbarPeripherals.style.display = 'none';
        searchResultMessage.style.display = 'none';
        favoriteContent.style.display = 'none';
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';
        emptyWishlist.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const rowsGaming = document.querySelector('.rows-gaming');
    const allGaming = Array.from(rowsGaming.children); // Get all gaming items

    // Function to hide all gaming items
    function hideAllGaming() {
        allGaming.forEach(component => {
            component.style.display = 'none';
        });
    }

    // Function to show gaming based on category
    function showGaming(category) {
        hideAllGaming(); // Hide all gaming first

        switch (category) {
            case 'ps5':
                showSortBy();
                showElementsByClassName('ps5');
                break;
            case 'nintendo-switch':
                showSortBy();
                showElementsByClassName('nintendo-switch');
                break;
            case 'gaming-chairs':
                showSortBy(); 
                showElementsByClassName('gaming-chairs'); 
                break;
            case 'gaming-desks':
                showSortBy(); 
                showElementsByClassName('gaming-desks');
                break;
            case 'gaming-driving-equipment':
                showSortBy();
                showElementsByClassName('gaming-driving-equipment'); 
                break;
            default:
                showSortBy();
                allGaming.forEach(component => {
                    component.style.display = 'block';
                });
        }
    }

    // Function to show sort-by-gaming element
    function showSortBy() {
        const sortByGaming = document.querySelector('.sort-by-gaming');
        if (sortByGaming) {
            sortByGaming.style.display = 'block';
        }
    }

    // Function to show elements by class name
    function showElementsByClassName(className) {
        const elementsToShow = document.querySelectorAll(`[class^="${className}"]`);
        elementsToShow.forEach(element => {
            element.style.display = 'block';
        });
    }

    // Event listeners for gaming category menu items
    document.getElementById('gaming-side-menu').addEventListener('click', function () {
        // showPeripherals('all');
        allGaming.forEach(component => {
            component.style.display = 'block';
        });
    });

    document.getElementById('ps5-side-menu').addEventListener('click', function () {
        showGaming('ps5');
    });

    document.getElementById('nintendo-switch-side-menu').addEventListener('click', function () {
        showGaming('nintendo-switch');
    });

    document.getElementById('gaming-chairs-side-menu').addEventListener('click', function () {
        showGaming('gaming-chairs');
    });

    document.getElementById('gaming-desks-side-menu').addEventListener('click', function () {
        showGaming('gaming-desks');
    });

    document.getElementById('gaming-driving-equipment-side-menu').addEventListener('click', function () {
        showGaming('gaming-driving-equipment');
    });

});


/*##################### filter components-items with checkbox #####################*/

function checkboxChange() {
    const checkboxAll = document.getElementById('checkbox-all');
    const checkboxProcessors = document.getElementById('checkbox-processors');
    const checkboxMotherboards = document.getElementById('checkbox-motherboards');
    const checkboxGraphicCards = document.getElementById('checkbox-graphic-cards');
    const checkboxRam = document.getElementById('checkbox-ram');
    const checkboxDataStorage = document.getElementById('checkbox-data-storage');
    const checkboxFansAndCoolers = document.getElementById('checkbox-fans-and-coolers');
    const checkboxCasesAndPowerSupply = document.getElementById('checkbox-cases-and-power-supply');   

    const allCategories = [
        { checkbox: checkboxProcessors, elements: document.querySelectorAll('[class^="processor-"]') },
        { checkbox: checkboxMotherboards, elements: document.querySelectorAll('[class^="motherboard-"]') },
        { checkbox: checkboxGraphicCards, elements: document.querySelectorAll('[class^="graphic-card-"]') },
        { checkbox: checkboxRam, elements: document.querySelectorAll('[class^="ram-"]') },
        { checkbox: checkboxDataStorage, elements: document.querySelectorAll('[class^="data-storage-"]') },
        { checkbox: checkboxFansAndCoolers, elements: document.querySelectorAll('[class^="fans-and-coolers-"]') },
        { checkbox: checkboxCasesAndPowerSupply, elements: document.querySelectorAll('[class^="cases-and-power-supply-"]') },
    ];


    // If the "All" checkbox is checked, uncheck all other checkboxes
    if (event.target === checkboxAll && checkboxAll.checked) {
        allCategories.forEach(category => {
            category.checkbox.checked = false;
        });
    }

    // Uncheck "All" if any other checkbox is checked
    if (event.target !== checkboxAll && event.target.checked) {
        checkboxAll.checked = false;
    }

    // Check if all checkboxes are unchecked, then check "All"
    const anyChecked = allCategories.some(category => category.checkbox.checked);
    if (!anyChecked) {
        checkboxAll.checked = true;
    }

    // Update display based on checkbox states
    if (checkboxAll.checked) {
        allCategories.forEach(category => {
            category.elements.forEach(element => {
                element.style.display = 'block';
            });
        });
    } else {
        allCategories.forEach(category => {
            category.elements.forEach(element => {
                element.style.display = category.checkbox.checked ? 'block' : 'none';
            });
        });
    }

    //further filtration of components-items with sub checkboxes
    var allCheckbox = document.getElementById('checkbox-all');
    var processorsCheckbox = document.getElementById('checkbox-processors');
    var motherboardsCheckbox = document.getElementById('checkbox-motherboards');
    var graphicCardsCheckbox = document.getElementById('checkbox-graphic-cards');
    var ramCheckbox = document.getElementById('checkbox-ram');
    var dataStorageCheckbox = document.getElementById('checkbox-data-storage');
    var fansCoolersCheckbox = document.getElementById('checkbox-fans-and-coolers');
    var casesPowerSupplyCheckbox = document.getElementById('checkbox-cases-and-power-supply');

    var processorElements = document.getElementsByClassName('sub-checkbox-processor');
    var motherboardElements = document.getElementsByClassName('sub-checkbox-motherboard');
    var graphicCardElements = document.getElementsByClassName('sub-checkbox-graphic-card');
    var ramElements = document.getElementsByClassName('sub-checkbox-ram');
    var dataStorageElements = document.getElementsByClassName('sub-checkbox-data-storage');
    var fansCoolersElements = document.getElementsByClassName('sub-checkbox-fans-and-coolers');
    var casesPowerSupplyElements = document.getElementsByClassName('sub-checkbox-cases-and-power-supply');

   
    const checkboxIntel = document.getElementById('checkbox-intel');
    const checkboxAmd = document.getElementById('checkbox-amd');
    const checkboxAsrockM = document.getElementById('checkbox-asrock-m');
    const checkboxAsusM = document.getElementById('checkbox-asus-m');
    const checkboxGigabyteM = document.getElementById('checkbox-gigabyte-m');
    const checkboxAsrockG = document.getElementById('checkbox-asrock-g');
    const checkboxAsusG = document.getElementById('checkbox-asus-g');
    const checkboxGigabyteG = document.getElementById('checkbox-gigabyte-g');
    const checkboxGskill = document.getElementById('checkbox-gskill');
    const checkboxCorsair = document.getElementById('checkbox-corsair');
    const checkboxCrucial = document.getElementById('checkbox-crucial');
    const checkboxKingston = document.getElementById('checkbox-kingston');
    const checkboxSsd = document.getElementById('checkbox-ssd');
    const checkboxHdd = document.getElementById('checkbox-hdd');
    const checkboxExternalHdd = document.getElementById('checkbox-external-hdd');
    const checkboxFans = document.getElementById('checkbox-fans');
    const checkboxCoolers = document.getElementById('checkbox-coolers');
    const checkboxWaterCooling = document.getElementById('checkbox-wCooling');
    const checkboxCases = document.getElementById('checkbox-cases');
    const checkboxPowerSupply = document.getElementById('checkbox-power-supply');
    

    // Hide all elements by default
    hideElements(processorElements);
    hideElements(motherboardElements);
    hideElements(graphicCardElements);
    hideElements(ramElements);
    hideElements(dataStorageElements);
    hideElements(fansCoolersElements);
    hideElements(casesPowerSupplyElements);

    // Check each checkbox status and show corresponding elements
    if (processorsCheckbox.checked) {
        showElements(processorElements);
    }
    if (motherboardsCheckbox.checked) {
        showElements(motherboardElements);
    }
    if (graphicCardsCheckbox.checked) {
        showElements(graphicCardElements);
    }
    if (ramCheckbox.checked) {
        showElements(ramElements);
    }
    if (dataStorageCheckbox.checked) {
        showElements(dataStorageElements);
    }
    if (fansCoolersCheckbox.checked) {
        showElements(fansCoolersElements);
    }
    if (casesPowerSupplyCheckbox.checked) {
        showElements(casesPowerSupplyElements);
    }

    // Hide all elements if checkbox-all is checked
    if (allCheckbox.checked) {
        hideElements(processorElements);
        hideElements(motherboardElements);
        hideElements(graphicCardElements);
        hideElements(ramElements);
        hideElements(dataStorageElements);
        hideElements(fansCoolersElements);
        hideElements(casesPowerSupplyElements);
    }

    //uncheck the sub checkbox

    checkboxProcessors.addEventListener("change", function() {

        if (checkboxProcessors.checked) {
            checkboxIntel.checked = false;
            checkboxAmd.checked = false;
        } else {
            checkboxIntel.checked = true;
            checkboxAmd.checked = true;
        }
    });

    checkboxMotherboards.addEventListener("change", function() {
        if (checkboxMotherboards.checked) {
            checkboxAsrockM.checked = false;
            checkboxAsusM.checked = false;
            checkboxGigabyteM.checked = false;
        } else {
            checkboxAsrockM.checked = true;
            checkboxAsusM.checked = true;
            checkboxGigabyteM.checked = true;
        }
    });

    checkboxGraphicCards.addEventListener("change", function() {
        if (checkboxGraphicCards.checked) {
            checkboxAsrockG.checked = false;
            checkboxAsusG.checked = false;
            checkboxGigabyteG.checked = false;
        } else {
            checkboxAsrockG.checked = true;
            checkboxAsusG.checked = true;
            checkboxGigabyteG.checked = true;
        }
    });

    checkboxRam.addEventListener("change", function() {
        if (checkboxRam.checked) {
            checkboxGskill.checked = false;
            checkboxCorsair.checked = false;
            checkboxCrucial.checked = false;
            checkboxKingston.checked = false;
        } else {
            checkboxGskill.checked = true;
            checkboxCorsair.checked = true;
            checkboxCrucial.checked = true;
            checkboxKingston.checked = true;
        }
    });

    checkboxDataStorage.addEventListener("change", function() {
        if (checkboxDataStorage.checked) {
            checkboxSsd.checked = false;
            checkboxExternalHdd.checked = false;
            checkboxHdd.checked = false;
        } else {
            checkboxSsd.checked = true;
            checkboxExternalHdd.checked = true;
            checkboxHdd.checked = true;
        }
    });

    checkboxFansAndCoolers.addEventListener("change", function() {
        if (checkboxFansAndCoolers.checked) {
            checkboxFans.checked = false;
            checkboxCoolers.checked = false;
            checkboxWaterCooling.checked = false;
        } else {
            checkboxFans.checked = true;
            checkboxCoolers.checked = true;
            checkboxWaterCooling.checked = true;;
        }
    });

    checkboxCasesAndPowerSupply.addEventListener("change", function() {
        if (checkboxCasesAndPowerSupply.checked) {
            checkboxCases.checked = false;
            checkboxPowerSupply.checked = false;
        } else {
            checkboxCases.checked = true;
            checkboxPowerSupply.checked = true;
        }
    });
}

function hideElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

function showElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
    }
}

// Initialize the display state based on the checkbox status when the page loads
window.onload = function() {
    checkboxChange();
};

// Set event listeners for all checkboxes
document.querySelectorAll('.filter-checkbox input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", checkboxChange);
});


/*###################### filter components-items with sub-checkbox ######################*/

function subCheckboxChange() {
    const subCategories = [
        { mainCheckbox: document.getElementById('checkbox-processors'), subCheckboxes: ['checkbox-intel', 'checkbox-amd'], classPrefix: 'processor-' },
        { mainCheckbox: document.getElementById('checkbox-motherboards'), subCheckboxes: ['checkbox-asrock-m', 'checkbox-asus-m', 'checkbox-gigabyte-m'], classPrefix: 'motherboard-' },
        { mainCheckbox: document.getElementById('checkbox-graphic-cards'), subCheckboxes: ['checkbox-asrock-g', 'checkbox-asus-g', 'checkbox-gigabyte-g'], classPrefix: 'graphic-card-' },
        { mainCheckbox: document.getElementById('checkbox-ram'), subCheckboxes: ['checkbox-gskill', 'checkbox-corsair', 'checkbox-crucial', 'checkbox-kingston'], classPrefix: 'ram-' },
        { mainCheckbox: document.getElementById('checkbox-data-storage'), subCheckboxes: ['checkbox-ssd', 'checkbox-hdd', 'checkbox-external-hdd'], classPrefix: 'data-storage-' },
        { mainCheckbox: document.getElementById('checkbox-fans-and-coolers'), subCheckboxes: ['checkbox-fans', 'checkbox-coolers', 'checkbox-wCooling'], classPrefix: 'fans-and-coolers-' },
        { mainCheckbox: document.getElementById('checkbox-cases-and-power-supply'), subCheckboxes: ['checkbox-cases', 'checkbox-power-supply'], classPrefix: 'cases-and-power-supply-' },
    ];

    subCategories.forEach(category => {
        if (category.mainCheckbox.checked) {
            let anySubChecked = false;
            category.subCheckboxes.forEach(subCheckboxId => {
                const subCheckbox = document.getElementById(subCheckboxId);
                if (subCheckbox.checked) {
                    anySubChecked = true;
                }

                // Determine if the subCheckboxId has one or two hyphens
                const parts = subCheckboxId.split('-');
                const lastPart = parts.pop();
                const classPrefix = category.classPrefix;

                // Handle single hyphen scenario
                if (parts.length === 1) {
                    const elements = document.querySelectorAll(`.${classPrefix}${lastPart}`);
                    elements.forEach(element => {
                        element.style.display = subCheckbox.checked ? 'block' : 'none';
                    });
                }

                // Handle double hyphens scenario
                else if (parts.length === 2) {
                    const secondLastPart = parts.pop();
                    const elements = document.querySelectorAll(`.${classPrefix}${secondLastPart}-${lastPart}`);
                    elements.forEach(element => {
                        element.style.display = subCheckbox.checked ? 'block' : 'none';
                    });
                }
            });

            // If no sub-checkbox is checked, show all elements of this category
            if (!anySubChecked) {
                const allElements = document.querySelectorAll(`[class^="${category.classPrefix}"]`);
                allElements.forEach(element => {
                    element.style.display = 'block';
                });
            }
        } else {
            // If main checkbox is unchecked, hide all elements of this category
            const allElements = document.querySelectorAll(`[class^="${category.classPrefix}"]`);
            allElements.forEach(element => {
                element.style.display = 'none';
            });
        }
    });
}


/*##################### filter peripherals-items with checkbox #####################*/

function peripheralsCheckboxChange() {
   
    const checkboxAllPeripherals = document.getElementById('checkbox-all-peripherals');
    const checkboxMonitors = document.getElementById('checkbox-monitors');
    const checkboxKeyboards = document.getElementById('checkbox-keyboards');
    const checkboxMice = document.getElementById('checkbox-mice');
    const checkboxHeadsets = document.getElementById('checkbox-headsets');
    const checkboxSpeakers = document.getElementById('checkbox-speakers');
    const checkboxMicrophones = document.getElementById('checkbox-microphones');
    const checkboxWebcams = document.getElementById('checkbox-webcams');   

    const allPeripheralsCategories = [
        { checkbox: checkboxMonitors, elements: document.querySelectorAll('.monitors') },
        { checkbox: checkboxKeyboards, elements: document.querySelectorAll('.keyboards') },
        { checkbox: checkboxMice, elements: document.querySelectorAll('.mice') },
        { checkbox: checkboxHeadsets, elements: document.querySelectorAll('.headsets') },
        { checkbox: checkboxSpeakers, elements: document.querySelectorAll('.speakers') },
        { checkbox: checkboxMicrophones, elements: document.querySelectorAll('.microphones') },
        { checkbox: checkboxWebcams, elements: document.querySelectorAll('.webcams') },
    ];

     // If the "All" checkbox is checked, uncheck all other checkboxes
     if (event.target === checkboxAllPeripherals && checkboxAllPeripherals.checked) {
        allPeripheralsCategories.forEach(category => {
            category.checkbox.checked = false;
        });
    }

    // Uncheck "All" if any other checkbox is checked
    if (event.target !== checkboxAllPeripherals && event.target.checked) {
        checkboxAllPeripherals.checked = false;
    }

    // Check if all checkboxes are unchecked, then check "All"
    const anyChecked = allPeripheralsCategories.some(category => category.checkbox.checked);
    if (!anyChecked) {
        checkboxAllPeripherals.checked = true;
    }

    // Update display based on checkbox states
    if (checkboxAllPeripherals.checked) {
        allPeripheralsCategories.forEach(category => {
            category.elements.forEach(element => {
                element.style.display = 'block';
            });
        });
    } else {
        allPeripheralsCategories.forEach(category => {
            category.elements.forEach(element => {
                element.style.display = category.checkbox.checked ? 'block' : 'none';
            });
        });
    }
    
}

// Set event listeners for all checkboxes
document.querySelectorAll('.filter-peripherals-checkbox input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change",  peripheralsCheckboxChange);
});


/*##################### filter gaming-items with checkbox #####################*/

function gamingCheckboxChange() {

    const checkboxAllGaming = document.getElementById('checkbox-all-gaming');
    const checkboxPS5 = document.getElementById('checkbox-ps5');
    const checkboxNintendoSwitch = document.getElementById('checkbox-nintendo-switch');
    const checkboxGamingChairs = document.getElementById('checkbox-gaming-chairs');
    const checkboxGamingDesks = document.getElementById('checkbox-gaming-desks');
    const checkboxGamingDrivingEquipment = document.getElementById('checkbox-gaming-driving-equipment');

    const allGamingCategories = [
        { checkbox: checkboxPS5, elements: document.querySelectorAll('.ps5') },
        { checkbox: checkboxNintendoSwitch, elements: document.querySelectorAll('.nintendo-switch') },
        { checkbox: checkboxGamingChairs, elements: document.querySelectorAll('.gaming-chairs') },
        { checkbox: checkboxGamingDesks, elements: document.querySelectorAll('.gaming-desks') },
        { checkbox: checkboxGamingDrivingEquipment, elements: document.querySelectorAll('.gaming-driving-equipment') },
    ];

     // If the "All" checkbox is checked, uncheck all other checkboxes
     if (event.target === checkboxAllGaming && checkboxAllGaming.checked) {
        allGamingCategories.forEach(category => {
            category.checkbox.checked = false;
        });
    }

    // Uncheck "All" if any other checkbox is checked
    if (event.target !== checkboxAllGaming && event.target.checked) {
        checkboxAllGaming.checked = false;
    }

    // Check if all checkboxes are unchecked, then check "All"
    const anyChecked = allGamingCategories.some(category => category.checkbox.checked);
    if (!anyChecked) {
        checkboxAllGaming.checked = true;
    }

    // Update display based on checkbox states
    if (checkboxAllGaming.checked) {
        allGamingCategories.forEach(category => {
            category.elements.forEach(element => {
                element.style.display = 'block';
            });
        });
    } else {
        allGamingCategories.forEach(category => {
            category.elements.forEach(element => {
                element.style.display = category.checkbox.checked ? 'block' : 'none';
            });
        });
    }
}

// Set event listeners for all checkboxes
document.querySelectorAll('.filter-gaming-checkbox input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change",  gamingCheckboxChange);
});


/*###################### sort-by-components ######################*/

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelector('.rows');
    const items = Array.from(rows.children);

    const sortByPrice = (a, b) => {
        const priceA = parseFloat(a.querySelector('.price h3').innerText.replace('€', '').replace(',', '.'));
        const priceB = parseFloat(b.querySelector('.price h3').innerText.replace('€', '').replace(',', '.'));
        return priceA - priceB;
    };

    const sortByName = (a, b) => {
        const nameA = a.querySelector('.description h4').innerText.toLowerCase().trim();
        const nameB = b.querySelector('.description h4').innerText.toLowerCase().trim();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    };

    const sortItemsByPriceAsc = () => {
        items.sort(sortByPrice);
        items.forEach(item => rows.appendChild(item));
    };

    sortItemsByPriceAsc(); // by default sort by price low to high

    document.getElementById('subject').addEventListener("change", function() {
        const sortValue = this.value;

        if (sortValue === 'price-asc') {
            sortItemsByPriceAsc();
        } else if (sortValue === 'price-desc') {
            items.sort((a, b) => sortByPrice(b, a));
            items.forEach(item => rows.appendChild(item));
        } else if (sortValue === 'name-asc') {
            items.sort(sortByName);
            items.forEach(item => rows.appendChild(item));
        } else if (sortValue === 'name-desc') {
            items.sort((a, b) => sortByName(b, a));
            items.forEach(item => rows.appendChild(item));
        }
    });


    // Event listeners for navigation items
    const navItemsComponents = [
        '.navbar-components', '.side-navbar-item'
    ];

    navItemsComponents.forEach(selector => {
        document.querySelector(selector)?.addEventListener('click', function() {
            sortItemsByPriceAsc();
            // reset dropdown if needed
            document.getElementById('subject').value = 'price-asc';
        });
    });
});


/*###################### sort-by-peripherals ######################*/

document.addEventListener('DOMContentLoaded', function() {
    const rowsPeripherals = document.querySelector('.rows-peripherals');
    const itemsPeripherals = Array.from(rowsPeripherals.children);

    const sortByPrice = (a, b) => {
        const priceA = parseFloat(a.querySelector('.price h3').innerText.replace('€', '').replace(',', '.'));
        const priceB = parseFloat(b.querySelector('.price h3').innerText.replace('€', '').replace(',', '.'));
        return priceA - priceB;
    };

    const sortByName = (a, b) => {
        const nameA = a.querySelector('.description h4').innerText.toLowerCase().trim();
        const nameB = b.querySelector('.description h4').innerText.toLowerCase().trim();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    };

    const sortItemsByPriceAsc = () => {
        itemsPeripherals.sort(sortByPrice);
        itemsPeripherals.forEach(item => rowsPeripherals.appendChild(item));
    };

    sortItemsByPriceAsc(); // by default sort by price low to high

    document.getElementById('subject-peripherals').addEventListener("change", function() {
        const sortValue = this.value;

        if (sortValue === 'price-asc') {
            sortItemsByPriceAsc();
        } else if (sortValue === 'price-desc') {
            itemsPeripherals.sort((a, b) => sortByPrice(b, a));
            itemsPeripherals.forEach(item => rowsPeripherals.appendChild(item));
        } else if (sortValue === 'name-asc') {
            itemsPeripherals.sort(sortByName);
            itemsPeripherals.forEach(item => rowsPeripherals.appendChild(item));
        } else if (sortValue === 'name-desc') {
            itemsPeripherals.sort((a, b) => sortByName(b, a));
            itemsPeripherals.forEach(item => rowsPeripherals.appendChild(item));
        }
    });

    //event listeners for navigation items
    const navItemsPeripherals = [
        '.navbar-peripherals', '.side-navbar-item'
    ];

    navItemsPeripherals.forEach(selector => {
        document.querySelector(selector)?.addEventListener('click', function() {
            sortItemsByPriceAsc();
            //reset dropdown if needed
            document.getElementById('subject-peripherals').value = 'price-asc';
        });
    });
});


/*###################### sort-by-gaming ######################*/

document.addEventListener('DOMContentLoaded', function() {
    const rowsGaming = document.querySelector('.rows-gaming');
    const itemsGaming = Array.from(rowsGaming.children);

    const sortByPrice = (a, b) => {
        const priceA = parseFloat(a.querySelector('.price h3').innerText.replace('€', '').replace(',', '.'));
        const priceB = parseFloat(b.querySelector('.price h3').innerText.replace('€', '').replace(',', '.'));
        return priceA - priceB;
    };

    const sortByName = (a, b) => {
        const nameA = a.querySelector('.description h4').innerText.toLowerCase().trim();
        const nameB = b.querySelector('.description h4').innerText.toLowerCase().trim();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    };

    const sortItemsByPriceAsc = () => {
        itemsGaming.sort(sortByPrice);
        itemsGaming.forEach(item => rowsGaming.appendChild(item));
    };

    sortItemsByPriceAsc(); // by default sort by price low to high

    document.getElementById('subject-gaming').addEventListener("change", function() {
        const sortValue = this.value;

        if (sortValue === 'price-asc') {
            sortItemsByPriceAsc();
        } else if (sortValue === 'price-desc') {
            itemsGaming.sort((a, b) => sortByPrice(b, a));
            itemsGaming.forEach(item => rowsGaming.appendChild(item));
        } else if (sortValue === 'name-asc') {
            itemsGaming.sort(sortByName);
            itemsGaming.forEach(item => rowsGaming.appendChild(item));
        } else if (sortValue === 'name-desc') {
            itemsGaming.sort((a, b) => sortByName(b, a));
            itemsGaming.forEach(item => rowsGaming.appendChild(item));
        }
    });
    
    const navItemsGaming = [
        '.navbar-gaming', '.side-navbar-item'
    ];

    navItemsGaming.forEach(selector => {
        document.querySelector(selector)?.addEventListener('click', function() {
            sortItemsByPriceAsc();
            // reset dropdown if needed
            document.getElementById('subject-gaming').value = 'price-asc';
        });
    });
   
});


/*###################### items-quantity ######################*/

document.addEventListener("DOMContentLoaded", function() {
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");
    const numberDisplays = document.querySelectorAll(".number");

    plusButtons.forEach((plus, index) => {

        // Initialize counter for each number display
        let currentValue = 1; 
        const numberDisplay = numberDisplays[index];

        // Update the displayed number initially
        numberDisplay.innerText = currentValue;

        plus.addEventListener("click", () => {
            currentValue++;
            numberDisplay.innerText = currentValue;
            console.log(currentValue);
        });

        minusButtons[index].addEventListener("click", () => {
            if (currentValue > 1) {
                currentValue--;
                numberDisplay.innerText = currentValue;
                console.log(currentValue);
            }
        });
    });

});


/*###################### results-count ######################*/

document.addEventListener("DOMContentLoaded", function () {
    const searchResultMessage = document.getElementById('searchResultMessage');
    const resultsCountComponents = document.getElementById('results-count-components');
    const resultsCountPeripherals = document.getElementById('results-count-peripherals');
    const resultsCountGaming = document.getElementById('results-count-gaming');

    // Function to hide the results count elements if searchResultMessage is visible
    function updateResultsCountVisibility() {
        if (searchResultMessage.style.display === 'block') {
            resultsCountComponents.style.display = 'none';
            resultsCountPeripherals.style.display = 'none';
            resultsCountGaming.style.display = 'none';
        }
    }

    // Observe changes to searchResultMessage's display property
    const observer = new MutationObserver(updateResultsCountVisibility);
    observer.observe(searchResultMessage, { attributes: true, attributeFilter: ['style'] });

    // Add a resize event to ensure visibility state remains consistent on screen resize
    window.addEventListener('resize', updateResultsCountVisibility);

    // Initial check in case searchResultMessage is already visible on load
    updateResultsCountVisibility();
});


document.addEventListener('DOMContentLoaded', function () {

    // Function to count elements with a specific class prefix or exact class name
    function countElementsWithClass(className) {
        return document.querySelectorAll(`.${className}`).length;
    }

    // Function to update results count for multiple classes (e.g., Components)
    function updateResultsCountForMultipleClassesComponents(classNames) {
        let totalCount = 0;
        classNames.forEach(className => {
            totalCount += countElementsWithClass(className);
        });

        const resultsCount = document.getElementById('results-count-components');
        resultsCount.textContent = `${totalCount} result${totalCount === 1 ? '' : 's'} found`;
        resultsCount.style.display = 'block';
    }

    // Function to update results count for a single class
    function updateResultsCountForSingleClassComponents(className) {
        const count = countElementsWithClass(className);
        const resultsCount = document.getElementById('results-count-components');
        resultsCount.textContent = `${count} result${count === 1 ? '' : 's'} found`;
        resultsCount.style.display = 'block';
    }

     // Function to update results count for multiple classes (e.g., Peripherals)
     function updateResultsCountForMultipleClassesPeripherals(classNames) {
        let totalCount = 0;
        classNames.forEach(className => {
            totalCount += countElementsWithClass(className);
        });

        const resultsCount = document.getElementById('results-count-peripherals');
        resultsCount.textContent = `${totalCount} result${totalCount === 1 ? '' : 's'} found`;
        resultsCount.style.display = 'block';
    }

    // Function to update results count for a single class
    function updateResultsCountForSingleClassPeripherals(className) {
        const count = countElementsWithClass(className);
        const resultsCount = document.getElementById('results-count-peripherals');
        resultsCount.textContent = `${count} result${count === 1 ? '' : 's'} found`;
        resultsCount.style.display = 'block';
    }

     // Function to update results count for multiple classes (e.g., Peripherals)
     function updateResultsCountForMultipleClassesGaming(classNames) {
        let totalCount = 0;
        classNames.forEach(className => {
            totalCount += countElementsWithClass(className);
        });

        const resultsCount = document.getElementById('results-count-gaming');
        resultsCount.textContent = `${totalCount} result${totalCount === 1 ? '' : 's'} found`;
        resultsCount.style.display = 'block';
    }

    // Function to update results count for a single class
    function updateResultsCountForSingleClassGaming(className) {
        const count = countElementsWithClass(className);
        const resultsCount = document.getElementById('results-count-gaming');
        resultsCount.textContent = `${count} result${count === 1 ? '' : 's'} found`;
        resultsCount.style.display = 'block';
    }

    // Event listeners for category selections

    // "Components" - counting multiple classes
    const sideNavbarComponents = document.getElementById('components-side-menu');
    sideNavbarComponents.addEventListener('click', function () {
        const componentClasses = [
            'processor-intel', 'processor-amd', 
            'motherboard-asrock-m', 'motherboard-asus-m', 'motherboard-gigabyte-m',
            'graphic-card-asrock-g', 'graphic-card-asus-g', 'graphic-card-gigabyte-g', 
            'ram-corsair', 'ram-crucial', 'ram-gskill', 'ram-kingston',
            'data-storage-ssd', 'data-storage-hdd', 'data-storage-external-hdd',
            'fans-and-coolers-fans', 'fans-and-coolers-coolers', 'fans-and-coolers-wCooling',
            'cases-and-power-supply-cases', 'cases-and-power-supply-power-supply'
        ];

        // Update results count for the "Components" section
        updateResultsCountForMultipleClassesComponents(componentClasses);
    });

    // "Processors" - counting multiple classes
    const sideNavbarProcessors = document.getElementById('processors-side-menu');
    sideNavbarProcessors.addEventListener('click', function () {
        const processorClasses = [
            'processor-amd', 'processor-intel'
        ]
        updateResultsCountForMultipleClassesComponents(processorClasses);
    });

    // "Motherboards" - counting multiple classes
    const sideNavbarMotherboards = document.getElementById('motherboards-side-menu');
    sideNavbarMotherboards.addEventListener('click', function () {
        const motherboardClasses = [
            'motherboard-asrock-m', 'motherboard-asus-m', 'motherboard-gigabyte-m'
        ]
        updateResultsCountForMultipleClassesComponents(motherboardClasses);
    });

    // "Graphic cards" - counting multiple classes
    const sideNavbarGraphicCards = document.getElementById('graphic-card-side-menu');
    sideNavbarGraphicCards.addEventListener('click', function () {
        const graphicCardClasses = [
            'graphic-card-asrock-g', 'graphic-card-asus-g', 'graphic-card-gigabyte-g'
        ]
        updateResultsCountForMultipleClassesComponents(graphicCardClasses);
    });

    // "RAM" - counting multiple classes
    const sideNavbarRam = document.getElementById('ram-side-menu');
    sideNavbarRam.addEventListener('click', function () {
        const ramClasses = [
            'ram-corsair', 'ram-crucial', 'ram-gskill', 'ram-kingston'
        ]
        updateResultsCountForMultipleClassesComponents(ramClasses);
    });

    // "Data storage" - counting multiple classes
    const sideNavbarDataStorage = document.getElementById('data-storage-side-menu');
    sideNavbarDataStorage.addEventListener('click', function () {
        const dataStorageClasses = [
            'data-storage-ssd', 'data-storage-hdd', 'data-storage-external-hdd'
        ]
        updateResultsCountForMultipleClassesComponents(dataStorageClasses);
    });

    // "Fans and coolers" - counting multiple classes
    const sideNavbarFansAndCoolers = document.getElementById('fans-and-coolers-side-menu');
    sideNavbarFansAndCoolers.addEventListener('click', function () {
        const fansAndCoolersClasses = [
            'fans-and-coolers-fans', 'fans-and-coolers-coolers', 'fans-and-coolers-wCooling'
        ]
        updateResultsCountForMultipleClassesComponents(fansAndCoolersClasses);
    });

    // "Cases and power supply" - counting multiple classes
    const sideNavbarCasesAndPowerSupply = document.getElementById('cases-and-power-supply-side-menu');
    sideNavbarCasesAndPowerSupply.addEventListener('click', function () {
        const casesAndPowerSupplyClasses = [
            'cases-and-power-supply-cases', 'cases-and-power-supply-power-supply'
        ]
        updateResultsCountForMultipleClassesComponents(casesAndPowerSupplyClasses);
    });

    // "AMD Processors"
    const sideNavbarAMD = document.getElementById('side-navbar-amd');
    sideNavbarAMD.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('processor-amd');
    });

    // "Intel Processors"
    const sideNavbarIntel = document.getElementById('side-navbar-intel');
    sideNavbarIntel.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('processor-intel');
    });

    // "ASRock Motherboards"
    const sideNavbarAsrockM = document.getElementById('side-navbar-asrock-m');
    sideNavbarAsrockM.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('motherboard-asrock-m');
    });

    // "ASUS Motherboards"
    const sideNavbarAsusM = document.getElementById('side-navbar-asus-m');
    sideNavbarAsusM.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('motherboard-asus-m');
    });

    // "Gigabyte Motherboards"
    const sideNavbarGigabyteM = document.getElementById('side-navbar-gigabyte-m');
    sideNavbarGigabyteM.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('motherboard-gigabyte-m');
    });

    // "ASRock Graphic Cards"
    const sideNavbarAsrockG = document.getElementById('side-navbar-asrock-g');
    sideNavbarAsrockG.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('graphic-card-asrock-g');
    });

    // "ASUS Graphic Cards"
    const sideNavbarAsusG = document.getElementById('side-navbar-asus-g');
    sideNavbarAsusG.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('graphic-card-asus-g');
    });

    // "Gigabyte Graphic Cards"
    const sideNavbarGigabyteG = document.getElementById('side-navbar-gigabyte-g');
    sideNavbarGigabyteG.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('graphic-card-gigabyte-g');
    });

    // "Corsair RAM"
    const sideNavbarCorsair = document.getElementById('side-navbar-corsair');
    sideNavbarCorsair.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('ram-corsair');
    });

    // "Crucial RAM"
    const sideNavbarCrucial = document.getElementById('side-navbar-crucial');
    sideNavbarCrucial.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('ram-crucial');
    });

    // "GSkill RAM"
    const sideNavbarGskill = document.getElementById('side-navbar-gskill');
    sideNavbarGskill.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('ram-gskill');
    });

    // "Kingston RAM"
    const sideNavbarKingston = document.getElementById('side-navbar-kingston');
    sideNavbarKingston.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('ram-kingston');
    });

    // "SSD Storage"
    const sideNavbarSSD = document.getElementById('side-navbar-ssd');
    sideNavbarSSD.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('data-storage-ssd');
    });

    // "HDD Storage"
    const sideNavbarHDD = document.getElementById('side-navbar-hdd');
    sideNavbarHDD.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('data-storage-hdd');
    });

    // "External HDD Storage"
    const sideNavbarExternalHDD = document.getElementById('side-navbar-external-hdd');
    sideNavbarExternalHDD.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('data-storage-external-hdd');
    });

    // "Fans"
    const sideNavbarFans = document.getElementById('side-navbar-fans');
    sideNavbarFans.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('fans-and-coolers-fans');
    });

    // "Coolers"
    const sideNavbarCoolers = document.getElementById('side-navbar-coolers');
    sideNavbarCoolers.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('fans-and-coolers-coolers');
    });

    // "Water Cooling"
    const sideNavbarWCooling = document.getElementById('side-navbar-wCooling');
    sideNavbarWCooling.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('fans-and-coolers-wCooling');
    });

    // "Cases"
    const sideNavbarCases = document.getElementById('side-navbar-cases');
    sideNavbarCases.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('cases-and-power-supply-cases');
    });

    // "Power Supply"
    const sideNavbarPowerSupply = document.getElementById('side-navbar-power-supply');
    sideNavbarPowerSupply.addEventListener('click', function () {
        updateResultsCountForSingleClassComponents('cases-and-power-supply-power-supply');
    });


    // "Peripherals" - counting multiple classes
    const sideNavbarPeripherals = document.getElementById('peripherals-side-menu');
    sideNavbarPeripherals.addEventListener('click', function () {
        const peripheralsClasses = [
            'monitors', 'keyboards', 'mice', 'headsets', 'speakers', 
            'microphones', 'webcams'
        ];
        updateResultsCountForMultipleClassesPeripherals(peripheralsClasses);
    });

    // "Monitors"
    const sideNavbarMonitors = document.getElementById('monitors-side-menu');
    sideNavbarMonitors.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('monitors');
    });

    // "Keyboards"
    const sideNavbarKeyboards = document.getElementById('keyboards-side-menu');
    sideNavbarKeyboards.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('keyboards');
    });

    // "Mice"
    const sideNavbarMice = document.getElementById('mice-side-menu');
    sideNavbarMice.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('mice');
    });

    // "Headsets"
    const sideNavbarHeadsets = document.getElementById('headsets-side-menu');
    sideNavbarHeadsets.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('headsets');
    });

    // "Speakers"
    const sideNavbarSpeakers = document.getElementById('speakers-side-menu');
    sideNavbarSpeakers.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('speakers');
    });

    // "Microphones"
    const sideNavbarMicrophones = document.getElementById('microphones-side-menu');
    sideNavbarMicrophones.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('microphones');
    });

    // "Webcams"
    const sideNavbarWebcams = document.getElementById('webcams-side-menu');
    sideNavbarWebcams.addEventListener('click', function () {
        updateResultsCountForSingleClassPeripherals('webcams');
    });


    // "Gaming" - counting multiple classes
    const sideNavbarGaming = document.getElementById('gaming-side-menu');
    sideNavbarGaming.addEventListener('click', function () {
        const gamingClasses = [
            'ps5', 'nintendo-switch', 'gaming-chairs', 'gaming-desks', 'gaming-driving-equipment'
        ];
        updateResultsCountForMultipleClassesGaming(gamingClasses);
    });

    // "PS5"
    const sideNavbarPS5 = document.getElementById('ps5-side-menu');
    sideNavbarPS5.addEventListener('click', function () {
        updateResultsCountForSingleClassGaming('ps5');
    });

    // "Nintendo Switch"
    const sideNavbarNintendoSwitch = document.getElementById('nintendo-switch-side-menu');
    sideNavbarNintendoSwitch.addEventListener('click', function () {
        updateResultsCountForSingleClassGaming('nintendo-switch');
    });

    // "Gaming Chairs"
    const sideNavbarGamingChairs = document.getElementById('gaming-chairs-side-menu');
    sideNavbarGamingChairs.addEventListener('click', function () {
        updateResultsCountForSingleClassGaming('gaming-chairs');
    });

    // "Gaming Desks"
    const sideNavbarGamingDesks = document.getElementById('gaming-desks-side-menu');
    sideNavbarGamingDesks.addEventListener('click', function () {
        updateResultsCountForSingleClassGaming('gaming-desks');
    });

    // "Gaming Driving Equipment"
    const sideNavbarGamingDrivingEquipment = document.getElementById('gaming-driving-equipment-side-menu');
    sideNavbarGamingDrivingEquipment.addEventListener('click', function () {
        updateResultsCountForSingleClassGaming('gaming-driving-equipment');
    });


});


/*###################### quantity of classes ######################*/

document.addEventListener('DOMContentLoaded', function () {
    // Function to count elements with a specific class prefix
    function countElementsWithClassPrefix(classNamePrefix) {
        return document.querySelectorAll(`[class^="${classNamePrefix}"]`).length;
    }

    // Function to update checkbox labels with counts
    function updateCheckboxLabels() {
        const components = [
            { id: 'count-processors', classNamePrefix: 'processor' },
            { id: 'count-motherboards', classNamePrefix: 'motherboard' },
            { id: 'count-graphic-cards', classNamePrefix: 'graphic-card' },
            { id: 'count-ram', classNamePrefix: 'ram' },
            { id: 'count-data-storage', classNamePrefix: 'data-storage' },
            { id: 'count-fans-and-coolers', classNamePrefix: 'fans-and-coolers' },
            { id: 'count-cases-and-power-supply', classNamePrefix: 'cases-and-power-supply' }
        ];

        let totalCount = 0;

        components.forEach(component => {
            const count = countElementsWithClassPrefix(component.classNamePrefix);
            const countSpan = document.getElementById(component.id);
            if (countSpan) {
                countSpan.textContent = ` (${count})`;
            }
            totalCount += count;
        });

        const totalCountSpan = document.getElementById('count-all');
        if (totalCountSpan) {
            totalCountSpan.textContent = ` (${totalCount})`;
        }
    }

    // Initial update of checkbox labels
    updateCheckboxLabels();
});


document.addEventListener('DOMContentLoaded', function () {

    // Function to count elements with a specific class prefix
    function countElements(className) {
        return document.querySelectorAll(`[class^="${className}"]`).length;
    }

    // Function to update checkbox labels with counts
    function updatePeripheralsCheckboxLabels() {
        const peripherals = [
            { id: 'count-monitors', className: 'monitors' },
            { id: 'count-keyboards', className: 'keyboards' },
            { id: 'count-mice', className: 'mice' },
            { id: 'count-headsets', className: 'headsets' },
            { id: 'count-speakers', className: 'speakers' },
            { id: 'count-microphones', className: 'microphones' },
            { id: 'count-webcams', className: 'webcams' }
        ];

        let totalCount = 0;

        peripherals.forEach(component => {
            const count = countElements(component.className);
            const countSpan = document.getElementById(component.id);
            if (countSpan) {
                countSpan.textContent = ` (${count})`;
            }
            totalCount += count;
        });

        const totalCountSpan = document.getElementById('count-all-peripherals');
        if (totalCountSpan) {
            totalCountSpan.textContent = ` (${totalCount})`;
        }
    }

    // Initial update of checkbox labels
    updatePeripheralsCheckboxLabels();
});


document.addEventListener('DOMContentLoaded', function () {

    // Function to count elements with a specific class prefix
    function countGamingElements(className) {
        return document.querySelectorAll(`[class^="${className}"]`).length;
    }

    // Function to update checkbox labels with counts
    function updateGamingCheckboxLabels() {
        const gaming = [
            { id: 'count-ps5', className: 'ps5' },
            { id: 'count-nintendo-switch', className: 'nintendo-switch' },
            { id: 'count-gaming-chairs', className: 'gaming-chairs' },
            { id: 'count-gaming-desks', className: 'gaming-desks' },
            { id: 'count-gaming-driving-equipment', className: 'gaming-driving-equipment' }
        ];

        let totalCount = 0;

        gaming.forEach(component => {
            const count = countGamingElements(component.className);
            const countSpan = document.getElementById(component.id);
            if (countSpan) {
                countSpan.textContent = ` (${count})`;
            }
            totalCount += count;
        });

        const totalCountSpan = document.getElementById('count-all-gaming');
        if (totalCountSpan) {
            totalCountSpan.textContent = ` (${totalCount})`;
        }
    }

    // Initial update of checkbox labels
    updateGamingCheckboxLabels();
});


/*###################### quantity of sub classes ######################*/

document.addEventListener('DOMContentLoaded', function () {

    // Function to count elements with a specific class prefix
    function countElementsWithClass(className) {
        return document.querySelectorAll(`.${className}`).length;
    }

    // Function to update checkbox label with count
    function updateSubCheckboxLabel(className, countSpanId) {
        const count = countElementsWithClass(className);
        const countSpan = document.getElementById(countSpanId);
        if (countSpan) {
            countSpan.textContent = ` (${count})`;
        }
    }

    // Update counts for individual checkboxes
    updateSubCheckboxLabel('processor-amd', 'count-amd');
    updateSubCheckboxLabel('processor-intel', 'count-intel');
    updateSubCheckboxLabel('motherboard-asrock-m', 'count-asrock-m');
    updateSubCheckboxLabel('motherboard-asus-m', 'count-asus-m');
    updateSubCheckboxLabel('motherboard-gigabyte-m', 'count-gigabyte-m');
    updateSubCheckboxLabel('graphic-card-asrock-g', 'count-asrock-g');
    updateSubCheckboxLabel('graphic-card-asus-g', 'count-asus-g');
    updateSubCheckboxLabel('graphic-card-gigabyte-g', 'count-gigabyte-g');
    updateSubCheckboxLabel('ram-gskill', 'count-gskill');
    updateSubCheckboxLabel('ram-corsair', 'count-corsair');
    updateSubCheckboxLabel('ram-crucial', 'count-crucial');
    updateSubCheckboxLabel('ram-kingston', 'count-kingston');
    updateSubCheckboxLabel('data-storage-ssd', 'count-ssd');
    updateSubCheckboxLabel('data-storage-hdd', 'count-hdd');
    updateSubCheckboxLabel('data-storage-external-hdd', 'count-external-hdd');
    updateSubCheckboxLabel('fans-and-coolers-fans', 'count-fans');
    updateSubCheckboxLabel('fans-and-coolers-coolers', 'count-coolers');
    updateSubCheckboxLabel('fans-and-coolers-wCooling', 'count-wCooling');
    updateSubCheckboxLabel('cases-and-power-supply-cases', 'count-cases');
    updateSubCheckboxLabel('cases-and-power-supply-power-supply', 'count-power-supply');

});


/*###################### search ######################*/

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const searchInput = document.getElementById('search-input');
    const slideshow = document.querySelector('.slideshow');
    const componentsItems = document.getElementById('components-items');
    const peripheralsItems = document.getElementById('peripherals-items');
    const gamingItems = document.getElementById('gaming-items');
    const searchResultMessage = document.getElementById("searchResultMessage");

    const filters = [
        document.querySelector('.filter'),
        document.querySelector('.filter-peripherals'),
        document.querySelector('.filter-gaming')
    ];
    const sortBys = [
        document.querySelector('.sort-by-components'),
        document.querySelector('.sort-by-peripherals'),
        document.querySelector('.sort-by-gaming')
    ];

 
    // Function to reset the view and show all items
    function resetView() {
        
        // Show all items in all sections
        document.querySelectorAll(
            '.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m, ' +
            '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-crucial, .ram-corsair, .ram-kingston, ' +
            '.ram-gskill, .data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, ' +
            '.fans-and-coolers-coolers, .fans-and-coolers-wCooling, .cases-and-power-supply-cases, .cases-and-power-supply-power-supply, ' +
            '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams, ' +
            '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment'
        ).forEach(item => {
            item.style.display = 'block';
        });

        searchResultMessage.style.display = 'none';
    }

    // Event listener for the search input
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim().toLowerCase();
        let matchFound = false;

        // Get all items within the specified classes
        const componentsClasses = document.querySelectorAll(
            '.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m, ' +
            '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-crucial, .ram-corsair, .ram-kingston, ' +
            '.ram-gskill, .data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, ' +
            '.fans-and-coolers-coolers, .fans-and-coolers-wCooling, .cases-and-power-supply-cases, .cases-and-power-supply-power-supply'
        );
        const peripheralsClasses = document.querySelectorAll(
            '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams'
        );
        const gamingClasses = document.querySelectorAll(
            '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment'
        );

        // Combine all items into a single array
        const allItems = [...componentsClasses, ...peripheralsClasses, ...gamingClasses];

        allItems.forEach(item => {
            const h4Element = item.querySelector('h4');
            if (h4Element && h4Element.textContent.toLowerCase().includes(query)) {
                item.style.display = 'block'; // Show matched item
                matchFound = true;
            } else {
                item.style.display = 'none'; // Hide unmatched item
            }
        });

        if (matchFound) {
            slideshow.style.display = 'none';
            filters.forEach(filter => filter.style.display = 'none');
            sortBys.forEach(sortBy => sortBy.style.display = 'none');
            basketContent.style.display = 'none';
            favoriteContent.style.display = 'none';
            emptyBasket.style.display = 'none';
            emptyWishlist.style.display = 'none';

            if (window.innerWidth >=901) {
                componentsItems.style.marginLeft = '7%';
                peripheralsItems.style.marginLeft = '7%';
                gamingItems.style.marginLeft = '7%';
            }
            if (window.innerWidth <= 901) {
                componentsItems.style.marginLeft = '0%';
                peripheralsItems.style.marginLeft = '0%';
                gamingItems.style.marginLeft = '0%';
            }
        } else {
            slideshow.style.display = 'none';
            filters.forEach(filter => filter.style.display = 'none');
            sortBys.forEach(sortBy => sortBy.style.display = 'none');
            basketContent.style.display = 'none';
            favoriteContent.style.display = 'none';
            emptyBasket.style.display = 'none';
            emptyWishlist.style.display = 'none';
        }

         // If the query is empty, reset the view
         if (query === '') {
            resetView();
        }

        function applyStylesForMatches(elements) {
            let matchCount = 0;

            elements.forEach(function (item) {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(query)) {
                    matchCount++;
                    item.style.display = "block"; // Show the matched item
                    item.classList.add("matched-item"); // Add class for 25% width
                }
            });

            return matchCount; // Return the number of matches in this group
        }

        const matchInComponents = applyStylesForMatches(componentsClasses);
        const matchInPeripherals = applyStylesForMatches(peripheralsClasses);
        const matchInGaming = applyStylesForMatches(gamingClasses);

        // Calculate total matches
        totalMatches = matchInComponents + matchInPeripherals + matchInGaming;

        if (matchInComponents > 0 && componentsItems.style.display === 'block') {
            searchResultMessage.textContent = `${matchInComponents} match(es) found`;
            searchResultMessage.style.display = "block"; // Show the message
            sortbyComponents.style.display = 'block';
        } 
        else if (matchInPeripherals > 0 && peripheralsItems.style.display === 'block') {
            searchResultMessage.textContent = `${matchInPeripherals} match(es) found`;
            searchResultMessage.style.display = "block"; // Show the message
            sortByPeripherals.style.display = 'block';
        } 
        else if (matchInGaming > 0 && gamingItems.style.display === 'block') {
            searchResultMessage.textContent = `${matchInGaming} match(es) found`;
            searchResultMessage.style.display = "block"; // Show the message
            sortByGaming.style.display = 'block';
        } 
        else {
            searchResultMessage.textContent = "No matches found";
            searchResultMessage.style.display = "block"; // Show the message
        }
    });

    // Event listeners for #components, #peripherals, and #gaming
    document.getElementById('components').addEventListener('click', function () {
        // Show all component items
        resetView();
    });

    document.getElementById('peripherals').addEventListener('click', function () {
        // Show all peripherals items
        resetView();
    });

    document.getElementById('gaming').addEventListener('click', function () {
        // Show all gaming items
        resetView();
    });

});


/*###################### search-mobile ######################*/

document.addEventListener('DOMContentLoaded', function () {

    // Get references to the elements
    const searchInputMobile = document.getElementById('search-input-mobile');
    const slideshow = document.querySelector('.slideshow');
    const componentsItems = document.getElementById('components-items');
    const peripheralsItems = document.getElementById('peripherals-items');
    const gamingItems = document.getElementById('gaming-items');

    const searchResultMessage = document.getElementById("searchResultMessage");

    const sideMenuDefault = document.querySelector('.side-menu-default');

    const sortBys = [
        document.querySelector('.sort-by-components'),
        document.querySelector('.sort-by-peripherals'),
        document.querySelector('.sort-by-gaming')
    ];

    // Function to reset the view and show all items
    function resetView() {

        // Show all items in all sections
        document.querySelectorAll(
            '.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m, ' +
            '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-crucial, .ram-corsair, .ram-kingston, ' +
            '.ram-gskill, .data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, ' +
            '.fans-and-coolers-coolers, .fans-and-coolers-wCooling, .cases-and-power-supply-cases, .cases-and-power-supply-power-supply, ' +
            '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams, ' +
            '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment'
        ).forEach(item => {
            item.style.display = 'block';
        });

        searchResultMessage.style.display = 'none';
    }

    function resetSideNavbar() {

        document.querySelectorAll(
            '.arrow-left-menu, .arrow-left-components, .arrow-right, ' +
            '.side-navbar-components, .side-navbar-peripherals, .side-navbar-gaming, ' +
            '.side-navbar-processors-list, .side-navbar-motherboards-list, .side-navbar-graphic-cards-list, .side-navbar-ram-list, ' +
            '.side-navbar-data-storage-list, .side-navbar-fans-and-coolers-list, .side-navbar-cases-and-power-supply-list '
        ).forEach(item => {
            item.style.display = 'none';
        });

        sideMenuDefault.style.display = 'block';
       
    }

    // Event listener for the search input
    searchInputMobile.addEventListener('input', function () {
        const query = searchInputMobile.value.trim().toLowerCase();
        let matchFound = false;

        // Get all items within the specified classes
        const componentsClasses = document.querySelectorAll(
            '.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m, ' +
            '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-crucial, .ram-corsair, .ram-kingston, ' +
            '.ram-gskill, .data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, ' +
            '.fans-and-coolers-coolers, .fans-and-coolers-wCooling, .cases-and-power-supply-cases, .cases-and-power-supply-power-supply'
        );
        const peripheralsClasses = document.querySelectorAll(
            '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams'
        );
        const gamingClasses = document.querySelectorAll(
            '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment'
        );

        // Combine all items into a single array
        const allItems = [...componentsClasses, ...peripheralsClasses, ...gamingClasses];

        allItems.forEach(item => {
            const h4Element = item.querySelector('h4');
            if (h4Element && h4Element.textContent.toLowerCase().includes(query)) {
                item.style.display = 'block'; // Show matched item
                matchFound = true;
            } else {
                item.style.display = 'none'; // Hide unmatched item
            }
        });

        if (matchFound) {
            slideshow.style.display = 'none';
            sortBys.forEach(sortBy => sortBy.style.display = 'none');
            searchResultMessage.style.display = 'none';
            basketContent.style.display = 'none';
            favoriteContent.style.display = 'none';
            emptyBasket.style.display = 'none';
            emptyWishlist.style.display = 'none';

            resetSideNavbar();

            if (window.innerWidth >=901) {
                componentsItems.style.marginLeft = '7%';
                peripheralsItems.style.marginLeft = '7%';
                gamingItems.style.marginLeft = '7%';
            }
            if (window.innerWidth <= 901) {
                componentsItems.style.marginLeft = '0%';
                peripheralsItems.style.marginLeft = '0%';
                gamingItems.style.marginLeft = '0%';
            }
        } else {
            slideshow.style.display = 'none';
            sortBys.forEach(sortBy => sortBy.style.display = 'none');
            searchResultMessage.style.display = 'block';
            basketContent.style.display = 'none';
            favoriteContent.style.display = 'none';
            emptyBasket.style.display = 'none';
            emptyWishlist.style.display = 'none';
        }

         // If the query is empty, reset the view
         if (query === '') {
            resetView();
        }

        function applyStylesForMatches(elements) {
            let matchCount = 0;

            elements.forEach(function (item) {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(query)) {
                    matchCount++;
                    item.style.display = "block"; // Show the matched item
                    item.classList.add("matched-item"); // Add class for 25% width
                }
            });

            return matchCount; // Return the number of matches in this group
        }

        const matchInComponents = applyStylesForMatches(componentsClasses);
        const matchInPeripherals = applyStylesForMatches(peripheralsClasses);
        const matchInGaming = applyStylesForMatches(gamingClasses);


        if (matchInComponents > 0 && componentsItems.style.display === 'block') {
            searchResultMessage.textContent = `${matchInComponents} match(es) found`;
            searchResultMessage.style.display = "block";
            searchResultMessage.style.paddingLeft = '5%';
            sortbyComponents.style.display = 'block';

        } 
        else if (matchInPeripherals > 0 && peripheralsItems.style.display === 'block') {
            searchResultMessage.textContent = `${matchInPeripherals} match(es) found`;
            searchResultMessage.style.display = "block";
            searchResultMessage.style.paddingLeft = '5%';
            sortByPeripherals.style.display = 'block';
        } 
        else if (matchInGaming > 0 && gamingItems.style.display === 'block') {
            searchResultMessage.textContent = `${matchInGaming} match(es) found`;
            searchResultMessage.style.display = "block";
            searchResultMessage.style.paddingLeft = '5%';
            sortByGaming.style.display = 'block';
        } 
        else {
            searchResultMessage.textContent = "No matches found";
            searchResultMessage.style.display = "block";
        }
       
    });

    // Event listeners for #components, #peripherals, and #gaming
    document.getElementById('components-side-menu').addEventListener('click', function () {
        // Show all component items
        resetView();
    });

    document.getElementById('peripherals-side-menu').addEventListener('click', function () {
        // Show all peripherals items
        resetView();
    });

    document.getElementById('gaming-side-menu').addEventListener('click', function () {
        // Show all gaming items
        resetView();
    });

});


/*###################### basket and basket content ######################*/

const shoppingBagIcon = document.getElementById('shopping-bag-icon');
const emptyBasket = document.querySelector('.empty-basket');
const basketContent = document.getElementById('basket-content');
const topHeaderSearchMobile = document.querySelector('.top-header-search-mobile');
const searchResultMessage = document.getElementById('searchResultMessage');
const addToBasket = document.querySelectorAll('.add-to-basket');
const returnToBasket = document.querySelector('.return-to-basket');
const yourBasket = document.querySelector('.your-basket');
const checkoutOrderSummaryBox = document.querySelector('.checkout-order-summary-box');
const proceedToCheckoutButton = document.querySelector('.proceed-to-checkout');
const basketDetails = document.querySelector('.basket-details');
const rowsBasket = document.querySelector('.rows-basket');


shoppingBagIcon.addEventListener("click", function() { 

    var sideMenuDefault = document.querySelector(".side-menu-default");
    var arrowLeftMenu = document.getElementById("arrow-left-menu");
    var arrowLeftComponents = document.getElementById("arrow-left-components");
    var arrowComponents = document.getElementById('arrow-components');
   
    var sideMenuDefault = document.querySelector(".side-menu-default");
    var sideNavbarComponents = document.querySelector(".side-navbar-components");
    var sideNavbarPeripherals = document.querySelector(".side-navbar-peripherals");
    var sideNavbarGaming = document.querySelector(".side-navbar-gaming");

    var sideNavbarProcessorsList = document.querySelector(".side-navbar-processors-list");
    var sideNavbarMotherboardsList = document.querySelector(".side-navbar-motherboards-list");
    var sideNavbarGraphicCardsList = document.querySelector(".side-navbar-graphic-cards-list");
    var sideNavbarRamList = document.querySelector(".side-navbar-ram-list");
    var sideNavbarDataStorageList = document.querySelector(".side-navbar-data-storage-list");
    var sideNavbarFansAndCoolersList = document.querySelector(".side-navbar-fans-and-coolers-list");
    var sideNavbarCasesAndPowerSupplyList = document.querySelector(".side-navbar-cases-and-power-supply-list");


    slideshow.style.display = 'none';
    topHeaderSearch.style.display = 'none';
    topHeaderSearchMobile.style.display = 'none';
    searchResultMessage.style.display = 'none';
    filter.style.display = 'none';
    filterPeripherals.style.display = 'none';
    filterGaming.style.display = 'none';
    sortbyComponents.style.display = 'none';
    sortByPeripherals.style.display = 'none';
    sortByGaming.style.display = 'none';
    componentsItems.style.display = 'none';
    peripheralsItems.style.display = 'none';
    gamingItems.style.display = 'none';
    favoriteContent.style.display = 'none';
    emptyWishlist.style.display = 'none';
    returnToBasket.style.display = 'none';

    arrowLeftMenu.style.display = 'none';
    arrowLeftComponents.style.display = 'none';
    arrowComponents.style.display = 'none';
  
    sideNavbarComponents.style.display = 'none';
    sideNavbarPeripherals.style.display = 'none';
    sideNavbarGaming.style.display = 'none';
    sideNavbarProcessorsList.style.display = 'none';
    sideNavbarMotherboardsList.style.display = 'none';
    sideNavbarGraphicCardsList.style.display = 'none';
    sideNavbarRamList.style.display = 'none';
    sideNavbarDataStorageList.style.display = 'none';
    sideNavbarFansAndCoolersList.style.display = 'none';
    sideNavbarCasesAndPowerSupplyList.style.display = 'none';
    sideMenuDefault.style.display = 'block';

});


document.addEventListener('DOMContentLoaded', function() {
    const basketContent = document.getElementById('basket-content');
    const basketContainer = document.querySelector('.items-picked'); 
    const shoppingBagIcon = document.querySelector('.shopping-bag-icon');
    const shoppingBagQuantity = document.querySelector('.shopping-bag-quantity');
    const subtotalElement = document.querySelector('.checkout-order-summary-box .subtotal');
    const totalElement = document.querySelector('.checkout-order-summary-box .total');
    const emptyBasket = document.querySelector('.empty-basket');
    const orderForm = document.querySelector('.order-form');
    const checkoutOrderSummaryBox = document.querySelector('.checkout-order-summary-box');
    const proceedToCheckoutButton = document.querySelector('.proceed-to-checkout');
    const submitOrderButton = document.querySelector('.submit-order');
    const returnToBasket = document.querySelector('.return-to-basket');
    const basketDetails = document.querySelector('.basket-details');
    const orderConfirmation = document.querySelector('.order-confirmation');
    const closeConfirmationButton = document.querySelector('.close-order-confirmation');
    const yourBasket = document.querySelector('.your-basket');
    const API_KEY = "d182d113840a4a7c8501dccfcaeb19ac"; // Geocode API key


    document.querySelectorAll('.components-items .add-to-basket, .peripherals-items .add-to-basket, .gaming-items .add-to-basket').forEach(button => {
        button.addEventListener('click', function() {

            // Select product container
            const product = button.closest('.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m,' +
                '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-corsair, .ram-crucial, .ram-gskill, .ram-kingston,' + 
                '.data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, .fans-and-coolers-coolers, .fans-and-coolers-wCooling,' +
                '.cases-and-power-supply-cases, .cases-and-power-supply-power-supply,' +
                '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams,' + 
                '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment');

            // Product details
            const productName = product.querySelector('h4').textContent;  // Get the product name
            const productImage = product.querySelector('img').src;  // Get the product image
            let productPrice = product.querySelector('.price').textContent || "0€";  // Get the product price, default to 0€ if not available
            productPrice = parseFloat(productPrice.replace('€', '').trim());  // Remove currency symbol

            const productQuantity = parseInt(product.querySelector('.number').textContent) || 1;  // Get quantity

            // Get the product's unique ID
            const productId = product.dataset.id;

            // Check if the item already exists in the basket
            let existingProduct = Array.from(basketContainer.children).find(item => 
                item.dataset.id === productId  // Compare by the unique data-id
            );

            if (existingProduct) {

                // If the product exists, update the quantity
                let quantityElement = existingProduct.querySelector('.number');
                let currentQuantity = parseInt(quantityElement.textContent);
                let newQuantity = currentQuantity + productQuantity;

                // Update the quantity
                quantityElement.textContent = `${newQuantity}`;

                // Update the price based on the new quantity
                let priceElement = existingProduct.querySelector('.price');
                let updatedPrice = productPrice * newQuantity;
                priceElement.textContent = `${updatedPrice.toFixed(2).replace('.', ',')} €`;
            } else {

                // If the product does not exist, add it to the basket
                const basketItem = document.createElement('div');
                basketItem.className = "basket-item";
                basketItem.dataset.id = productId;

                // Set inner content
                basketItem.innerHTML = `
                    <img src="${productImage}" alt="${productName}">
                    <h4>${productName}</h4>
                    <div class="items-quantity">
                        <span class="minus">-</span>
                        <span class="number">${productQuantity}</span>
                        <span class="plus">+</span>
                    </div>
                    <div class="price">${(productPrice * productQuantity).toFixed(2).replace('.', ',')} €</div>
                    <span class="delete-item material-symbols-outlined">delete</span>
                `;

                // Append to basket
                basketContainer.appendChild(basketItem);

                // Setup additional functionality
                setupPlusMinus(basketItem, productPrice);
                setupDeleteButton(basketItem);
            }

            // Update the shopping bag quantity
            updateShoppingBagQuantity();
            updateShoppingBagDisplay();
        });
    });


    // Show or hide the basket when the shopping bag icon is clicked
    shoppingBagIcon.addEventListener('click', function() {
        // Toggle display of the basket container
        if (basketContainer.style.display === 'none' || basketContainer.style.display === '') {
            basketContainer.style.display = 'block';
        }
        updateBasketDisplay();
    });


    // Function to handle plus and minus button logic
    function setupPlusMinus(basketItem, productPrice) {
        const minusButton = basketItem.querySelector('.minus');
        const plusButton = basketItem.querySelector('.plus');
        const quantityElement = basketItem.querySelector('.number');
        const priceElement = basketItem.querySelector('.price');

        minusButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityElement.textContent);

            // Decrease quantity but ensure it doesn't go below 1
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityElement.textContent = currentQuantity;
                // Update the price
                const updatedPrice = productPrice * currentQuantity;
                priceElement.textContent = `${updatedPrice.toFixed(2).replace('.', ',')} €`;

                // Update the shopping bag quantity
                updateShoppingBagQuantity();
            }
        });

        plusButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityElement.textContent);
            
            // Increase quantity
            currentQuantity++;
            quantityElement.textContent = currentQuantity;
            // Update the price
            const updatedPrice = productPrice * currentQuantity;
            // priceElement.textContent = `${updatedPrice}€`;
            priceElement.textContent = `${updatedPrice.toFixed(2).replace('.', ',')} €`;

            // Update the shopping bag quantity
            updateShoppingBagQuantity();
        });
    }


    // Function to handle delete button logic
    function setupDeleteButton(basketItem) {
    const deleteButton = basketItem.querySelector('.delete-item');

    deleteButton.addEventListener('click', function() {
        basketItem.remove();  // Remove the item from the DOM

        // Update the shopping bag quantity
        updateShoppingBagQuantity();
        updateShoppingBagDisplay();
        updateBasketDisplay();
    });
    }


     // Function to update the shopping bag quantity, subtotal, and total
    function updateShoppingBagQuantity() {
        const totalItems = basketContainer.querySelectorAll('.basket-item').length;
    
        // Initialize total price
        let totalPrice = 0;

        // Calculate the total price of items in the basket
        basketContainer.querySelectorAll('.basket-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.number').textContent);
            const priceElement = item.querySelector('.price');
            const price = parseFloat(priceElement.textContent.replace('€', '').trim());

            totalPrice += price;  // Add the price for each unique item
            
        });

        // Update the shopping bag quantity display (count of unique items)
        shoppingBagQuantity.textContent = totalItems;

        // Update the subtotal text
        subtotalElement.textContent = `Subtotal (${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;

        // Update the total price
        totalElement.textContent = `TOTAL: ${totalPrice.toFixed(2)} €`;

    }

    // Event listener for "Remove All" button
    document.querySelector('.remove-all-button').addEventListener('click', function() {
    // Remove all items in the basket
    basketContainer.querySelectorAll('.basket-item').forEach(item => item.remove());
            
    // Update the shopping bag quantity and visibility of elements
    updateShoppingBagQuantity();
    updateShoppingBagDisplay();
    updateBasketDisplay();

    basketContent.style.display = 'none';
    });


    // Proceed to Checkout button click event
    proceedToCheckoutButton.addEventListener('click', function () {
        basketContainer.style.display = 'none'; // Hide the basket
        basketDetails.style.display = 'none';
        proceedToCheckoutButton.style.display = 'none';
        orderForm.style.display = 'block'; // Show the billing address form
        returnToBasket.style.display = 'block'
    });

    // Return to Basket button click event
    returnToBasket.addEventListener('click', function () {
        basketContainer.style.display = 'block'; // Hide the basket
        basketDetails.style.display = 'block';
        proceedToCheckoutButton.style.display = 'block';
        orderForm.style.display = 'none'; // Show the billing address form
        returnToBasket.style.display = 'none';
    });


    // Handle order submission
    submitOrderButton.addEventListener('click', function () {
        const firstNameInput = document.getElementById('first-name');
        const lastNameInput = document.getElementById('last-name');
        const addressInput = document.getElementById('address');
        const cityInput = document.getElementById('city');
        const countryInput = document.getElementById('country');
        const postalCodeInput = document.getElementById('postal-code');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');

        // Clear previous error states
        firstNameInput.style.border = '';
        lastNameInput.style.border = '';
        addressInput.style.border = '';
        cityInput.style.border = '';
        countryInput.style.border = '';
        postalCodeInput.style.border = '';
        phoneInput.style.border = '';
        emailInput.style.border = '';

        let isValid = true;

        // Validate basic fields
        if (!firstNameInput.value) {
            firstNameInput.style.border = '2px solid red'; 
            isValid = false;
        }

        if (!lastNameInput.value) {
            lastNameInput.style.border = '2px solid red'; 
            isValid = false;
        }

        if (!emailInput.value) {
            emailInput.style.border = '2px solid red'; 
            isValid = false;
        }

        if (!phoneInput.value) {
            phoneInput.style.border = '2px solid red'; 
            isValid = false;
        }

        // Validate address, city, country, and postal code
        if (!addressInput.value || !cityInput.value || !countryInput.value || !postalCodeInput.value) {
            isValid = false;
            if (!addressInput.value) {
                addressInput.style.border = '2px solid red'; 
                cityInput.style.border = '2px solid red';
                countryInput.style.border = '2px solid red'; 
                postalCodeInput.style.border = '2px solid red'; 
            }
            if (!cityInput.value) {
                addressInput.style.border = '2px solid red'; 
                cityInput.style.border = '2px solid red';
                countryInput.style.border = '2px solid red'; 
                postalCodeInput.style.border = '2px solid red'; 
            }
            if (!countryInput.value) {
                addressInput.style.border = '2px solid red'; 
                cityInput.style.border = '2px solid red';
                countryInput.style.border = '2px solid red'; 
                postalCodeInput.style.border = '2px solid red'; 
            }
            if (!postalCodeInput.value) {
                addressInput.style.border = '2px solid red'; 
                cityInput.style.border = '2px solid red';
                countryInput.style.border = '2px solid red'; 
                postalCodeInput.style.border = '2px solid red'; 
            }
        } else {
            // Additional validation for postal code using regex
            const postalCodeRegex = /^[0-9]+$/; // Adjust regex based on your postal code format
            if (!postalCodeRegex.test(postalCodeInput.value.trim())) {
                postalCodeInput.style.border = '2px solid red';
                isValid = false;
            } else {
                postalCodeInput.style.border = ''; // Clear error border if valid
            }
        }

        // If all basic validations pass, proceed to geolocation validation
        if (isValid) {
            validateGeolocation(addressInput.value, cityInput.value, countryInput.value, postalCodeInput.value);
        }
    });

    // Geolocation validation using OpenCage Geocoding API
    function validateGeolocation(address, city, country, postalCode) {
        const query = `${address}, ${city}, ${postalCode}, ${country}`;

        // API request to OpenCage
        const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${API_KEY}`;

        const addressInput = document.getElementById('address');
        const cityInput = document.getElementById('city');
        const countryInput = document.getElementById('country');
        const postalCodeInput = document.getElementById('postal-code');

        fetch(geocodeUrl)
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); // Log the API response for debugging
                if (data && data.results && data.results.length > 0) {
                    const result = data.results[0];
                    const components = result.components || {}; // Fallback to an empty object if undefined

                    let validCountry = false;
                    let validCity = false;
                    let validPostalCode = false;

                    // Check if entered country matches the API result
                    if (components.country && components.country.toLowerCase() === country.toLowerCase()) {
                        validCountry = true;
                    }

                    // Check for valid city by checking various possible keys in components
                    const cityKeys = ['city', 'town', 'village', 'locality', 'administrative_area']; // Broader matching
                    validCity = cityKeys.some(key => {
                        return components[key] && components[key].toLowerCase() === city.toLowerCase();
                    });

                    // Check if entered postal code matches the API result
                    if (components.postcode && components.postcode === postalCode) {
                        validPostalCode = true;
                    }

                    // Log validation results
                    console.log("Validation Results:", {
                        validCountry,
                        validCity,
                        validPostalCode,
                    });

                    // If all checks pass, proceed to order confirmation
                    if (validCountry && validCity && validPostalCode) {
                        orderConfirmation.style.display = 'block';
                        basketContainer.innerHTML = '';  
                        updateShoppingBagQuantity();
                        updateBasketDisplay();
                        orderForm.style.display = 'none'; 
                        checkoutOrderSummaryBox.style.display = 'none'; 
                        emptyBasket.style.display = 'none';
                        yourBasket.style.display = 'none';
                    } else {
                        // Highlight invalid fields based on geocoding validation results
                        if (!validCountry) {
                            countryInput.style.border = '2px solid red';
                            cityInput.style.border = '2px solid red';
                            postalCodeInput.style.border = '2px solid red';
                        }
                        if (!validCity) {
                            cityInput.style.border = '2px solid red';
                            postalCodeInput.style.border = '2px solid red';
                        }
                        if (!validPostalCode) {
                            postalCodeInput.style.border = '2px solid red';
                            countryInput.style.border = '2px solid red';
                            cityInput.style.border = '2px solid red';
                        }
                    }
                } else {
                    // Address is invalid
                    addressInput.style.border = '2px solid red';
                    cityInput.style.border = '2px solid red';
                    countryInput.style.border = '2px solid red';
                    postalCodeInput.style.border = '2px solid red';
                }
            })

            .catch(error => {
                console.error('Error:', error);
            });
    }


    // Close confirmation message
    closeConfirmationButton.addEventListener('click', function () {
        orderConfirmation.style.display = 'none'; 
        orderForm.style.display = 'none'; 
        checkoutOrderSummaryBox.style.display = 'none'; 
        returnToBasket.style.display = 'none';
        yourBasket.style.display = 'none';
        basketContent.style.display = 'none';
        shoppingBagQuantity.style.display = 'none';
        emptyBasket.style.display = 'block';
    });
});


const totalElement = document.querySelector('.total');

emptyBasket.style.display = 'none';
    
    
// Function to update the basket display
function updateBasketDisplay() {
    const basketContainer = document.querySelector('.items-picked');

    if (basketContainer.childElementCount === 0) {
        emptyBasket.style.display = 'block';
        checkoutOrderSummaryBox.style.display = 'none';
        proceedToCheckoutButton.style.display = 'none';
        rowsBasket.style.display = 'none';
        yourBasket.style.display = 'none';
    } else {
        emptyBasket.style.display = 'none';
        checkoutOrderSummaryBox.style.display = 'block';
        proceedToCheckoutButton.style.display = 'block';
        rowsBasket.style.display = 'block';
        yourBasket.style.display = 'block';
        basketDetails.style.display = 'block';
        basketContent.style.display = 'block';
    }

}

function updateShoppingBagDisplay() {
    const shoppingBagQuantity = document.querySelector('.shopping-bag-quantity');
    const quantity = parseInt(shoppingBagQuantity.textContent, 10); // get the current quantity value
    
    if (quantity === 0) {
        shoppingBagQuantity.style.display = 'none';
    } else if (quantity >= 1) {
        shoppingBagQuantity.style.display = 'block';
    }
}

// Call the function to check the shopping bag quantity initially
document.addEventListener('DOMContentLoaded', updateShoppingBagDisplay);


/*###################### favorite-content ######################*/

document.addEventListener("DOMContentLoaded", function() {
    const favoriteContent = document.querySelector('.favorite-content');
    const favoritesPicked = document.querySelector('.favorites-picked');
    const favoriteIcon = document.querySelector('.favorite');
    const favoriteItems = document.querySelectorAll('.favorite-item');
    const favoriteQuantity = document.querySelector('.favorite-quantity');
    const basketContainer = document.querySelector('.items-picked');
    const shoppingBagQuantity = document.querySelector('.shopping-bag-quantity');
    const subtotalElement = document.querySelector('.checkout-order-summary-box .subtotal');
    const totalElement = document.querySelector('.checkout-order-summary-box .total');
    const numberOfFavoriteProducts = document.querySelector('.number-of-favorite-products');


    favoriteIcon.addEventListener('click', function() {

        var sideMenuDefault = document.querySelector(".side-menu-default");
        var arrowLeftMenu = document.getElementById("arrow-left-menu");
        var arrowLeftComponents = document.getElementById("arrow-left-components");
        var arrowComponents = document.getElementById('arrow-components');
   
        var sideMenuDefault = document.querySelector(".side-menu-default");
        var sideNavbarComponents = document.querySelector(".side-navbar-components");
        var sideNavbarPeripherals = document.querySelector(".side-navbar-peripherals");
        var sideNavbarGaming = document.querySelector(".side-navbar-gaming");

        var sideNavbarProcessorsList = document.querySelector(".side-navbar-processors-list");
        var sideNavbarMotherboardsList = document.querySelector(".side-navbar-motherboards-list");
        var sideNavbarGraphicCardsList = document.querySelector(".side-navbar-graphic-cards-list");
        var sideNavbarRamList = document.querySelector(".side-navbar-ram-list");
        var sideNavbarDataStorageList = document.querySelector(".side-navbar-data-storage-list");
        var sideNavbarFansAndCoolersList = document.querySelector(".side-navbar-fans-and-coolers-list");
        var sideNavbarCasesAndPowerSupplyList = document.querySelector(".side-navbar-cases-and-power-supply-list");

        arrowLeftMenu.style.display = 'none';
        arrowLeftComponents.style.display = 'none';
        arrowComponents.style.display = 'none';
  
        sideNavbarComponents.style.display = 'none';
        sideNavbarPeripherals.style.display = 'none';
        sideNavbarGaming.style.display = 'none';
        sideNavbarProcessorsList.style.display = 'none';
        sideNavbarMotherboardsList.style.display = 'none';
        sideNavbarGraphicCardsList.style.display = 'none';
        sideNavbarRamList.style.display = 'none';
        sideNavbarDataStorageList.style.display = 'none';
        sideNavbarFansAndCoolersList.style.display = 'none';
        sideNavbarCasesAndPowerSupplyList.style.display = 'none';
        sideMenuDefault.style.display = 'block';

        favoriteContent.style.display = 'flex';
        favoritesPicked.style.display = 'flex';

        topHeaderSearch.style.display = 'none';
        topHeaderSearchMobile.style.display = 'none';
        componentsItems.style.display = 'none';
        peripheralsItems.style.display = 'none';
        gamingItems.style.display = 'none';
        filter.style.display = 'none';
        filterPeripherals.style.display = 'none';
        filterGaming.style.display = 'none';
        sortbyComponents.style.display = 'none';
        sortByPeripherals.style.display = 'none';
        sortByGaming.style.display = 'none';
        searchResultMessage.style.display = 'none';
        
        basketContent.style.display = 'none';
        emptyBasket.style.display = 'none';

        if (favoriteQuantity.style.display === 'block') {
            emptyWishlist.style.display = 'none';
            numberOfFavoriteProducts.style.display = 'block';
        }else {
            emptyWishlist.style.display = 'block';
            favoriteContent.style.display = 'none';
            numberOfFavoriteProducts.style.display = 'none';
        }

    });

    // Toggle favorite and add/remove product from favorite-content
    favoriteItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('red');

            if (this.classList.contains('red')) {
                addProductToFavorites(this);
            } else {
                removeProductFromFavorites(this);
            }
        });
    });


    favoritesPicked.addEventListener('click', function(event) {
        if (event.target.classList.contains('favorite-item')) {
            // Remove clicked favorite-product
            const favoriteProduct = event.target.closest('.favorite-product');
    
            // Ensure favoriteProduct exists and is a child of favoritesPicked
            if (favoriteProduct && favoritesPicked.contains(favoriteProduct)) {
                favoriteProduct.remove();
            }

            // Restore color of the original item
            if (favoriteProduct.originalFavoriteItem) {
                favoriteProduct.originalFavoriteItem.classList.remove('red');
            }
    
            // Optionally, hide the favorites container if it becomes empty
            if (favoritesPicked.children.length === 0) {
                favoritesPicked.style.display = 'none';
                emptyWishlist.style.display = 'block';
            } else {
                emptyWishlist.style.display = 'none';
            }
            updateFavoriteQuantity();
        }
    });


    function addProductToFavorites(favoriteItem) {
        // Select the correct product container
        const product = favoriteItem.closest('.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m,' +
            '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-corsair, .ram-crucial, .ram-gskill, .ram-kingston,' + 
            '.data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, .fans-and-coolers-coolers, .fans-and-coolers-wCooling,' +
            '.cases-and-power-supply-cases, .cases-and-power-supply-power-supply,' +
            '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams,' + 
            '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment');

        if (!product) {
            console.error('Product not found.');
            return;
        }

        // Extract product details
        const productImage = product.querySelector('img').src;
        const productTitle = product.querySelector('.description h4').innerText;
        const productDetails = product.querySelector('.description p').innerText;
        const productPrice = parseFloat(product.querySelector('.price h3').innerText.replace('€', '').trim());

        const formattedProductDetails = productDetails
            .split('-').filter(detail => detail.trim() !== '').map(detail => `- ${detail.trim()}`).join('<br>');

        // Create a container for the favorite product
        const favoriteProduct = document.createElement('div');
        favoriteProduct.classList.add('favorite-product');
    
        // Store a reference to the original favorite-item on the favoriteProduct
        favoriteProduct.originalFavoriteItem = favoriteItem; // Store the reference
        favoriteProduct.dataset.id = product.dataset.id; // Ensure this matches the data-id of the original product

        favoriteProduct.innerHTML = `
            <img src="${productImage}" alt="Product Image">
            <div class="description">
                <h4>${productTitle}</h4>
                <p>${formattedProductDetails}</p>
            </div>
            <div class="price-favorite-checked">
                <div class="price">
                    <h3>${productPrice.toFixed(2).replace('.', ',')} €</h3>
                </div>
                <div class="favorite-checked">
                    <span class="favorite-item material-symbols-outlined" id="favorite-item">favorite</span>
                </div>
            </div>
            <div class="items-quantity-basket">
                <div class="items-quantity">
                    <span class="minus">-</span>
                    <span class="number">1</span>
                    <span class="plus">+</span>
                </div>
                <div class="basket">
                    <button class="add-to-basket">ADD TO BASKET</button>
                </div>
            </div>
        `;

        // Add to favorites
        favoritesPicked.appendChild(favoriteProduct);
        updateFavoriteQuantity();

        // Ensure flex-wrap behavior for 3 items per row
        favoriteProduct.style.flex = '1 1 calc(33.33% - 20px)'; // Each product takes up about one third, minus margin
        favoriteProduct.style.boxSizing = 'border-box'; // Ensure padding/margins are accounted for

        if (window.innerWidth <= 1200) {
            favoriteProduct.style.flex = '1 1 calc(50% - 20px)';
        }
        if (window.innerWidth >= 1200) {
            favoriteProduct.style.flex = '1 1 calc(50% - 20px)';
        }

        // Handle quantity increment/decrement for favorite products
        setupQuantityHandlers(favoriteProduct);

        // Add event listener for adding to basket
        setupAddToBasketFromFavorites(favoriteProduct);

    }

    function setupQuantityHandlers(favoriteProduct) {
        const plusButton = favoriteProduct.querySelector(".plus");
        const minusButton = favoriteProduct.querySelector(".minus");
        const numberDisplay = favoriteProduct.querySelector(".number");

        // Initialize counter
        let currentValue = 1; 
        numberDisplay.innerText = currentValue;

        plusButton.addEventListener("click", () => {
            currentValue++;
            numberDisplay.innerText = currentValue;
            console.log(currentValue);
        });

        minusButton.addEventListener("click", () => {
            if (currentValue > 1) {
                currentValue--;
                numberDisplay.innerText = currentValue;
                console.log(currentValue);
            }
        });
    }


    function setupAddToBasketFromFavorites(favoriteProduct) {
        const addToBasketButton = favoriteProduct.querySelector('.add-to-basket');
    
        addToBasketButton.addEventListener('click', function() {
            const productTitle = favoriteProduct.querySelector('.description h4').textContent;
            const productImage = favoriteProduct.querySelector('img').src;
            const productPrice = parseFloat(favoriteProduct.querySelector('.price h3').textContent.replace('€', '').trim());
            const productQuantity = parseInt(favoriteProduct.querySelector('.number').textContent) || 1;
            const productId = favoriteProduct.dataset.id; // Get unique ID from data attribute
    
            // Check if the item already exists in the basket
            let existingProduct = Array.from(basketContainer.children).find(item => 
                item.dataset.id === productId // Use data-id for comparison
            );
    
            if (existingProduct) {
                // If the product already exists, update the quantity
                let quantityElement = existingProduct.querySelector('.number');
                let currentQuantity = parseInt(quantityElement.textContent);
                let newQuantity = currentQuantity + productQuantity; // Correctly add the quantities
    
                // Update the quantity
                quantityElement.textContent = `${newQuantity}`;
    
                // Update the price based on the new quantity
                let priceElement = existingProduct.querySelector('.price');
                let updatedPrice = productPrice * newQuantity;  // Multiply the price by the new quantity
                priceElement.textContent = `${updatedPrice.toFixed(2).replace('.', ',')} €`; // Format the price
            } else {
                // If the product does not exist, add it to the basket
                const basketItem = document.createElement('div');
                basketItem.className = "basket-item";
                basketItem.dataset.id = productId; // Set the unique identifier for the basket item
                
                // Set the inner content of the basket item (image, name, price, quantity)
                basketItem.innerHTML = `
                    <img src="${productImage}" alt="${productTitle}">
                    <h4>${productTitle}</h4>
                    <div class="items-quantity">
                        <span class="minus">-</span>
                        <span class="number">${productQuantity}</span>
                        <span class="plus">+</span>
                    </div>
                    <div class="price">${(productPrice * productQuantity).toFixed(2).replace('.', ',')} €</div>
                    <span class="delete-item material-symbols-outlined">delete</span>
                `;
    
                // Append the new item to the basket
                basketContainer.appendChild(basketItem);
    
                // Add event listeners for plus and minus buttons
                setupPlusMinus(basketItem, productPrice);
                setupDeleteButton(basketItem);
            }
    
            // Update the shopping bag quantity
            updateShoppingBagQuantity();
            updateShoppingBagDisplay();
        });
    }


    function setupPlusMinus(basketItem, productPrice) {
        const minusButton = basketItem.querySelector('.minus');
        const plusButton = basketItem.querySelector('.plus');
        const quantityElement = basketItem.querySelector('.number');
        const priceElement = basketItem.querySelector('.price');
        
        minusButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityElement.textContent);
        
            // Decrease quantity but ensure it doesn't go below 1
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityElement.textContent = currentQuantity;
                priceElement.textContent = `${(productPrice * currentQuantity).toFixed(2).replace('.', ',')} €`;
        
                updateShoppingBagQuantity();
            }
        });
        
        plusButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityElement.textContent);
            currentQuantity++;
            quantityElement.textContent = currentQuantity;
            priceElement.textContent = `${(productPrice * currentQuantity).toFixed(2).replace('.', ',')} €`;
        
            updateShoppingBagQuantity();
        });
    }

    // Function to handle delete button logic
    function setupDeleteButton(basketItem) {
        const deleteButton = basketItem.querySelector('.delete-item');

        deleteButton.addEventListener('click', function() {
            basketItem.remove();  // Remove the item from the DOM

            // Update the shopping bag quantity
            updateShoppingBagQuantity();
            updateShoppingBagDisplay();
            updateBasketDisplay();
        });
    }


    function updateShoppingBagQuantity() {
        const totalItems = basketContainer.querySelectorAll('.basket-item').length;

        let totalPrice = 0;

        basketContainer.querySelectorAll('.basket-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.number').textContent);
            const priceElement = item.querySelector('.price');
            const price = parseFloat(priceElement.textContent.replace('€', '').trim());

            totalPrice += price;  // Add the price for each unique item
        });

        shoppingBagQuantity.textContent = totalItems;

        subtotalElement.textContent = `Subtotal (${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;

        // Update the total price with ',' and ',00' formatting
        totalElement.textContent = `TOTAL: ${totalPrice.toFixed(2).replace('.', ',')} €`;
    }

    // Event listener for "Remove All" button
    document.querySelector('.remove-all-button').addEventListener('click', function() {
        // Remove all items in the basket
        basketContainer.querySelectorAll('.basket-item').forEach(item => item.remove());
            
        // Update the shopping bag quantity and visibility of elements
        updateShoppingBagQuantity();
        updateShoppingBagDisplay();
        updateBasketDisplay();
    });


    // Remove product from favorite-content
    function removeProductFromFavorites(favoriteItem) {
        const product = favoriteItem.closest('.processor-intel, .processor-amd, .motherboard-asrock-m, .motherboard-asus-m, .motherboard-gigabyte-m,' +
            '.graphic-card-asrock-g, .graphic-card-asus-g, .graphic-card-gigabyte-g, .ram-corsair, .ram-crucial, .ram-gskill, .ram-kingston,' + 
            '.data-storage-ssd, .data-storage-hdd, .data-storage-external-hdd, .fans-and-coolers-fans, .fans-and-coolers-coolers, .fans-and-coolers-wCooling,' +
            '.cases-and-power-supply-cases, .cases-and-power-supply-power-supply,' +
            '.monitors, .keyboards, .mice, .headsets, .speakers, .microphones, .webcams,' + 
            '.ps5, .nintendo-switch, .gaming-chairs, .gaming-desks, .gaming-driving-equipment');
        const productTitle = product.querySelector('h4').innerText;

        // Find and remove the corresponding product from favorite-content
        const favoriteProducts = favoritesPicked.querySelectorAll('.favorite-product');
        favoriteProducts.forEach(favProduct => {
            if (favProduct.querySelector('h4').innerText === productTitle) {
                favoritesPicked.removeChild(favProduct);
            }
        });

        // Hide favorite-content if empty
        if (favoritesPicked.children.length === 0) {
            favoritesPicked.style.display = 'none';
        }
        updateFavoriteQuantity();
    }


    // Update the quantity of favorite items
    function updateFavoriteQuantity() {
        const favoriteItemsCount = favoritesPicked.querySelectorAll('.favorite-product').length;

        if (favoriteItemsCount > 0) {
            favoriteQuantity.textContent = favoriteItemsCount;
            favoriteQuantity.style.display = 'block'; // Show when quantity is 1 or more
            numberOfFavoriteProducts.textContent = `${favoriteItemsCount} ${favoriteItemsCount === 1 ? 'item' : 'items'} in wishlist`;
        } else {
            favoriteQuantity.style.display = 'none'; // Hide when quantity is 0
        }

        // Hide the favorite-content if there are no items
        if (favoriteItemsCount === 0) {
            favoriteContent.style.display = 'none';
        }
    }

    // Initial update of favorite quantity on page load
    updateFavoriteQuantity();


    document.addEventListener("DOMContentLoaded", function() {
        // Get the elements
        const favorite = document.querySelector('.favorite');
        const emptyWishlist = document.querySelector('.empty-wishlist');
        const favoriteContent = document.querySelector('.favorite-content');
    
        emptyWishlist.style.display = 'none';
        
        // Function to show or hide the "empty-bag" and "basket-content"
        function updateWishlistDisplay() {
            const favoriteQuantity = document.querySelector('.favorite-quantity').textContent;
    
            if (favoriteQuantity == 0) {
                emptyWishlist.style.display = 'block';
                favoriteContent.style.display = 'none';
            } else {
                emptyWishlist.style.display = 'none';
                favoriteContent.style.display = 'flex';
            }
        }
    
        // Add click event listener to the shopping bag icon
        favorite.addEventListener('click', updateWishlistDisplay);
    });
    
});


/*###################### open the link by clicking on image ######################*/

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.components-items img, .peripherals-items img, .gaming-items img').forEach(image => {
        image.addEventListener('click', function () {
            const link = this.closest('div').querySelector('a')?.href;
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});