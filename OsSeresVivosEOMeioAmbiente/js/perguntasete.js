function validaResposta(perguntasete){

	var formattxt = "";
	formattxt = document.getElementById('formattxt').value;
	var formattxtmaius = formattxt.toUpperCase();

	if(formattxtmaius=="NÃO RECICLÁVEL"){
		window.location.href="../pages/correcaocertasete.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}