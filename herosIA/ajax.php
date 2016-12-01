<!DOCTYPE html>
<html>
<body>

<h1>Welcome. How can I help you?</h1>
<input id="question" name="question" type="text" />
<button id="envoi" type="button">Ask</button>
<br><br>
<div id="demo"></div>
</body>

<script src="traitement_demande.js"> </script>
<script>
  document.getElementById('envoi').addEventListener('click', function() {
    switch(document.getElementById('question').value){
      case 'joke':
        loadDoc('blagues.xml', tellJoke);
        break;
      case 'present you':
        loadDoc('presentation.xml', present);
        break;
    }

  }, false);
</script>

</html>
