// []Create a constructor function that creates an object associated with each product, and has the following properties:
//[] Name of the product
// []file path of image
// []Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.


'use strict';
console.log('This is the bus mall');


/* Array to store large amount of image data for the randomization*/

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//so we can update when we decide on what the next image will be 
var nextImage = [];

// var imageElements = document.getElementsByTagName('img');
var productElement = document.getElementsByTagName('img');


var productIndex1 = 0;
var productIndex2 = 1;
var productIndex3 = 2;
var rounds = Math.ceil(Math.random() * 20) + 5;
console.log(rounds);
var totalProducts = [];


//Add constructor function 
function Advertisement(name) {
    this.name = name;
    this.path = 'images/' + name + '.jpg'
    this.timesClicked = 0;
    this.timesShown = 0;
}


function getNewAdvertisement(nameOfThePropertyIWant) {
    var answer = [];
    for (var i = 0; i < totalProducts.length; i++) {
        answer[i] = totalProducts[i][nameOfThePropertyIWant];

    }
    console.log(answer);
    return answer;
}


//is there local storage go see and get if it is true
var savedAdvertisementsString = localStorage.getItem('savedAdvertisements');
if(savedAdvertisementsString){
   totalProducts = JSON.parse(savedAdvertisementsString);
    }  

else {
for (var i = 0; i < productNames.length; i++) {
    totalProducts.push(new Advertisement(productNames[i]));
}
  
}


//for clicks
var totalClicks = 0;

function imageWasClicked(event) {
    console.log(productIndex2);
    console.log(totalProducts[0]);
    totalClicks++;
    if (event.srcElement.id === 'firstProduct') {
        totalProducts[productIndex1].timesClicked++;
    } else if (event.srcElement.id === 'secondProduct') {
        totalProducts[productIndex2].timesClicked++;
    } else if (event.srcElement.id === 'thirdProduct') {
        totalProducts[productIndex3].timesClicked++;
    }
    console.log(event.srcElement);
    console.log(totalProducts);




    //this ensures images are not repeated 

    var nextProductIndex1 = Math.floor(Math.random() * totalProducts.length);

    while ((nextProductIndex1 === productIndex1) || (nextProductIndex1 === productIndex2) || (nextProductIndex1 === productIndex3)) {
        nextProductIndex1 = Math.floor(Math.random() * totalProducts.length);
    }

    var nextProductIndex2 = Math.floor(Math.random() * totalProducts.length);

    while ((nextProductIndex2 === productIndex1) || (nextProductIndex2 === productIndex2) || (nextProductIndex2 === productIndex3) || (nextProductIndex2 === nextProductIndex1)) {
        nextProductIndex2 = Math.floor(Math.random() * totalProducts.length);
    }

    var nextProductIndex3 = Math.floor(Math.random() * totalProducts.length);

    while ((nextProductIndex3 === productIndex1) || (nextProductIndex3 === productIndex2) || (nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex1) || (nextProductIndex3 === nextProductIndex2)) {
        nextProductIndex3 = Math.floor(Math.random() * totalProducts.length);
    }
    //Set up a ref to productIndex1
    productIndex1 = nextProductIndex1;
    productIndex2 = nextProductIndex2;
    productIndex3 = nextProductIndex3;
    //Pick a random picture to display
    console.log(productIndex1);

    productElement[0].src = totalProducts[productIndex1].path;
    totalProducts[productIndex1].timesShown++;
    productElement[1].src = totalProducts[productIndex2].path;
    totalProducts[productIndex2].timesShown++;
    productElement[2].src = totalProducts[productIndex3].path;
    totalProducts[productIndex2].timesShown++;



    if (totalClicks >= rounds) {
        localStorage.setItem('savedAdvertisements', JSON.stringify(totalProducts));
        var asideUl = document.getElementById('voterResults');
        for (i = 0; i < totalProducts.length; i++) {
            var voteResultListItem = document.createElement('li');
            voteResultListItem.textContent = `${totalProducts[i].name} was clicked on
                ${totalProducts[i].timesClicked} times and was shown ${totalProducts[i].timesShown} times.`;
            asideUl.appendChild(voteResultListItem);
        }




        for (var i = 0; i < productElement.length; i++) {
            productElement[i].removeEventListener('click', imageWasClicked);
        }
        renderMyChart();
    }// end of the if total click
} // close image was clicked function 





// For Chart move around if needed add after remove event listener  
function renderMyChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: getNewAdvertisement('name'), //add function
            datasets: [{
                label: 'Advertisement Votes',
                data: getNewAdvertisement('timesClicked'),//add another function
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgba(182, 86, 245)',
                    'rgba(66, 245, 164)',
                    'rgba( 255, 5, 205)',
                    'rgba(17, 17, 186)',
                    'rgba(17, 181, 186)',
                    'rgba(253, 255, 115)',
                    'rgba(255, 115, 115)',
                    'rgba(17, 17, 186)',
                    'rgba(17, 181, 186)',
                    'rgba(253, 255, 115)',
                    'rgba(255, 204, 145)',
                    'rgba(17, 17, 186)',
                    'rgba(17, 181, 186)',
                    'rgba(253, 255, 115)',
                    'rgba(61, 35,74)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }]
            }
        }
    });
}



for (var i = 0; i < productElement.length; i++) {
    productElement[i].addEventListener('click', imageWasClicked);
}









