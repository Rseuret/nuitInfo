<!DOCTYPE html>
<html>
<body>

<h1>The XMLHttpRequest Object</h1>

<button type="button" onclick="loadDoc()">Dis moi une blague</button>
<br><br>
<div id="demo"></div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "blagues.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  var joke = "";
  var x = xmlDoc.getElementsByTagName("JOKE");
  for(var i = 0; i < x.length; i++){
    joke += x[i].getElementsByTagName("SUBJECT")[0].childNodes[0].nodeValue;
    joke += ": " + x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
    joke += "</br>";
  }
  document.getElementById("demo").innerHTML = joke;
}
</script>

</body>
</html>
