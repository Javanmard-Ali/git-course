// let http = new EasyHTTP();

// http.get("http://jsonplaceholder.typicode.com/users");

/*const arr = [16, 18, 19, 12, 14];
const final = arr.length - 1;
for (let i = 0; i <= final; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}*/

/*arr.forEach(test);

function test(num) {
    if (num % 2 == 0) {
        console.log(num);
    }
}*/

/*
function averageNumber(num1, num2) {
    return (num1 + num2) / 2
}

function result(numberOne, numberTwo) {
    const avg = averageNumber(numberOne, numberTwo);
    const txt = `Your average is ${avg}`;
    return txt;
}

console.log(result(6, 14));
*/

/*
const colors = ["Red","Blue","Green"];
const result = colors.toString();
console.log(result);*/

/*const colors = ["Red","Blue","Green"];
const result = colors.join("-");
console.log(result);*/

/*
const colors = ["Red","Blue","Green"];
const result = colors.pop();
console.log(result);
console.log(colors);*/

/*
const colors = ["Red","Blue","Green"];
const result = colors.push("yellow","brown");
console.log(result);
console.log(colors);*/

/*const colors = ["Red","Blue","Green"];
const result = colors.shift();
console.log(result);*/

/*const colors = ["Red","Blue","Green"];
const result = colors.unshift("brown","lim");
console.log(result);
console.log(colors);*/

/*
const colors = ["Red","Blue","Green"];
delete colors[0];
console.log(colors);
*/

/*const colors = ["Red","Blue","Green"];
const mycolors = ["gold","silver"];
// const result = colors.splice(1,0,"lim","gold");
const result = colors.concat(mycolors);
console.log(result);
// console.log(colors);*/

/*const colors = ["Red","Blue","Green","gold","silver"];
const result = colors.slice(1,3);
console.log(result);*/

/*
const colors = ["Red","Blue","Green","Gold","Silver"];
const result = colors.sort();
console.log(result);*/

/*
for(let i=9;i>=1;i--){
    if (i % 5 == 0){
        break;
    }
    console.log(i);
}
*/

/*
for(let i=9;i>=1;i--){
    if (i % 5 == 0){
        continue;
    }
    console.log(i);
}
*/

/*
const nums = [1,2,3,5,8];

for (let num of nums){
    console.log(num);
}
*/

/*const nums = [1,2,3,5,8];

for (let num in nums){
    console.log(num);
}*/

/*
const obj ={
    name:"ali",
    family:"javanmard",
    age:23
}

for (let x in obj){
    console.log(obj[x]);
}
*/

//var firstname = "ali";
// console .log(this);
//const user = {
//firstName: "Ali",
//lastName: "Javanmard",
//testArrow: () => {
//console.log(this)
//},
//test: function () {
//console.log("from test function");
//console.log(this.firstName+" "+this.lastName);
//console.log(this);
//const self = this;
//function testInside(){
//console.log(self)
//}
//const testInside = () => {
//console.log(this);
//}
//testInside();

//}
//}
//user.testArrow()
//user.test()

/*let test = 12;
let   testCopy = test;
test = 20;

console.log(test);
console.log(testCopy);*/

/*const user = {
    name : "Ali",
    age : 22
}

/!*const userCopy =user;
userCopy.age = 28;

console.log(user.age);
console.log(userCopy.age);*!/

const userCopy = Object.assign({lastName:"Ahmadi"}.user)
console.log(userCopy)*/

/*const arr = [1,2,3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a,b,c);*/

/*let mySet1 = new set([1,2,3,4]);
let mySet2 = new set([3,4,5,6]);

function union(setA,setB){
    let setResult = new Set();
    for (let item of setA){
        setB.add(item);
    }
    setResult = setB;
    return setResult;

}

console.log(union(mySet1,mySet2));*/

/*const myMap = new Map();
myMap.set("id",23);
myMap.set([1,2,3],23);
myMap.set({id:45},23);
console.log(myMap.get("id")
);*/

/*let txt = "hello";
let txt2 = "world";

//let result = txt.charCodeAt(); //"e" =>  Asci code=101
let result = txt.startsWith("hel");

console.log(result);*/

/*const test = {
    x : 13,
    getX : function (y){
        return this.x+y;

    } 
};
const result = test.getX;
const lastResult = result.bind(test,4-2+6);
console.log(lastResult());*/

