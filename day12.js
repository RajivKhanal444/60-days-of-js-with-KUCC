// prototye
let a ={
    name:"Oggy",
    language:"Nepali"
}



console.log(a)


let p={
    return:alert("run")
}


// for the prototypic connection between a and p

a.__proto__=p
a.return

// for prototype of p

p.__proto__={
    name2:"jack"
}


console.log(a.name2)


// inheritance

// method 1 of making inheritance

const o={
    a:1,
    b:2,
    __proto__:{
    c:3,
    d:4
    }
}
console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

// method 2 of making inheritance


const par={
    value:2,
    method(){return this.value+1;}
}

console.log(par.value)

const child={
    __proto__:par
}

console.log(child.method())

child.value=4;
console.log(child.method());