// styling an element
const title= document.querySelector('main-heading')
title.style.color = 'red' //inline styling in js



// creating an elements
const ul = document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)



// event listeners
// element.addeventlistener("click", function);
const button = document.querySelector(.button);
function alertButton(){
    alert('hello World')
}
button.addEventListener("click",alertButton)
// mouse over



// modifying text
// const first = document.querySelector('list-Items')



// event deligation
document.querySelector('#list').addEventListener('click',function(e){
    console.log('list 1 is clicked')
    const tar = e.tar;
    if (tar.matches('li')){
        tar.style.backgroundColor='white'
    }
})
