// event listener
// basic
// const button = document.querySelector(.button);
// function alertButton(){
//     alert('hello World')
// }
// button.addEventListener("click",alertButton)

const grandparent= document.querySelector(".grandparent")
const parent = document.querySelector('.parent')
const child =document.querySelector('.child')

grandparent.addEventListener("click",e=>{
    console.log('grandfather 2')
})
grandparent.addEventListener("click",e=>{
    console.log('parent 2')
})
grandparent.addEventListener("click",e=>{
    console.log('child 2')
})


document.addEventListener("click", e=>{
    console.log("Document 1")
})

// event bubbling
grandparent.addEventListener("click",e=>{
    console.log('grandfather 3')
    // stop propagation
    // e.stopPropagation()
})

// capture
grandparent.addEventListener("click",e=>{
    console.log('grandfather 4')
}, {capture:true},
//run only once
{once:true})


// remove event listener
// parent.removeEventListener('click', /*function name*/)

