// Таб на странице "Открыт новый продукт"
const tabsBtn = document.querySelectorAll(".sidebar-nav__link");
const tabsItems = document.querySelectorAll(".open-a-new-product__wrapper");

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
                item.classList.remove('open-a-new-product__wrapper--active');
            });
    
            currentBtn.classList.add('sidebar-nav__link--active');
            currentTab.classList.add('open-a-new-product__wrapper--active');
        }

        
    });
});