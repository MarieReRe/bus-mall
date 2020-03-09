'use strict';
console.log('This is the bus mall');


var imageElements = document.getElementsByTagName('img');


var productIndex1 = 0;
var productIndex2 = 0;
var rounds 25;
var totalProducts = [];


//Add constructor function 
function Advert (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    totalProducts.push(this);
}


function imageWasClicked() {
    //track total clicks 
    totalClicks++;
    console.log('image was clicked');

    if (event.srcElement.id === '1') {
        img1Clicked++;

    } else if (event.srcElement.id === '2') {
        allImages
        // img2Clicked++;
    }


if(img1Clicked + img2Clicked >= 5){
    var footerElement = document.getElementsByTagName('footer')[0];
        footerElement.textContent = `You picked image 1 ${img1Clicked} times and image 2 ${img2Clicked} times.`; /*temporate literal */
    }
}


}


var imageElements = document.getElementsByTagName('img');

for (var i = 0; i < imageElements.length; i++) {
    console.log('this is the event listener, for the clock on image, woo');
    debugger;
    imageElements[i].addEventListener('click', imageWasClicked);
}