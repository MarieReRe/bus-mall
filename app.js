'use strict';
console.log('This is the bus mall');


/* Array to store large amount of image data for the randomization*/

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productUrl = ['images/bag.jpeg', 'images/banana.jpeg', 'images/bathroom.jpeg', 'images/boots.jpeg', 'images/breakfast.jpeg', 'images/bubblegum.jpeg', 'images/chair.jpeg', 'images/cthulhu.jpeg', 'images/dog-duck.jpeg', 'images/dragon.jpeg', 'images/pen.jpeg', 'images/pet-sweep.jpeg', 'images/scissors.jpeg', 'images/shark.jpeg', 'images/sweep.jpeg', 'images/tauntaun.jpeg', 'images/unicorn.jpeg', 'images/busb.jpeg', 'images/water-can.jpeg', 'images/wine-glass.jpeg'];

var currentImages = ['bag', 'boots', 'banana'];
//so we can update when we decide on what the next image will be 
var nextImage = [];

var imageElements = document.getElementsByTagName('img');


var productIndex1 = 0;
var productIndex2 = 0;
var productIndex3 = 0;
var rounds = 25;
var totalProducts = [];


//Add constructor function 
function Advertisement(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    // totalProducts.push(this);
}


for (var i = 0; i < productNames.length; i++) {
    totalProducts.push(new Advertisement(productNames[i], productUrl[i]));
}

// Creation of the random images
function newProductImage() {
    console.log(totalProducts.length);
    for (var i = 0; i < currentImages.length; i++) {
        var nextProductIndex = Math.floor(Math.random() * totalProducts.length);
    
        while (currentImages.includes(productNames[nextProductIndex]) || nextImage.includes(productNames[nextProductIndex])) {
            nextProductIndex = Math.floor(Math.random() * totalProducts.length)
        }
        console.log(nextProductIndex);
        nextImage[i] = productNames[nextProductIndex];
    }
    currentImages = nextImage;
    console.log(currentImages);
}



//for clicks
var totalClicks = 0;
function imageWasClicked(event) {
    totalClicks++;
    if (event.srcElement === 'firstProduct') {
        totalProducts[productIndex1].timesClicked++;
    } else if (event.srcElement === 'secondProduct') {
        totalProducts[productIndex2].timesClicked++;
    } else if (event.srcElement === 'thirdProduct') {
        totalProducts[productIndex3].timesClicked++;
    }
    newProductImage();
    console.log(totalClicks);
}





function render (){
    var productElement = document.getElementsByTagName('img');
    //access arrray then get corresponding images then render to page 
    for(var i = 0; i < productElement.length; i++){
       console.log( productElement[i].src)
        
    }
}



console.log(productElement);

for (var i = 0; i < currentImages.length; i++) {
    // debugger;
    productElement[i].addEventListener('click', imageWasClicked);
}
