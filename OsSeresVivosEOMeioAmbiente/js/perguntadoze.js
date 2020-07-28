function validaResposta(perguntadoze){

	if(perguntadoze.txtum.value==2 && perguntadoze.txtdois.value==8 && perguntadoze.txttres.value==5){
		window.location.href="../pages/correcaocertadoze.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}