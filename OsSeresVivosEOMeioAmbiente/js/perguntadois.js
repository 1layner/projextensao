function validaResposta(perguntadois){

	var numum="";
	var numdois="";
	var numtres="";
	var numquatro="";
	var numcinco="";
	var numseis="";
	var numsete="";
	var numoito="";
	var numnove="";
	var numdez="";
	var numonze="";
	var numdoze="";
	var numtreze="";
	var numum = document.getElementById('txtum').value;
	var numdois = document.getElementById('txtdois').value;
	var numtreze = document.getElementById('txttres').value;
	var numquatro = document.getElementById('txtquatro').value;
	var numcinco = document.getElementById('txtcinco').value;
	var numseis = document.getElementById('txtseis').value;
	var numsete = document.getElementById('txtsete').value;
	var numoito = document.getElementById('txtoito').value;
	var numnove = document.getElementById('txtnove').value;
	var numdez = document.getElementById('txtdez').value;
	var numonze = document.getElementById('txtonze').value;
	var numdoze = document.getElementById('txtdoze').value;
	var numtreze = document.getElementById('txttreze').value;

	if(numum==3 && numdois==5 && (numtres==0 || numtres=="" ) &&
		numquatro==3 && (numcinco==0 || numcinco=="") &&
		numseis==2 && (numsete==0 || numsete=="") &&
		numoito==1 && numnove=="+" && (numdez==0 || numdez=="") && 
		numonze==1 && numdoze==4 && numtreze==2){
		window.location.href="../pages/correcaocertadois.html";
		alert("Clique OK para ver a correção!!");

	} else{
		window.location.href="../pages/telaresperrada.html";
		alert("Clique OK para ver a correção!!");
	}
	

}