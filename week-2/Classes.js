class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4 , "blue")
 const area = rect.area();
 console.log(area);

 /* The code defines an object named `person` with properties `firstName`, `lastName`, and `id`. It
 also has a method `getFullName` that returns the concatenation of the `firstName` and `lastName`
 properties of the object. However, there is a mistake in the method where it tries to access
 `this.name` instead of `this.firstName`. The correct code should be: */
//  const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   getFullName : function() {
//     return this.name + ' ' + this.lastName;
//   }
// };

// console.log('this in object method', person.getFullName());


// const user = {
//   name : "Priyanshu",
//   f(){
//     console.log(2*2);
//   }
// }

// console.log(user['f']());