var req = new XMLHttpRequest();


req.onload = function() {
  var res = JSON.parse(req.responseText);
  
  var greek = res.products.coffee.greek;
  
  for (let i=0; i < greek.length; i++) {
    var ele = document.createElement('p');
    var text = document.createTextNode(greek[i].name);
    ele.appendChild(text);
    
    ele.classList.add('red');
    
    
    document.querySelector('div').appendChild(ele);
  }
}


req.open("GET", "https://api.myjson.com/bins/rmmro");

req.send(); 