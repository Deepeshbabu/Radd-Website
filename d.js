
if(localStorage.getItem('h') == null){
    var allkey = [] ;
}else{
    var allkey = [localStorage.getItem("h")] ;
}

console.log(allkey) ;

getdata() ;

function pen() 
{
    var x = document.getElementById("dtp").value ;
    var y = document.getElementById("mdp").value ;
    var z = document.getElementById("nbp").value ;
    var a = document.getElementById("bwp").value ;
    console.log(x) ;
    row = "<tr><td>" + x + "</td><td>" + y + "</td><td>" + z + "</td><td>" + a + "</td></tr>" ;
    console.log(row) ;
    document.getElementById("prod").innerHTML = document.getElementById("prod").innerHTML + row ;
    localStorage.setItem(x, localStorage.getItem(x) + row) ;
    allkey.push(x) ;
    console.log(allkey);
    localStorage.setItem("h",allkey)
    getdata() ;  
}

function getdata()
{
  document.getElementById("pv").style.display = "block"
  document.getElementById("pe").style.display = "none"
  document.getElementById("prod").innerHTML = "<tr><th>Date</th><th>Model</th><th>No. Of Bundles</th><th>Bundle Weight</th></tr>" ;
  console.log("<tr><th>Date</th><th>Model</th><th>No. Of Bundles</th><th>Bundle Weight</th></tr>") ;
}

function ope() 
{
    document.getElementById("pe").style.display = "block"
}

function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-green";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-green", "");
    }
  }