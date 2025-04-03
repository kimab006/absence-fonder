// first 
let picture1 = document.getElementById('something'); 
let text1 = document.getElementById('span1');  


let imageArray1 = [
    'assets/door.jpeg',
    'assets/window.jpeg'
];  

// second
let picture2 = document.getElementById('window'); 
let text2 = document.getElementById('span2');  


let imageArray2 = [
    'assets/hear.jpeg',
    'assets/feel.jpeg'
];  

// third
let picture3 = document.getElementById('body'); 
let text3 = document.getElementById('span3');  


let imageArray3 = [
    'assets/mind.jpeg',
    'assets/body.jpeg'
];  

// fourth
let picture4 = document.getElementById('door'); 
let text4 = document.getElementById('span4');  


let imageArray4 = [
    'assets/reach.jpg',
    'assets/grasp.jpg'
];   

// fifth
let picture5 = document.getElementById('hear'); 
let text5 = document.getElementById('span5');  


let imageArray5 = [
    'assets/dread.jpeg',
    'assets/grief.jpeg'
];      



// Create separate counters for each dropdown
let imageCounter1 = 0;
let imageCounter2 = 0;
let imageCounter3 = 0;
let imageCounter4 = 0;
let imageCounter5 = 0;





// Event listener for first dropdown
text1.addEventListener('change', () => {
    
    imageCounter1++;
    
    
    if (imageCounter1 >= imageArray1.length) {
        imageCounter1 = 0;
    }
    
    
    picture1.src = imageArray1[imageCounter1];
    
    
    console.log("Changed image 1 to: " + imageArray1[imageCounter1]);
});

// Event listener for second dropdown
text2.addEventListener('change', () => {
    
    imageCounter2++;
    
    
    if (imageCounter2 >= imageArray2.length) {
        imageCounter2 = 0;
    }
    
    
    picture2.src = imageArray2[imageCounter2];
    
    
    console.log("Changed image 2 to: " + imageArray2[imageCounter2]);
});

// Event listener for third dropdown
text3.addEventListener('change', () => {
    
    imageCounter3++;
    
    
    if (imageCounter3 >= imageArray3.length) {
        imageCounter3 = 0;
    }
    
    
    picture3.src = imageArray3[imageCounter3];
    
    
    console.log("Changed image 3 to: " + imageArray3[imageCounter3]);
});

// Event listener for fourth dropdown
text4.addEventListener('change', () => {
    
    imageCounter4++;
    
    
    if (imageCounter4 >= imageArray4.length) {
        imageCounter4 = 0;
    }
    
    
    picture4.src = imageArray4[imageCounter4];
    
    
    console.log("Changed image 4 to: " + imageArray4[imageCounter4]);
});

// Event listener for fifth dropdown
text5.addEventListener('change', () => {
    
    imageCounter5++;
    
    
    if (imageCounter5 >= imageArray5.length) {
        imageCounter5 = 0;
    }
    
    
    picture5.src = imageArray5[imageCounter5];
    
    
    console.log("Changed image 5 to: " + imageArray5[imageCounter5]);
});