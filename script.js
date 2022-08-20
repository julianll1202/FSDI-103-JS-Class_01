//JS code
//alert("First JS Class");
var userName="Julian"; //old way of declaring variables

var userAge=35; //old way
let age=19; //new way
const taxes=12;

//Variables of exercise 1
let numChildren=2; 
let partnerName="Maisie";
let geoLocation="Tokyo";
let jobTitle="IT Engineer";

console.log(userName);
console.log(age);
console.log(taxes);

document.write("<p> Name: " + userName + "</p><p>Age: " + age + "</p><p>Taxes: " + taxes + "</p><p>");

document.write(`
    <p style="color: lightblue">Name: ${userName}</p>
    <p>Age: ${age}</p>
    <p>Taxes: ${taxes}</p>
`);

//Output of exercise 1
document.write(`
    <p>You will be a ${jobTitle} in ${geoLocation},
    and married to ${partnerName} with ${numChildren}
    kids</p>}
`)