function validaResposta(perguntaquinze){

	var txtdois = "";
	txtdois = document.getElementById('txtdois').value;
	var txtdoismaius = txtdois.toUpperCase();
	var txttres = "";
	txttres = document.getElementById('txttres').value;
	var txttresmaius = txttres.toUpperCase();

	if(txtdoismaius=="CRESCE" && txttresmaius=="REPRODUZ"){
		window.location.href="../pages/correcaocertaquinze.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}