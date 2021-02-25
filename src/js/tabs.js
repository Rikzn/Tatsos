// Таб на страницах продукции банка
const tabsBtn = document.querySelectorAll(".js-tabs-link");
const tabsItems = document.querySelectorAll(".js-tabs-item");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('sidebar-nav__link--active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('sidebar-nav__link--active');
            });
            tabsItems.forEach(function(item) {
                item.classList.remove('js-tabs-item--active');
            });
    
            currentBtn.classList.add('sidebar-nav__link--active');
            currentTab.classList.add('js-tabs-item--active');
        }

        
    });
});

// Переключение между счетами
const tabsBtnSection = document.querySelectorAll(".js-tabs-section-link");
const tabsSection = document.querySelectorAll(".js-tabs-section");

tabsBtnSection.forEach(function(section) {
    section.addEventListener("click", function() {
        let currentBtn = section;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('sidebar-nav__link--active')) {
            tabsBtnSection.forEach(function(section) {
                section.classList.remove('sidebar-nav__link--active');
            });
            tabsSection.forEach(function(section) {
                section.classList.remove('js-tabs-section--active');
            });
            currentBtn.classList.add('sidebar-nav__link--active');
            currentTab.classList.add('js-tabs-section--active');
        }

        
    });
});



// Таб меняют картинку на странице "Настройка"
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