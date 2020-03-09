'use strict';
console.log('This is the bus mall');


/* Array to store large amount of image data for the randomization*/

var productNames = ['bag', 'banana', 'bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon', 'pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var productUrl = ['images/bag.jpeg','images/banana.jpeg','images/bathroom.jpeg','images/boots.jpeg','images/breakfast.jpeg','images/bubblegum.jpeg', 'images/chair.jpeg','images/cthulhu.jpeg','images/dog-duck.jpeg','images/dragon.jpeg','images/pen.jpeg','images/pet-sweep.jpeg','images/scissors.jpeg','images/shark.jpeg','images/sweep.jpeg','images/tauntaun.jpeg','images/unicorn.jpeg','images/busb.jpeg','images/water-can.jpeg','images/wine-glass.jpeg'];

var currentImages = ['bag', 'boots','banana'];
//so we can update when we decide on what the next image will be 
var nextImage = [];

var imageElements = document.getElementsByTagName('img');


var productIndex1 = 0;
var productIndex2 = 0;
var productIndex2 = 0;
var rounds = 25;
var totalProducts = [];


//Add constructor function 
function Advertisement  (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    totalProducts.push(this);
}


 for(var i = 0; i < productNames.length; i++){
    totalProducts.push(new Advertisement(productNames[i],productUrl[i]));
 }


// Creation of the random images
function newProductImage(){
for(var i = 0; i < currentImages.length; i++){
    var nextProductIndex = Math.floor(Math.random() * totalProducts.length);
    while(currentImages.includes(productNames[nextProductIndex]) && nextImage.includes(productNames[nextProductIndex])){
        nextProductIndex = Math.floor(Math.random() * totalProducts.length)
    } 
    nextImage[i] = productNames[nextProductIndex];  
}

}
var = document.getElementsByTagName('img')