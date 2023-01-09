// console.log("----EXERCISE 1------")
// let boolean = true;
// console.log(boolean);

// let string = "What's up!";
// console.log(string);

// let number = 13;
// console.log(number);

// let undefinedVariable;
// console.log(undefinedVariable)

// let nullVariable = null;
// console.log(nullVariable)

// let array = [13, 5, "Hello", true];
// console.log(array);

// let object = {
//     person: "Slave",
//     age: 18,
//     stillInSchool: true}
// console.log(object)

// console.log("----EXERCISE 2------")

// let stringVariable = prompt("Please write anything")
// console.log(typeof stringVariable)

// let numberVariable = parseInt(prompt("Please write a number"))
// console.log(typeof numberVariable);

// let booleanVariable = true;
// console.log(typeof booleanVariable)

// console.log(typeof array)

// console.log(typeof undefinedVariable)

// console.log("----EXERCISE 3------")

// function exerciseThree() {
//     let usersInput = parseInt(prompt("Please enter a number"))
//     console.log(`User inputed ${usersInput}`)

//     if (usersInput > 13) {
//         let resultOfUserInput = usersInput - 13
//         let finalResult = resultOfUserInput * 2
//         return finalResult
//     } else{
//        let secondResult = 13 - usersInput
//        return secondResult
//     }
// }

// let exerciseThreeResult = exerciseThree()
// console.log(exerciseThreeResult)

// console.log("----EXERCISE 4------")

// function closerToHundret() {
//     let firstInsert = parseInt(prompt("Please enter a number"));
//     let secondInsert = parseInt(prompt("Please enter a number"));

//     if (firstInsert < 0 || secondInsert < 0) {
//         alert("You can't put a negative number")
//     }

//     if ((firstInsert - 100) > (secondInsert - 100)) {
//         console.log(`${firstInsert} is closer to 100`)
//     } else if ((firstInsert - 100) < (secondInsert - 100)) {
//         console.log(`${secondInsert} is closer to 100`)}
// }
// let numberCloserToHundert = closerToHundret();


// console.log("-----EXERCISE 5")

// let bobsSalary = 1000;
// let apartmentRent = 375;
// let billsInTotal = 250;

// function bobsMoney(){
//     let restOFBobsMoney = bobsSalary - apartmentRent - billsInTotal
//     let totalAmountOfExpences = apartmentRent + billsInTotal
//     console.log(`Bob has ${totalAmountOfExpences} total amount of expences`)

//     return `Bob has ${restOFBobsMoney}$ left`
// }

// let howMuchMoneyDoesBobHave = bobsMoney()
// console.log(howMuchMoneyDoesBobHave)

// console.log("-----EXERCISE 6----------")

// let studentGrades = [10, 6, 8, 9, 6];
// let forPassingSumIs = 8;

// function sumOfAllGrades(array) {
//     let sum = 0;
//     for (let i = 0; i < studentGrades.length; i += 1) {
//         sum += studentGrades[i]

//     }
//     sum /= 5

//     if (sum < 8) {
//         alert("You have not passed")
//     } else { alert("You have passed") }

//     return sum

// }
// console.log(sumOfAllGrades(studentGrades));

// console.log("-----EXERCISE 7----------")

// let randomArray = [undefined, "", null, "hi" * 8, false, 10, "Hello", true, 3, "World"];

// function removovingFalsyValues(array) {
//     for (let i = 0; i < randomArray.length; i++) {
//         console.log(randomArray[i])
//     }

//     let filtered = randomArray.filter(x => x);
//     console.log(filtered)

// }
// removovingFalsyValues(randomArray)

// console.log("-----EXERCISE 8----------")

// let storyInputOne = document.getElementById("storyInputOne");
// let storyInputTwo = document.getElementById("storyInputTwo");
// let storyInputThree = document.getElementById("storyInputThree");
// let storyInputFour = document.getElementById("storyInputFour");
// let storyInputFive = document.getElementById("storyInputFive");
// let storyInputSix = document.getElementById("storyInputSix");

// let firstButton = document.getElementById("firstButton");
// let storyDiv = document.getElementById("firstDiv");

// function storyTeller(name, whereImFrom, age, thingsIDo, dadsName, momsName){

//     let paragraph = document.createElement("p");
//     storyDiv.appendChild(paragraph);

//     paragraph.innerText = `My name is ${name}.I'm writting this story so you can get to know me a little better.
//      I come from ${whereImFrom} and i am ${age} years old. In my free time i love to ${thingsIDo} and it would be great if you can join me sometime.
//       My dad's name is ${dadsName}, my mom's name is ${momsName} and i love them very much. How about you'r story? `

//       storyInputOne.value = "";
//       storyInputTwo.value = "";
//       storyInputThree.value = "";
//       storyInputFour.value = "";
//       storyInputFive.value = "";
//       storyInputSix.value = "";

// }
// firstButton.addEventListener("click", function(){
//     storyTeller(storyInputOne.value, storyInputTwo.value, storyInputThree.value, storyInputFour.value, storyInputFive.value, storyInputSix.value);
// })

// console.log("-----EXERCISE 9----------");

// function phoneBook(){

//     let table = document.getElementById("table");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");

//     td1.innerHTML = document.getElementById("fourthInput").value;
//     td2.innerHTML = document.getElementById("fifthInput").value;
//     td3.innerHTML = document.getElementById("sixthInput").value;

//     let row = document.createElement("tr");

//     row.appendChild(td1);
//     row.appendChild(td2);
//     row.appendChild(td3);

//     td3 = parseInt(td3.value)

//     table.appendChild(row);

//     if(td1.innerText <= 0){
//         alert("Please write a you'r First Name")
//     } else if(td2.innerText <= 0){
//         alert("Please write you'r Last Name")
//     } else if(td3.innerText <= 0){
//         alert("Please write you'r number")
//     } else if(td3.innerText /=  Number){
//         alert("Please write a number") //I just couldn't figure out how to preven't someone from not putting a number in
//     }  
// }

// let btn = document.getElementById("buttonTwo");

// btn.addEventListener("click", function(){
//     phoneBook();

//     fourthInput.value = "";
//     fifthInput.value = "";
//     sixthInput.value = "";
// })

// console.log("-----EXERCISE 10----------");

// let myToDoInput = document.getElementById("seventhInput");
// let myToDoButton = document.getElementById("buttonThree");
// let myUnorderedList = document.getElementById("myUnorderedList");

// function myToDoList() {

//     let li = document.createElement("li");

//     li.innerText = document.getElementById("seventhInput").value;
//     myUnorderedList.appendChild(li);
    
//     let array = [];
//     array.push(myToDoInput.value);
//     console.log(array)

//     myToDoInput.value = "";

// }
// myToDoButton.addEventListener("click", function () {
//     myToDoList();
// })