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
  var joke = "";
  var x = xmlDoc.getElementsByTagName("JOKE");
  var i = Math.floor(Math.random() * x.length);
  joke += x[i].getElementsByTagName("SUBJECT")[0].childNodes[0].nodeValue;
  joke += ": " + x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
  joke += "</br>";
  document.getElementById("demo").innerHTML = joke;
}

function present (xml) {
  var xmlDoc = xml.responseXML;
  var text = "";
  var x = xmlDoc.getElementsByTagName("GREETING");
  var i = Math.floor(Math.random() * x.length);
  text += x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
  text += "</br>";
  document.getElementById("demo").innerHTML = text;
}
