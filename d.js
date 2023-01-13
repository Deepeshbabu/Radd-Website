var firebaseConfig = {
  apiKey: "AIzaSyDm-nycdkZQYQi5luYZUkFDFDShw1IbCUM",
  authDomain: "picnic-backpack-checklis-cfeda.firebaseapp.com",
  databaseURL: "https://picnic-backpack-checklis-cfeda-default-rtdb.firebaseio.com",
  projectId: "picnic-backpack-checklis-cfeda",
  storageBucket: "picnic-backpack-checklis-cfeda.appspot.com",
  messagingSenderId: "646834676292",
  appId: "1:646834676292:web:2c25b3f16a35f1ce289211",
  measurementId: "G-6NB7V49EZH"
};

firebase.initializeApp(firebaseConfig);

function pen() 
{
    var x = document.getElementById("dtp").value ;
    var y = document.getElementById("mdp").value ;


    
    var z = document.getElementById("nbp").value ;
    var a = document.getElementById("bwp").value ;
    firebase.database().ref("x").push({ date : x, model : y, nbun : z, bunwt : a }) ;
    view() ;
}

function getData() { firebase.database().ref("/"+"x").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_id = childKey;
  data = childData;
//Start code
console.log(firebase_id);
console.log(data);
row = "<tr><th>Date</th><th>Model</th><th>No. Of Bundles</th><th>Bundle Weight</th></tr>" + "<tr><td>"+ data['date'] +"</td><td>"+ data['model'] +"</td><td>"+ data['nbun'] +"</td><td>"+ data['bunwt'] +"</td></tr>";
document.getElementById("display").innerHTML += row ;
//End code
} });  }); }

function view()
{
  document.getElementById("pe").style.display = "none" ;
  document.getElementById("pv").style.display = "block" ;
  getData() ;
}

function ope() 
{
    document.getElementById("pe").style.display = "block" ;
    document.getElementById("pv").style.display = "none" ;
    
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