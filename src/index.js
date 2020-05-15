import {buildNavBar} from './nav-bar.js';
import {buildLandingPage} from './landing-page.js'
import {buildMenuPage} from './menu.js'
import { buildContactPage } from './contact.js';


buildNavBar();
buildLandingPage();


var navBtns = document.querySelectorAll('.nav-btn')

navBtns.forEach(btn => {
    btn.addEventListener('click', changeTab);
    
});

function changeTab(e){
    var content = document.querySelector("#content");
    content.innerHTML = "";
    var tab = e.target.id;
    var about = document.querySelector('.tab1');
    var menu = document.querySelector('.tab2');
    var contact = document.querySelector('.tab3');
    navBtns.forEach(btn => {
        btn.style.border = "none"
    });
    e.target.style.border = "solid"
    if(tab === 'contact'){
        buildContactPage();
    } else if(tab === 'menu-btn'){
        buildMenuPage();
    } else {
        buildLandingPage();
    }
    
}




