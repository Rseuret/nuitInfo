function loadDoc(xml, myFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", xml, true);
  xhttp.send();
}

function tellJoke(xml) {
  var xmlDoc = xml.responseXML;
  var historique = document.getElementById("demo").innerHTML;
  var joke = "Thérésa: ";
  var x = xmlDoc.getElementsByTagName("JOKE");
  var i = Math.floor(Math.random() * x.length);
  joke += x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
  joke += "</br>";
  joke += '<img src="mm_joke1.jpg" width="200" height="250">';
  document.getElementById("demo").innerHTML = "<div>" + joke + "</div><div> Moi: " + document.getElementById('question').value + historique + "</div>";
}

function present (xml) {
  var xmlDoc = xml.responseXML;
  var historique = document.getElementById("demo").innerHTML;
  var text = "Thérésa: ";
  var x = xmlDoc.getElementsByTagName("GREETING");
  var i = Math.floor(Math.random() * x.length);
  text += x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
  text += "</br>";
  document.getElementById("demo").innerHTML = "<div>" + text + "</div><div> Moi: " + document.getElementById('question').value + historique + "</div>";
}
