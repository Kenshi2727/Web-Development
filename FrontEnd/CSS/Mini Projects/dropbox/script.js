const dropdowns= document.querySelectorAll('.dropdown');
 
//looping through all the dropdown elements
dropdowns.forEach(dropdown=>{
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelector('.menu li');
    const selected=dropdown.querySelector('.selected');


/*we are using this method so that we can have multiple dropdowns on the page work */
select.addEventListener('click',()=>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

//loop through all option elements
options.forEach(option=>{
    //add a clcik event to the option element
    option.addEventListener('click',()=>{
        //change selected inner text to clicked option inner text
        selected.innerText=option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        
        //remove active classes from all option elements
        options.forEach(option=>{
            option.classList.remove('active');
        });
        //add active class to clicked option element
        option.classList.add('active');
    });
});

});
