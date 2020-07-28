function validaResposta(perguntanove){
	
	var txtum = "";
	txtum = document.getElementById('txtum').value;
	var tamanduaMaius = txtum.toUpperCase();
	var txtdois = "";
	txtdois = document.getElementById('txtdois').value;
	var oncaMaius = txtdois.toUpperCase();

	if(tamanduaMaius=="TAMANDUÁ BANDEIRA" && oncaMaius=="ONÇA PINTADA"){
		window.location.href="../pages/correcaocertanove.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}