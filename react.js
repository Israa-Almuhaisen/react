// -----------------------------------------classes----------------------------------------------
// class Person{
//       constructor(firstName,lastName,age){
//              this.firstName=firstName,
//              this.lastName=lastName,
//              this.age=age
      
//          }
//          getGreeting(){
//              return `"Hi, I'm ${this.firstName} ${this.lastName}  and I'm ${this.age} years old." `;
//          }
       
//      }
//       const Person1 = new Person("israa", "almuhaisen",30 );
//      console.log(Person1.getGreeting());
    //  _____________________________________

    // class Car{
    //         constructor(make,model,min,max,year){
    //             this.make=make, 
    //             this.model=model,
    //             this.cost=this.carCost(min,max),
    //             this.age=this.carAge(year)

        
    //         }

    //         getDescription(){
    //             return `A ${this.age} ${this.make}  ${this.model} and my cost ${this.cost}`
    //         }
    //         carCost(min,max){
    //             return Math.floor(Math.random() * (max - min + 1) + min);
    //         }

    //         carAge(year){
    //             return 2023-year;
    //         }
        
    //     }
    //     const car1= new Car("toyota", "camry",6000,10000, 2010);
    //         console.log(car1.getDescription());

// --------------------------------------------Arrow Function-----------------------------------------
const output = (1 < 2) ? 
  (() => { for (let index = 0; index < 5; index++) { console.log("hi"); } })() 
  : console.log("bye");
// ------------------- Array Method ----------------------------------------------

// Square and sum the elements of this array using arrow functions and in 1 line of code. Then find the average of the array.
// let nums = [2, 4, 5];

// const average = nums.map(num => num * num).reduce((a, b) => a + b) / nums.length;
// console.log(average);
// ______________________________________task2___________________

   Use the map() function with arrow notation => to multiply each by 10 and return the result number of following array.
// let list=[1,2,3,4,5,6,7,8];
// const result = list.map(num => num * 10);
// console.log(result);
// _____________________________________________________________________________________


