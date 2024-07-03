function encriptar() {
	let inputEncriptar = document.getElementById(
		'container__izquierda__textarea'
	).value;
	let modificacionParrafo = document.getElementById('container__derecha__div');
	let botonCopiar = document.getElementById('container__derecha__boton');
	let codigo = document.getElementById('container__derecha__p');

	if (inputEncriptar != 0) {
		let codificar = inputEncriptar
			.replace(/e/gi, 'enter')
			.replace(/i/gi, 'imes')
			.replace(/a/gi, 'ai')
			.replace(/o/gi, 'ober')
			.replace(/u/gi, 'ufat');
		modificacionParrafo.setAttribute('style', 'display: none;');
		codigo.setAttribute('style', 'display: block;');
		codigo.innerHTML = codificar;
		botonCopiar.setAttribute('style', 'display: block;');
		limpiarCaja();
	}
	return codigo;
}

function desencriptar() {
	let inputEncriptar = document.getElementById(
		'container__izquierda__textarea'
	).value;
	let codigo = document.getElementById('container__derecha__p');
	if (inputEncriptar != 0) {
		let descodificar = inputEncriptar
			.replace(/enter/gi, 'e')
			.replace(/imes/gi, 'i')
			.replace(/ai/gi, 'a')
			.replace(/ober/gi, 'o')
			.replace(/ufat/gi, 'u');
		codigo.innerHTML = descodificar;
		return descodificar;
	}
}

function copiarTexto() {
	let codigo = document.getElementById('container__derecha__p');
	navigator.clipboard.writeText(codigo.textContent);
}

function limpiarCaja() {
	document.getElementById('container__izquierda__textarea').value = '';
	return;
}
