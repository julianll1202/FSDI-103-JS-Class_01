//Homework class 01 of unit 103
//Amazon

//user info
let userName="Armando Lopez";
let userEmail="armando-lopez@gmail.com";
let userPassword="arl5678";
let userAddress="Av. Rio Colorado #4590 Altaria residencial";
let userAge=35;
let userBalance=1480;
let userPrimeStatus="activa";

//prouduct info
let productName="Kingston SSD A400 480GB";
let productId="SA400S37/480G";
let productDescription="The A400 Kingston SSD has a new driver that gives the unit the capacity to both write and read up to speeds of 500MB/s,this SSD is 10 times faster than a traditional HDD.";
let productManufacturer="Kingston";
let productSeller="SVENSKA";
let productImage='http://ghhfhghf';
let productPrice=35;
let productDiscountPercentage=10;
let productRating=5;
let productWidth=10;
let productHeight=0.7;
let productDepth=7;
let productCategory="Electronics";

//Output
document.write(`
    <p> <b>User information </b></p>
    <p>Name: ${userName}</p>
    <p>Password: ${userPassword}</p>
    <p>E-mail: ${userEmail}</p>
    <p>Age: ${userAge}</p>
    <p>Address: ${userAddress}</p>
    <p>Balance: ${userBalance}</p>
    <p>Prime Membership Status: ${userPrimeStatus}</p>
`);

document.write(`
    <p> <b>Product information </b></p>
    <p>Product name: ${productName}</p>
    <p>Product ID: ${productId}</p>
    <p>Description: ${productDescription}</p>
    <p>Manufacturer: ${productManufacturer}</p>
    <p>Seller: ${productSeller}</p>
    <p>Price: ${productPrice}</p>
    <p>Discount: ${productDiscountPercentage}%</p>
    <p>Rating: ${productRating} stars</p>
    <p>Category: ${productCategory}</p>
    <p>Dimensions: ${productWidth}x${productHeight}x${productDepth} cm</p>
    
    
`);