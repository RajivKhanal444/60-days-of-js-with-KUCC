// classes
// parent
class Product {
    constructor(name,price,code){//setup object
        this.name=name;
        this.price=price;
        this.code=code;
    }

    getItemName(){
        return this.itemName+" is a Product"
    }
}

let pencil=new Product('Pencil', 20, 'P2337')

console.log(pencil)


// extending class
// child
class Books extends Product{
    constructor(itemName){
        super(itemName);
    }
    getItemName(){
        return this.itemName+" is a Book"
    }
}

let physics = new Books('Physics', 900, 'Pce101')

console.log(physics)


// getter  & & setter

class animal{
        Constructer(nam){
        this._name=nam
    }
    fly (){
        alert("I am flying")
    }
    get nam(){
        return this._name
    }

    set nam (NewName){
        this._name=NewName
    }  
}
let bird = new animal("Eagle")
console.log(bird)
bird.nam="KingFisher"
console.log(bird.nam)



// static methods
class square{
    constructor(_width){
        this.width=_width
        this.height=_width
    }

    static equals (a,b){
        return a.width*a.height===b.width*b.height
    }

    static isValid(width,height){
        return width===height;
    }
}

let square1= new square(5)
let square2= new square(7)

console.log(square.isValid)
console.log(square.equals)


// polymerization


class fish {
    constructor(fis){
        this.fis=fis
    }

    habit(){
        console.log("swimming")
    }
}

class catfish extends fish{
    constructor(fis)
    {
        super(fis);        
    }
    

    habit(){
        console.log("eat fish")
    }
}
const a1= new fish("fish")
const a2=new catfish("catfish")
a1.habit()
a2.habit()
