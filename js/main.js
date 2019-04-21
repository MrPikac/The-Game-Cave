// VALIDATION

function validate(){
    var name = document.getElementById("name").value;
    if (name === "") {
        alert('The name is required');
        return false;
    }
    if (name === Number) {
        alert('The name is not a number...');
        return false;
    }
    
    
    var age = document.getElementById("age").value;
    if (age === "") {
        alert('The age is required');
        return false;
    } 
    if (isNaN(age)) {
        alert('Age must be a number, ofc');
        return false;
    }   
    if (age % 1 !== 0) {
        alert('Age must be a whole number');
        return false;
    }
    
    return true
}




// ANIMATION OF SVG

var looper;
var degrees = 0;
function rotateAnimation(el,speed) {
    var elem = document.getElementById(el);
    elem.style.transform = "rotate("+degrees+"deg)";
    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
    degrees++;
    if(degrees > 360) {
        degrees = 1;
    }
}


rotateAnimation("anim",20);



// LIGHTBOX


// var currentImg = 0;

// document.querySelector('.overlay img').onclick = function() {
//   document.querySelector('.overlay').style.display = "none";
// }

// var allImg = document.querySelectorAll('.gallery .item img');

// for (let i = 0; i < allImg.length; i++) {
//   allImg[i].onclick = function() {
//     var clickedImg = this.src;
//     document.querySelector('.overlay img').src = clickedImg;
//     document.querySelector('.overlay').style.display = "flex";
//     currentImg = i;
//   }
// }

// function prev() {

// }

// function next() {
//   if (currentImg + 1 >= allImg.length) {
//     currentImg = -1;
//   }
//   var nextImg = currentImg + 1;
//   var imgSrc = allImg[nextImg].src;
//   document.querySelector('.overlay img').src = imgSrc;

//   currentImg = nextImg;
// }






// var xmlhttp = new XMLHttpRequest();
// var url = "https://api.myjson.com/bins/rmmro";

// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         myFunction(myArr);
//     }
// };

// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//         out += '<a href="' + arr[i].url + '">' +
//         arr[i].display + '</a><br>';
//     }
//     document.getElementById("moba").innerHTML = out;
// }












  // API
  // https://api.myjson.com/bins/u22x0
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          for(let i=1; i<10; i++){
            let tmp = document.querySelector("#gl-"+i);
            if(tmp !== null) {
            tmp.setAttribute("src", xhr.response.galleryImages[i]);
            }
          }
        }
  
        if (xhr.status == 404) {
          console.log("File or resource not found");
        }
      }
  };
  
  xhr.open('get', 'https://api.myjson.com/bins/u22x0', true);
  xhr.send();