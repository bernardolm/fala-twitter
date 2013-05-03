$(document).ready(function() {
	var textoInicio = 'RT @Rodriggo_f: o q acontece na rod. Washington luiz? Parada mto antes do carrefour. reboques da Prefeitura na R. Morais e silva, Tijuca. Dps o cidadão notícia como furto e danou-se!';
	$('.texto-inicio').text(textoInicio);

	var textoTraduzido = traduzir(textoInicio);
	$('.texto-alterado').text(textoTraduzido);

	var textoPartes = textoTraduzido.match(/.{0,99}/g);

	var playNext = function () {
		console.log('acabou');
	}

	var count = 0;

	var audio = new Audio();

	var falarTexto = function () {
		var texto = textoPartes[count];
		var texto1 = texto.replace(/ /g, '+');
		
		count++;
		
		audio.src = "http://translate.google.com/translate_tts?ie=UTF-8&tl=pt-BR&q=" + texto1;

		if (count < textoPartes.length)
			audio.addEventListener('ended', falarTexto());

		//while (audio.currentTime < audio.duration) {}

		audio.play();
	}
	
	falarTexto();
});

var traduzir = function (texto) {
	var h = new HashTable(dicionario);
	h.each(function (k, v) {
		var regExp = new RegExp(k, 'g');
		texto = texto.replace(regExp, v);
		delete regExp;
	});
	return texto;
};

var dicionario = {
	"td": "tudo",
	"vc": "você",
	"std": "sentido",
	"rod.": "rodovia",
	"q": "que",
	"RT": "retuite",
	"rt": "retuite",
	"mto": "muito",
	"sent": "sentido"
};