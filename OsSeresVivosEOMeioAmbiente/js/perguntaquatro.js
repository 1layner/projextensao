function validaResposta(perguntaquatro){
	
	var txtum = "";
	txtum = document.getElementById('txtum').value;
	var txtdois = "";
	txtdois = document.getElementById('txtdois').value;

	if(txtum==98 && txtdois==100){
		window.location.href="../pages/correcaocertaquatro.html"
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}