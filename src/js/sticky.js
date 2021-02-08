// Фиксация сайдбара 

export default function sticky() {

    var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 0,
        bottomSpacing: 0,
        minWidth: 576
    });
  
} 