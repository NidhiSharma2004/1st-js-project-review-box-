
function mainFun(){
    
changeImg();
changeName();
changeReview();
}

function previous(){
    prevImg();
    namePrev();   
  
    prevReview();
}

    //  ARRAY FOR IMAGES
var images = new Array();
var imgIndex = 0;
var prevIndex = 4;

images[0] = "/images/boy1.jpg";
images[1] = "/images/boy2.jpg";
images[2] = "/images/boy3.jpg";
images[3] = "/images/girl1.jpg";
images[4] = "/images/girl2.jpg";

var myImg = document.getElementById("images");

// FORWARD IMAGE INDEX
function changeImg() {
    if (imgIndex <= images.length - 1) {
        myImg.src = images[imgIndex];
        imgIndex++;
    }
    if(imgIndex==images.length){
        imgIndex = 0;
    }
     myImg.src=images[imgIndex]
}

// PREVIOUS IMAGE INDEX
function prevImg(){
         if(prevIndex < images.length-1){
  
        myImg.src=images[prevIndex]
        prevIndex--;
    }
 
    if(prevIndex == images.length-1 || prevIndex <-1){
        prevIndex=images.length-1;
        myImg.src=images[prevIndex]
        prevIndex--
    }
  
}

document.getElementById("rightslider").addEventListener("click",mainFun)
document.getElementById("leftslider").addEventListener("click",previous)

document.getElementById("btn").addEventListener("click",mainFun)


// NAME CONTAINR
var names = new Array();
names[0] = "Nidhi";
names[1] = "pinky bhaiya"
names[2] = "black bhaiya"
names[3] = "chasmish didi"
names[4] = "white boy"
var nameIndx = 0;
document.getElementById("personName").innerText = names[0]

// FORWARD NAME INDEX

function changeName(arr){
    if(nameIndx < names.length){
        document.getElementById("personName").innerText = names[nameIndx]
        nameIndx++
    }  
 document.getElementById("personName").innerText = names[nameIndx]
    if(nameIndx == names.length){
        nameIndx=0;
    } 
    document.getElementById("personName").innerText = names[nameIndx]
}

var prevNameIndx = 4;

 // PREVOIUS NAME INDEX
function namePrev(){
    if(prevNameIndx < names.length-1){
        document.getElementById("personName").innerText = names[prevNameIndx]
        prevNameIndx--
    }
    if(prevNameIndx == names.length-1 || prevNameIndx<-1){
        prevNameIndx= names.length-1
        document.getElementById("personName").innerText = names[prevNameIndx]
        prevNameIndx--  
    }
}


// REVIEW CONTAINER

var review = new Array();
review[0] = "Black Dress Consultants is an end-of-life concierge and consulting firm that helps families strategically manage the administrative and logistical tasks of legacy planning and organization, after loss and everything in between while also integrating your family values and traditions. We provide personalized solutions for life's transitions giving you and your family the space to live worry-free and grieve peacefully"
review[1] = "Some pink dresses are labeled with standard numerical dress sizes, while others come in small, medium, large, etc. Either way, sizes can vary widely by brand, so you should always consult the size chart before buying a dress online, to avoid the hassle of returning it for a different size. Some brands offer inclusive sizing, ideally going up to a 30 or equivalent"
review[2] = "There are several shades of red, including brick, burgundy, ruby, scarlet, raspberry, crimson, sangria, rust, maroon and vermillion — just to name a few. While red is considered a universally flattering color, many individuals discover that certain shades are more flattering than others"
review[3] = "Girls, girls, girls! Of course we know about their passion for all things princess (apologies for the mostly true stereotype) and their flair for the dramatic (again, apologies), but girls are unique in fascinating ways"
review[4] = "The perfect white shirt can take you from beachfront to business meeting, from school run to soirée, from date night to dancefloor. You get the idea. A chic white shirt is that friend whose conversation flows like milk and honey at any event, who simply makes you look goodWhether you seeking something silky, a tailored office shirt, a ruffled blouse, or a classic Oxford to infuse some serious style into your workwear, we’ve got the shirt for you."

var reviewInd = 0;

var myReview = document.getElementById("textContainer")
myReview.innerText = review[0]

// FORWARD REVIEW INDEX

function changeReview(arr){
    if(reviewInd < review.length){
    
        reviewInd++
        myReview.innerText = review[reviewInd];
    
    }  
 
    if(reviewInd == review.length){
        reviewInd=0;
        myReview.innerText = review[reviewInd]
        
    } 
}


 // PREVOIUS REVIEW INDEX
var prevReviewIndx = 4;
function prevReview(){
    if(prevReviewIndx < review.length){
        myReview.innerText = review[prevReviewIndx]
        prevReviewIndx--
    }
    if(prevReviewIndx <-1 ){
        prevReviewIndx = 4;
        myReview.innerText = review[prevReviewIndx]
        prevReviewIndx--
    }
}
