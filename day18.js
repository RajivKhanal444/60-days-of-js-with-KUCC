// local storage
localStorage.setItem('name', 'bob')
console.log(localStorage.getItem('name'))


// session storage
sessionStorage.setItem('name', 'Jonny')
console.log(sessionStorage.getItem('name'))
// updating
sessionStorage.setItem('name', 'kali')
console.log(sessionStorage.getItem('name'))


// cookies
document.cookie='name=jonas; expires='+new Date(2024, 5,19).toUTCString()
// adding cookie
document.cookie='position=working'
console.log(document.cookie)