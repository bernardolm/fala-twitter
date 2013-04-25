$(document).ready(function() {
	var textoInicio = 'RT @Rodriggo_f: o q acontece na rod. Washington luiz? Parada mto antes do carrefour. reboques da Prefeitura na R. Morais e silva, Tijuca. Dps o cidadão notícia como furto e danou-se!';
	$('.texto-inicio').text(textoInicio);

	var textoTraduzido = traduzir(textoInicio);
	$('.texto-alterado').text(textoTraduzido);

	var textoPartes = textoTraduzido.match(/.{0,99}/g);

	var playNext = function () {
    	console.log('acabou');
    }

	var audio = new Audio();
    //audio.src = "http://translate.google.com/translate_tts?ie=UTF-8&tl=pt-BR&q=" + textoPartes[0].replace(/ /g, '+');
    audio.src = "http://translate.google.com/translate_tts?ie=UTF-8&tl=pt&q=oi+voc%C3%AA+a%C3%AD";
	audio.addEventListener('ended', playNext);
	audio.play();
    
	/*for (var texto in textoPartes) {
		var audioURL = "http://translate.google.com/translate_tts?ie=UTF-8&tl=pt-BR&q=" + textoTraduzido.replace(/ /g, '+');

		$('.audio-url').text(audioURL);

		$('audio source').attr('src', audioURL);
	}*/
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