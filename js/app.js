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
*/

//Bulid nav elements for menu 
items.forEach(element => {
    const item = `<li class='menu__link ${element.className}' data-set=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`;
    list.insertAdjacentHTML('beforeend', item)
});


// Scroll to section on link click by listening to event listner(click) in nav list
// edit the section class to 'your-active-class' if it's selected from the nav list
list.addEventListener('click', e => {

    items.forEach(se => {
        console.log('before', se)
        if (se.classList.contains('your-active-class')) {
            se.classList.remove('your-active-class');
            console.log('after', se)
        }
    });

    e.preventDefault();
    const par = e.target.hasAttribute('data-set') ? e.target : e.target.parentElement;
    const toScroll = document.getElementById(par.dataset.set);
    toScroll.classList.add('your-active-class');
    // setTimeout(()=>{
    //     toScroll.classList.remove('active');
    // },1000)
    console.log('parent datat', toScroll);
    toScroll.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})


//add eventlistener (sroll) to each section which make edit on the active section
// Also iterate through the nav list to edit the active one depend in the active (scrolled) section.
items.forEach(section => {
    section.addEventListener('mousemove', e => {
        // console.log('e',e)
        e.preventDefault();

        const ul = document.querySelectorAll('.menu__link');
        ul.forEach(li => {
            console.log('li', li)
            if (li.classList.contains('active')) {
                li.classList.remove('active')
                console.log('li after', li)
            }
        });

        items.forEach(se => {
            console.log('before', se)
            if (se.classList.contains('active')) {
                se.classList.remove('active');
                console.log('after', se)
            }
        });

        const par = e.target.hasAttribute('section') ? e.target : e.target.parentElement;
        const li = document.querySelector(`.menu__link[data-set='${section.id}']`)
        console.log('parent', par);
        section.classList.add('active');
        li.classList.add('active')

        // setTimeout(() => {
        //     section.classList.remove('active');
        //     li.classList.remove('active')
        // }, 1000)


    })
});