// (function(){
//     console.log("test is here IIFE!");
// })();

/*(function (){
    var userName = "Ali";
    function display(name)
    {
        console.log("MYScript.js: " + name);
    }
    display(userName);
})();


var userName = "samira";
(function (){
    
    function display(name)
    {
        console.log("MYScript.js: " + name);
    }
    display(userName);
})(userName);*/

/*const add = (function(){
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();

add();
add();
add();
add();
add();
add();
add();
add();
add();

console.log(add());*/

//const myDate = new Date()
/*const myDate = new Date(2011,2,11,15,23,11,876);
const result = myDate.toUTCString();
console.log(result);*/

//const newDate = new Date(1299844391876)
//console.log(newDate);

/*const m = Math;
const result = m.sin(90 * Math.PI/180);
console.log(result);*/

/*const m = Math;
const result = m.trunc(m.random() * 100);
console.log(result);*/

/*const myJson = {
    "users" : [
        {"username":"Samira80",'email':"samira80@gmail.com"},
        {"username":"Mohammad12",'email':"mohammad12@gmail.com"},
        {"username":"Saeed45",'email':"Saeed45@gmail.com"},
        {"username":"Ali12",'email':"ali23@gmail.com"},
    ]
}

let test = JSON.stringify(
    {
        test:false,
        name : "Mohammad"
    }
)

console.log(test);

let result = JSON.parse(test).name
console.log(result);*/

/*const myArray = [1,2,4,5,7,8,9];

const result = myArray.filter(eventNumbers);

function eventNumbers(number,index){
    if(number % 2 == 0){
        console.log(index);
        return number;
    }
}

console.log(result);*/

/*myArray = [2,3,5,8,9]

const reducer = (accumulator,currentValue,currentIndex) => accumulator * currentValue;

const result = myArray.reduce((accumulator,currentValue , currentIndex , array) =>{
console.log(currentIndex);
console.log(array);
return accumulator * currentValue;} , 20);


console.log(result);*/

/*class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    birthYear(){
        let date = new Date();
        let year = date.getFullYear();
        let result = year - this.age;
        console.log(result);
    }
}
Student.prototype.printGender = function() {
    console.log("Your gender is male!");

}
//console.log(Student.prototype)

let student1 = new Student("Ali",20);
//student1.birthYear();
//console.log(student1.gender);
student1.printGender();
console.log(Student.prototype);*/

/*class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    birthYear(){
        let date = new Date();
        let year = date.getFullYear();
        let result = year - this.age;
        console.log(result);
    }
}

class Student extends Person {
    constructor(name,age,field){
        super(name,age,field)
        this.field = field;
    }
    test(){
        console.log("this is from child class");
    }

}

let student1 = new Student ("Ali",23,"Computer");
console.log(student1.field);
//student1.birthYear();
student1.test();*/

/*class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get getName(){
        return this.name;
    }
    set setName(n){
        this.name = n;
    }
}

let person = new Person("Mohammad",25);
person.setName = "Ali";
console.log(person.getName);*/

/*test();
function test(){
    console.log("fom test")
}*/

/*function firstFunction(){
    console.log("first");
}

function secondFunction(){
    console.log("second");
}

secondFunction();
firstFunction();*/

/*function salam(){
    alert("salam Ali");
}

salam();*/

/*var person = {
    name : "amir",
    family : "rasouli",
    age : 26,
    fullname : function() {
        return this.name+ " " + this.family;
    }
};

console.log(person.name);*/

/*function showdate() {
    document.getElementById("result").innerHTML = Date();
}*/

/*var names = ["amir", "ali", "samira", "nasrin", "habib", "mohamad", ];
var element = document.getElementById("result");
var text = "";

for (var i = 0; i < names.length; i++) {
    text += names[i] + "<br/>";
}

 element.innerHTML = text;*/

/*var i = 1;
while(i <= 20){
    document.write(i + "<br/>");
    i++;
}*/

/*for(var i = 0; i<=10; i++){
    if(i===3 || i===7) {
        //break;
        continue;
    }
    document.write(i + "<br>");
}*/

/*let myPromise = new Promise((resolve,reject)=>{
    resolve();
    reject();
});

myPromise.then(
    function(value){

    },
    function(error){

    }
)*/

/*setTimeout(() => {
    myFunction("test");
    
},3000);

function myFunction(value){
    console.log(value);
}*/

