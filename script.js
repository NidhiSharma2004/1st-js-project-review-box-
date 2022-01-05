


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
var images = ["./assets/images/boy1.jpg","./assets/images/boy2.jpg","./assets/images/boy3.jpg","./assets/images/girl1.jpg","./assets/images/girl2.jpg"];
var imgIndex = 0;
var prevIndex = 4;
var myImg = document.getElementById("images");

// FORWARD IMAGE INDEX
function changeImg() {
    if (imgIndex <= images.length - 1) {
        console.log(imgIndex)
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

console.log(btn)

// NAME CONTAINR
var names = ["Nidhi","pinky bhaiya","black bhaiya","chasmish didi","white boy"];
var nameIndx = 0;
var myName = document.getElementById("personName")
myName.innerText = names[0]

// FORWARD NAME INDEX

function changeName(arr){
    if(nameIndx < names.length){
      myName.innerText = names[nameIndx]
        nameIndx++
    }  
 document.getElementById("personName").innerText = names[nameIndx]
    if(nameIndx == names.length){
        nameIndx=0;
    } 
  myName.innerText = names[nameIndx]
}

var prevNameIndx = 4;

 // PREVOIUS NAME INDEX
function namePrev(){
    if(prevNameIndx < names.length-1){
      myName.innerText = names[prevNameIndx]
        prevNameIndx--
    }
    if(prevNameIndx == names.length-1 || prevNameIndx<-1){
        prevNameIndx= names.length-1
      myName.innerText = names[prevNameIndx]
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

// NAVIGATION BAR
var listContainer = document.querySelector(".listContainer")
var hmbrgr = document.getElementById("hmbrgr"); 

// HMBURGR ICON 
var x = window.matchMedia("(max-width: 1000px)") 

function chnageTheme(x){
    if(x.matches){
        listContainer.style.display = "none";
        hmbrgr.style.display="flex"
    }
    else{
        listContainer.style.display = "flex";
        hmbrgr.style.display="none"
    }
}
chnageTheme(x)
x.addListener(chnageTheme);

hmbrgr.addEventListener("click",function(e){
    e.preventDefault()
    hmbrgr.classList.toggle("fa-times")
    if(hmbrgr.classList.contains("fa-times")){
        document.querySelector(".rspons").style.display="flex"; 
        document.querySelector(".rspons").style.color = "rgb(122, 34, 34)"
    }else{
     document.querySelector(".rspons").style.display="none"
    }
})

// MODAL PROJECT JS
var nextbtn = document.getElementById("nextbtn");
var alertdiv = document.querySelector(".alertdiv");

nextbtn.addEventListener("click",function(){
    alertdiv.style.display="flex";
})

var deletetbtn = document.getElementById("deletetbtn");
deletetbtn.addEventListener("click",function(){
    alertdiv.style.display="none";
});

// QUESTION SECTION

const icn = document.querySelectorAll("span");
// it will give collection of nodeslist
console.log(icn)

icn.forEach(icons => {
    icons.addEventListener("click",function(e){
        // e.preventDefault()
        e.stopPropagation();
        // console.log(e.currentTarget.classList)
        e.currentTarget.classList.toggle("fa-times");

        if(e.currentTarget.classList.contains("fa-times")){
            // document.querySelector(".answer").style.display="flex"
        }
        else{
            document.querySelector(".answer").style.display="none"

        }
    },false);
});


// document.querySelector(".questionSection").addEventListener("click",(e)=>{
//     console.log(e.currentTarget.classList)
//     // console.log(typeof e.currentTarget.classList)
//     // console.log(e.currentTarget.classList[0])
//     e.currentTarget.classList.add("fa-times");
//     console.log(e)
// })
