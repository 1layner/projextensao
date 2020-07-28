function executaPergunta(){
	var myArray = ['../pages/perguntauma.html',
				'../pages/perguntadois.html',
				'../pages/perguntatres.html',
				'../pages/perguntaquatro.html',
				'../pages/perguntacinco.html',
				'../pages/perguntaseis.html',
				'../pages/perguntasete.html',
				'../pages/perguntaoito.html',
				'../pages/perguntanove.html',
				'../pages/perguntadez.html',
				'../pages/perguntaonze.html',
				'../pages/perguntadoze.html',
				'../pages/perguntatreze.html',
				'../pages/perguntaquatorze.html',
				'../pages/perguntaquinze.html'];

	var Rand = myArray[Math.floor(Math.random() * myArray.length)];

	location.href=Rand;

	console.log(Rand);
}

