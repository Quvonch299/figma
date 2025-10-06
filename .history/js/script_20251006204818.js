let list = document.querySelector('.list')
let menuBtn = document.querySelector('.menuBtn')

menuBtn, addEventListener('mouseout', () => {
    list.classList.toggle('max-sm:hidden')
    console.log(1);

})