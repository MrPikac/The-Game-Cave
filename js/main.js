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


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





var req = new XMLHttpRequest();
var url = "https://api.myjson.com/bins/8gpks";

req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
req.open("GET", url, true);
req.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}