/*        Promise       */
/*let myPromise = new Promise((resolve,reject)=>{

    setTimeout(function(){
        resolve("test promise");
    },3000);
});

myPromise.then((value)=>{
    console.log(value);
},()=>{
    console.log("Error");
});*/

/* async-await */
/*async function myFunction(){
    return "test";
    // return Promise.resolve("test");
}
myFunction().then(
    function(value){
        console.log(value);
    }
)*/

/*async function showResult(){
    let myPromise = new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("test from async function!")
        },3000);
    });
    console.log(await myPromise);
}

showResult();*/

// function resolveAfterThreeSeconds(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve("resolved");
//         },3000);
//     });
// }

// async function asyncCall(){
//     console.log('call');
//     const result = await resolveAfterThreeSeconds();
//     console.log(result);
// }

// asyncCall();

/*const myDate = new Date();
const myDateFormated = formatDate(myDate);

function formatDate(dateObject){
    const parts = {
        year: dateObject.getFullYear(),
        month: dateObject.getMonth() + 1,
        date: dateObject.getDate(),
       hour: (dateObject.getHours() % 12) || 12,
       minute: dateObject.getMinutes().toString().padStart(2, "0"),
       amOrpm: dateObject.getHours() < 12 ?
       "AM" : "PM"

    }

    return `${parts.year}/${parts.month}/${parts.date} ${parts.hour}:${parts.minute} ${parts.amOrpm}`
}

console.log(myDateFormated);*/

// const myDate = dayjs("1990-6-24 17:2");
// console.log(myDate.format("YYYY/M/D/ h:mm A"));

/*const getTodos = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);

      // for(let d of data){
      //     console.log(d.title);
      // }
    } else {
      callback("not Found...", undefined);
    }
  };
};

const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

getTodos(url1, function (error, data) {
  if (error) {
    console.log("no Data...");
  } else {
    console.log(data);
    getTodos(url2, function (error, data) {
      if (error) {
        console.log("no Data...");
      } else {
        console.log(data);
        getTodos(url3, function (error, data) {
          if (error) {
            console.log("no Data...");
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});*/

// Tozih promise
/*const getTodoos = function(){
    return new Promise(function(resolve, reject){
        //request done
        if(){
            resolve(data);
        }else{
            reject(error);
        }
    });
}

getTodoos().then(function(data){
console.log(data);

}).catch(function(error){
    console.log(error);

})*/

/*const getTodos = function (url) {
    return new Promise(function(resolve,reject){
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
      
        request.onload = function () {
          if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
      
            // for(let d of data){
            //     console.log(d.title);
            // }
          } else {
            reject("not Found...");
          }
        };      
    });
};

const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

// getTodos(url1, function (error, data) {
//   if (error) {
//     console.log("no Data...");
//   } else {
//     console.log(data);
//     getTodos(url2, function (error, data) {
//       if (error) {
//         console.log("no Data...");
//       } else {
//         console.log(data);
//         getTodos(url3, function (error, data) {
//           if (error) {
//             console.log("no Data...");
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

getTodos(url1).then(function(data){
    console.log(data);

    getTodos(url2);
    return getTodos(url2);
}).then(function(data){
    console.log(data);

    getTodos(url2);
    return getTodos(url3);
}).then(function(data){
    console.log(data);

}).catch(function(error){
    console.log(error);
})*/


//Fetch//
/*const url = "https://jsonplaceholder.typicode.com/todo/1";

fetch(url)
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("not found...");
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });*/



//Async & Await
  /*const url = "https://jsonplaceholder.typicode.com/todo/1";

  const getTodos = async url => {
      const response = await fetch(url);
      if(response.status === 200){
          const data = await response.json();
          return data;
      }else{
          throw new Error('not found...');
      }
  }

  getTodos(url)
  .then(data => console.log(data))
  .catch(error =>  console.log(error.message))*/


  /*let student = {
	firstname: "Mehran",
	lastname: "Tarif",
	age: 23,
	fields: ["programming", "nursing"],
	status: true,

	fullname() {
		return `${this.firstname} ${this.lastname}`
	},

	sayHello() {
		console.log(`Hello ${this.fullname()}!`)
	},

	showFields() {
		this.fields.forEach((field, index) => {
			console.log(`${index + 1}. ${field}`)
		});
	}
};

// console.log(student.fullname())
// student.sayHello()
student.showFields();*/


