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

const list = document.getElementById('navbar__list');
const items = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

items.forEach(element => {
    // console.log('item', element)
    //     const item=document.createElement('li');
    //    item.textContent=`${element.dataset.nav}`
    const item = `<li class='menu__link ${element.className}' data-set=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`;
    list.insertAdjacentHTML('beforeend', item)
});


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
list.addEventListener('click', e => {
    e.preventDefault();
    const par = e.target.hasAttribute('data-set') ? e.target : e.target.parentElement;
    // par.classList.toggle('active')
    const toScroll=document.getElementById(par.dataset.set);
    console.log('parent datat',toScroll);
    toScroll.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})



items.forEach(section=>{
    section.addEventListener('mouseover', e => {
        // console.log('e',e)
        e.preventDefault();

        // const ul=document.querySelectorAll('.menu__link');
        // ul.forEach(li=>{
        //     if(li.classList.contains('active'))
        //     {list.classList.remove('active')
        // console.log('li',ul)}
        // })
        const par = e.target.hasAttribute('section') ?e.target:e.target.parentElement;
        // par.classList.toggle('active')
        const li=document.querySelector(`.menu__link[data-set='${section.id}']`)
        console.log('parent datat',par);
        // console.log('liiiii',li)
        section.classList.add('active');
        li.classList.add('active')

        setTimeout(()=>{
            section.classList.remove('active');
            li.classList.remove('active')
        },1000)
       
    
    })
})





/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// let options = {
//     root:null,
//     rootMargin: '0px',
//     threshold: 1.0
// }

// const obs=new IntersectionObserver(callback,option)