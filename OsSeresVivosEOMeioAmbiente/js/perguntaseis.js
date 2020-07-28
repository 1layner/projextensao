function validaResposta(perguntaseis){

	if(perguntaseis.txtum.value==5 && perguntaseis.txtdois.value==1 && perguntaseis.txttres.value==4 &&
		perguntaseis.txtquatro.value==3 && perguntaseis.txtcinco.value==2){
		window.location.href="../pages/correcaocertaseis.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}