const menuOpen= $('#menu-open');
const menuClose=$ ('#menu-close');
const sidebar= $('.sidebar');

menuOpen.click(()=>sidebar.css('left','0'));

menuClose.click(()=>sidebar.css('left','-100%'));

