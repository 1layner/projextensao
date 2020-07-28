function validaResposta(perguntaquatorze){

	if(perguntaquatorze.txtum.value==12 && perguntaquatorze.txtdois.value==20){
		window.location.href="../pages/correcaocertaquatorze.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}