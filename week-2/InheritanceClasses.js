//extends keyword is used for Inheritance  


class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}km/h`);
    }
    eat(){
      
        console.log(`${this.name} is eating`);
    }
}

let animal = new Animal("Tiger");
// animal.run(50);
// animal.eat();

class Mouse extends Animal{
    hide(){
        console.log(`${this.name} is experet in hiding`);
    }

    eat(){
        super.eat()
        console.log("Child Task");
    }
}



let mouse = new Mouse("Jerry");

mouse.eat();
mouse.hide();
mouse.run(10)
