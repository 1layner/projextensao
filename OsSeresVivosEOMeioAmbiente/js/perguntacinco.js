function validaResposta(perguntacinco){
	
	var txtum = "";
	txtum = document.getElementById('txtum').value;
	var macacoMaius = txtum.toUpperCase();
	var txtdois = "";
	txtdois = document.getElementById('txtdois').value;
	var tartarugaMaius = txtdois.toUpperCase();

	if(macacoMaius=="MACACO" && tartarugaMaius=="TARTARUGA"){
		window.location.href="../pages/correcaocertacinco.html";
		alert("Clique OK para ver a correção!!");
	} else {
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}

}