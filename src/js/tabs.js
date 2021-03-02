var ratingsTabs = Array.prototype.slice.call(document.querySelectorAll('.js-ratings-tabs'));

  ratingsTabs.forEach(function(element) {
    var links = Array.prototype.slice.call(element.querySelectorAll('.company-ratings__tabs-nav-link'));
    var items = Array.prototype.slice.call(element.querySelectorAll('.company-ratings__tabs-item'));

    if (links.length !== items.length) {
      console.error('Not equal amount of elements');
      return;
    }

    function setActiveTab(index) {
      links.forEach(function(link) {
        link.classList.remove('active');
      })
      items.forEach(function(item) {
        item.classList.remove('active');
      })

      links[index].classList.add('active');
      items[index].classList.add('active');
    }

    links.forEach(function(link, linkIndex) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveTab(linkIndex)
      })
    })

    setActiveTab(0);
  })































// // Таб на страницах продукции банка

// const tabsBtn = document.querySelectorAll(".js-tabs-link");
// const tabsItems = document.querySelectorAll(".js-tabs-item");
// const tabsBtnSection = document.querySelectorAll(".js-tabs-section-link");
// const tabsSection = document.querySelectorAll(".js-tabs-section");















// tabsBtn.forEach(function(item) {
//     item.addEventListener("click", function() {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId);
//             if( ! currentBtn.classList.contains('sidebar-nav__link--active')) {
//                 tabsBtn.forEach(function(item) {
//                     item.classList.remove('sidebar-nav__link--active');
//                     });
//                 tabsItems.forEach(function(item) {
//                     item.classList.remove('js-tabs-item--active');
//                     });
//                 currentBtn.classList.add('sidebar-nav__link--active');
//                 currentTab.classList.add('js-tabs-item--active');
//                 }
//     });
// });



// tabsBtnSection.forEach(function(BtnItem) {
//     BtnItem.addEventListener('click', function() {
//         let currentBtn = BtnItem;
//         let tabId = currentBtn.getAttribute('data-tab');
//         let currentTab = document.querySelector(tabId);
//         let tabsItem = document.querySelector('.js-tabs-item');
//         if (!currentBtn.classList.contains('sidebar-nav__link--active')) {
//             document.querySelector('.js-tabs-section--active').querySelector('.js-tabs-item:first-child').classList.add('js-tabs-item--active');
//             tabsBtnSection.forEach(function(section) {
//                 section.classList.remove('sidebar-nav__link--active');
//             });
//             tabsSection.forEach(function(section) {
//                 section.classList.remove('js-tabs-section--active');
//             });
//             currentBtn.classList.add('sidebar-nav__link--active');
//             currentTab.classList.add('js-tabs-section--active');
//             // tabsItem.classList.add('js-tabs-item--active');
//         }
//     });
// });






// // Таб меняют картинку на странице "Настройка"
const tabsLink = document.querySelectorAll(".sidebar-item");
const tabsBg = document.querySelectorAll(".sidebar-img");

tabsLink.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBg = item;
        let tabIdBg = currentBg.getAttribute("data-tab");
        let currentTab = document.querySelector(tabIdBg);

        if( ! currentBg.classList.contains('sidebar-item--active')) {
            tabsLink.forEach(function(item) {
                item.classList.remove('sidebar-item--active');
            });
            tabsBg.forEach(function(item) {
                item.classList.remove('sidebar-img--active');
            });
    
            currentBg.classList.add('sidebar-item--active');
            currentTab.classList.add('sidebar-img--active');
        }

        
    });
});