function validaResposta(perguntadez){

	var txtum = "";
	txtum = document.getElementById('txtum').value;
	var txtummaius = txtum.toUpperCase();
	var txtdois = "";
	txtdois = document.getElementById('txtdois').value;
	var txtdoismaius = txtdois.toUpperCase();
	var txttres = "";
	txttres = document.getElementById('txttres').value;
	var txttresmaius = txttres.toUpperCase();

	if(txtummaius=="" && txtdoismaius=="" && txttresmaius=="X"){
		window.location.href="../pages/correcaocertadez.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}



