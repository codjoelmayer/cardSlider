let slider = document.querySelector('.slider')
let firstChildWidth = document.querySelector('.slider :first-child')
let prevItem = document.querySelector('[prevItem]')
let nextItem = document.querySelector('[nextItem]')
prevItem.addEventListener('click', () => {
    slider.scrollLeft -= firstChildWidth.offsetWidth
})
nextItem.addEventListener('click', () => {
    slider.scrollLeft += firstChildWidth.offsetWidth + 2
})