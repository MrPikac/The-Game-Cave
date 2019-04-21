var req = new XMLHttpRequest();


req.onload = function() {
  var res = JSON.parse(req.responseText);
  
  var all = res.products;
  
  for (let i=0; i < all.length; i++) {
    var ele = document.createElement('p');
    var text = document.createTextNode(all[i].name);
    ele.appendChild(text);
    
    ele.classList.add('red');
    
    
    document.querySelector('span').appendChild(ele);
  }
}


req.open("GET", "https://api.myjson.com/bins/rmmro");

req.send();