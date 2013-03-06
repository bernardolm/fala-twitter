$(document).ready(function() {
	var textoInicio = 'RT @Rodriggo_f: o q acontece na rod. Washington luiz? Parada mto antes do carrefour. reboques da Prefeitura na R. Morais e silva, Tijuca. Dps o cidadão notícia como furto e danou-se!';

	$('.texto-inicio').text(textoInicio);

	var textoPartes = texto.match(/.{0,99}/g);

	for (var texto in textoPartes) {

		var textoAlterado = traduzir(texto);
		
		$('.texto-alterado').text(textoAlterado);

		var audioURL = "http://translate.google.com/translate_tts?ie=UTF-8&tl=pt&q=" + textoAlterado.replace(/ /g, '+');

		$('.audio-url').text(audioURL);

		$('audio source').attr('src', audioURL);
	}
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