const btnNav = document.querySelector('.menu-button');
const nav = document.querySelector('.header-options');
const btnNavClosed = document.querySelector('.menu-button-closed')

btnNav.addEventListener('click', () => {
    btnNav.style.display = "none";
    nav.style.left = '0';
});


btnNavClosed.addEventListener('click', () => {
    btnNav.style.display = "revert";
    nav.style.left = '-100%'
});








// 


const cate = document.querySelector('.categories');
const subCate = document.querySelector('.categories-sub');
const cateArrow = document.querySelector('#arrow');

cate.addEventListener('click', () => {
    subCate.classList.toggle('active');
    cateArrow.classList.toggle('arrow-active')
    cate.classList.toggle('active2')
});

const cate2 = document.querySelector('.categories2');
const subCate2 = document.querySelector('.categories-sub2');
const cateArrow2 = document.querySelector('#arrow2');

cate2.addEventListener('click', () => {
    subCate2.classList.toggle('active');
    cateArrow2.classList.toggle('arrow-active')
    cate2.classList.toggle('active2-2')
});