function validaResposta(perguntauma){
	
	var extenso = "";
	extenso = document.getElementById('campoExtenso').value;
	var extensoMaius = extenso.toUpperCase();
	
	if(document.perguntauma.opcoes[0].value=="A" && perguntauma.campoNumerico.value==3 && extensoMaius=="TRÊS" && document.perguntauma.opcoesTerc[1].value=="N"){
		window.location.href="../pages/correcaocertauma.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}



