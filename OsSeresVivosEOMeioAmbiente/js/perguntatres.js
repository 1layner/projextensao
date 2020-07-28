function validaResposta(perguntatres){
	
	var txtum = "";
	var txtdois= "";
	var txttres="";
	var txtquatro="";
	var txtcinco="";
	var txtseis="";
	var txtsete="";
	txtum = document.getElementById('txtum').value;
	var txtummaius = txtum.toUpperCase();
	txtdois = document.getElementById('txtdois').value;
	var txtdoismaius = txtdois.toUpperCase();
	txttres = document.getElementById('txttres').value;
	var txttresmaius = txttres.toUpperCase();
	txtquatro = document.getElementById('txtquatro').value;
	var txtquatromaius = txtquatro.toUpperCase();
	txtcinco = document.getElementById('txtcinco').value;
	var txtcincomaius = txtcinco.toUpperCase();
	txtseis = document.getElementById('txtseis').value;
	var txtseismaius = txtseis.toUpperCase();
	txtsete = document.getElementById('txtsete').value;
	var txtsetemaius = txtsete.toUpperCase();

	if(txtummaius=="SUS" && txtdoismaius=="TEN" && txttresmaius=="TA" && 
		txtquatromaius=="BI" && txtcincomaius=="LI" && txtseismaius=="DA" && txtsetemaius=="DE"){
		window.location.href="../pages/correcaocertatres.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}