function validaResposta(perguntaoito){

	var txtum = "";
	txtum = document.getElementById('txtum').value;
	var txtummaius = txtum.toUpperCase();
	var txtdois = "";
	txtdois = document.getElementById('txtdois').value;
	var txtdoismaius = txtdois.toUpperCase();

	if(txtummaius=="CAULE" && txtdoismaius=="FLOR" || txtummaius=="FLOR" && txtdoismaius=="CAULE"){
		window.location.href="../pages/correcaocertaoito.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}