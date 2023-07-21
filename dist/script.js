const menu = document.querySelector('.toggle__menu');
const nav = document.querySelector('.header__nav');
const malabo = document.querySelector(".blurry");

menu.addEventListener('click',() => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
    nav.style=("z-index:999");
    nav.style=("transition:.5s ease");
    malabo.classList.toggle("show");
});


/*TABS*/
const tabs = document.querySelectorAll('.tab__nav');
const allcontext = document.querySelectorAll('.tabs__context');

tabs.forEach((tab)=>{
    tab.addEventListener('click',() =>{
        removeActiveTab();
        tab.classList.add("active");
        const activeContent =document.querySelector(`#${tab.id}-content`);
        removeActiveContent();
        activeContent.classList.add('active');
        

    })

 
});

function removeActiveTab(){
    tabs.forEach((tab)=>{
        tab.classList.remove('active');
    })
}

function removeActiveContent(){
    allcontext.forEach((tab)=>{
        tab.classList.remove("active");
    })
}


/*ACCORDION*/

const faqs=document.querySelectorAll(".accordion");

faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    })


});
