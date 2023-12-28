// let username;
// document.getElementById("myButton").onclick=function(){
//     username=document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML="Hello" + username;
// }

// let age=window.prompt("How old are you?");

// age=Number(age);

// age+=1;

// console.log("YOU are "+age+" years old")
 
// let count=0;
// document.getElementById("decreaseBtn").onclick=function(){
//     count-=1;
//     document.getElementById("countLabel").innerHTML=count;
// }

// document.getElementById("increaseBtn").onclick=function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML=count;
// }

// document.getElementById("resetBtn").onclick=function(){
//     count=0;
//     document.getElementById("countLabel").innerHTML=count;
// }


// document.getElementById("myButton").onclick=function(){
//     if(document.getElementById("myCheckBox").checked){
//         console.log("You are subscribed !");
//     }
//     else{
//         console.log("You are not subscribed !");
//     }
// }

// const answer=Math.floor(Math.random()*10+1);
// let guesses=0;
// document.getElementById("submitButton").onclick=function(){
//     let guess=document.getElementById("guessField").value;
//     guesses+=1;
//     if(guess==answer){
//         alert(' ${answer} is the #.It took ${guesses} guesses');
//     }
//     else if(guesses<answer){
//         alert("Too small");
//     }
//     else{
//         alert("Too large");
//     }
// }

//sum2(2,3,displayConsole,displayDOM);

//displayConsole(total);

// function sum(x,y){
//     let result=x+y;
//     return result;
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML=output;
// }

// function sum2(x,y,callback,calback2){
//     let total=x+y;
//     callback(total);
//     calback2(total);
// }

// let ages=[18,16,21,17,19,90];

// let adults=ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element>=18;
// }

// function print(element){
//     console.log(element);
// }

// let cards=["A","2","3","4","5","6","7","8","9","20","j","k","Q"];

// shuffle(cards);

// console.log(cards);

// cards.forEach((element)=>console.log(element));

// function shuffle(cards){
//     let currentIndex=cards.length-1;
//     while(currentIndex!=0){
//         let randIndex=Math.floor(Math.random()*cards.length);
//         let temp=cards[currentIndex];
//         cards[currentIndex]=cards[randIndex];
//         cards[randIndex]=temp;
//         currentIndex--;
//     }
// }

//map

// const store=new Map([
//     ["t-shirt",20],
//     ["jeans",30],
//     ["socks",10],
//     ["underwear",50]
// ]);

// store.forEach((value,key)=>console.log(`${key} $${value}`));

//object

//  const car={
//     model:"Mustang",
//     color:"red",
//     year:2023,
//     drive:function(){
//         console.log("You drive the car");
//     },
//     brake:function(){
//         console.log("You stop on the brakes");
//     }
//  }

//  console.log(car.model);
//  console.log(car.color);
//  car.drive();

//  console.log(this);

 //class

 class player{
    score=0;
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
 }

 const player1=new player();
 player1.score+=1;
 console.log(player1.score);
